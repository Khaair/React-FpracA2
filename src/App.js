import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Formm from './Components/Formm';





function App() {

  const [formdata,setFormdata] = useState([])

  console.log(formdata,"from theke app")


const fetchdataa =(child)=>{
  setFormdata([...formdata,child])

}

  return (
    <div className="App">
        <nav className="navv">
        <ul>
         <li><Link to="/" className="ll">View Data</Link></li>
         <li><Link to="/Form" className="ll">Add Data</Link></li>
        </ul>
     </nav>

    <Routes>
    <Route path="/" element= {<Home data={formdata}/>}/>
    <Route path="/Form" element= {<Formm fetchdataa = {fetchdataa}/>}/>
    </Routes>

    </div>
  );
}

export default App;
