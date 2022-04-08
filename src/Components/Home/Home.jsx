import { Link } from "react-router-dom"
import "./Home.css"

export const Home=()=>{

    return(
        <div>
            <div className="nav_div">
               <Link to="registration/one">Go to Registarion</Link>
               <Link to="/users">Go users to Page</Link>
            </div>
            <div className="home_div">
                  <h1>Welcome to Home Page</h1>   
            </div>
        </div>
    )
}