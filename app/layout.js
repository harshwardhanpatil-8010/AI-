import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Provider from "./provider";
import { AuthKitProvider } from '@workos-inc/authkit-nextjs/components';
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "AI Logo Maker",
  description: "Generate Dynamic Logos for your buisness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
       <AuthKitProvider>
        <Provider> 
        {children}
        </Provider>
       </AuthKitProvider>
      </body>
    </html>
  );
}
