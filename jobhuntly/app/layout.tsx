import type { Metadata } from "next";
import { Epilogue, Outfit } from "next/font/google";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, Semibold, Bold
  variable: "--font-epilogue",
});


const monument = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "JobHuntly - Great platform for the job seeker",
  description: "Job Hunting Website",
  icons: {
    // Browser looks for this in the 'public' folder
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
    ],
    shortcut: '/favicon.svg',
  },
};
;

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Loading Epilogue and Outfit fonts via Google Fonts CDN to avoid import errors */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link 
          href="https://fonts.googleapis.com/css2?family=Epilogue:wght@300;400;500;600;700&family=Outfit:wght@400;500;600;700&display=swap" 
          rel="stylesheet" 
        />
        <style dangerouslySetInnerHTML={{ __html: `
          :root {
            --font-epilogue: 'Epilogue', sans-serif;
            --font-monument: 'Outfit', sans-serif;
          }
          body {
            font-family: var(--font-epilogue);
          }
          h1, h2, h3, .font-heading {
            font-family: var(--font-monument);
          }
        `}} />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}