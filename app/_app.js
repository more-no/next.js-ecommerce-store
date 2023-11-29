import RootLayout from './layout';
import './globals.css';

const MyApp = ({ Component, pageProps }) => {
  return (
    <RootLayout>
      <Component {...pageProps} />;
    </RootLayout>
  );
};
export default MyApp;
