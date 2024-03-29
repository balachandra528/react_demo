import React from 'react';
import { Link } from 'react-router-dom'
 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                 <img src="http://test.needtoday.com/img/logon.png" class="img-responsive"/>
                    <ul className="right">
                        <li style={{background: "green", fontSize: 24}}><Link to="/">Shop</Link></li>
                        <li style={{background: "green", fontSize: 24}}><Link to="/cart">My cart</Link></li>
                        <li style={{background: "green", fontSize: 24}}><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;
