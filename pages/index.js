import Image from 'next/image';
import { useEffect } from 'react';
import { ParallaxProvider, Parallax } from 'react-scroll-parallax';
import styles from '../styles/Home.module.css';
import Card from '../components/Card';
import Footer from '../components/Footer';
import { INSTAGRAM, FACEBOOK, LINKEDIN, GITHUB } from '../helpers/global-variables';
import GetInTouch from '../components/GetInTouch';

export default function Home() {
  return (
    <ParallaxProvider>
      <div className={styles.container}>
        <Image className={styles.imgBackground} alt="background image" src="/images/dev_Background.jpeg" width={799} height={396} />

        <main className={styles.main}>
          <div className={styles.imageContainer}>

            <Parallax className="custom-class" y={[-60, 20]} tagOuter="figure">
              <Image className={styles.image} alt="profile image" src="/images/AMINE AMINE - BRIGHT LAB.jpg" width={800} height={800} />
              </Parallax>
          </div>
            <h1 className={styles.title}>
              <div><b>Welcome to Amine</b></div>
              <div><i>Portfolio</i></div>
            </h1>

            <div className={styles.grid}>
              <Card
                url={LINKEDIN}
                title="Linked In"
                desc="Check my work Experience in full stack development."
              />

              <Card
                url={GITHUB}
                title="Github"
                desc="Check my projects and applications."
              />

              <Card
                url={INSTAGRAM}
                title="Instagram"
                desc="Check my posts and stories."
              />

              <Card
                url={FACEBOOK}
                title="Facebook"
                desc="Check my facebook page."
              />
            </div>
            <GetInTouch/>
        </main>
          <Footer />
      </div>
    </ParallaxProvider>
      )
}

export async function getServerSideProps() {

  return {
      props: {
      }
  }

};
