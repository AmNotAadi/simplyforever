# Simply Forever Minecraft Server Website

A complete, responsive website for the "Simply Forever" Minecraft SMP server built with HTML, CSS, and JavaScript.

## 🌟 Features

### Design & Theme
- **Green and Orange Color Scheme**: Primary green (#228B22) with orange (#FF4500) accents
- **Minecraft-Inspired Elements**: Pixelated fonts, blocky borders, and themed styling
- **Modern & Clean**: Professional design with subtle animations and hover effects
- **Fully Responsive**: Mobile-first design that works on all devices

### Accessibility
- **WCAG Compliant**: High contrast colors and proper semantic HTML
- **Screen Reader Support**: ARIA labels, skip links, and keyboard navigation
- **Alt Text**: Descriptive alt text for all images
- **Focus Management**: Clear focus indicators and logical tab order

### Pages
1. **Home** - Hero section, server status, quick links, and features preview
2. **About** - Detailed server description and key features
3. **Rules** - Complete server rules and community guidelines
4. **How to Join** - Step-by-step connection guide and requirements
5. **Community** - Discord integration, live map, and contact forms
6. **Gallery** - Screenshot showcase with filtering and submission

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Basic knowledge of HTML/CSS/JavaScript (for customization)

### Installation
1. Download or clone the project files
2. Place all files in your web server directory
3. Ensure the following files are present:
   - `index.html` - Home page
   - `about.html` - About page
   - `rules.html` - Rules page
   - `join.html` - How to join page
   - `community.html` - Community page
   - `gallery.html` - Gallery page
   - `styles.css` - Main stylesheet
   - `script.js` - JavaScript functionality
   - `README.md` - This documentation

### File Structure
```
simply-forever-website/
├── index.html          # Home page
├── about.html          # About page
├── rules.html          # Rules page
├── join.html           # How to join page
├── community.html      # Community page
├── gallery.html        # Gallery page
├── styles.css          # Main stylesheet
├── script.js           # JavaScript functionality
├── README.md           # Documentation
├── logo.png            # Server logo (placeholder)
├── favicon.ico         # Website favicon
└── placeholder-*.jpg   # Gallery image placeholders
```

## 🎨 Customization

### Colors
The website uses CSS custom properties (variables) for easy color customization:

```css
:root {
    --primary-green: #228B22;        /* Dark green */
    --primary-green-light: #90EE90;  /* Light green */
    --primary-orange: #FF4500;       /* Orange */
    --primary-orange-light: #FF6347; /* Light orange */
    --background: #F5F5F5;           /* Background */
    --white: #FFFFFF;                /* White */
    --black: #000000;                /* Black */
}
```

### Fonts
- **Headers**: 'Press Start 2P' (pixelated Minecraft-style font)
- **Body Text**: 'Roboto' (clean, readable sans-serif)

### Images
Replace the placeholder images with your actual server content:
- `logo.png` - Your server logo
- `placeholder-*.jpg` - Server screenshots and builds
- `favicon.ico` - Website favicon (Minecraft grass block recommended)

## 🔧 Technical Details

### Browser Support
- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### Performance Features
- **Lazy Loading**: Images load only when needed
- **Optimized CSS**: Efficient selectors and minimal redundancy
- **Debounced Events**: Performance-optimized resize and scroll handlers
- **Minimal JavaScript**: Lightweight, fast-loading scripts

### SEO Features
- Semantic HTML structure
- Meta descriptions for each page
- Proper heading hierarchy
- Alt text for images
- Open Graph meta tags ready

## 📱 Mobile Features

### Responsive Design
- Mobile-first approach
- Touch-friendly navigation
- Optimized layouts for small screens
- Hamburger menu for mobile devices

### Mobile Navigation
- Collapsible navigation menu
- Touch-friendly buttons and links
- Optimized spacing for mobile devices
- Swipe gestures supported

## ♿ Accessibility Features

### Screen Reader Support
- ARIA labels and roles
- Skip to main content link
- Proper heading structure
- Descriptive link text

### Keyboard Navigation
- Full keyboard accessibility
- Focus indicators
- Logical tab order
- Escape key support for menus

### Visual Accessibility
- High contrast colors
- Clear typography
- Consistent spacing
- No flashing elements

## 🎮 Minecraft Integration

### Server Status Widget
- Real-time player count from mcstatus.io
- Live server status display
- Automatic updates

### External Links
- Live Map: `map.simplyforever.xyz`
- Store: `store.simplyforever.xyz`
- Wiki: Placeholder for your wiki
- Discord: Placeholder for community server

## 📝 Content Management

### Adding New Pages
1. Copy an existing HTML file
2. Update the title, meta description, and content
3. Add the page to the navigation menu
4. Update the footer links if needed

### Updating Content
- Edit the HTML files directly
- Update server information in the footer
- Modify rules and guidelines as needed
- Add new gallery images

### Adding Images
1. Place images in your project directory
2. Update HTML src attributes
3. Provide descriptive alt text
4. Optimize images for web (recommended: max 1MB)

## 🚀 Deployment

### Web Hosting
- Upload all files to your web server
- Ensure proper file permissions
- Test all functionality after upload

### Domain Configuration
- Point your domain to the hosting directory
- Set up SSL certificate for HTTPS
- Configure proper redirects if needed

### Performance Optimization
- Enable GZIP compression
- Set up browser caching
- Optimize images before upload
- Consider CDN for global delivery

## 🔒 Security Considerations

### Form Security
- Implement server-side validation
- Use HTTPS for form submissions
- Protect against CSRF attacks
- Rate limit form submissions

### Content Security
- Validate all user input
- Sanitize HTML content
- Implement proper file upload restrictions
- Regular security updates

## 📊 Analytics & Monitoring

### Google Analytics
Add your tracking code to the JavaScript file:

```javascript
// Add your Google Analytics code here
gtag('config', 'GA_MEASUREMENT_ID');
```

### Performance Monitoring
- Monitor Core Web Vitals
- Track page load times
- Monitor user engagement
- Set up error tracking

## 🐛 Troubleshooting

### Common Issues

#### Images Not Loading
- Check file paths and names
- Verify image file permissions
- Ensure images are in the correct directory

#### Styles Not Applying
- Check CSS file path in HTML
- Verify CSS syntax
- Clear browser cache
- Check for JavaScript errors

#### Mobile Menu Not Working
- Ensure JavaScript is loaded
- Check for console errors
- Verify CSS classes are applied
- Test on different devices

#### Server Status Widget Issues
- Verify mcstatus.io is accessible
- Check network connectivity
- Ensure proper iframe permissions
- Test with different browsers

### Debug Mode
Enable debug logging by adding this to the console:

```javascript
localStorage.setItem('debug', 'true');
```

## 🤝 Contributing

### Development Guidelines
- Follow existing code structure
- Maintain accessibility standards
- Test on multiple devices
- Validate HTML and CSS
- Optimize for performance

### Code Style
- Use consistent indentation
- Follow naming conventions
- Add comments for complex logic
- Keep functions small and focused

## 📄 License

This project is created for the Simply Forever Minecraft server. Feel free to use and modify for your own projects.

## 🆘 Support

### Getting Help
- Check the troubleshooting section
- Review browser console for errors
- Test on different devices/browsers
- Validate HTML and CSS

### Contact Information
- In-Game: Use `/helpop` command
- Discord: Join our community server
- Email: Contact staff for support

## 🎯 Future Enhancements

### Planned Features
- Dark mode toggle
- Advanced gallery with lightbox
- Player statistics integration
- Real-time chat widget
- Server news/blog system
- Multi-language support

### Performance Improvements
- Service worker for offline support
- Advanced image optimization
- Lazy loading for all content
- Progressive Web App features

---

**Built with ❤️ for the Simply Forever Minecraft community**

*Last updated: January 2025*
