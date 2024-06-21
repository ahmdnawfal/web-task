import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({ subsets: ['latin'], weight: ['400'] });

export const metadata: Metadata = {
  title: 'Web Task',
  description:
    "We offer a seamless blend of expert web consulting and reliable task assistance services to meet your diverse digital needs. Whether you're looking to enhance your online presence or seek professional support for academic tasks, we're here to empower you.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
