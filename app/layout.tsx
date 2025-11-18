import type { Metadata } from "next";
import "./globals.css";
import {LanguageProvider} from "../providers/LanguageProvider";

export const metadata: Metadata = {
  title: 'Travel Web',
  description: 'Multi-language travel website'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
