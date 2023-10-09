export const ProductCardView = ({photo, name, price}) => {
  return (
    <>
      <div className="card">
        <img class="card-img-top" src={photo} alt="Card image cap"></img>
          <div className="card-body">
              <h5 className="card-title">{name}</h5>
              <p className="card-text">$ {price}</p>
              <button className="btn btn-primary">Agregar</button>
          </div>
      </div>
    </>
  )
}


