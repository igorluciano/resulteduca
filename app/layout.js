import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import 'animate.css';
import { Montserrat } from 'next/font/google';
import "./globals.css";
import { ChakraUiProvider } from "./providers/chakraUi/config";

config.autoAddCss = false;

const fonte = Montserrat({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  title: "Result",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={fonte.className}>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
