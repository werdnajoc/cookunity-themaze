import React, {Component} from 'react';
import axios from 'axios';
import TheMaze from "../../components/themaze";
import MainLayout from '../../layouts/main/Main';
import ModalComponent from '../../components/modal';

import boardConfig from "../../data/board";
import tutorialData from "../../data/tutorial";
import "./style.css";
import FinishLottie from "../../components/lotties/finish";

const playerDefaultState = {
    x: 0,
    y: 1
};

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showModal: true,
            finishMaze: false,
            finishMovements: 0,
        };

        this.showModal = this.showModal.bind(this);
        this.finishMaze = this.finishMaze.bind(this);
    }

    startResolveMaze () {
        document.getElementById("resolveMaze").click();
    }

    getNavTopOptions () {
        return  [
            {
                text: "Tutorial",
                onClick: () => {this.showModal()}
            },
            {
                text: "Someone help me",
                onClick: () => {this.startResolveMaze();}
            },
            {
                text: "github",
                href: "https://github.com/werdnajoc/cookunity-themaze.github.io"
            }
        ];
    }

    showModal(e) {
        this.setState({
            ...this.state,
            showModal: !this.state.showModal,
            currentStep: 1,
        });
    };

    finishMaze(finishMovements) {
        this.setState({
            ...this.state,
            finishMaze: true,
            finishMovements
        });

        axios.post("http://www.mocky.io/v2/5df38f523100006d00b58560", {finishMovements})
            .then( () => {
                setTimeout(() => {
                    this.setState({
                        ...this.state,
                        finishMaze: false,
                        finishMovements: 0
                    });
                }, 3000)
            })
    }


    render() {
        return (
            <MainLayout
                navTopOptions={this.getNavTopOptions()}
                title="Cookunity maze"
            >
                {(this.state.finishMaze) ? (
                    <FinishLottie />
                ) : (
                    <div className="theMazeContainer" >
                        <TheMaze
                            startNode={boardConfig[0][1]}
                            finishNode={boardConfig[10][11]}
                            boardConfig={boardConfig}
                            playerDefaultState={playerDefaultState}
                            speedAnimationResolve={this.state.speedAnimationResolve}
                            finishAction={this.finishMaze}
                        />

                        <ModalComponent
                            close={this.showModal}
                            show={this.state.showModal}
                            title="Welcome to Cookunity maze"
                            content={tutorialData}
                            finishText="Finish"
                            nextText="Next"
                            previousText="Previous"
                            skipText="Skip"
                        />
                    </div>
                )}
            </MainLayout>
        );
    }
}

export default Home
