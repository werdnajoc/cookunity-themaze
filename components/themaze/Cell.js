import React from 'react'

const Cell = (props) => {
    return (
        <div className={props.available ? "cellAvailable" : "cellUnavailable"}>
            {(props.playerPosition) ? (
                <div className="cellPlayerHere">X</div>
            ) : null}
            <style jsx>{`
      .cellAvailable {
        width: 37px;
        height: 35px;
        border: 1px solid #fff;
        margin-top: 1px;
      }
      
       .cellUnavailable {
        width: 37px;
        height: 35px;
        border: 1px solid #000;
        margin-top: 1px;
        background-color: #000;
      }
      
      .cellPlayerHere {
        width: 37px;
        height: 35px;
        display: flex;
        flex: 1;
        align-items: center;
        justify-content: center;
      }
      
    `}</style>
        </div>
    )

};

export default Cell
