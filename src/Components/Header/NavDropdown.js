import React, {Component} from 'react';
import { NavLink } from 'react-router-dom';


class NavDropDown extends Component{
    
    render(){
        return(
            <div className={this.props.classDropdownMenu} aria-labelledby="navbarDropdown">
                <NavLink  activeClassName="active" className="dropdown-item" to="/about-us">About</NavLink>
                <NavLink activeClassName="active"  className="dropdown-item" to="/contact-us">Contact</NavLink>
            </div>
        )
    }
}

export default NavDropDown;