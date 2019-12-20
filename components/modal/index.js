import React, {Component} from "react";
import "./style.css";
import PropTypes from "prop-types";

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentStep: (this.props.currentStep) ? this.props.currentStep : 1,
        };

        this.previousAction = this.previousAction.bind(this);
        this.nextAction = this.nextAction.bind(this);
    }

    close = e => {
        this.props.close && this.props.close(e);
    };

    previousAction () {
        const {currentStep} = this.state;
        if(currentStep > 1) {
            this.setState({
                ...this.state,
                currentStep: currentStep-1
            })
        }
    }

    nextAction () {
        const {currentStep} = this.state;
        if(currentStep < this.props.content.length) {
            this.setState({
                ...this.state,
                currentStep: currentStep+1
            })
        }
    }

    render() {
        const contentLength = (this.props.content && this.props.content.length > 0) ? this.props.content.length : 0;
        if (!this.props.show) {
            return null;
        }
        return (
            <>
                {this.props.content.map((row, index) => {
                    const currentStepNumber = (index+1);
                    return (currentStepNumber === this.state.currentStep) ? (
                        <div className="modal" id="modal" key={`modal-steo-${index}`}>
                            <div className="modalHeader">
                                <h2>{row.title}</h2>

                                <h4>{currentStepNumber} / {contentLength}</h4>
                            </div>
                            <div className="content">
                                <p>{row.text}</p>
                                <br/>

                                {(row.img) ? (
                                    <img
                                        src={row.img}
                                        width={140}
                                    />
                                ) : null}

                                {(row.video) ? (
                                    <video
                                        src={row.video}
                                        autoPlay
                                        loop
                                        width={300}
                                    />
                                ) : null}

                            </div>
                            <div className="actions">
                                <div className="skip">
                                    <button className="toggle-button" onClick={this.close}>
                                        {this.props.skipText}
                                    </button>
                                </div>

                                <div className="otherOption">
                                    {(contentLength > 1 && currentStepNumber > 1) ? (
                                        <button className="toggle-button" onClick={this.previousAction}>
                                            {this.props.previousText}
                                        </button>
                                    ) : null}

                                    <button className="toggle-button" onClick={(this.state.currentStep === contentLength) ? this.close : this.nextAction}>
                                        {(this.state.currentStep === contentLength) ? this.props.finishText : this.props.nextText}
                                    </button>
                                </div>
                            </div>
                        </div>) : null;
                })}
            </>
        );
    }
}

Modal.propTypes = {
    content: PropTypes.array.isRequired,
    close: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default Modal;
