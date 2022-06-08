import React,{useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Formm from './Components/Formm';
import EditForm from './Components/EditForm';





function App() {

  const [formdata,setFormdata] = useState([])



const fetchdataa =(child)=>{
  setFormdata([...formdata,child])

}


const Updatedata =(updata)=>{

     console.log(updata,'up data peyechi');


  let res = formdata.filter((ell,idd)=>idd!=updata.id)
  setFormdata([...formdata,{firstname:updata.firstname,lastname:updata.lastname,username:updata.username}])
  
}


const DeleteFn=(d)=>{
  let res =formdata.filter((el,id)=>id!=d)
  setFormdata(res)
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
    <Route path="/" element= {<Home data={formdata} DeleteFn={DeleteFn}/>}/>
    <Route path="/Form" element= {<Formm fetchdataa = {fetchdataa}/>}/>
    <Route path="/edit/:id" element= {<EditForm data = {formdata} fetchdataa = {Updatedata}/>}/>


    </Routes>

    

    </div>
  );
}

export default App;
