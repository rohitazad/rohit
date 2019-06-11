import React, { Component, Fragment } from "react";
import RoutesComponent from './Routes';


export default class AppRootComponent extends Component{
    render(){
        return(
            <Fragment>
                <RoutesComponent />
            </Fragment>
        )
    }
}