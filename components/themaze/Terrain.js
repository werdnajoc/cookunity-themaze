import React, {Component, Fragment as Frag} from 'react';
import KeyHandler from 'react-key-handler';

import Cell from "./Cell";

const boardConfig = [
    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 1, 1, 1, 0, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 0],
    [0, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0, 1, 0, 1, 1, 1, 1, 0],
    [0, 1, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0],
    [0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0],
    [0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];

class Board extends Component {

    constructor(props) {
        super(props);

        this.state = {
            widthSize: (this.props.widthSize) ? this.props.widthSize : 12,
            heightSize: (this.props.heightSize) ? this.props.heightSize : 12,
            boardConfig,

            playerPosition: {
                x: 0,
                y: 1
            },
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
        const availableNextPosition = (newPositionX > 0 ) ? boardConfig[newPositionX][currentPositionY] : boardConfig[0][currentPositionY];
        if (newPositionX >= 0 && availableNextPosition) {
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
        e.preventDefault()
        const {
            playerPosition,
            boardConfig,
            heightSize,
        } = this.state;

        const newPositionX = playerPosition.x + 1;
        const currentPositionY = playerPosition.y;
        const availableNextPosition = boardConfig[newPositionX][currentPositionY];
        if (newPositionX < heightSize && availableNextPosition === 1) {
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
        e.preventDefault()
        const {
            playerPosition,
            boardConfig,
            widthSize,
        } = this.state;

        const newPositionY = Number(playerPosition.y) + 1;
        const currentPositionX = playerPosition.x;
        const availableNextPosition = boardConfig[currentPositionX][newPositionY];
        if (newPositionY < widthSize  && availableNextPosition) {
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
        e.preventDefault()
        const {
            playerPosition,
            boardConfig,
        } = this.state;

        const newPositionY = Number(playerPosition.y) - 1;
        const currentPositionX = playerPosition.x;
        const availableNextPosition = boardConfig[currentPositionX][newPositionY];
        if (newPositionY > 0 && availableNextPosition) {
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

    render() {
        return (
            <div className="terrain">
                <KeyHandler keyValue="ArrowUp" onKeyHandle={this.handleKeyUp} />

                <KeyHandler keyValue="ArrowDown" onKeyHandle={this.handleKeyDown} />

                <KeyHandler keyValue="ArrowRight" onKeyHandle={this.handleKeyRight} />

                <KeyHandler keyValue="ArrowLeft" onKeyHandle={this.handleKeyLeft} />


                <div className="gameTopBar">
                    <div className="gameTopItemLeft">CookUnity</div>
                    <div className="gameTopItemRight">Moves: {this.state.totalMoves}</div>
                </div>
                <div className="cellsContainer">
                    {boardConfig.map((horizontalBoardConfig, indexHorizontalBoardConfig) => (
                        <Frag key={`board-frag-${indexHorizontalBoardConfig}`}>
                            {horizontalBoardConfig.map((row, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    available={(row)}
                                    playerPosition={(indexHorizontalBoardConfig === this.state.playerPosition.x && index === this.state.playerPosition.y)}
                                />
                            ))}
                        </Frag>
                    ))}
                </div>

                <style jsx>{`
      .terrain {
        width: 480px;
        height: 480px;
      }
      
      .cellsContainer {
        display: flex;
        flex: 1;
        flex-direction: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      
      .gameTopBar {
        display: flex;
        flex: 1;
        flex: row;
        align-items: center;
        justify-content: space-around;
        flex-wrap: wrap;
      }
      
      .gameTopItemLeft {
        display: flex;
        flex: 1;
        flex: row;
        height: 20px;
        align-items: center;
        justify-content: flex-start;
        flex-wrap: wrap;
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
      
      .gameTopItemRight {
        display: flex;
        flex: 1;
        flex: row;
        height: 20px;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        font-weight: bold;
        font-size: 14px;
        color: #000;
      }
    `}</style>
            </div>
        );
    }
}

export default Board
