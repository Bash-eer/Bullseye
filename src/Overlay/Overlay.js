import React from "react";
import "./Overlay.css";

export function overlay({isopen,onclose,children}){
    return(
        <>
        {isopen?(
            <div className="overlay">
                <div className="overlay-background" onClick={onclose} />
                <div className="overlay-container" >
                    <div className="overlay-controls">
                        <button className="overlay-close" type="button" onClick={onclose} />
                    </div>
                    {children}
                </div>
            </div>
        ):null
    }
        </>
    );
}