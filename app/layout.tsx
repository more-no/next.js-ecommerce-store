import Header from './Header';
import { ReactNode } from 'react';
import './globals.css';

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
    <html lang="en" data-theme="garden">
      <body>
        <Header data-test-id="products-link" />
        {props.children}
      </body>
    </html>
  );
}
