// // import React from 'react'

// // function App() {
// //   return (
// //      <>
// //       <h1>This is Recat</h1>
// //       <h2> This is h2 Tag</h2>
// //      </>
// //   )
// // }

// // export default App

// import './App.css'
// const App=()=>{
//   let a=2;
//   let b=3;
//   let c=a+b;
//   return (
//   <>
//    {/* <div>
//   <div classname="Appcontainer" />
//   <a href="https://www.mythrillfiction.com/the-dark-rider" alt="Mythrill" target="_blank">
//     <div className="card">
//       <div className="wrapper">
//         <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-cover.jpg" className="cover-image" />
//       </div>
//       <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-title.png" className="title" />
//       <img src="https://ggayane.github.io/css-experiments/cards/dark_rider-character.webp" className="character" />
//     </div>
//   </a>
//   <a href="https://www.mythrillfiction.com/force-mage" alt="Mythrill" target="_blank">
//     <div className="card">
//       <div className="wrapper">
//         <img src="https://ggayane.github.io/css-experiments/cards/force_mage-cover.jpg" className="cover-image" />
//       </div>
//       <img src="https://ggayane.github.io/css-experiments/cards/force_mage-title.png" className="title" />
//       <img src="https://ggayane.github.io/css-experiments/cards/force_mage-character.webp" className="character" />
//     </div>
//   </a>
// </div> */}

// {/* <A a={a} b={b}/> */}

//   </>
//   );
// }
// export default App

import React, { useState } from 'react'

const App=()=> {
 const [data,setcount]=useState(0);
 const handleclick=()=>{
  setcount(data+1)
 }
;
return(
  <>
    <h1>{data}</h1>
    <button onClick={handleclick}>hello</button>
  </>
);
}

export default App
