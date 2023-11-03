
const Header = ({heading}) => {
  return (
    <nav className="navbar bg-body-tertiary" style={{ height: '4rem' }}>
        <div className="container-fluid">
            <div className="d-flex justify-content-between w-100">
                <h5>{heading}</h5>

                <div className="d-flex" role="">
                    <button className="btn btn-secondary btn-sm me-3">Signup</button>
                    <button className="btn btn-outline-secondary btn-sm" type="submit">Login</button>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Header
