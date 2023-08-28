import React from 'react';
import "./InvestorPage.css";
import investorHeading from "./../../images/investor-meet.jpg"
import investorPitch from "./../../images/Investor Pitch.jpg";
import portfoliomanage from "./../../images/Portfolio Management.jpg";
import networking from "./../../images/Networking.jpg";

import { useSpring, animated } from 'react-spring';

const InvestorPage = () => {

    const NumberAnimation = ({ n }) => {
        const { number } = useSpring({
            from: { number: 0 },
            number: n,
            delay: 200,
            config: { mass: 1, tension: 20, friction: 10 }
        })
        return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
    }

    return (
        <div className='investor-page-body'>
            <div className="startop-page-inside-body">
                <div>
                    <h2>INVEST WITH US </h2>
                    <h3>INVESTMENT MADE EASY</h3>
                    <p>We at BuzzStartups, have a goal of making investment opportunities ubiquitous and accessible for all. Faad pushes the boundaries of the growth of start-ups by drawing intensive measures to overcome limitations and promote a healthy environment for Investment</p>
                    <button>Become an Investor &rarr;</button>
                </div>

                <div>
                    <img src={investorHeading} alt="" />
                </div>
            </div>

            <div className='home-number-animation-css'>
                <div className='home-inside-number-animation-css'>
                    <h1><NumberAnimation n={10}></NumberAnimation>+</h1>
                    <p><b>Portfolio Companies</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1><NumberAnimation n={100}></NumberAnimation>+</h1>
                    <p><b>Startup Pitched</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1><NumberAnimation n={1000}></NumberAnimation>+</h1>
                    <p><b>Startups Evaluated</b></p>
                </div>
                <div className='home-inside-number-animation-css'>
                    <h1>$<NumberAnimation n={20}></NumberAnimation>M+</h1>
                    <p><b>Funds Deployed</b></p>
                </div>
            </div>

            <div className="investor-up-description-main-div">
                <h2>WHAT WE SERVE</h2>
                <h3>We are the best Platform for Investors to Build a Super portfolio</h3>
            </div>

            <div className="only-the-best-first-div">
                <div>
                    <img src={investorPitch} alt="" />
                </div>
                <div>
                    <h2>PITCHING SESSIONS</h2>
                    <h3>Only the Best</h3>
                    <p><b>BuzzStartups' confined pitch sessions feature top startups, enabling investors to invest and distribute risk together through syndication.</b></p>
                </div>
            </div>

            <div className="only-the-best-second-div">
                <div>
                    <h2>PORTFOLIO MANAGEMENT</h2>
                    <h3>Only the Best</h3>
                    <p><b>BuzzStartups takes charge of overseeing investee company development, affording privileges like consistent updates, monthly MIS, networking within the business community, mentorship, and opportunities for future fundraising.</b></p>
                </div>
                <div>
                    <img src={portfoliomanage} alt="" />
                </div>
            </div>

            <div className="only-the-best-first-div">
                <div>
                    <img src={networking} alt="" />
                </div>
                <div>
                    <h2>NETWORKING </h2>
                    <h3>TRULY Top-Notch</h3>
                    <p><b>Best BuzzStartups takes charge of overseeing investee company development, affording privileges like consistent updates, monthly MIS, networking within the business community, mentorship, and opportunities for future fundraising.</b></p>
                </div>
            </div>


        </div>
    )
}

export default InvestorPage
