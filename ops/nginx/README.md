# Nginx Runtime Config (Minnerom)

These files mirror the active production config on the VPS (`132.243.113.129`) as of 2026-05-26.

Apply from local machine:

```bash
scp ops/nginx/nginx.conf root@132.243.113.129:/etc/nginx/nginx.conf
scp ops/nginx/sites-available/minnerom.com root@132.243.113.129:/etc/nginx/sites-available/minnerom.com
ssh root@132.243.113.129 'nginx -t && systemctl reload nginx'
```
