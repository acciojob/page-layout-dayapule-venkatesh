import React from "react";
export const Layout =(props)=>{
    return (
        <div>
            <h1>{props.header}</h1>
            <p>{props.children}</p>
            <p>{props.footer}</p>
        </div>
    )
}