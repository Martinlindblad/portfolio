import React, { Component } from 'react';
import '../scss/components/socialmedia.scss';

export default class Socialmedia extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.socialmedia)
        const lol = this.props.socialmedia.map((media, i) => {
            return <p key={i}>{media}</p>
         })
         console.log(lol)
    }
    render() {
        const socialmediaKeys = Object.entries(this.props.socialmedia).map(([key,value])=>{
            return (
                <a className={key} href={value.toString()}><p>{key}</p></a>
            );
          })
        return (
            <section className="socialmedia-container f d-r j-c">
                {socialmediaKeys}
            </section>
        )
    }
}