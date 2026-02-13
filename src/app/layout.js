import { Montserrat } from 'next/font/google';
import "./globals.css";

const montserrat = Montserrat({
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-mont-serret',
});

export const metadata = {
  title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
  description: "Licensed Clinical Psychologist in Santa Monica, CA. Dr. Maya Reynolds provides therapy for adults dealing with anxiety, stress, trauma, and burnout. Book a session to start your journey toward a healthier, balanced life.",
  keywords: [
    "Dr. Maya Reynolds",
    "Santa Monica psychologist",
    "licensed therapist",
    "anxiety therapy",
    "stress management",
    "trauma therapy",
    "burnout recovery",
    "adult therapy",
    "CBT therapist Santa Monica",
    "EMDR therapy",
  ],
  authors: [{ name: "Dr. Maya Reynolds, PsyD" }],
  creator: "Dr. Maya Reynolds, PsyD",
  openGraph: {
    type: "website",
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist in Santa Monica, CA",
    description: "Therapy for adults dealing with anxiety, stress, trauma, and burnout. Book a session to start your journey toward a healthier, balanced life.",
    url: "https://dr-maya-reynolds-psyd.vercel.app", 
    siteName: "Dr. Maya Reynolds, PsyD",
  },
  twitter: {
    card: "summary",
    title: "Dr. Maya Reynolds, PsyD | Licensed Clinical Psychologist",
    description: "Therapy for adults in Santa Monica, CA. Specializing in anxiety, trauma, burnout, and stress management.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
