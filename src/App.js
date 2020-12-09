import './App.css';
import React , { useState } from 'react';

function App() {


  const [inp,setInp] = useState([])
  const [inpans,setInpans]= useState()

  const btnval = (e) => {
      setInp((o)=>{
        return [...o,e.target.name]
      })
  }

  const sum = () => {
    var inpvals = inp.join('').toString()
    setInpans(eval(inpvals))
    setInp("")
  }

  
  
  
  return (
   <>
   <div className="main">
     <div className="heading">
     <h1>CALCULATOR</h1>
     </div>
     <div className="calc">
        <div>
          <input type="text" value={inp} readOnly/><br />
          <input type="text" value={inpans} readOnly/>
        </div>
        <br />
        <div>
            <div>
            <button onClick={btnval} name="7">7</button>
            <button onClick={btnval} name="8">8</button>
            <button onClick={btnval} name="9">9</button>
            </div>
            <div>
            <button onClick={btnval} name="4">4</button>
            <button onClick={btnval} name="5">5</button>
            <button onClick={btnval} name="6">6</button>
            </div>
            <div>
            <button onClick={btnval} name="1">1</button>
            <button onClick={btnval} name="2">2</button>
            <button onClick={btnval} name="3">3</button>
            </div>
            <div>
            <button onClick={btnval} name="+">+</button>
            <button onClick={btnval} name="-">-</button>
            <button onClick={btnval} name="*">X</button>
            </div>
            <div>
            <button onClick={btnval} name="+">0</button>
            <button onClick={btnval} name="-">/</button>
            <button onClick={sum}>=</button>
            </div>
            
        </div>
        
      </div>
      </div>
   </> 
  )
}

export default App;
