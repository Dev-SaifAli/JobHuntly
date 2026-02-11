import type { Metadata } from "next";
import { Epilogue} from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const epilogue = Epilogue({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"], // Light, Regular, Medium, Semibold, Bold
  variable: "--font-epilogue",
});


const clashDisplay = localFont({
  src: [
    {
      path: './fonts/ClashDisplay-Variable.woff2', 
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-clash',
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
    <html lang="en" className={`${epilogue.variable} ${clashDisplay.variable}`}>
      <body className="font-body antialiased">
        {children}
      </body>
    </html>
  );
}