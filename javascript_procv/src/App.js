
import React, { useEffect, useState } from "react";
import Neco from "./components/Post";
import Blog from "./components/Blog";


import { toUpper } from "lodash";
import "./index.css";


function App() {

  

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://api.golemio.cz/v2/gtfs/routes?limit=30", {
        method: "GET",
        headers: {

          "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhc2tvLm1hLjIwMTlAc2tvbGEuc3Nwcy5jeiIsImlkIjoxMDU1LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDI0MzEzNTMsImV4cCI6MTE2NDI0MzEzNTMsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJhNDgxMTYyYS1jZGY4LTQ2YzYtYWJkNC0zMmE4ZjQwZGFmZDQifQ.j_-72tyQnd5f92ODTXOjoqSRS-wLiXVsGmFkEZ9kZtE"
        },
      });
      const data = await res.json();
      setData(data);
      setLoading(true);
     
      



     data.forEach(function(dataInfo) {

        let color = dataInfo.route_color;
        //document.getElementById("Color").innerHTML = color;

        let Route_short_name = dataInfo.route_short_name;
        document.getElementById("Route_short_name").innerHTML += Route_short_name + '<br>';



        let Route_long_name = dataInfo.route_long_name;
        document.getElementById("Short").innerHTML += Route_long_name+ '<br>';


        let url = dataInfo.route_url;
        document.getElementById("Url").innerHTML += url+ '<br>';
        const urlpole = dataInfo.route_url;

       
    })
    };

    console.log()
    fetchData();
  }, []);
  



let click=0;
let cislo = 0;
  
  function onClickplus() {
      //var click =0;

      let clickplus = click++;
    
    document.getElementById("plus").innerHTML = clickplus;
  }
  function onClickMinus() {
    //var cislo = 0;
  
    let clickminus = cislo--;

    document.getElementById("minus").innerHTML = clickminus;
  }
 return (
   <div>
     <div className="grid grid-cols-3 justify-items-center">
       <div >
        <span className="bg-[color]" id="Short"></span>
       </div>
       <div> <span className="bg-[color]" id="Route_short_name"></span></div>
       <div><span id="Url"></span> </div>
     </div>
     <div  className="grid grid-cols-4 mt-40  justify-items-center ">

       <button className="  bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded" onClick={onClickplus}>+1</button>

       <h1>hodnota je <span id="plus"></span></h1>
       <button className="  bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded" onClick={onClickMinus}>-1</button>
       <h1>hodnota je <span id="minus"></span></h1>
     </div>
     <div className=" justify-items-center text-center mt-40 ">

        <Neco Title="SSPŠ" Text= "Naší vizí je vzdělávání pro budoucnost, kde studenti nejsou pouze pasivními příjemci informací." Id={1} ></Neco>

      <Blog/>

       
     </div>

    
   </div>
  

 )

 }

 


export default App;