import React from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LandingPage (props) {

    const navigate = useNavigate();

    function logOut() {
        axios ({
            method : "POST",
            url: "http://127.0.0.1:5000/logout",
            
        })
        .then ((response) => {
            props.token()
            localStorage.removeItem('email')
            navigate("/login");
        }).catch((error) => {
          if (error.response && error.response.status === 401) {
            // Treat 401 as a successful logout
            props.token(); // Assuming you have a function to update the token state
            localStorage.removeItem('email');
            navigate("/login");
          } else {
            console.log(error.response);
            console.log(error.response.status);
            console.log(error.response.headers);
          }
        })
    }


    return (

        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    

                    
                    <button className="btn btn-outline-danger" type="submit" onClick={logOut}>Logout</button>

                </div>
            </div>

        </nav>
    )
}
export default LandingPage;