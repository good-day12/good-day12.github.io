import { Inter } from "next/font/google";
import "./globals.css";
import SideNav from "./sideNav";
import styles from "@/app/test.module.css"


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className={styles.container}>
          {children}  
          <SideNav/>
        </div>
      </body>
    </html>
  );
}
//stuff must go inside the body tags
