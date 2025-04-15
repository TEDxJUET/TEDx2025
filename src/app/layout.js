import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "TEDxJUET | Ideas Worth Spreading",
  description:
    "TEDxJUET is an independently organized TED event at Jaypee University of Engineering and Technology. We bring together passionate individuals to share TED-like experiences, foster innovation, and spread ideas worth sharing.",
  openGraph: {
    title: "TEDxJUET | Ideas Worth Spreading",
    description:
      "Join us at TEDxJUET to explore powerful ideas, innovative minds, and transformative talks.",
    url: "https://tedxjuet.com",  
    siteName: "TEDxJUET",
    type: "website",
  },
  twitter: {
    card: "Twitter handle of TEDxJUET",
    title: "TEDxJUET | Ideas Worth Spreading",
    url:"https://x.com/TEDxJUET",
    creator: "@TEDxJUET",
    description:
      "A platform for spreading powerful ideas, TEDxJUET brings together the brightest minds at JUET Guna.",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <meta property="og:see_also" content="https://www.instagram.com/tedxjuet/" />
        <meta property="og:see_also" content="https://www.linkedin.com/company/tedxjuet/" />
        <meta name="linkedin:creator" content="@TEDxJUET" />
        <meta name="instagram:creator" content="@TEDxJUET" />
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}
