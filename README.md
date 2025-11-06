# 🚀 Tech Spire Academy - Online Education Platform

[![React](https://img.shields.io/badge/React-18.0+-blue.svg)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.0+-38B2AC.svg)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-5.0+-646CFF.svg)](https://vitejs.dev/)

A modern, responsive online education platform built for Tech Spire Academy - transforming careers through industry-focused technology courses.

## 🌟 Features

### 🎓 **Course Management**
- 12+ comprehensive tech courses (Web Dev, Data Science, Cloud Computing, AI/ML)
- Interactive course cards with detailed information
- Category-based filtering and search

### 📝 **Enrollment System**
- Modal-based enrollment forms
- Google Sheets integration for data collection
- Real-time form validation and success notifications

### 📱 **Mobile-First Design**
- Fully responsive across all devices
- iOS-specific optimizations
- Touch-friendly navigation and interactions

### 🔍 **SEO Optimized**
- Comprehensive meta tags and Open Graph
- Structured data for better search visibility
- Sitemap and robots.txt included

### ⚡ **Performance Features**
- Lazy loading for images
- Resource preloading and prefetching
- Optimized animations and transitions
- Network error handling

## 🛠️ Tech Stack

- **Frontend**: React 18 + TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **PDF Generation**: jsPDF
- **Forms**: Google Sheets API integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/PaluruSubbaNarasaiah/techspire.git

# Navigate to project directory
cd techspire/project

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production

```bash
# Create production build
npm run build

# Preview production build
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.tsx      # Navigation with mobile menu
│   ├── Hero.tsx        # Landing section
│   ├── Courses.tsx     # Course grid display
│   ├── EnrollForm.tsx  # Modal enrollment form
│   ├── TechNews.tsx    # Scrolling news section
│   └── ...
├── pages/              # Route components
│   ├── Home.tsx        # Main landing page
│   ├── About.tsx       # About page
│   ├── Contact.tsx     # Contact form
│   └── ...
├── utils/              # Utility functions
│   └── googleSheets.ts # Google Sheets integration
└── App.tsx             # Main app component
```

## 🎨 Key Components

### Course Management
- **Courses.tsx**: Interactive course grid with filtering
- **CoursesPage.tsx**: Dedicated courses page with detailed view

### User Engagement
- **EnrollForm.tsx**: Modal enrollment with Google Sheets integration
- **Testimonials.tsx**: Student success stories and reviews
- **TechNews.tsx**: Latest tech news with scrolling animation

### Navigation & Layout
- **Navbar.tsx**: Responsive navigation with mobile hamburger menu
- **Footer.tsx**: Comprehensive footer with links and contact info

## 🔧 Configuration

### Google Sheets Integration
1. Create a Google Apps Script with the provided script
2. Deploy as web app and get the URL
3. Update the endpoint in `src/utils/googleSheets.ts`

### SEO Configuration
- Update meta tags in `index.html`
- Modify structured data for your organization
- Update sitemap.xml with your domain

## 📊 Performance Optimizations

- **Image Optimization**: Lazy loading and WebP format support
- **Code Splitting**: Dynamic imports for better loading
- **Resource Hints**: Preload, preconnect, and DNS prefetch
- **CSS Optimization**: Tailwind CSS purging and minification

## 🌐 SEO Features

- **Meta Tags**: Comprehensive SEO meta tags
- **Open Graph**: Social media sharing optimization
- **Structured Data**: Schema.org markup for better search results
- **Sitemap**: XML sitemap for search engines

## 📱 Mobile Features

- **Responsive Design**: Mobile-first approach
- **Touch Optimization**: Touch-friendly buttons and navigation
- **iOS Specific**: Prevents zoom on form inputs
- **Performance**: Hardware acceleration for smooth scrolling

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

**Tech Spire Academy**
- Website: [techspireacademy.com](https://techspireacademy.com)
- Email: info@techspireacademy.com
- Phone: +91-8978084121

## 🙏 Acknowledgments

- React team for the amazing framework
- Tailwind CSS for the utility-first CSS framework
- Lucide for the beautiful icons
- Unsplash for the high-quality images

---

**Built with ❤️ by Basel Dynamic Tech Solutions**