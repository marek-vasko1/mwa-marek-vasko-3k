import logo from './logo.svg';
//import './App.css';
import AppHeader from './components/header';
import AppContent from './components/content';
import { useEffect, useState } from "react";

function App() {

  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("Začátek fetch data");
      const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "GET",
      });
      console.log("Po zavolání na API");
      const data = await res.json();
      console.log(data);
      setData(data);
      setLoading(false);
    };

    console.log("Start use effect");

    console.log("Před zavoláním fetchData");
    fetchData();
    console.log("Po zavolání fetchData");
  }, []);
  
  return (
    <div className="App">
      <AppHeader/>
      <AppContent></AppContent>
    </div>
  );
}



export default App;
