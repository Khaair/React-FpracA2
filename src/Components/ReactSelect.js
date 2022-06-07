import React, { useState } from 'react';
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
  { value: 'CSE', label: 'CSE' },

];

export default function ReactSelect() {
  const [selectedOption, setSelectedOption] = useState(null);
 

console.log(selectedOption,"selectded")
  return (
    <div className="App">
     <div style={{border:"2px solid red",width: '200px'}}>
     <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
     </div>
    </div>
  );
}