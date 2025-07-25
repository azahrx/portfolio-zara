import { Outfit, Ovo } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: '--font-outfit',
});

const ovo = Ovo({
  subsets: ["latin"],
  weight: ["400"],
  variable: '--font-ovo',
});

export const metadata = {
  title: "by Zahra",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${ovo.variable}`}
      >
      <body
        className="antialiased leading-8 overflow-x-hidden font-outfit"
      >
        {children}
      </body>
    </html>
  );
}
