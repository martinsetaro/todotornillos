import Item from './Item'



const ItemList = ({nombre,imagen,precio}) => {






  return (
    <div className='card'>
    <Item nombre={nombre} imagen={imagen} precio={precio}/>

    
    
    </div>
  )
}

export default ItemList