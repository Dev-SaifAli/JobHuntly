import type { Metadata } from "next";
import { Epilogue, Outfit } from "next/font/google";
import "./globals.css";

// Epilogue - matches your current Epilogue Light
const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, Semibold, Bold
  variable: "--font-epilogue",
});

// Outfit - a good alternative to Monument Extended (geometric sans-serif)
// Other alternatives: Montserrat, Space Grotesk, Plus Jakarta Sans
const monument = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-monument",
});

export const metadata: Metadata = {
  title: "JobHuntly",
  description: "Job Hunting Website",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body 
        className={`${epilogue.variable} ${monument.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}