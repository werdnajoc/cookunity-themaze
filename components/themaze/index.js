import React, {Component, Fragment as Frag} from 'react';
import KeyHandler from 'react-key-handler';
import Cell from "./Cell";
import {resolveWithDijkstra, getNodesInShortestPathOrder} from "./helper";
import "./style.css";

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widthSize: (this.props.widthSize) ? this.props.widthSize : 12,
            heightSize: (this.props.heightSize) ? this.props.heightSize : 12,
            boardConfig: this.props.boardConfig || [],
            playerPosition: this.props.playerDefaultState,
            previousPlayerPos: {
                x: 0,
                y: 0
            },
            totalMoves: 0,
            player: 'X',
        };

        this.handleKeyUp = this.handleKeyUp.bind(this);
        this.handleKeyDown = this.handleKeyDown.bind(this);
        this.handleKeyRight = this.handleKeyRight.bind(this);
        this.handleKeyLeft = this.handleKeyLeft.bind(this);
    }

    countTotalMoves() {
        this.setState({
            totalMoves: ++this.state.totalMoves
        })
    }

    handleKeyUp(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
        } = this.state;

        const newPositionX = Number(playerPosition.x) - 1;
        const currentPositionY = playerPosition.y;
        const isWallNextPosition = (newPositionX > 0 ) ? boardConfig[newPositionX][currentPositionY].isWall : boardConfig[0][currentPositionY].isWall;
        if (newPositionX >= 0 && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: newPositionX,
                    y: currentPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves,
            })
        }
    }

    handleKeyDown(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
            heightSize,
        } = this.state;

        const newPositionX = playerPosition.x + 1;
        const currentPositionY = playerPosition.y;
        const isWallNextPosition = boardConfig[newPositionX][currentPositionY].isWall;
        if (newPositionX < heightSize && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: newPositionX,
                    y: currentPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    handleKeyRight(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
            widthSize,
        } = this.state;

        const newPositionY = Number(playerPosition.y) + 1;
        const currentPositionX = playerPosition.x;
        const isWallNextPosition = (newPositionY < widthSize) ? boardConfig[currentPositionX][newPositionY].isWall : true;
        if (newPositionY < widthSize  && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: currentPositionX,
                    y: newPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    handleKeyLeft(e) {
        e.preventDefault();
        const {
            playerPosition,
            boardConfig,
        } = this.state;

        const newPositionY = Number(playerPosition.y) - 1;
        const currentPositionX = playerPosition.x;
        const isWallNextPosition = (newPositionY > 0) ? boardConfig[currentPositionX][newPositionY].isWall : true;
        if (newPositionY > 0 && !isWallNextPosition) {
            this.setState({
                ...this.state,
                playerPosition: {
                    x: currentPositionX,
                    y: newPositionY,
                },
                previousPlayerPos: {
                    x: playerPosition.x,
                    y: playerPosition.y,
                },
                totalMoves: ++this.state.totalMoves
            })
        }
    }

    visualizeSolution() {
        const {
            startNode,
            finishNode,
        } = this.props;

        const {
            boardConfig
        } = this.state;

        this.setState({
            ...this.state,
            ...this.props.playerDefaultState,
        });

        resolveWithDijkstra(boardConfig, startNode, finishNode);
        const nodesInShortestPathOrder = getNodesInShortestPathOrder(finishNode);
        this.animatePath(nodesInShortestPathOrder);
    }

    animatePath(nodesInShortestPathOrder) {
        const speedAnimationResolve = (this.props.speedAnimationResolve) ? this.props.speedAnimationResolve : 100;
        for (let i = 0; i < nodesInShortestPathOrder.length; i++) {
            setTimeout(() => {
                const node = nodesInShortestPathOrder[i];
                let cellObject = document.getElementById(`cell-${node.x}-${node.y}`);

                if(i > 0) {
                    const previousNode = nodesInShortestPathOrder[i-1];
                    let previousCellObject = document.getElementById(`cell-${previousNode.x}-${previousNode.y}`);
                    const classesOutPlayerClass = previousCellObject.className.replace('cellPlayerHere', '');
                    previousCellObject.className = `${classesOutPlayerClass} node-shortest-path`;
                }

                if(i === 0) {
                    cellObject.className = `${cellObject.className} node-shortest-path cellPlayerHere`;
                } else {
                    const classesOutPlayerClass = cellObject.className.replace('cellPlayerHere', '');
                    cellObject.className = `${classesOutPlayerClass} node-shortest-path`;
                }
            }, speedAnimationResolve * i);
        }
    }

    render() {
        return (
            <div className="board">
                <button id="resolveMaze" className="hidden" onClick={() => {this.visualizeSolution()}}>Show Path</button>
                <KeyHandler keyValue="ArrowUp" onKeyHandle={this.handleKeyUp} />

                <KeyHandler keyValue="ArrowDown" onKeyHandle={this.handleKeyDown} />

                <KeyHandler keyValue="ArrowRight" onKeyHandle={this.handleKeyRight} />

                <KeyHandler keyValue="ArrowLeft" onKeyHandle={this.handleKeyLeft} />

                <div className="gameTopBar">
                    <div className="gameTopItemLeft">CookUnity</div>
                    <div className="gameTopItemRight">Moves: {this.state.totalMoves}</div>
                </div>
                <div className="cellsContainer">
                    {this.state.boardConfig.map((rowY, indexY) => (
                        <Frag key={`x-${indexY}`}>
                            {rowY.map((rowX, indexX ) => (
                                <Cell
                                    key={`y-${indexX}`}
                                    isWall={rowX.isWall}
                                    playerPosition={(indexY === this.state.playerPosition.x && indexX === this.state.playerPosition.y)}
                                    x={rowX.x}
                                    y={rowX.y}
                                    isFinish={rowX.isFinish}
                                    isStart={rowX.isStart}
                                    finishAction={()=> {
                                        alert("finish");
                                    }}
                                />
                            ))}
                        </Frag>
                    ))}
                </div>
            </div>
        );
    }
}

export default Board
