import Image from "next/image";
import styles from "@/app/test.module.css"
import SideNav from "./sideNav";

export default function Home() {

  return (

      <div className={styles.test}>
        <div>Home Page, yuck </div>
        <a href = "/dashboard">Dashboard hopefully </a>
      </div>

  );
}
