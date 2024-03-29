import React, { useContext, useState } from 'react';
import "./StartupMainDashboard.css"
import profileImage from "./../../images/startup-dashboard-profile-logo.png"
import { StartupDashboardContext } from '../../context/StartupDashboard.context';
import Basic from './startup-sub-component/Basic';
import Pitch from './startup-sub-component/Pitch';
import { Nav } from 'react-bootstrap';
import Funding from './startup-sub-component/Funding';
import Team from './startup-sub-component/Team';
import RelationShip from './startup-sub-component/RelationShip';
import Documents from './startup-sub-component/Documents';
import { useNavigate } from 'react-router-dom';
import ReportStartup from './startup-sub-component/ReportStartup';

const StartupMainDashboard = () => {

    const { setBasicStartup, setPitchStartup, setFundingStartup, setTeamStartup, setDocumentStartup,setReportStartup, setRelationShip } = useContext(StartupDashboardContext);
    const router = useNavigate()

    const [toggleMenu, setToggleMenu] = useState(false);
    // const [backButton, setBackButton] = useState(false);

    const basicFunction = () => {

        setToggleMenu(true)

        setPitchStartup(false)
        setBasicStartup(true)
        setFundingStartup(false)
        setTeamStartup(false)
        setDocumentStartup(false)
        setReportStartup(false)
        setRelationShip(false)
    }

    const pitchFunction = () => {
        setToggleMenu(true)
        setPitchStartup(true)
        setBasicStartup(false)
        setFundingStartup(false)
        setTeamStartup(false)
        setDocumentStartup(false)
        setReportStartup(false)
        setRelationShip(false)
    }

    const fundingFunction = () => {
        setToggleMenu(true)
        setPitchStartup(false)
        setBasicStartup(false)
        setFundingStartup(true)
        setTeamStartup(false)
        setDocumentStartup(false)
        setReportStartup(false)
        setRelationShip(false)
    }

    const teamFunction = () => {
        setToggleMenu(true)
        setPitchStartup(false)
        setBasicStartup(false)
        setFundingStartup(false)
        setTeamStartup(true)
        setDocumentStartup(false)
        setReportStartup(false)
        setRelationShip(false)
    }

    const documentFunction = () => {
        setToggleMenu(true)
        setPitchStartup(false)
        setBasicStartup(false)
        setFundingStartup(false)
        setTeamStartup(false)
        setDocumentStartup(true)
        setReportStartup(false)
        setRelationShip(false)
    }

    const reportFunction = () => {
        setToggleMenu(true)
        setPitchStartup(false)
        setBasicStartup(false)
        setFundingStartup(false)
        setTeamStartup(false)
        setDocumentStartup(false)
        setReportStartup(true)
        setRelationShip(false)
    }

    const relationFunction = () => {
        setToggleMenu(true)
        setPitchStartup(false)
        setBasicStartup(false)
        setFundingStartup(false)
        setTeamStartup(false)
        setDocumentStartup(false)
        setReportStartup(false)
        setRelationShip(true)
    }

    return (
        <div className='startup-main-dashboard-body-div'>
            <div className='startup-main-heading-div-form'>
                <div className='back-button-css-temp'>
                    <h3 className='ps-5' onClick={() => router(-1)}>&larr;</h3>
                </div>
                <div className='back-button-css-temp-mobile'>
                    <h3 onClick={() => setToggleMenu(false)}>&larr; </h3>
                </div>
            </div>
            <div className='startup-dashboard-inside-shadow-div'>
                <div className='web-view-startup-dashboard'>
                    <div className='startup-dashboard-profile-form-div'>
                        <div>
                            <img src={profileImage} alt="" />
                        </div>
                        <div>
                            <h4 className='mb-0 pt-3'>Nikhil</h4>
                            <p className='mb-0'>user since Mar 2017</p>
                        </div>
                    </div>
                    <div className='startup-side-nav-component-content-div '>
                        <Nav className='startup-side-nav' variant="pills" defaultActiveKey="link-1">
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={basicFunction} className='startup-navbar-color py-2' eventKey="link-1">Basic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={pitchFunction} className='startup-navbar-color py-2' eventKey="link-2">Pitch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={fundingFunction} className='startup-navbar-color py-2' eventKey="link-3">Funding</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={teamFunction} className='startup-navbar-color py-2' eventKey="link-4">Teams</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={documentFunction} className='startup-navbar-color py-2' eventKey="link-5">Documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={reportFunction} className='startup-navbar-color py-2' eventKey="link-6">Report History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={relationFunction} className='startup-navbar-color py-2' eventKey="link-7">Relationship Manager</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div>
                            <Basic />
                            <Pitch />
                            <Funding />
                            <Team />
                            <Documents />
                            <ReportStartup />
                            <RelationShip />
                        </div>
                    </div>
                </div>

                <div className='mobile-view-startup-dashboard'>
                    <div className='startup-dashboard-profile-form-div'>
                        <div>
                            <img src={profileImage} alt="" />
                        </div>
                        <div>
                            <h4 className='mb-0 pt-3 '>Nikhil</h4>
                            <p className='mb-0 '>user since Mar 2017</p>
                        </div>
                    </div>
                    <div className='startup-side-nav-component-content-div'>
                        {!toggleMenu && <Nav className='startup-side-nav' variant="pills" defaultActiveKey="link-1">
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={basicFunction} className='startup-navbar-color py-2' eventKey="link-1">Basic</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={pitchFunction} className='startup-navbar-color py-2' eventKey="link-2">Pitch</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={fundingFunction} className='startup-navbar-color py-2' eventKey="link-3">Funding</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={teamFunction} className='startup-navbar-color py-2' eventKey="link-4">Teams</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={documentFunction} className='startup-navbar-color py-2' eventKey="link-5">Documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={reportFunction} className='startup-navbar-color py-2' eventKey="link-6">Report History</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={relationFunction} className='startup-navbar-color py-2' eventKey="link-7">Relationship Manager</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        }
                        {toggleMenu && <div>
                            <Basic />
                            <Pitch />
                            <Funding />
                            <Team />
                            <Documents />
                            <ReportStartup />
                            <RelationShip />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StartupMainDashboard