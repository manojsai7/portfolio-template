# Portfolio Template

A polished portfolio site template to showcase your work, projects, and story—responsive and easy to customize.

## ✨ Features

- **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern Design** - Clean, professional layout with smooth animations
- **Easy to Customize** - Simple HTML/CSS/JavaScript with clear structure
- **Multiple Sections** - Hero, About, Projects, Skills, and Contact sections
- **Interactive Navigation** - Smooth scrolling and mobile menu
- **Social Media Integration** - Built-in social media links
- **Contact Form** - Ready-to-use contact form (backend integration needed)
- **Fast Loading** - Optimized performance with minimal dependencies

## 🚀 Quick Start

1. **Clone or Download** this repository
2. **Open `index.html`** in your browser to view the template
3. **Customize** the content by editing the HTML, CSS, and JavaScript files

## 📝 Customization Guide

### 1. Personal Information

Edit `index.html` to update your personal information:

- **Name and Title**: Update the hero section (line 37-38)
- **About Me**: Edit the about section text (starting at line 56)
- **Contact Information**: Update email, phone, and location (starting at line 218)

### 2. Projects

Add or modify projects in the projects section (starting at line 86):

```html
<div class="project-card">
    <div class="project-image">
        <div class="image-placeholder">
            <i class="fas fa-laptop-code"></i>
        </div>
    </div>
    <div class="project-content">
        <h3 class="project-title">Your Project Title</h3>
        <p class="project-description">Your project description...</p>
        <div class="project-tags">
            <span class="tag">Technology 1</span>
            <span class="tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link"><i class="fab fa-github"></i> Code</a>
            <a href="#" class="project-link"><i class="fas fa-external-link-alt"></i> Live Demo</a>
        </div>
    </div>
</div>
```

### 3. Skills

Update your skills in the skills section (starting at line 167):

- Add or remove skill categories
- Modify skill tags to match your expertise

### 4. Colors and Styling

Customize the color scheme in `styles.css` by modifying the CSS variables (line 9-18):

```css
:root {
    --primary-color: #6366f1;      /* Main brand color */
    --secondary-color: #8b5cf6;    /* Accent color */
    --text-dark: #1f2937;          /* Dark text */
    --text-light: #6b7280;         /* Light text */
    --bg-light: #f9fafb;           /* Light background */
    --bg-white: #ffffff;           /* White background */
}
```

### 5. Social Media Links

Update social media links in two places in `index.html`:

1. **Hero section** (lines 46-50)
2. **Footer** (lines 268-272)

Replace the placeholder URLs with your actual social media profiles.

### 6. Images

Replace the icon placeholders with your actual images:

- **Profile Photo**: Replace the `.image-placeholder` in the about section
- **Project Images**: Replace the `.image-placeholder` in project cards

To use custom images, replace the placeholder divs with:

```html
<img src="path/to/your/image.jpg" alt="Description">
```

### 7. Contact Form

The contact form currently shows an alert message. To make it functional:

1. Set up a backend service (e.g., Node.js, PHP, or a service like Formspree)
2. Update the form submission handler in `script.js` (line 50-80)

Example with Formspree:

```html
<form class="contact-form" action="https://formspree.io/f/your-form-id" method="POST">
```

## 🎨 Customization Tips

### Adding More Sections

To add a new section:

1. Add the section HTML in `index.html`
2. Add a navigation link in the navbar
3. Style the section in `styles.css`

### Changing Fonts

The template uses system fonts by default. To use custom fonts:

1. Add Google Fonts link in the `<head>` of `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet">
```

2. Update the font-family in `styles.css`:
```css
body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
}
```

### Animation Customization

Modify animations in `styles.css` (line 508-517):

```css
@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}
```

## 📱 Responsive Breakpoints

The template includes responsive design for:

- **Desktop**: 1200px and above
- **Tablet**: 768px to 1199px
- **Mobile**: Below 768px

Modify breakpoints in `styles.css` (line 520+).

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with flexbox and grid
- **JavaScript (ES6+)** - Interactive features
- **Font Awesome** - Icons

## 📦 File Structure

```
portfolio-template/
│
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md          # Documentation
```

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal and commercial use.

## 🤝 Contributing

Feel free to fork this repository and submit pull requests to improve the template.

## 💡 Tips for Best Results

1. **Use High-Quality Images** - Replace placeholders with professional photos
2. **Keep Content Concise** - Clear, scannable content works best
3. **Update Regularly** - Keep your projects and skills current
4. **Test on Multiple Devices** - Ensure everything works on different screen sizes
5. **Optimize Performance** - Compress images and minimize code for production

## 📧 Support

If you have questions or need help customizing the template, please open an issue on GitHub.

---

Made with ❤️ for developers who want to showcase their work beautifully.
