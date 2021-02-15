import React, { Component } from 'react';
import axios from 'axios';
import '../scss/components/profile.scss';
import profilePic from '../media/me.png'

export default class Profile extends Component {

    constructor(props) {
        super(props);
        this.state = { profileInfo: [] };
    }

    async componentDidMount() {
       await this.getProfile();
    }

    getProfile = async () => {
        try {
            const resp = await axios.get('https://mlindblad-portfolio.herokuapp.com/profile');
            this.setState({ profileInfo: resp.data });
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    render() {
        return (
            <section className="profile-container">
                <div className="front-img" style={{ backgroundImage: `url(${profilePic})` }}></div>
                {this.state.profileInfo.map((profiles, i) => {
                    return (
                        <div key={i}>
                            <div className="container-about f j-c d-c">
                            <h1 className="name">{`${profiles.info.firstname} ${profiles.info.lastname}`}</h1>
                                <h2>{profiles.about.title}</h2>
                                <div className="pitch f j-sb d-c a-c">
                                    <p>{profiles.about.pitch}</p>
                                    <p>{profiles.about.slogo + ' ' + profiles.contact.mail}</p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </section>
        )
    }
}