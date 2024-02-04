import type { Metadata } from "next";
import "./globals.css";
import {Providers} from "./providers";

export const metadata: Metadata = {
  title: "Seafox Inventive",
  description: "CETYS University ROV",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className='dark'>
      <head>
        <title>Seafox Inventive</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
      </head>
      <body>
          <Providers>{children}</Providers>
      </body>
    </html>
  );
}
