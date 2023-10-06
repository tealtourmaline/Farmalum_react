export const Carro = () => {
    return (
        <>
        <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container px-4 px-lg-5">
            <a className="navbar-brand" href="#!">Farmalum</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"></span></button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
                <li className="nav-item"><a className="nav-link active" aria-current="page" href="#!">Inicio</a></li>
                <li className="nav-item"><a className="nav-link" href="#!">Quienes somos</a></li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Tienda</a>
                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><a className="dropdown-item" href="#!">Todos los productos</a></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><a className="dropdown-item" href="#!">Productos populares</a></li>
                    <li><a className="dropdown-item" href="#!">Productos nuevos</a></li>
                    </ul>
                </li>
                </ul>
                <form className="d-flex">
                <button className="btn btn-outline-dark" type="submit">
                    <i className="bi-cart-fill me-1"></i>
                    Carrito
                    <span className="badge bg-dark text-white ms-1 rounded-pill">0</span>
                </button>
                </form>
            </div>
            </div>
        </nav>
        <header className="bg-dark py-5">
            <div className="container px-4 px-lg-5 my-5">
            <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">¡Nuevos productos!</h1>
                <p className="lead fw-normal text-white-50 mb-0">Para el cuidado personal</p>
            </div>
            </div>
        </header>
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
            <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwa526cfe4/images/large/40132_1_TOALLA_BUENAS_NOCHES_TIPO_TELA__NOSOTRAS_PAQ_X_10.jpg.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Toallas Buenas Noches Tipo Tela Algodón Paquete X 10</h5>
                        $11.760
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Ver opciones</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Oferta</div>
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw7949c6c2/images/large/142222_1_GEL_FACIAL_HYDRO_BOOST_WATER_NEUTROGENA_TUB_X_50GR.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Gel Facial Hydro-Boost Water Neutrogena Frasco X 50 Gr</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted text-decoration-line-through">$63.450 </span>
                        $60.278
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Oferta</div>
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw029c53b6/images/large/119794_1_COLGATE_TOTAL_12_CLEAN_MINT_CREM_TUB_X_150ML.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Crema Dental Colgate Total 12 Clean Mint Tubo X 150 mL</h5>
                        <span className="text-muted text-decoration-line-through">$24.100</span>
                        $17.400
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc5744b38/images/large/154648_1_REPUESTO_CUCHILLA_DEPILACION_GILLETTE_SOB_X_2_VENUS_BREEZE.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Repuesto Cuchilla Depilacion Gillette Sobre X 2 Venus Breeze</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        </div>
                        $30.353
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Oferta</div>
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dw2dd2757b/images/large/164987_1_SHAMPOO_HERBAL_ESSENCES_FCO_X_400ML_BOURBON_MANUKA_HONEY.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Shampoo Herbal Essences Control Caída Bourbon Manuka Honey Frasco X 400Ml</h5>
                        <span className="text-muted text-decoration-line-through">$32.150</span>
                        $30.543
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc71cbfa1/images/large/297979_1_BIO_ACTIVE_HYALURON_SKINACADEMY_SERUM_CONCENTRADO_35_FCO_X_30ML.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Bio Active Hyaluron Skinacademy Serum Concentrado 35+ Frasco X 30Ml</h5>
                        $36.700
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Ver opciones</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <div className="badge bg-dark text-white position-absolute" style={{ top: '0.5rem', right: '0.5rem' }}>Oferta</div>
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwc93b75f5/images/large/166299_1_REDUGEL_ARAWAK_POT_X_400GR_ELIMINAR_GRASA_LOCALIZADA.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Redugel Arawak Pot X 400Gr Eliminar Grasa Localizada</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        </div>
                        <span className="text-muted text-decoration-line-through">$37.900</span>
                        $30.320
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
                <div className="col mb-5">
                <div className="card h-100">
                    <img className="card-img-top" src="https://beta1.cruzverde.com.co/on/demandware.static/-/Sites-masterCatalog_Colombia/default/dwe85533a7/images/large/291934_1_CERAVE_FOAMING_CLEANSER_FCO_X_473ML_PARA_PIEL_NORMAL_A_GRASA.jpg" alt="..." />
                    <div className="card-body p-4">
                    <div className="text-center">
                        <h5 className="fw-bolder">Gel Limpiador Espumoso Para Piel Normal A Grasa Frasco X 473mL</h5>
                        <div className="d-flex justify-content-center small text-warning mb-2">
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        <div className="bi-star-fill"></div>
                        </div>
                        $86.688
                    </div>
                    </div>
                    <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
                    <div className="text-center"><a className="btn btn-outline-dark mt-auto" href="#">Añadir al carrito</a></div>
                    </div>
                </div>
                </div>
            </div>
            </div>

            <div className="my-4 w-50">
                <h3>Carro de compra</h3>
                <table className="table table-hover table-stripped">
                    <tbody>
                        <tr>
                            <td>nombre</td>
                            <td>precio</td>
                            <td>cantidad</td>
                            <td>total</td>
                            <td>eliminar</td>
                        </tr>
                    </tbody>
                    <tfoot>
                        <tr>
                            <td colSpan="3" className="text-end fw-bold">Total</td>
                            <td colSpan="2">12345</td>
                        </tr>
                    </tfoot>
                </table>
            </div>

        </section>
        <footer className="py-5 bg-dark">
            <div className="container"><p className="m-0 text-center text-white">Copyright &copy; Farmalum 2023</p></div>
        </footer>
        </div>
        </>
    )
}