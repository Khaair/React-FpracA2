import React, { useState } from "react";

import { FaBeer } from 'react-icons/fa';
import ReactTooltip from 'react-tooltip';
import './DataShow.css';


export default function DataShow() {


    const [stylee,setStylee]= useState('loof')


    const handleChange =()=>{

    stylee=='loof'?setStylee('loop'):setStylee('loof')
    console.log("hiiiiiiiiii")
    }
  return (
    <div>

        <h3> Lets go for a <FaBeer />? </h3>

        <i class="fa-solid fa-user"></i>


        <h1 className= {`${stylee}`}>hlww</h1>

        <button data-tip="Click to Change" onClick={handleChange}>Change</button>
<ReactTooltip />

    </div>
  )
}
