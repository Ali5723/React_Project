import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class SocialMedia extends Component {

    state = {
        social : []
    }

    componentDidMount () {
        axios.get("js/data.json").then(res => { this.setState({
            social : res.data.social
        }) })
    }

    render() {

        const {social} = this.state;
        const socialMedia = social.map( ( socialItem ) => {return(
            <div className={socialItem.kind} key={socialItem.id}>
                <i className={socialItem.icon}></i>
                <p>
                    <span className="info1">{socialItem.title}</span>
                    <span className="info2">{socialItem.body}</span>
                </p>
            </div>
        )})

        return (
            <div>
                <div className="social-media">
                    {socialMedia}
                </div>
            </div>
        );
    }
}

export default SocialMedia;