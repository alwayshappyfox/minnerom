server {
    server_name minnerom.com www.minnerom.com;

    root /var/www/minnerom;
    index index.html;

    keepalive_timeout 30s;
    keepalive_requests 10000;
    send_timeout 30s;
    client_header_timeout 10s;
    client_body_timeout 10s;

    # Geo-based default landing: RU/CIS -> /ru/, others -> /en/.
    # Cookie minnerom_lang=ru|en has priority over geo.
    location = / {
        return 302 /$minnerom_lang/;
    }

    # Normalize language roots without trailing slash.
    location ~ ^/(ru|en)$ {
        return 301 /$1/;
    }

    # Cache immutable static assets aggressively.
    location ~* \.(?:css|js|mjs|json|map|jpg|jpeg|png|gif|webp|avif|svg|ico|woff|woff2|ttf|otf)$ {
        access_log off;
        expires 30d;
        add_header Cache-Control "public, max-age=2592000, immutable";
        try_files $uri =404;
    }

    location / {
        add_header Cache-Control "public, max-age=120, stale-while-revalidate=300";
        try_files $uri $uri/ =404;
    }

    listen [::]:443 ssl ipv6only=on; # managed by Certbot
    listen 443 ssl; # managed by Certbot
    http2 on;
    ssl_certificate /etc/letsencrypt/live/minnerom.com/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/minnerom.com/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot
}

server {
    listen 80;
    listen [::]:80;
    server_name minnerom.com www.minnerom.com;
    return 301 https://$host$request_uri;
}
