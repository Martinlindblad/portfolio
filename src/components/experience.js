import React, { Component } from 'react';
import axios from 'axios';
import '../scss/components/exp.scss';
import cocacola from "../media/cocacola.jpg";
import solberga from '../media/solberga.jpg';
import gymnasium from '../media/gymnasium.jpg';
import komvux from '../media/komvux.jpg';
import nackademin from '../media/nackademin.jpg';
const media = [nackademin, cocacola, komvux, gymnasium, solberga]

export default class Experience extends Component {

    constructor(props) {
        super(props);
        this.state = { 
            expInfo: [] ,
        };
        
    }


    componentDidMount() {
        this.getExp();
    }
     
    getExp = async () => {
        try {
            const resp = await axios.get('https://mlindblad-portfolio.herokuapp.com/experience')
            this.setState({ expInfo: resp.data });
        } catch (err) {
            // Handle Error Here
            console.error(err);
        }
    };

    render() {
        return (
            <section className="exp-container">
                {this.state.expInfo.map((exp) => {
                    const cocacola = exp.work.cocacola;
                    const solberga = exp.work.solberga;
                    const nackademin = exp.school.nackademin;
                    const komvux = exp.school.komvux;
                    const gymnasium = exp.school.gymnasium;
                    const allExp = [nackademin, cocacola, komvux, gymnasium, solberga]
                    return (
                        <div key={exp} className="f j-c a-c d-r exp-info-container wrap">
                            {allExp.map((exps, i) => {
                                return (
                                    <div key={i} className={`exp-info f j-c d-c a-c`}>
                                        <div className="info-background" style={{ backgroundImage: `url(${media[i]})` }}></div>
                                        <h2>{exps.name}</h2>
                                        <p>{exps.duration}</p>
                                        <p className="info">{exps.info}</p>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
            </section>
        )
    }
}











// import React, { useEffect, useState } from "react"

// function Profile () {
//     const [profile, setProfile] = useState([{
//         prof: ''
//     }]);

//     useEffect(() => {
//         fetch("/profile").then(res => {
//             if(res.ok) {
//                 return res.json();
//             }
//         }).then(jsonRes => setProfile(jsonRes));
//     })

//     return <div>
//         <h1>{profile.prof}</h1>
//     </div>
// }

// export default Profile;