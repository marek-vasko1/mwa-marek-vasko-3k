
import React, { useEffect, useState } from "react";


import { toUpper } from "lodash";
import "./index.css";
import neco from "./Post";

function App() {

  

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  //const [data2, setData2] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      //console.log("Začátek fetch data");
      const res = await fetch("https://api.golemio.cz/v2/gtfs/routes?limit=30", {
        method: "GET",
        headers: {

          "x-access-token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InZhc2tvLm1hLjIwMTlAc2tvbGEuc3Nwcy5jeiIsImlkIjoxMDU1LCJuYW1lIjpudWxsLCJzdXJuYW1lIjpudWxsLCJpYXQiOjE2NDI0MzEzNTMsImV4cCI6MTE2NDI0MzEzNTMsImlzcyI6ImdvbGVtaW8iLCJqdGkiOiJhNDgxMTYyYS1jZGY4LTQ2YzYtYWJkNC0zMmE4ZjQwZGFmZDQifQ.j_-72tyQnd5f92ODTXOjoqSRS-wLiXVsGmFkEZ9kZtE"
        },
      });
      //console.log("Po zavolání na API");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
     
    };

    console.log()

    //console.log("Start use effect");

    //console.log("Před zavoláním fetchData");
    fetchData();
    //console.log("Po zavolání fetchData");

    //const text = "ahoj jaké byly vánoce";
    //console.log(toUpper(text));
    
    data.forEach(dataInfo => {

        console.log(dataInfo.route_short_name);
        let Route_short_name = dataInfo.route_short_name;
        document.getElementById("Route_short_name").innerHTML = Route_short_name;
      

        console.log(dataInfo.route_long_name);
        let Route_long_name = dataInfo.route_long_name;
        document.getElementById("Short").innerHTML = Route_long_name;

        console.log(dataInfo.route_url);
        let url = dataInfo.route_url;
        document.getElementById("Url").innerHTML = url;
       
    })
  }, []);
  






  
  function onClickplus() {
    var click =0;

      var clickplus = click +1;
    
    document.getElementById("plus").innerHTML = clickplus;
  }
  function onClickMinus() {
    var cislo = 0;
  
    var clickminus = cislo -1;

    document.getElementById("minus").innerHTML = clickminus;
  }
 return (
   <div>
     <div className="grid grid-cols-3">
       <div>
        <span id="Short"></span>
       </div>
       <div> <span id="Route_short_name"></span></div>
       <div>a <span id="Url"></span></div>
     </div>
     <div className="grid grid-cols-2">
       <button onClick={onClickplus}>+1</button>
       <h1>hodnota je <span id="plus"></span></h1>
       <button onClick={onClickMinus}>-1</button>
       <h1>hodnota je <span id="minus"></span></h1>
     </div>
   </div>
  

 )

 }

 


export default App;