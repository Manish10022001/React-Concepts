import { react, useState, useEffect } from "react";

 export default function StateTopic() {
   //array -> store name list
   const [list, setList] = useState([]);
   //name
   const [name, setName] = useState("");

   useEffect(
     function () {
       console.log(list);
     },
     [list]
   );
   //function
   function handleClick() {
     // on clicking name should be added to the list
     //push into array
     const newList = [...list, name];
     setList(newList);
     setName(""); //after adding input should be empty
   }
   //handleChange has parameter - event, it is used to change value ;event.target.value
   function handleChange(event) {
     let inputValue = event.target.value;
     setName(inputValue);
   }

   {/* this aslo works same
    function handleClick() {
  setList(...list, name);
}
function handleChange(e) {
  setName(e.target.value);
}
   */}
   return (
     <div>
       {/* ui */}
       <div>{name}</div>
       {/* input value */}
       <input
         type="text"
         onChange={handleChange}
         placeholder="Enter your name"
         value={name}
       />
       {/* button */}
       <button onClick={handleClick}>Add</button>
     </div>
   );
 }