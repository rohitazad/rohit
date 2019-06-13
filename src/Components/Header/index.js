import React, {Component} from 'react';
import NavDropDown from './NavDropdown';
import { NavLink } from 'react-router-dom';


class HeaderIndex extends Component{
    constructor(props){
        super(props);
        this.state = {
            isToggleOn: false,
            mobileClass:false,
            childDataNav: [
                {
                    title:'action',
                    link:''
                },
                {
                    title:'action2',
                    link:''
                },
                {
                    title:'action3',
                    link:''
                }
            ]
        };
        this.showDropdown = this.showDropdown.bind(this);
        this.dropDownHide = this.dropDownHide.bind(this);
    }
    showDropdown(e) {
        e.preventDefault();
        this.setState(prevState => ({
          isToggleOn: !prevState.isToggleOn
        }));
      }
      dropDownHide(e){
        if(e && e.relatedTarget){
            e.relatedTarget.click();
          }
          this.setState({isToggleOn: false});
      }
      mobileHandle = (e)=>{
        
        this.setState(prevState => ({
            mobileClass: !prevState.mobileClass
        }));
      }

    render(){
        const classDropdownMenu = 'dropdown-menu' + (this.state.isToggleOn ? ' show' : '');
    
        return(
            <div>
                <nav className="navbar navbar-expand-lg navbar-light info-color">
                <NavLink className="navbar-brand" to="/">Logo Home</NavLink>
                    <button 
                        onClick={this.mobileHandle}
                        className="navbar-toggler" 
                        type="button" data-toggle="collapse" 
                        data-target="#navbarSupportedContent" 
                        aria-controls="navbarSupportedContent" 
                        aria-expanded="false" 
                        aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className={`collapse navbar-collapse ${this.state.mobileClass ? 'show': ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                        <NavLink to='/' activeClassName="active" exact={true} className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item">
                        <NavLink activeClassName="active" className="nav-link" to="/about-us">About</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" 
                            onClick={this.showDropdown} 
                            href="/" 
                            id="navbarDropdown" 
                            role="button" 
                            data-toggle="dropdown" 
                            aria-haspopup="true" 
                            aria-expanded="false"
                            onBlur={this.dropDownHide}
                            >
                            Dropdown
                        </a>
                        <NavDropDown classDropdownMenu={classDropdownMenu} linkData={this.state.childDataNav} />
                        </li>
                        <li className="nav-item">
                            <NavLink activeClassName="active" className="nav-link" to="/course-list">
                                Course
                            </NavLink>
                        </li>
                    </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default HeaderIndex;