// import { useState } from "react";



// export default function Form (){
//   const [answer, setAnswer] = useState('');
//   const [error, setError ] = useState (null);
//   const [status, setStatus] = useState ('typing');

//   if (status === "success") {
//     return <h1>thats is right</h1>
//   }

//   async function handleSubmit (e) {
//     e.preventDefault ();
//     setStatus ('submitting');
//     try {
//       await submitForm (answer);
//       setStatus ('success');
//     }
//     catch (err) {
//       setStatus ('typing');
//       setError (err);
//     }
//   }
//   function handleTextareaChange (e){
//     setAnswer (e.target.value);

//   }
//   return(
    
//     <form>
//     <h2>City quizez</h2>
//     <p>in which city is there a billboard that turns air into drinkable water</p>

//     <form onSubmit ={handleSubmit} >
//         <textarea
//         value = {answer}
//         onChange={handleTextareaChange}
//         disabled = {status =="submitting"}
//         />
//     <br />

//     <button disabled ={
//       answer.length === 0 ||
//       status ==="submitting"}>
//       submit
//       </button>

//       {error !==null && 
//       <p className="Error">
//         {error.message}
//       </p>
//       }
//     </form>
//     </form>
//   );
// }
// function submitForm (answer){
//   //pretend it is hitting a network

//   return new Promise ((resolve ,reject) => {
//     setTimeout(()=> {
//       let shouldError = answer.toLowerCase() !== "lima , london"
//       if (shouldError){
//         reject(new Error ("good guess but a wrong answer. try again"));

//     }
//       else {
//         resolve();
//       } 
//     },1500)
//   });
// }
import {"useState" }from react
export default function Accordion (){
  const [activeIndex, setActiveIndex] =useState(0);
  return(
    <>
    <h2>Nairobi , kenya</h2>
    <Panel 
      title = "about"
      isActive ={activeIndex === 0}
      onShow ={() => setActiveIndex(0)}>
        Nairobi is a congested city
    </Panel>
    
    <Panel
    title ="Fun Fact"
    isActive = {activeIndex===1}
    onShow ={() => setActiveIndex(1)}>
      Nairobi is the only city in the world with a national park
    </Panel>
    </>
  );
}

function panel ({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="panel">
      <h3>{title}</h3>
      {isActive? (
        <p>{children}</p>
      ) : (
        <button onClick={onShow}>
          show
        </button>
      )}
    </section>
  )
}