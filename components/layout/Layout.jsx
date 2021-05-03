import Head from 'next/head'
import Header from './Header'
import Footer from './Footer'
import styles from '../../styles/Home.module.css'

export default function Layout(props) {
  return (
    <div>
      <Head>
        <title>関数電卓</title>
        <link rel="stylesheet" 
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css" 
        crossorigin="anonymous"></link>
      </Head>
      <Header/>
      <div>
        {props.children}
      </div>
      <Footer />
    </div>
  )
}