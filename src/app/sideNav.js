import styles from "@/app/sideNav.module.css"
// import styles from "@/app/test.module.css"
import Image from 'next/image';

export default function SideNav() {

    return (
      <div>
        <div className={styles.sideNav}>
          <Image
          src = "/good-day12.github.io/floresHeadshot.jpg"
          width={500}
          height={500}
          />
          <a className= {styles.sideNavLinks} href = "/good-day12.github.io/">Home</a>
          <a className= {styles.sideNavLinks} href = "/good-day12.github.io/aboutMe">About Me</a>
          <a className= {styles.sideNavLinks} href = "/good-day12.github.io/aboutMe">USMC Experience</a>
          <a className= {styles.sideNavLinks} href = "/good-day12.github.io/aboutMe">Projects</a>
        </div>

      </div>
    );
  }