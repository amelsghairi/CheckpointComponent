import React, { Component }  from 'react';



export function Title(props){
    if(props.small){
        return(
            <h6 style={props.style}>{props.children}</h6>
                )
    }else{
        return(
            <h1 style={props.style}>{props.children}</h1>
                )
    }
    
}

