import React from 'react';

const getGreeting = () => {
  return "Hello World again";
}


const App = () => {
  const title = "World";
  return (
    <div>
    <h1>Hello {title.toUpperCase()}</h1>
    <h1>{getGreeting()}</h1>
    <h1>1+1= {1+1}</h1>
    </div>
  );
}


export default App;
