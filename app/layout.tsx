import type { Metadata } from "next";
import {Inter, Space_Grotesk} from "next/font/google"
import "./globals.css";
import React from "react";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/context/ThemeProvider";


const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'

})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'

})

export const metadata: Metadata = {
  title:'CodeCycle',
  description:'A community and AI driven tool for asking programming questions. Share feedbacj , get help and collaborate with developers around the world. Learn about current code practices. Explore topics like DSA, Web Development, Mobile App Development and more.',
  icons: {
    icon:'/assets/images/site-logo.svg'
  },

}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
      <ClerkProvider
      appearance={{
        elements:{
          formButtonPrimary:'primary-gradient',
          footerActionLink:'primary-text-gradient hover:text-primary-500'
        }
      }}
    >
      <ThemeProvider>
        {children}
      </ThemeProvider>  
    </ClerkProvider>
      </body>
    </html>
    
  );
}
