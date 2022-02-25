import React, { useEffect, useState } from "react";

console.log("🐛")
function Neco(neco) {
    
    
    var Id2krat = neco.Id * 2;
    

    if (Id2krat >4) {
        return(
            <div className="grid grid-cols-3 mt-14">
                <div>{neco.Id}</div>
                <div>{neco.Title}</div>
            <div>{neco.Text}</div>
            </div>
        )
    }
    else
    {
        return(
            <div className="grid grid-cols-3">
                
                <div className=" m-10"><p>🚀{neco.Id} </p></div>
                <div className=" m-10">{neco.Title}</div>
            <div className=" m-10">{neco.Text}</div>
            </div>
        )
    }
    



}
export default Neco;
