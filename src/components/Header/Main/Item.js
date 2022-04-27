import ItemCount from "./ItemCount"

const Item = ({nombre,imagen,precio}) => {
  return (
    <div className="cardItem">
        <img src={imagen} alt={nombre}/>
        <h2>{nombre}</h2>
        <h3>${precio}</h3>
    <ItemCount stock={5} initial={1}/>
        <button className="btn_cesta">Agregar a cesta</button>

    </div>
  )
}

export default Item