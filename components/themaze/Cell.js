import React from 'react';
import "./style.css";

const Cell = (props) => {
    const {
        x,
        y,
        isWall,
        playerPosition,
        isFinish,
        isStart,
    } = props;
    const cellStyle = isWall ? "cellUnavailable" : "cellAvailable";
    if(playerPosition && isFinish && typeof props.finishAction === "function") props.finishAction();
    return (
        <div
            id={`cell-${x}-${y}`}
            className={`${cellStyle} ${(playerPosition) ? "cellPlayerHere" : ""}`}
        />
    )

};

export default Cell
