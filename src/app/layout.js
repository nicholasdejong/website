import Footer from "./components/Footer";
import Header from "./components/Header";
import "./globals.css";

export const metadata = {
  title: "Nicholas de Jong",
  description: "My personal website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>
        <Header />
        <Child>{children}</Child>
        <Footer />
      </body>
    </html>
  );
}

function Child({ children }) {
  return <>{children}</>
}