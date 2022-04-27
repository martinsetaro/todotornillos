import Productos from '../../../mockup/Productos'
import React, {useState, useEffect} from 'react'
import ItemList from './ItemList'
import '../Main/main.scss'
 


const ItemListContainer = () => {
 const [productos, setProductos]=useState([])


 useEffect(()=>{

 const promesa = new Promise(resolve => {
     setTimeout(() => {
         resolve(Productos);
         console.log("Descarga exitosa")
     },3000);
 })

 setTimeout(()=>{
     setProductos(Productos)
 },3000)


 },[])






  return (
    <div className='listaContenedora'>
        {productos.map(producto =>
            <ItemList nombre={producto.nombre} imagen={producto.imagen} precio={producto.precio} key={producto.id}/>)}

    </div>
  )
}

export default ItemListContainer