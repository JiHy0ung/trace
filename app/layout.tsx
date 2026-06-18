import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/SideBar";
import { ThemeProvider } from "next-themes";
import { AuthProvider } from "./context/AuthContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Trace",
  description: "개인 BLOG 사이트",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link
          rel="icon"
          href="/trace_logo_light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/trace_logo_dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body className="min-h-full flex flex-row">
        <AuthProvider>
          <ThemeProvider attribute="class" enableSystem defaultTheme="system">
            <SideBar />

            <main className="w-full">{children}</main>
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
