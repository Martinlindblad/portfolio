import React, { Component } from 'react';
import Socialmedia from "./socialmedia"
import axios from 'axios';
import '../scss/components/contact.scss';
import friendsPic from '../media/friends.png'

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.state = {
            contactInfo: [],
            socialmedia: [],
        };
    }

    async componentDidMount() {
        await this.getContact();
    }

    getContact = async () => {
        try {
            const resp = await axios.get('https://martinlindblad.com/profile');
            const contact = resp.data[0].contact;
            const socialmedia = resp.data[0].socialmedia;
            this.setState({
                contactInfo: contact,
                socialmedia: socialmedia
            });
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    render() {
        const contactInfoKeys = Object.entries(this.state.contactInfo).map(([key,value])=>{
            return (
                <p className={key}>{key}: {value}</p>
            );
          })
        return (
            <section id="contact">
                <div className="contact-background" style={{ backgroundImage: `url(${friendsPic})` }}>
                    <p>Made by: Allison Weibye</p>
                </div>
                <div className="contact-container f d-c j-c a-c">
                    <h1>Contact</h1>
                    <div className="contact f d-c j-s a-c ">
                        {contactInfoKeys}
                    </div>
                    <Socialmedia socialmedia={this.state.socialmedia} />
                </div>
            </section>
        )
    }
}