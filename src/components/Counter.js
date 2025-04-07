import React, { useState } from 'react';
function Counter() {
  const [countpepsi, setCountpepsi] = useState(0) ;
  const [countcococola, setCountcococola] = useState(0);
  const [counttotalprice, setCounttotalprice]=useState(0);
const pepsiprice=20;
const cococolaprice=25;
const totalprice=countpepsi*pepsiprice+countcococola*cococolaprice;
  return (
    <div>
     <h2>Count: {countpepsi} price: {countpepsi*pepsiprice}</h2>
     <img src="../pepsi copy.jpg"></img>
      <button onClick={() => setCountpepsi(countpepsi + 1)}>Increment Pepsi Quantity</button>
      <button onClick={() => setCountpepsi(countpepsi - 1)}>Decrement Pepsi Quantity</button><br></br>
      <h2>Count: {countcococola} price: {countcococola*cococolaprice}</h2>
      <button onClick={() => setCountcococola(countcococola + 1)}>Increment coco cola Quantity</button>
      <button onClick={() => setCountcococola(countcococola - 1)}>Decrement coco cola Quantity</button><br></br>
      <button onClick={() => setCounttotalprice(countpepsi*pepsiprice+countcococola*cococolaprice)}>Total price=</button><br></br>
      
      
      
    </div>
  );
}
export default Counter;
