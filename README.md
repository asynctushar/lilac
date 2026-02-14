# Dr. Maya Reynolds, PsyD - Therapy Practice Website

A modern, calming therapy practice website built with Next.js 15, featuring smooth animations, responsive design, and a professional aesthetic tailored for mental health services.

🔗 **Live Demo:** [https://dr-maya-reynolds-psyd.vercel.app](https://dr-maya-reynolds-psyd.vercel.app)  
📦 **Repository:** [https://github.com/asynctushar/lilac](https://github.com/asynctushar/lilac)

---

## 🌟 Features

- **Modern UI/UX**: Clean, calming design with professional typography and spacing
- **Smooth Animations**: Framer Motion animations throughout for engaging user experience
- **Responsive Design**: Fully responsive across all devices (mobile, tablet, desktop)
- **Therapeutic Color Palette**: Carefully chosen calming colors to create a peaceful atmosphere
- **Performance Optimized**: Built with Next.js 15 for optimal performance and SEO
- **Custom Sections**:
  - Hero section with compelling introduction
  - About Dr. Reynolds
  - Services & Specialties
  - Office showcase with interactive gallery
  - FAQ section
  - Contact information
  - And more...

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Deployment**: [Vercel](https://vercel.com/)
- **Language**: JavaScript/React

---

## 📁 Project Structure

```
lilac/
├── app/                          # Next.js App Router
│   ├── layout.jsx               # Root layout
│   ├── page.jsx                 # Home page
│   ├── loading.jsx              # Loading state with spinner
│   └── globals.css              # Global styles & color variables
│
├── components/
│   ├── layout/                  # Layout components
│   │   ├── Header.jsx          # Navigation header
│   │   ├── Footer.jsx          # Footer section
│   │   └── ...
│   │
│   └── sections/                # Page sections
│
├── public/
│   ├── images/                  # Image assets
│
├── package.json                 # Dependencies
├── tailwind.config.js          # Tailwind configuration
├── next.config.js              # Next.js configuration
└── README.md                    # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn/pnpm installed
- Git installed

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asynctushar/lilac.git
   cd lilac
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

---

## 🎨 Customization

### Color Palette

The website uses a custom color system defined in `app/globals.css`. You can easily customize the theme by updating the CSS variables:

```css
:root {
  /* Base */
  --background: hsl(45, 50%, 98%);
  --foreground: hsl(185, 25%, 28%);
  --secondary: hsl(175, 25%, 90%);

  /* Brand */
  --primary: hsl(175, 40%, 45%);
  --accent: hsl(165, 45%, 60%);
}
```

**Multiple color palette variants** are available in the project. Check the color palette documentation for calming, therapeutic options.

### Content

Update the content in individual section components located in `components/sections/`:
- Therapist information in `About.jsx`
- Services in `Specialties.jsx`
- Office details in `OurOffice.jsx`
- Contact information in `Contact.jsx`

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

### Start Production Server

```bash
npm start
# or
yarn start
# or
pnpm start
```

### Deploy to Vercel

The easiest way to deploy this Next.js app is using [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Deploy!

Alternatively, use the Vercel CLI:

```bash
vercel
```

---

## 🎯 Key Sections

### Our Office Section
A unique section showcasing the therapy office with:
- Interactive image gallery with lightbox
- Location information
- Session availability (in-person & telehealth)
- Trust-building quote
- Smooth Framer Motion animations

### Loading State
Custom loading spinner with:
- Centered design
- Dual animation (spinning ring + pulsing circle)
- Theme-consistent colors
- Responsive height calculation

---

## 🔧 Configuration

### No Environment Variables Required

This project does not require any environment variables to run. All configuration is handled through:
- `next.config.js` for Next.js settings
- `tailwind.config.js` for Tailwind CSS
- `app/globals.css` for theme colors

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Tushar**
- GitHub: [@asynctushar](https://github.com/asynctushar)

---

## 🙏 Acknowledgments

- Design inspired by modern therapy practice websites
- Color psychology research for therapeutic environments
- Next.js team for the amazing framework
- Framer Motion for smooth animations
- Vercel for seamless deployment

---

## 📞 Support

For support or questions about this project:
- Open an issue on [GitHub](https://github.com/asynctushar/lilac/issues)
- Visit the live site: [https://dr-maya-reynolds-psyd.vercel.app](https://dr-maya-reynolds-psyd.vercel.app)

---

**Built with ❤️ for creating calm, healing spaces online**