import React from 'react';

const types = ['people', 'planets']

const findByType = async (type)=>{
  try {
    const response = await fetch(`http://swapi.dev/api/${type}/`)
    const data = await response.json()
    console.log(data);
  }catch(err){
    console.log(`there was an error: ${err}`)
  }
}


export const Home = () => {
  return (
    <div>
      <button onClick={()=>findByType(types[0])}>People</button>
      <button onClick={()=>findByType(types[1])}>Planets</button>


    </div>
  )
}

