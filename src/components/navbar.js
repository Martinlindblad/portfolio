import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import "../scss/components/navbar.scss"
import Logo from "./logo"

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pages: [
                {
                    url: "/profile"
                },
                {
                    url: "/experience"
                },
                {
                    url: "/japan"
                }
            ],
            active: 0,
        }
    }
    handleNext = async () => {

        var arr = this.state.pages.length;
        var idx = this.state.active;

        if (idx === arr - 1) {
            idx = 0;
        } else {
            idx = idx + 1;
        }

        await this.setState({
            active: idx,
        });
        this.go();
    }

    handlePrev = async () => {
        var arr = this.state.pages.length;
        var idx = this.state.active;

        if (idx === 0) {
            idx = idx + arr - 1;
        } else {
            idx = idx - 1;
        }

        await this.setState({
            active: idx,
        });
        this.go();
    }

    resetActive = () => {
        this.setState({
            active: 0,
        });
    }

    go() {
        var index = this.state.active;
        this.props.history.push(this.state.pages[index].url)
    }

    render() {
        return (
            <nav className="f d-c j-sa a-c">
                <Link to='/contact' className="navbar-link navbar-link-up" onClick={this.resetActive}>Come in contact</Link>
                <div className="navbar-center f j-sb d-c a-c">

                    <div className="arrow arrow--right">
                        <span onClick={this.handleNext}>Next</span>
                    </div>
                    <Link to='/profile' className="navbar-home" onClick={this.resetActive}><Logo /></Link>
                    <div className="arrow arrow--left">
                        <span onClick={this.handlePrev}>Prev</span>
                    </div>
                </div>
                <Link to='/project' className="navbar-link navbar-link-down" onClick={this.resetActive}>Check out my projects</Link>
            </nav>
        )
    }
}
export default withRouter(Navbar)