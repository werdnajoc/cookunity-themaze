import React from 'react'
import Lottie from 'react-lottie';
import * as animationData from './finish'

export default class LottieControl extends React.Component {

    constructor(props) {
        super(props);
        this.state = {isStopped: false, isPaused: false};
    }

    render() {
        const defaultOptions = {
            loop: true,
            autoplay: true,
            rendererSettings: {
                preserveAspectRatio: 'xMidYMid slice'
            },
            animationData: animationData.default
        };

        return <div>
            <Lottie options={defaultOptions}
                    height={400}
                    width={400}
                    isStopped={this.state.isStopped}
                    isPaused={this.state.isPaused}/>
        </div>
    }
}
