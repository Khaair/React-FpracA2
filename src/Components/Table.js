import React, { useState } from "react";

export default function Table() {

  const [data, setData] = useState([]);

  const [theArray, setTheArray] = useState([]);
 console.log(theArray,"array")


let arr = []
function insertdata(){
 arr.push(1)
setTheArray(prevArray => [...prevArray, {prevArray}])
}

function clearrow(){
    setTheArray([]) 
}


  return (
    <div>
      

      <button onClick={insertdata}>Insert Row</button>
      <button  onClick={clearrow}>Clear Row</button>
      <button>Submit</button>

      {
         theArray.map((ell, ind) => {

            console.log(theArray,'poooo')
          return (
            <table>
            
            <tr key={ind}>
               
              <td index={ind+1}>{ind+1}</td>
              <td index={ind+1}>Item: {ind+1} </td>

              <td index={ind+1}><input type="text"></input></td>

              
            </tr>
           
          </table>
          );
        })}
    </div>
  );
}
