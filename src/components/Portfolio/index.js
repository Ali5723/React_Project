import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './style.css'


const Portfolio = () => {

    const [images, setImages] = useState([])

    useEffect ( () => {
        axios.get("js/data.json").then(res => { setImages(res.data.portfolio) })
    }, [] )

    const PortfolioImages = images.map( (imageItem) => {
        return (
            <div key={imageItem.id}>
                <img src={imageItem.image} alt=""/>
                <p className="overlay">
                    <span>
                        Show Image
                    </span>
                </p>
            </div>
        )
    } )

    return (
        <div>
            <div className="portfolio">
                <h2 className="portfolio-title"><span>My</span> Portfolio</h2>
                <ul className="portfolio-list">
                    <li className="portfolio-item active">All</li>
                    <li className="portfolio-item">HTML</li>
                    <li className="portfolio-item">Photoshop</li>
                    <li className="portfolio-item">Wordpress</li>
                    <li className="portfolio-item">Mobile</li>
                </ul>
                
                <div className="box">   
                    {PortfolioImages}
                </div>
                
            </div>
        </div>
    );
}

export default Portfolio;