import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from './components/header'
import P1 from './components/p1'
import P2 from './components/p2'
import P3 from './components/p3'


export default function Home() {
  return (
<div>
    <Header></Header>
    <P1></P1>
    <P2></P2>
    <P3></P3>

</div>
  )
}
