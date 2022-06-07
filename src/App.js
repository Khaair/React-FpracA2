import React,{useState}from 'react'

import './App.css';
import Avatarr from './Components/Avatarr';
import Child from './Components/Child';
import DataShow from './Components/DataShow';
import ReactSelect from './Components/ReactSelect';
import Table from './Components/Table';
import ToolTip from './Components/ToolTip';
import UseEff from './Components/UseEff';



function App() {

  
const [show,setShow] = useState("")

console.log(show,"show")

const handleChaild = (childdata)=>{
  console.log(childdata,"App")
  setShow(childdata)
}

  return (
    <div className="App">
      {/* <UseEff/> */}
      {/* <Table/> */}

      <Child propchild = {handleChaild} />
      <DataShow show = {show}/>
      <ReactSelect/>
      <ToolTip/>
    </div>
  );
}

export default App;
