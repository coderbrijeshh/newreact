import './Submit.css'
import React,{useState} from 'react';


function Submit(){

const [number1 , setNumber1] = useState('');

const [number2 , setNumber2] = useState('');

const [result , setResult] = useState('');

const handleAdd = (e) => {
    e.preventDefault();
  const sum=(1*number1)+(1*number2);
  setResult(sum);
};

return (
  <div className='col'>

    <form onSubmit ={handleAdd}>
        
    No 1<input type="number"className='col1' value={number1} onChange={(e) => setNumber1((e.target.value))} placeholder='Enter the first number'></input>
    <br></br>

    No 2<input type="number" className='col2' value={number2} onChange={(e) => setNumber2((e.target.value))} placeholder='Enter the second number'></input><br></br>
    <br></br>


    <button>Add</button><br></br>


   Result <input value={result}readOnly placeholder='Result' className='col3'></input>

    

    </form>

    </div>
)
};
export default Submit;