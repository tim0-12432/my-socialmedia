import { Component } from "react";
import { Parallax } from "react-parallax";
import './Circles.scss';

export default class Circles extends Component {
    render() {
        return (
            <Parallax renderLayer={ percentage => (
                <div className="circle_layer" style={{ height: `${this.props.height}vh` }}>
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                    <div className="circle" />
                </div>
            ) }>
                <div className="circle__container" />
            </Parallax>
        );
    }
}