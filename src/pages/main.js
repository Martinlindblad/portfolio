import React, { Component } from 'react';
import axios from 'axios';

export default class Front extends Component {

    constructor(props) {
        super(props);
        this.state = { profileInfo: [] };
    }

    componentDidMount() {
        axios.get('/profile')
            .then(res => {
                this.setState({ profileInfo: res.data });
                console.log(this.state.profileInfo)
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    render() {
        return (
            <div>
                <h1>Hello! Nagisa</h1>
            </div>
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