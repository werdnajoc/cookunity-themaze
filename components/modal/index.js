import React, {Component} from "react";
import "./style.css";
import PropTypes from "prop-types";

class Modal extends Component {
    close = e => {
        this.props.close && this.props.close(e);
    };

    render() {
        if (!this.props.show) {
            return null;
        }
        return (
            <div className="modal" id="modal">
                <h2>{this.props.title}</h2>
                <div className="content">



                </div>
                <div className="actions">
                    <div className="skip">
                        <button className="toggle-button" onClick={this.close}>
                            Skip
                        </button>
                    </div>

                    <div className="otherOption">
                        <button className="toggle-button" onClick={this.close}>
                            Previous
                        </button>

                        <button className="toggle-button" onClick={this.close}>
                            Next
                        </button>
                    </div>
                </div>
            </div>
        );
    }
}

Modal.propTypes = {
    close: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired
};

export default Modal;
