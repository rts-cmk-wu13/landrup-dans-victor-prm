import { ToastContainer } from "react-toastify";

import { Genos, Ubuntu, Red_Hat_Text } from "next/font/google";
import "./globals.css";

const genos = Genos({
  variable: "--font-genos",
  subsets: ["latin"],
});

const font_ubuntu = Ubuntu({
  weight: ["300", "400", "500", "700"],
  variable: "--font-ubuntu",
  subsets: ["latin"],
});

const red_had_text = Red_Hat_Text({
  variable: "--font-redhat",
  subsets: ["latin"],
});

export const metadata = {
  title: "Landrup Dans",
  description: "Roskilde's bedste danseskole",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="cust-bg-gradient scroll-smooth min-h-screen">
      <body
        className={`${genos.variable} ${font_ubuntu.variable} ${red_had_text.variable} antialiased w-full`}
        
      >
        <ToastContainer hideProgressBar={true} pauseOnHover={false} autoClose={3000} closeButton={false} />
        {children}
      </body>
    </html>
  );
}
