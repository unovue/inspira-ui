# Docus i18n Starter

> A beautiful, internationalized starter for creating multi-language documentation with Docus

This is the i18n Docus starter template that provides everything you need to build beautiful, multi-language documentation sites with Markdown and Vue components.

## ✨ Features

- 🌍 **Internationalization** - Native i18n support for multi-language docs
- 🎨 **Beautiful Design** - Clean, modern documentation theme
- 📱 **Responsive** - Mobile-first responsive design  
- 🌙 **Dark Mode** - Built-in dark/light mode support
- 🔍 **Search** - Full-text search functionality per language
- 📝 **Markdown Enhanced** - Extended markdown with custom components
- 🎨 **Customizable** - Easy theming and brand customization
- ⚡ **Fast** - Optimized for performance with Nuxt 4
- 🔧 **TypeScript** - Full TypeScript support

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Your multilingual documentation site will be running at `http://localhost:3000`

## 🌍 Languages

This starter comes pre-configured with:
- 🇺🇸 **English** (`en`) - Default language
- 🇫🇷 **Français** (`fr`) - French translation

## 📁 Project Structure

```
my-docs/
├── content/              # Your markdown content
│   ├── en/              # English content
│   │   ├── index.md     # English homepage
│   │   └── docs/        # English documentation
│   └── fr/              # French content
│       ├── index.md     # French homepage
│       └── docs/        # French documentation
├── public/              # Static assets
├── nuxt.config.ts       # Nuxt configuration with i18n setup
└── package.json         # Dependencies and scripts
```

### Content Structure

The content is organized by language, making it easy to manage translations:

```
content/
├── en/                   # English content
│   ├── index.md
│   ├── 1.getting-started/
│   │   ├── installation.md
│   │   └── configuration.md
│   └── 2.essentials/
│       ├── markdown.md
│       └── components.md
└── fr/                   # French content
    ├── index.md
    ├── 1.getting-started/
    │   ├── installation.md
    │   └── configuration.md
    └── 2.essentials/
        ├── markdown.md
        └── components.md
```

## 🔗 URL Structure

The i18n starter generates URLs with language prefixes:

- English: `/en/getting-started/installation`
- French: `/fr/getting-started/installation`
- Default locale fallback: `/getting-started/installation` (redirects to English)

## ⚡ Built with

This starter comes pre-configured with:

- [Nuxt 4](https://nuxt.com) - The web framework
- [Nuxt Content](https://content.nuxt.com/) - File-based CMS
- [Nuxt i18n](https://i18n.nuxt.com/) - Internationalization
- [Nuxt UI](https://ui.nuxt.com) - UI components
- [Nuxt Image](https://image.nuxt.com/) - Optimized images
- [Tailwind CSS 4](https://tailwindcss.com/) - Utility-first CSS
- [Docus Layer](https://www.npmjs.com/package/docus) - Documentation theme

## 📖 Documentation

For detailed documentation on customizing your Docus project, visit the [Docus Documentation](https://docus.dev)

## 🚀 Deployment

Build for production:

```bash
npm run build
```

The built files will be in the `.output` directory, ready for deployment to any hosting provider that supports Node.js.

## 📄 License

[MIT License](https://opensource.org/licenses/MIT) 