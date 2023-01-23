import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {TabContent, TabPane, Nav, NavItem, NavLink} from "reactstrap";
import { useState } from 'react';



const AddNavBar =() => {

    return (
        <div >
            <Nav tabs>
            <NavItem>
                <NavLink 
                className={(activeTab=="1" ? "activeTab baseTab" : "baseTab" )}
                onClick={()=>cambiarTab("1")}>
                Parrafo Sencillo
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink 
                    className={(activeTab=="2" ? "activeTab baseTab" : "baseTab" )}
                onClick={()=>cambiarTab("2")}>
                Logo BorjaScript
                </NavLink>
            </NavItem>

            <NavItem>
                <NavLink 
                    className={(activeTab=="3" ? "activeTab baseTab" : "baseTab" )}
                onClick={()=>cambiarTab("3")}>
                Tabla Últimos Vídeos
                </NavLink>
            </NavItem>

            </Nav>
        </div>
    );
}
    
export {AddNavBar}