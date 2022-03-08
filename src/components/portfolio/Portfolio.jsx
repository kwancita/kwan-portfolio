import React from 'react'
import './portfolio.css'
import P1 from "../../assets/dome.png"
import P2 from "../../assets/suite.png"
import P3 from "../../assets/IVM.png"

function Portfolio() {
    return (
        <section id="portfolio">
            <h5>My Works</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio_container">
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={P1} alt=""/>
                    </div>
                    <h3>DoMe List</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/kwancita/todo" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://domelist.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={P2} alt=""/>
                    </div>
                    <h3>Suite Finder</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/kwancita/suite" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://suitefinderp4.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
                    </div>
                </article>
                <article className='portfolio_item'>
                    <div className="portfolio_item-image">
                        <img src={P3} alt=""/>
                    </div>
                    <h3>IVM</h3>
                    <div className="portfolio_item-cta">
                        <a href="https://github.com/kwancita/invoice" className="btn" target="_blank" rel="noreferrer">Github</a>
                        <a href="https://okane101.herokuapp.com/" className="btn btn-primary" target="_blank" rel="noreferrer">Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
