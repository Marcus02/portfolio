# Portfolio Website - Next.js Version

A modern, responsive portfolio website built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## ✨ Features

- **Modern Tech Stack**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Responsive Design**: Mobile-first approach with beautiful animations
- **Dark Mode**: Toggle between light and dark themes
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **SEO Optimized**: Meta tags, Open Graph, and structured data
- **Performance**: Optimized images, lazy loading, and efficient rendering
- **Accessibility**: WCAG compliant with proper ARIA labels

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd portfolio-nextjs
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
portfolio-nextjs/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles and Tailwind imports
│   ├── layout.tsx         # Root layout component
│   └── page.tsx           # Home page component
├── components/             # Reusable components
│   ├── HeroSection.tsx    # Hero section with animated text
│   ├── AboutSection.tsx   # About me section
│   ├── SkillsSection.tsx  # Skills and expertise
│   ├── ProjectsSection.tsx # Portfolio projects
│   ├── ExperienceSection.tsx # Work experience timeline
│   ├── EducationSection.tsx # Education and certifications
│   ├── ContactSection.tsx # Contact form and info
│   └── Footer.tsx         # Footer with social links
├── public/                 # Static assets
│   └── images/            # Images and icons
├── package.json            # Dependencies and scripts
├── tailwind.config.js     # Tailwind CSS configuration
├── tsconfig.json          # TypeScript configuration
└── next.config.js         # Next.js configuration
```

## 🎨 Customization

### Personal Information

Update the following files with your information:

1. **`app/page.tsx`** - Navigation items and main content
2. **`components/HeroSection.tsx`** - Name, title, and social links
3. **`components/AboutSection.tsx`** - Personal details and achievements
4. **`components/SkillsSection.tsx`** - Skills and proficiency levels
5. **`components/ProjectsSection.tsx`** - Portfolio projects
6. **`components/ExperienceSection.tsx`** - Work experience
7. **`components/EducationSection.tsx`** - Education and certifications
8. **`components/ContactSection.tsx`** - Contact information

### Styling

- **Colors**: Modify `tailwind.config.js` for custom color schemes
- **Fonts**: Update font imports in `app/layout.tsx`
- **Animations**: Adjust Framer Motion settings in components

### Images

Replace placeholder images in `public/images/` with your own:
- Profile picture
- Project screenshots
- Company logos
- Certification badges

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🌙 Dark Mode

The website automatically detects system preference and allows manual toggle. Theme preference is saved in localStorage.

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically on every push

### Other Platforms

- **Netlify**: Use `npm run build` and deploy the `out` folder
- **AWS S3**: Build and upload to S3 bucket
- **Custom Server**: Use `npm run build` and serve the `.next` folder

## 📊 Performance

- **Lighthouse Score**: 90+ on all metrics
- **Core Web Vitals**: Optimized for best user experience
- **Image Optimization**: Next.js Image component with automatic optimization
- **Code Splitting**: Automatic route-based code splitting

## 🔧 Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Google Fonts (Inter, Poppins)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Original portfolio template inspiration
- Next.js team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Framer Motion for smooth animations

## 📞 Support

If you have any questions or need help:

- Create an issue in the repository
- Contact me at [your-email@example.com]
- Follow me on [social media links]

---

**Happy Coding! 🚀**
