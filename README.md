# Portfolio Template

Professional portfolio website template for showcasing projects and experience. Built with modern web technologies and designed for easy customization.

## ✨ Features

- **Comprehensive Sections**: Hero, About, Experience, Projects, Blog, and Contact sections
- **Dark/Light Theme Toggle**: Automatic theme detection with manual toggle
- **Responsive Design**: Mobile-first, fully responsive layout
- **SEO Optimized**: Built-in meta tags and OpenGraph support
- **Project Showcase**: Project cards with tags, descriptions, and external links
- **Blog Integration**: MDX/Markdown support for blog posts
- **Contact Form**: Ready-to-use contact form (API-ready)
- **Easy Customization**: Simple configuration files for content and theming

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX/Markdown with gray-matter
- **Deployment**: Vercel/Netlify-ready

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/manojsai7/portfolio-template
cd portfolio-template
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
npm start
```

## 📝 Customization

### Update Personal Information

Edit the configuration files in the `config/` directory:

- **`config/site.ts`**: Update your name, email, social links, and navigation
- **`config/theme.ts`**: Customize colors and fonts

### Update Content

Edit the data files in the `data/` directory:

- **`data/personal.ts`**: Hero and About section content
- **`data/experience.ts`**: Work experience entries
- **`data/projects.ts`**: Project showcase items
- **`data/blog/*.mdx`**: Blog posts in MDX format

### Add Blog Posts

Create new `.mdx` files in `data/blog/` with the following frontmatter:

```mdx
---
title: "Your Post Title"
date: "2024-01-15"
excerpt: "A brief description of your post"
tags: ["Tag1", "Tag2"]
author: "Your Name"
---

Your content here...
```

### Customize Theme

The template uses Tailwind CSS v4. You can customize:
- Colors in `config/theme.ts`
- Global styles in `src/app/globals.css`
- Component styles inline using Tailwind classes

## 📁 Project Structure

```
portfolio-template/
├── config/              # Configuration files
│   ├── site.ts          # Site metadata and navigation
│   └── theme.ts         # Theme colors and fonts
├── data/                # Content data
│   ├── personal.ts      # Hero and About content
│   ├── experience.ts    # Work experience
│   ├── projects.ts      # Project showcase
│   └── blog/            # Blog posts (MDX)
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── layout.tsx   # Root layout with metadata
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   └── components/      # React components
│       ├── sections/    # Page sections
│       ├── ui/          # UI components
│       └── ThemeProvider.tsx
└── public/              # Static assets
```

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

### Netlify

1. Push your code to GitHub
2. Import your repository on [Netlify](https://netlify.com)
3. Build command: `npm run build`
4. Publish directory: `.next`

## 🗺️ Roadmap

- [ ] Add blog pagination and RSS feed
- [ ] Add SEO preview images generator
- [ ] Add CMS integration option (Contentful/Sanity)
- [ ] Add i18n (internationalization) support
- [ ] Add analytics integration
- [ ] Add more section templates

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 💬 Support

For questions or feedback, please open an issue on GitHub.

---

Made with ❤️ using Next.js and Tailwind CSS
