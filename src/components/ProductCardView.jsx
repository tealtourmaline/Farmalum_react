export const ProductCardView = ({ handler, id, photo, name, price }) => {

  const onAddProduct = (product) => {
    console.log(product);
    handler(product);
  }

  return (
    <>
      <div className="card">
        <img className="card-img-top" src={photo} alt="Card image cap"></img>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">$ {price}</p>
              <button className="btn btn-primary"
                onClick={() => onAddProduct({ id,photo,name,price })}>Agregar</button>
          </div>
      </div>
    </>
  )
}


