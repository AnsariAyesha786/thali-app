import React from 'react'

const Footer = () => {
  return (
    <div>
         <div>
    <footer className="bg-dark text-white pt-3  pb-2">
     <div className="container text-center text-md-left">
       <div className="row text-md-left text-md-left ">
         <div className="col-lg-4 ">
           {/* <h5 className="text-uppercase mb-2 font-weight-bold fs-2">
           FoodCorner</h5> */}
            <p style={{fontFamily:'cursive',fontSize:'45px'}} 
                    className="navbar-brand" >Food<span style={{color:'rgb(26, 201, 157)',
                fontSize:'45px',
                fontFamily:'cursive'}}>Corner</span></p>
          <p className="fs-4"><br/>
            Here you can enjoy lots of diffrent types  of Foods . 
            and diffrent types of combos and snacks.
         </p>
         <div className="icons">
           <i className="fab fa-facebook-f me-4"></i>
            <i className="fab fa-twitter me-4"></i>
            <i className="fab fa-instagram me-4"></i>
            <i className="fab fa-linkedin me-4"></i>
            <i className="fab fa-github me-4"></i>
        </div>
         </div>
         
       <div className="col-lg-4 mb-4">
        <h5 className="text-uppercase fw-bold mb-4">
          For you
        </h5>
        <p>Privecy</p>
        <p>Term</p>
        <p>Security</p>
        <p>Site-Map</p>
      </div>
      <div className="col-lg-4 mb-4">
        <h5 className="text-uppercase fw-bold mb-4">
          contact
        </h5>
        <p><i className="fas fa-home me-3"></i>Mumbai Near by Dadar Station 40045</p>
        <p>
          <i className="fas fa-envelope me-3"></i>
          info@example.com
        </p>
        <p><i className="fas fa-phone me-3"></i> 91-6753876987</p>
        <p><i className="fas fa-print me-3"></i> + 01 234 567 89</p>
      </div>
      <div className="text-center p-4 fs-4">
          2021© FoodCorner Copyright All Right Reserved
      </div>
     </div>
     </div>
    </footer>
    </div>
    </div>
  )
}

export default Footer