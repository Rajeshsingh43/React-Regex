
import { useState } from 'react'
import './App.css'



  const imageofbulb="https://i.pinimg.com/564x/e0/fd/25/e0fd25f9127a9a109a0648c83ee61643.jpg"

  const imageonbulb="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN2n3UoGIkHaJb9rXIOhfILryhzd1rpJmC_qcpWCRzdOhKd_EKHCq-YWRHlkYP6GUpuRI&usqp=CAU"


  const App=()=>{
    const [ison, setIson]=useState(false);
    const handlebtnclick=()=>{
      setIson(!ison);
      console.log(ison);
    };
     return(
      <>
        <div className="container">
          <img 
          src={ison ? imageofbulb : imageonbulb}
          className="imageClass"
          alt="imageofblub"
          />
          <button
          className={ison ? "btnclickme" : "btnnotclickme"}
          onClick={handlebtnclick}
          >
            click me
          </button>
        </div>
        </>
     );
    };
 
    
    
 export default App;



