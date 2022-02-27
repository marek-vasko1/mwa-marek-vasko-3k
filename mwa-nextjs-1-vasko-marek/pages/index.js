import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import P1 from './components/p1'
import P2 from './components/p2'
import P3 from './components/p3'
import P4 from './components/p4'
import P5 from './components/p5'
import P6 from './components/p6'
import P7 from './components/p7'
import P8 from './components/p8'
import P9 from './components/p9'
import P10 from './components/p10'
import Footer from './components/footer'
import Port1 from './components/portfolio1'
import Port2 from './components/portfolio2'
import Port3 from './components/portfolio3'
import Port4 from './components/portfolio4'
import Cont1 from './components/Contact1'
import Cont2 from './components/Contact2'


export default function Home() {
  return (
<div>
    <Header></Header>
    <P1></P1>
    <P2></P2>
    <P3></P3>
    <P4></P4>
    <P5></P5>
    <P6></P6>
    <P7></P7>
    <P8></P8>
    <P9></P9>
    <P10></P10>
    <Footer></Footer>
    <Header></Header>
    <Port1></Port1>
    <Port2></Port2>
    <Port3></Port3>
    <Port4></Port4>
    <Footer></Footer>
    <Header></Header>
    <Cont1></Cont1>
    <Cont2></Cont2>

</div>
  )
}
