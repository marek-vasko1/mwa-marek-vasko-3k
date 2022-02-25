
import React, { useEffect, useState } from "react";
import Neco from "./Post";
function Blog() {
    const [data2, setData] = useState([]);
    

    useEffect(() => {
    const fetchData = async () => {
        const res2 = await fetch('https://jsonplaceholder.typicode.com/posts')



      const data2 = await res2.json();
      //console.log(res2);
      console.log(data2);


      setData(data2);


        if (data2.length>0) 
        {

          

        }
        else

        console.log("chill")
    




    };

    console.log()
    fetchData();
  }, []);
return(
  <div>

    {data2.map((neco) =>{
            return(
              <Neco key={neco.id} Id= {neco.id} Title={neco.title} Text={neco.body}></Neco>
            );})}
  </div>
)

}



export default Blog;


