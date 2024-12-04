import React from "react";
import {Link, Outlet} from "react-router-dom";
 const Mainlayout = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link to="/CounterApp">CounterApp</Link>
                        
                    </li>
                    <li>
                    <Link to="/ImageApp">ImageApp</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
 }