import { useState } from "react";

function App2(){
    const [number1,setNumber1] = useState(0);
    const [number2,setNumber2]= useState(0);
    const [sum,setSum] = useState(0);

    const handleNumber1Chnage = (e) => {
        setNumber1()
    }
     
    return(
       <>
       <div>
        <label htmlFor="inputFeild">Enter number 1:</label>
        <input type="number" id="inputFeild" value={number1}></input>
       </div>
       <div>
        <br></br>
       </div>
       <div>
       <label htmlFor="inputFeild2">Enter number 2:</label>
       <input type="number" id="inputFeild2" value={number2}></input>
      </div>
       </>
    );

}
export default App2;