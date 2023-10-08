// import styles from './global.scss';
// import { Inter } from 'next/font/google';
import Header from './Header';
import { ReactNode } from 'react';

// const inter = Inter({ subsets: ['latin'] });

type Props = {
  children: ReactNode;
};

export const metadata = {
  title: {
    default: 'Home page | My E-Commerce App',
    template: '%s | My E-Commerce App',
  },
  description: 'Created with Next.js',
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <Header data-test-id="products-link" />
        {props.children}
      </body>
    </html>
  );
}
