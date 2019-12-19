import React, {Component} from "react";
import "./style.css";

class NavTop extends Component {

    render() {
        return (
            <nav className="menuNavTop">
                <ul>
                    {this.props.options.map(function (element, index) {
                        const onClick = (typeof element.onClick === "function") ? element.onClick : null;
                        return (
                            <li key={`nav-option-${index}`}>
                                <a
                                    href={`${element.href ? element.href : '#'}`}
                                    target={`${element.href ? '_blank' : '_parent'}`}
                                    onClick={onClick}
                                >
                                    {element.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
}

export default NavTop;
