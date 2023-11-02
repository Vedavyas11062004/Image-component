import React from 'react'

function Cards({tags,heading,url}) {
  return (
    <div>
    {/* <p>{
      tags.map(()=>{

      })
    }</p> */}
    <h2>{heading}</h2>
    <img src={url} alt='img.. '></img>
    </div>
  )
}

export default Cards;
