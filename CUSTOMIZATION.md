# 🎯 Quick Customization Guide

This guide will help you personalize your portfolio in just a few minutes!

## 📝 Step-by-Step Customization

### Step 1: Update Personal Information (5 minutes)

#### File: `src/components/Hero.jsx`
```javascript
// Line 19: Change your name
<h1 className="text-5xl md:text-7xl font-bold mb-6 text-gradient">
  Your Name Here  // ← Change this
</h1>

// Line 22: Update your title/description
<p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
  Your Title Here  // ← Change this
</p>

// Lines 27-47: Add your social media links
<motion.a href="YOUR_GITHUB_URL" ...>  // ← Add your GitHub URL
<motion.a href="YOUR_LINKEDIN_URL" ...>  // ← Add your LinkedIn URL
<motion.a href="mailto:YOUR_EMAIL" ...>  // ← Add your email
```

### Step 2: Update About Section (5 minutes)

#### File: `src/components/About.jsx`
```javascript
// Lines 8-12: Update your stats
const stats = [
  { icon: <BookOpen />, label: 'Year', value: 'First Year' },  // ← Your year
  { icon: <Code />, label: 'Projects', value: '5+' },  // ← Number of projects
  { icon: <Target />, label: 'CGPA', value: '8.5' },  // ← Your CGPA
];

// Lines 33-42: Update your description
<p className="text-gray-300 leading-relaxed mb-4">
  Write about yourself here...  // ← Your introduction
</p>
<p className="text-gray-300 leading-relaxed">
  Your interests and goals...  // ← Your interests
</p>
```

### Step 3: Update Skills (10 minutes)

#### File: `src/components/Skills.jsx`
```javascript
// Lines 6-35: Customize your skills
const skillCategories = [
  {
    title: 'Languages',
    skills: [
      { name: 'Python', level: 85 },  // ← Add/modify languages
      { name: 'JavaScript', level: 75 },
      // Add more...
    ]
  },
  // Add more categories...
];
```

**Tip**: Set skill levels honestly (0-100). It's better to be accurate!

### Step 4: Update Education (5 minutes)

#### File: `src/components/Education.jsx`
```javascript
// Lines 6-31: Update education details
const education = [
  {
    degree: 'Bachelor of Technology',  // ← Your degree
    field: 'Computer Science Engineering',  // ← Your field
    institution: 'Your College Name',  // ← Your college
    period: '2024 - 2028',  // ← Your period
    cgpa: '8.5 CGPA',  // ← Your CGPA
    highlights: [
      'First Year Student',  // ← Your achievements
      'Active member of coding club',
      'Participated in multiple hackathons',
    ]
  },
  // Add school education...
];
```

### Step 5: Add Your Projects (15 minutes)

#### File: `src/components/Projects.jsx`
```javascript
// Lines 6-43: Add your real projects
const projects = [
  {
    title: 'Project Name',  // ← Your project name
    description: 'Project description...',  // ← What it does
    tech: ['React', 'Node.js'],  // ← Technologies used
    github: 'https://github.com/yourusername/project',  // ← GitHub link
    live: 'https://yourproject.com',  // ← Live demo link
    gradient: 'from-purple-600 to-pink-600'  // ← Color theme
  },
  // Add more projects...
];
```

**Available gradients**:
- `from-purple-600 to-pink-600` (Purple to Pink)
- `from-blue-600 to-cyan-600` (Blue to Cyan)
- `from-green-600 to-emerald-600` (Green to Emerald)
- `from-orange-600 to-red-600` (Orange to Red)

### Step 6: Update Contact Info (3 minutes)

#### File: `src/components/Contact.jsx`
```javascript
// Lines 21-37: Update contact information
const contactInfo = [
  {
    icon: <Mail />,
    label: 'Email',
    value: 'your.email@example.com',  // ← Your email
    link: 'mailto:your.email@example.com'
  },
  {
    icon: <Phone />,
    label: 'Phone',
    value: '+91 XXXXX XXXXX',  // ← Your phone
    link: 'tel:+91XXXXXXXXXX'
  },
  {
    icon: <MapPin />,
    label: 'Location',
    value: 'Your City, India',  // ← Your location
    link: '#'
  }
];
```

### Step 7: Update Page Title (2 minutes)

#### File: `index.html`
```html
<!-- Line 7: Update page title -->
<title>Your Name - Portfolio | Computer Science Student</title>

<!-- Line 5: Update description -->
<meta name="description" content="Personal portfolio of [Your Name]..." />
```

## 🎨 Color Customization

### Change Theme Colors

#### File: `src/index.css`
```css
/* Line 17: Change primary gradient */
--primary-gradient: linear-gradient(135deg, #6366f1 0%, #a855f7 100%);
/* Try these alternatives:
   - Blue: linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)
   - Green: linear-gradient(135deg, #10b981 0%, #34d399 100%)
   - Red: linear-gradient(135deg, #ef4444 0%, #f97316 100%)
*/

/* Lines 18-20: Adjust glass effect */
--glass-bg: rgba(255, 255, 255, 0.05);  /* Background opacity */
--glass-border: rgba(255, 255, 255, 0.1);  /* Border opacity */
--card-hover: rgba(255, 255, 255, 0.1);  /* Hover effect */
```

## 📸 Adding Your Photo

### Option 1: Add to About Section

1. Add your photo to `public/` folder (e.g., `profile.jpg`)
2. In `src/components/About.jsx`, add:

```javascript
<div className="glass-card">
  <img 
    src="/profile.jpg" 
    alt="Your Name"
    className="w-full rounded-xl"
  />
</div>
```

### Option 2: Add to Hero Section

In `src/components/Hero.jsx`, add above the text:

```javascript
<img 
  src="/profile.jpg" 
  alt="Your Name"
  className="w-48 h-48 rounded-full mb-8 border-4 border-purple-500"
/>
```

## ✅ Checklist

Use this checklist to make sure you've customized everything:

- [ ] Updated name in Hero section
- [ ] Added social media links (GitHub, LinkedIn, Email)
- [ ] Updated About section description
- [ ] Modified stats (Year, Projects, CGPA)
- [ ] Customized skills and levels
- [ ] Added education details
- [ ] Added real projects with links
- [ ] Updated contact information
- [ ] Changed page title and meta description
- [ ] (Optional) Added profile photo
- [ ] (Optional) Customized colors

## 🚀 After Customization

1. Save all files
2. Check the browser - changes should appear automatically
3. Test all links (social media, projects, contact)
4. Test on mobile (press F12 in browser, toggle device toolbar)
5. Build for production: `npm run build`
6. Deploy to Vercel or Netlify

## 💡 Pro Tips

1. **Keep it honest**: Don't exaggerate skills or experience
2. **Quality over quantity**: 3-4 good projects are better than 10 mediocre ones
3. **Update regularly**: Add new projects as you build them
4. **Test everything**: Make sure all links work
5. **Get feedback**: Ask friends or mentors to review your portfolio

## 🆘 Need Help?

If you get stuck:
1. Check the browser console (F12) for errors
2. Make sure all files are saved
3. Restart the dev server: `Ctrl+C` then `npm run dev`
4. Check the README.md for more detailed information

---

Happy customizing! 🎉
