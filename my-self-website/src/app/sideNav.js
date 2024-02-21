import styles from "@/app/sideNav.module.css"
// import styles from "@/app/test.module.css"

export default function SideNav() {

    return (
      <div>
        <div className={styles.sideNav}>Side Navigation: 
            <a className= {styles.sideNavLinks} href = "/dashboard">Dashboard from the SideNav hopefully </a>
        </div>

      </div>
    );
  }