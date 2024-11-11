import { useState } from "react";


export default function Accordion (){
  const [activeIndex, setActiveIndex] = useState (0);
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

function Panel ({
  title,
  children,
  isActive,
  onShow
}) {
  return (
    <section className="Panel">
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