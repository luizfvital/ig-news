import Head from 'next/head'

import styles from './styles.module.scss'

export default function Posts() {

  return (
    <>
      <Head>
        <title>Posts | Ignews</title>
      </Head>

      <main className={styles.container}>
        <div className={styles.posts}>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatine a blog with Prismic CMS</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis 
              fuga veniam hic voluptates dolore repudiandae ipsam fugit et, aut officia corporis 
              consectetur totam perspiciatis non. Odit eius unde doloremque!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatine a blog with Prismic CMS</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis 
              fuga veniam hic voluptates dolore repudiandae ipsam fugit et, aut officia corporis 
              consectetur totam perspiciatis non. Odit eius unde doloremque!
            </p>
          </a>
          <a href="#">
            <time>12 de março de 2021</time>
            <strong>Creatine a blog with Prismic CMS</strong>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem perferendis 
              fuga veniam hic voluptates dolore repudiandae ipsam fugit et, aut officia corporis 
              consectetur totam perspiciatis non. Odit eius unde doloremque!
            </p>
          </a>
        </div>
      </main>
    </>
  )
}