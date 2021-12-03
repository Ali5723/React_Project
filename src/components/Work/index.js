import React, { Component } from 'react'
import axios from 'axios'
import './style.css'

class Work extends Component {

    state = {
        works : []
    }

    componentDidMount () {
        axios.get("js/data.json").then(res => { this.setState({
            works : res.data.works
        }) })
    }

    render() {

        const {works} = this.state;
        const worksList = works.map( ( workItem ) => {return(
            <div className={workItem.status} key={workItem.id}>
                <i className={workItem.icon_name}></i>
                <h4 className="part-title">{workItem.title}</h4>
                <hr className="line"/>
                <p className="part-desc">{workItem.body}</p>
            </div>
        )})

        return (
            <div>
                <div className="work">
                    <div className="container">
                        <h2 className="work-title"><span>My</span> Work</h2>
                        {worksList}
                    </div>    
                </div>
            </div>
        );
    }
}

export default Work;