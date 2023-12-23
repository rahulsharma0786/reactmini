import{Link, Outlet} from "react-router-dom";

const Layout=()=>{
    return(
        <>
        <div id="topmainu">
    <ul>
        <li>
        <Link to="/" style={{color:"white"}}>Home</Link>
        </li>
        <li>
        <Link to="register" style={{color:"white"}}>Register</Link>
        </li>
        <li>
        <Link to="display" style={{color:"white"}}>Display</Link>
        </li>
        <li>
        <Link to="search" style={{color:"white"}}>Search</Link>
        </li>
        
        </ul>
       </div>
       
       <div id="middata">
       <Outlet/>
       </div>
    
        
        </>
    )
    
    }
    export default Layout
    
    
   
    
    





