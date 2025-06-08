import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kedhep",
  description: "A simple task management app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased min-h-screen`}
        data-theme="corporate"
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
