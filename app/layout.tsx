import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TechRedy - Empowering Future Technologists",
  description:
    "Join TechRedy to access free resources, expert mentorship, and career guidance in technology. Transform your career with comprehensive technical training and a supportive community.",
  keywords:
    "TechRedy, technology education, programming, coding, career development, mentorship",
  authors: [{ name: "TechRedy Team" }],
  icons: {
    icon: [
      { url: "/favicon.ico" },
      {
        url: "/images/logos/techredylogo.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
  },
  openGraph: {
    title: "TechRedy - Empowering Future Technologists",
    description:
      "Transform your tech career with free resources, expert mentorship, and comprehensive training.",
    url: "https://techready.com",
    siteName: "TechRedy",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechRedy - Empowering Future Technologists",
    description:
      "Transform your tech career with free resources, expert mentorship, and comprehensive training.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
