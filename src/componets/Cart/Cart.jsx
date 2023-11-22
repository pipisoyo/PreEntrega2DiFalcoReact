import React from 'react'

export const Cart = ( {nombreProducto, imagen, precio}) => {
  console.log()
  return (
    <>
    <div className="border border-3 p-3 d-flex flex-column m-2" >
      <h5>{nombreProducto}</h5>
    <img
      src={"/src/img/" + imagen}
      alt="Imagen producto" 
      width={120}
      height={120}
    />

  <p>Precio : ${precio}</p>


    </div>
   
 
    </>
    
  )
}
