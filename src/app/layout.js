import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['300', '400', '500', '600', '700'], 
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-mont-serret',
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
