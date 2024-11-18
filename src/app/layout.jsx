'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import Script from 'next/script';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
  useEffect(() => {
    emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
  }, []);

  return (
    <html lang="en">
      <head>
        <Script src="https://cdn.emailjs.com/dist/email.min.js" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
} 