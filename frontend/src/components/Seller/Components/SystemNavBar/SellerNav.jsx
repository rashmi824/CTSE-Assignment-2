// import Container from "react-bootstrap/Container";
// import Nav from "react-bootstrap/Nav";
// import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { useNavigate,Link } from "react-router-dom";
// import SellerImg from "../../../img/Seller/sellerImg.png";
// import "./SellerSystemNav.css";

// const SellerNav = () => {
//   const history = useNavigate();

//   function logout(){
//     localStorage.removeItem("systemInfo");

//   }
//   return (
//     <div className="mainNavContainer d-flex justify-content-end">
//       <Navbar className="subNavContainer" expand="lg">
//         <Container>
//           <Navbar.Brand href="#home">
//             <img
//               src={SellerImg}
//               alt="Seller-Avatar"
//               style={{ height: "40px", width: "40px" }}
//             ></img>
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="basic-navbar-nav" />
//           <Navbar.Collapse id="basic-navbar-nav">
//             <Nav className="me-auto">
//               {/* <Nav.Link href="#home">Home</Nav.Link> */}

//               <NavDropdown
//                 active
//                 title="Product Seller"
//                 id="basic-nav-dropdown"
//                 style={{ marginLeft: '0' }}
//               >
//                 <NavDropdown.Item href="#action/3.1">
//                   {" "}
//                   <Link
//                     to="/system/seller-profile"
//                     class="nav-link"
//                     aria-current="page"
//                   >
//                     <i
//                       style={{
//                         color: "#359733",
//                       }}
//                       class="bi bi-person-circle bi-2x"
//                     ></i>{" "}
//                     <span style={{ fontSize: "12x", color: "black" }}>
//                       Profile
//                     </span>
//                   </Link>
//                 </NavDropdown.Item>
//                 <NavDropdown.Item href="#action/3.2">
//                   <Link to="/system/auth" style={{ color: "#359733" }} class="nav-link" onclick={logout}>
//                     <i class="bi bi-box-arrow-right"></i>{" "}
//                     <span style={{ fontSize: "12px", color: "black" }} >
//                       Log Out
//                     </span>
//                   </Link>
//                 </NavDropdown.Item>
//               </NavDropdown>
//             </Nav>
//           </Navbar.Collapse>
//         </Container>
//       </Navbar>
//     </div>
//   );
// };
// export default SellerNav;
import React from "react";
import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import "./SystemNav.css";

const SellerNav = () => {
  function logout() {
    localStorage.removeItem("systemInfo");
  }

  return (
    <Navbar
      className="top-header"
      style={{ backgroundColor: "#ffffff" }}
      expand="lg"
    >
      <Container>
        <Form className="d-flex mr-auto">
          <FormControl type="text" placeholder="Search" />
        </Form>
        <Nav className="d-flex align-items-center">
          <NavDropdown title="System Seller" id="basic-nav-dropdown">
            <NavDropdown.Item>
              <Link
                to="/system/seller-profile"
                className="nav-link"
                aria-current="page"
              >
                <i
                  style={{ color: "#359733" }}
                  className="bi bi-person-circle bi-2x"
                ></i>{" "}
                <span style={{ fontSize: "12px", color: "black" }}>
                  Profile
                </span>
              </Link>
            </NavDropdown.Item>
            <NavDropdown.Item>
              <Link
                to="/system/auth"
                style={{ color: "#359733" }}
                className="nav-link"
                onClick={logout}
              >
                <i className="bi bi-box-arrow-right"></i>{" "}
                <span style={{ fontSize: "12px", color: "black" }}>
                  Log Out
                </span>
              </Link>
            </NavDropdown.Item>
          </NavDropdown>

        </Nav>
      </Container>
    </Navbar>
  );
};

export default SellerNav;
