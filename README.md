# 🎨 Personal Portfolio Website

A modern, responsive portfolio website built with React, featuring stunning animations and a glassmorphism design.

## ✨ Features

- **Modern Design**: Dark theme with glassmorphism effects and vibrant gradients
- **Smooth Animations**: Powered by Framer Motion for engaging user experience
- **Fully Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Multiple Sections**:
  - Hero section with social links
  - About section with stats
  - Skills section with animated progress bars
  - Education timeline
  - Projects showcase
  - Contact form
- **Interactive UI**: Hover effects, smooth scrolling, and micro-animations

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and visit: `http://localhost:5173`

## 🎨 Customization Guide

### 1. Personal Information

#### Update Hero Section (`src/components/Hero.jsx`)
- Change your name in line 19
- Update the subtitle/description in line 22
- Add your social media links (GitHub, LinkedIn, Email) in lines 27-47

#### Update About Section (`src/components/About.jsx`)
- Modify stats (Year, Projects, CGPA) in lines 8-12
- Update "Who I Am" description in lines 33-42
- Customize your interests and journey

### 2. Skills

Edit `src/components/Skills.jsx` (lines 6-35):
- Add/remove programming languages
- Update skill levels (0-100)
- Add new skill categories

### 3. Education

Edit `src/components/Education.jsx` (lines 6-31):
- Update college/school names
- Change degrees and fields
- Modify CGPA/percentage
- Update highlights and achievements

### 4. Projects

Edit `src/components/Projects.jsx` (lines 6-43):
- Add your own projects
- Update project descriptions
- Change technologies used
- Add GitHub and live demo links

### 5. Contact Information

Edit `src/components/Contact.jsx` (lines 21-37):
- Update email address
- Add phone number
- Change location

### 6. Colors and Theme

Edit `src/index.css`:
- Change gradient colors (line 17)
- Modify glass effect opacity (lines 18-20)
- Update color scheme

## 📁 Project Structure

```
anti-portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx      # Navigation bar
│   │   ├── Hero.jsx        # Hero/landing section
│   │   ├── About.jsx       # About section
│   │   ├── Skills.jsx      # Skills section
│   │   ├── Education.jsx   # Education timeline
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Contact.jsx     # Contact form
│   │   └── Footer.jsx      # Footer
│   ├── App.jsx             # Main app component
│   ├── index.css           # Global styles
│   └── main.jsx            # Entry point
├── public/                 # Static assets
├── index.html              # HTML template
└── package.json            # Dependencies
```

## 🛠️ Built With

- **React** - UI library
- **Vite** - Build tool
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎯 Deployment

### Deploy to Vercel
1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Deploy!

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

## 💡 Tips

1. **Images**: Add your photo in the About section by importing an image
2. **Favicon**: Replace the favicon in `public/` folder
3. **SEO**: Update meta tags in `index.html`
4. **Analytics**: Add Google Analytics or similar in `index.html`

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

---

Made with ❤️ by Satya
