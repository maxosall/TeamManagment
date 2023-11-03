import { FiMoreVertical } from "react-icons/fi";

const EmployeeCard = ({image, fullName, email,teamName,gender, designation}) => {
  const respnsive={minWidth: '15rem',
    maxWidth: '20rem',
    boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" ,
    flex: '1 1'
}
  return (
    <div className="card m-2 border-0" style={respnsive}>
      <div className="card-header border-0" style={{background:"transparent"}}>
        <FiMoreVertical className="float-end"/></div>
      <figure className="d-flex justify-content-center">
        <img className="rounded-5" src={image}/>
      </figure>
      <div className="card-body text-center">
          <span className="card-title fw-semibold">{fullName}</span>
          <p className="fw-semibold text-muted">{gender}</p>
          <p className="card-subtitle ">{teamName}</p>
          <a href="#" className="card-link text-uppercase fw-normal text-decoration-none">{designation}</a>
      </div>
    </div>
  )
}

export default EmployeeCard
