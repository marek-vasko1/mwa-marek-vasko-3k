import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Card from '../components/Card'
import Post from '../components/Post'

const Home: NextPage = () => {
  let name : any = "Idk";
  name = 25;

  console.log(name);

  type Computer = "PC" | "Laptop";
  let comp : Computer = "PC";





  return (
    
    <div>
      <Post title="text" content='hello there' date='2022'/>
    </div>
  )
}

export default Home
