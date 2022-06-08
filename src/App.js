import React,{useEffect, useState}from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,Route,Routes } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Formm from './Components/Formm';
import EditForm from './Components/EditForm';
import Basic from './Components/Basic';


function App() {

  const [formdata,setFormdata] = useState([])




const fetchdataa =(child)=>{
  setFormdata([...formdata,child])

}



const UpdateData=(upData)=>{
  let res=formdata.filter((eld,indd)=> indd!=upData.id);
  setFormdata([...res,{firstname:upData.firstname,lastname:upData.lastname,username:upData.username}]);
}


const DeleteFn=(d)=>{
  let res =formdata.filter((el,id)=>id!=d)
  setFormdata(res)
}

const local_storage_key = "contact";



useEffect(() => {
  const retrivedata= JSON.parse(localStorage.getItem(local_storage_key));
  if(retrivedata){
  setFormdata(retrivedata)

  }
 }, []);

 useEffect(() => {
   localStorage.setItem(local_storage_key,JSON.stringify(formdata));
 }, [formdata]);



 

 



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
    <Route path="/edit/:id" element= {<EditForm data = {formdata} updatedata = {UpdateData} fetchdataa = {fetchdataa}/>}/>


    </Routes>

    

    

    </div>
  );
}

export default App;
