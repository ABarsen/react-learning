import React, { useState } from 'react';
import { useEffect } from 'react';
const App = () => {
  const [ Color , setColor] = useState("Red")
  return (
    <div><h1>my favourite color {Color}</h1>
    </div>  
  )
}

export default App