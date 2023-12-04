import "./globals.css";
import { ChakraUiProvider } from "./providers/chakraUi";

export const metadata = {
  title: "Result",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body>
        <ChakraUiProvider>{children}</ChakraUiProvider>
      </body>
    </html>
  );
}
