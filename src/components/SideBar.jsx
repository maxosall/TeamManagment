import {FiHome, FiUsers} from 'react-icons/fi'
const SideBar = () => {
  return (
    <div className="col-3 " style={{borderRight:"1px solid #eee"}}>
      <nav className="navbar bg-body-tertiary" style={{ height: '4rem' }}>
        <div className="container-fluid">
          <a className="navbar-brand fw-bold" href="#">Navbar</a>
        </div>
      </nav>
      <ul className="list-group border-0">
        <li className="list-group-item border-0 ">
          <a href="" className="text-decoration-none text-dark"><FiHome/> Home</a></li>
        <li className="list-group-item border-0">
          <a href="" className="text-decoration-none text-dark"><FiUsers/> Teams</a></li>
        <li className="list-group-item border-0">
          <a href="" className="text-decoration-none text-dark">Team A</a></li>
        <li className="list-group-item border-0">
          <a href="" className="text-decoration-none text-dark">Team B</a></li>
        <li className="list-group-item border-0">
          <a href="" className="text-decoration-none text-dark">Team C</a></li>
      </ul>
    </div>
  )
}

export default SideBar
