import './globals.css';
import { Inter } from 'next/font/google';
import Link from 'next/link';
import Header from './Header';

// SEO
//     • Add titles to all pages
//     • Add meta descriptions to all pages

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: {
    default: 'Home page | My E-Commerce App',
    template: '%s | My E-Commerce App',
  },
  description: 'Created with Next.js',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <div>
            <Link href="/">Home</Link>
            <br />
            <br />
          </div>
        </nav>
        <Header data-test-id="products-link" />
        <br />
        <br />
        {children}
      </body>
    </html>
  );
}
