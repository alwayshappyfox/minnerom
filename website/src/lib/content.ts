import { localizePath, otherLocale, type Locale } from "./i18n";

export type LocalizedText = Record<Locale, string>;

const text = (ru: string, en: string): LocalizedText => ({ ru, en });

export const uiText = {
  siteName: "Minnerom",
  navigation: {
    photos: text("Галерея", "Gallery"),
    blog: text("Блог", "Blog"),
    products: text("Товары", "Products"),
    contacts: text("Контакты", "Contacts"),
    privacy: text("Политика", "Privacy"),
    terms: text("Условия", "Terms"),
  },
  languageSwitchLabel: text("Переключение языка", "Language switch"),
  languageLabels: {
    ru: text("Русский", "Russian"),
    en: text("Английский", "English"),
  },
};

export const metaText = {
  homeTitle: text("Главная", "Home"),
  homeDescription: text(
    "Визитка Minnerom: Галерея, блог, товары и контакты.",
    "Minnerom website: gallery, blog, products and contacts.",
  ),
  photosTitle: text("Галерея", "Gallery"),
  photosDescription: text("Галерея Minnerom.", "Minnerom gallery."),
  blogTitle: text("Блог", "Blog"),
  blogDescription: text("Блог Minnerom.", "Minnerom blog."),
  productsTitle: text("Товары", "Products"),
  productsDescription: text("Демо-витрина товаров Minnerom.", "Minnerom demo product showcase."),
  contactsTitle: text("Контакты", "Contacts"),
  contactsDescription: text("Контакты Minnerom.", "Minnerom contacts."),
  privacyTitle: text("Политика конфиденциальности", "Privacy Policy"),
  privacyDescription: text(
    "Политика конфиденциальности Minnerom.",
    "Minnerom privacy policy.",
  ),
  termsTitle: text("Условия использования", "Terms of Use"),
  termsDescription: text("Условия использования сайта Minnerom.", "Minnerom terms of use."),
};

export const homeSections = [
  {
    key: "photos",
    title: text("Галерея", "Gallery"),
    description: text(
      "Каталог галереи и отдельные карточки с описанием.",
      "Gallery catalog with separate detail pages.",
    ),
    href: "/photos",
    cta: text("Перейти в раздел", "Open section"),
  },
  {
    key: "blog",
    title: text("Блог", "Blog"),
    description: text("Публикации, заметки и анонсы новых работ.", "Articles, notes and announcements."),
    href: "/blog",
    cta: text("Читать блог", "Read blog"),
  },
  {
    key: "products",
    title: text("Товары", "Products"),
    description: text(
      "Витрина без оплаты, как подготовка к e-commerce этапу.",
      "Showcase without checkout, ready for a later e-commerce stage.",
    ),
    href: "/products",
    cta: text("Открыть витрину", "Open showcase"),
  },
] as const;

export const photosIntro = text(
  "Пока один материал, дальше список можно расширять без изменения структуры.",
  "One item for now, but the list can scale without changing the structure.",
);

export interface PhotoItem {
  id: string;
  slug: LocalizedText;
  title: LocalizedText;
  description: LocalizedText;
  story: LocalizedText;
  imageKey: string;
}

export const photoItems: PhotoItem[] = [
  {
    id: "morning-light",
    slug: text("morning-light", "morning-light"),
    title: text("Утренний свет", "Morning Light"),
    description: text("Мягкий утренний свет и спокойная атмосфера.", "Soft morning light and a calm atmosphere."),
    story: text(
      "Эта серия снята в ранние часы, когда свет мягкий и направленный.",
      "This series was shot in the early morning when the light is soft and directional.",
    ),
    imageKey: "morning-light",
  },
];

export function getPhotoBySlug(lang: Locale, slug: string): PhotoItem | undefined {
  return photoItems.find((photo) => photo.slug[lang] === slug);
}

export const blogIntro = text("Публикации и новости проекта.", "Project updates and notes.");

export interface BlogPost {
  id: string;
  slug: LocalizedText;
  title: LocalizedText;
  excerpt: LocalizedText;
  content: LocalizedText;
  date: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "start-of-project",
    slug: text("start-of-project", "start-of-project"),
    title: text("Запуск проекта", "Project kickoff"),
    excerpt: text(
      "Что уже настроено на сервере и как будет развиваться сайт.",
      "What is already configured on the server and how the site will evolve.",
    ),
    content: text(
      "Сервер на VPS готов: Nginx, HTTPS, автопродление сертификата и базовая структура Astro. Следующий шаг — наполнить контентом галереи, блог и витрину.",
      "The VPS is ready: Nginx, HTTPS, certificate auto-renewal and a base Astro structure. Next step is to fill gallery, blog and showcase content.",
    ),
    date: "25.05.2026",
  },
];

export function getBlogPostBySlug(lang: Locale, slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug[lang] === slug);
}

export const productsIntro = text(
  "На этом этапе это витрина. Оплата и корзина подключаются позже.",
  "At this stage it is only a showcase. Checkout and cart come later.",
);

export interface ProductItem {
  id: string;
  availableIn: Locale[];
  slug: Partial<LocalizedText>;
  name: LocalizedText;
  description: LocalizedText;
  details: LocalizedText;
  imageKey: string;
}

export const productItems: ProductItem[] = [
  {
    id: "fine-art-print-a3",
    availableIn: ["ru", "en"],
    slug: {
      ru: "print-a3",
      en: "fine-art-print-a3",
    },
    name: text("Fine Art Print A3", "Fine Art Print A3"),
    description: text(
      "Демонстрационная карточка принта для RU-аудитории.",
      "Demo fine art print card for the EN audience.",
    ),
    details: text(
      "Позже добавим цену в рублях, варианты бумаги и сроки по РФ/СНГ.",
      "Later we can add USD/EUR pricing, paper options, and shipping zones.",
    ),
    imageKey: "fine-art-print-a3",
  },
  {
    id: "ru-photo-session",
    availableIn: ["ru"],
    slug: {
      ru: "personal-session-ru",
    },
    name: text("Персональная фотосессия", "Personal Photo Session"),
    description: text(
      "Отдельный товар только для русскоязычной версии.",
      "A dedicated RU-only product card.",
    ),
    details: text(
      "Товар виден только в /ru и может иметь локальные условия и цены.",
      "Visible only in /ru with local terms and pricing.",
    ),
    imageKey: "ru-photo-session",
  },
  {
    id: "en-license-pack",
    availableIn: ["en"],
    slug: {
      en: "commercial-license-pack",
    },
    name: text("Коммерческая лицензия", "Commercial License Pack"),
    description: text(
      "Отдельный товар только для англоязычной версии.",
      "A dedicated EN-only product card.",
    ),
    details: text(
      "Товар виден только в /en и может иметь свои правила лицензирования.",
      "Visible only in /en with separate licensing terms.",
    ),
    imageKey: "en-license-pack",
  },
];

export function getProductsByLocale(lang: Locale): ProductItem[] {
  return productItems.filter((product) => product.availableIn.includes(lang));
}

export function getProductBySlug(lang: Locale, slug: string): ProductItem | undefined {
  return getProductsByLocale(lang).find((product) => product.slug[lang] === slug);
}

export function getProductSwitchPath(lang: Locale, product: ProductItem): string {
  const targetLang = otherLocale(lang);
  const translatedSlug = product.slug[targetLang];
  if (translatedSlug) {
    return localizePath(targetLang, `/products/${translatedSlug}`);
  }

  return localizePath(targetLang, "/products");
}

export const contactsText = {
  intro: text(
    "Форма пока демонстрационная. На следующем шаге подключим отправку через Worker или form endpoint.",
    "The form is demo-only for now. Next step is wiring submission via Worker or form endpoint.",
  ),
  name: text("Имя", "Name"),
  namePlaceholder: text("Ваше имя", "Your name"),
  email: text("Email", "Email"),
  message: text("Сообщение", "Message"),
  messagePlaceholder: text("О чем хотите спросить", "What do you want to ask about?"),
  submit: text("Отправить", "Send"),
};

export const privacyText = text(
  "Мы собираем только данные, которые вы отправляете через контактную форму. Данные используются для обратной связи и не передаются третьим лицам без необходимости.",
  "We collect only data you submit through the contact form. It is used for replies and is not shared with third parties without necessity.",
);

export const termsText = text(
  "Все изображения и тексты на сайте защищены авторским правом. Копирование и коммерческое использование материалов допускается только с письменного разрешения правообладателя.",
  "All site images and texts are protected by copyright. Copying and commercial use are allowed only with written permission from the rights holder.",
);

export function localizedPathPair(lang: Locale, localPath: string): Record<Locale, string> {
  const current = localizePath(lang, localPath);
  const target = localizePath(otherLocale(lang), localPath);

  return {
    [lang]: current,
    [otherLocale(lang)]: target,
  } as Record<Locale, string>;
}
