
export const SearchProduct = (props) => {

  
  return (
    <>
      <form  onSubmit={props.buscaProducto}>
        <legend>Busca un Producto y agrega una cantidad</legend>

        <div className="campo">
          <label>Productos:</label>
          <input 
          type="text" 
          placeholder="Nombre Productos" 
          name="productos" 
          onChange={props.leerBus}
          />
        </div>
        <input 
        type="submit" 
        className="btn btn-azul btn-block" 
        value={"Buscar"} 
        />
        </form>
    </>
  )
}
