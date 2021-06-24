import React, {FC} from 'react';
import { renderRoutes, RouteConfig } from "react-router-config";
import "./index.css"
type IProps = {
    
}

const UserLayout : FC<IProps & RouteConfig> = (props)=>{
    return (
        <div>
            <div className="app-header">userlayout</div>
            <div className="app-main">
                {renderRoutes(props.route.routes)}
            </div>
            
        </div>
        
    )
}
export default UserLayout