import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Banner from '../components/banner/banner'
import NavBar from '../components/nav/navbar';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Discover-movies</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      
      <NavBar username="rex@test.com" />

      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/images/clifford.jpg"
      />

     
     
      {/* 
    <Card /> */}
    </div>
  );
 }