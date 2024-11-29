import { useState, useEffect} from "react";
import { useRef } from "react";

// export default function Accordion (){
//   const [activeIndex, setActiveIndex] = useState (0);
//   return(
//     <>
//     <h2>Nairobi , kenya</h2>
//     <Panel 
//       title = "about"
//       isActive ={activeIndex === 0}
//       onShow ={() => setActiveIndex(0)}>
//         Nairobi is a congested city
//     </Panel>
    
//     <Panel
//     title ="Fun Fact"
//     isActive = {activeIndex===1}
//     onShow ={() => setActiveIndex(1)}>
//       Nairobi is the only city in the world with a national park
//     </Panel>
//     </>
//   );
// }

// function Panel ({
//   title,
//   children,
//   isActive,
//   onShow
// }) {
//   return (
//     <section className="Panel">
//       <h3>{title}</h3>
//       {isActive? (
//         <p>{children}</p>
//       ) : (
//         <button onClick={onShow}>
//           show
//         </button>
//       )}
//     </section>
//   )
// }

//use reference in react
//  export default function (){
//   let ref =useRef;
//    function handleclick () {
//     ref.current = ref.current + 1;
//     alert ( 'you clicked ' + ref.current + 'times!');
//  }
//    return ( 
//     <button onclick = {handleclick}> hey matey, click me</button>
//    );
//  }

// manipulating the DOM with refs
// export default function Form (){
//   const inputRef = useRef(null);

//   function handleclick (){
//     inputRef.current.focus ();

//   }
//   return (
//     <>
//     <input ref ={inputRef}/>
//     <button onclick= {handleclick}> hey dzady </button>
//     </>
//   );
}
  // the use of useEffects
  export default function chatroom () {
    useEffect(() => {
      const connection = createConnection ();
      connection.connect ();
      return ()=>connection.disconnect();

    }, []) ;
    return <h1>Welcome to the chat room  </h1>
  }
