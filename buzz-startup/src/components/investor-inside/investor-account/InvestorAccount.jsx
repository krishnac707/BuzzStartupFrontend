import React, { useContext, useState } from 'react'
import profileImage from './../../../images/startup-dashboard-profile-logo.png';
import "./InvestorAccount.css";
import { Nav } from 'react-bootstrap';
import { InvesterAccountDashboardContext } from '../../../context/InvestorAccountDashboard.context';
import GeneralDetails from './general-details/GeneralDetails';
import InvestmentManager from './invest-manager/InvestmentManager';
import KycDocument from './kyc-document/KycDocument';
import { useNavigate } from 'react-router-dom';
const InvestorAccount = () => {

    const { setGeneralDetail, setKycDocument, setInvestmentManager } = useContext(InvesterAccountDashboardContext)
    const router = useNavigate()
    const [toggleMenu, setToggleMenu] = useState(false);


    const generalDetailFunction = () => {
        setToggleMenu(true)

        setGeneralDetail(true);
        setKycDocument(false);
        setInvestmentManager(false);
    }

    const kycDocFunction = () => {
        setToggleMenu(true)

        setGeneralDetail(false);
        setKycDocument(true);
        setInvestmentManager(false);
    }

    const investorManagerFunction = () => {
        setToggleMenu(true)

        setGeneralDetail(false);
        setKycDocument(false);
        setInvestmentManager(true);
    }


    return (
        <div className='investor-main-dashboard-body-div'>
            <div className='startup-main-heading-div-form'>
                <div className='back-button-css-temp'>
                    <h3 className='ps-5' onClick={() => router(-1)}>&larr;</h3>
                </div>
                <div className='back-button-css-temp-mobile'>
                    <h3 onClick={() => setToggleMenu(false)}>&larr; </h3>
                </div>
            </div>
            <div className='startup-dashboard-inside-shadow-div'>
                <div className='web-view-investor-dashboard'>
                    <div className='startup-dashboard-profile-form-div'>
                        <div>
                            <img src={profileImage} alt="" />
                        </div>
                        <div>
                            <h4 className='mb-0 pt-3'>Nikhil</h4>
                            <p className='mb-0'>user since Mar 2017</p>
                        </div>
                    </div>
                    <div className='startup-side-nav-component-content-div'>
                        <Nav className='startup-side-nav' variant="pills" defaultActiveKey="link-1">
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={generalDetailFunction} className='startup-navbar-color py-2' eventKey="link-1">General Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={kycDocFunction} className='startup-navbar-color py-2' eventKey="link-2">KYC Documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={investorManagerFunction} className='startup-navbar-color py-2' eventKey="link-3">Investment Manager</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <div>
                            <GeneralDetails />
                            <KycDocument />
                            <InvestmentManager />
                        </div>
                    </div>
                </div>
                <div className='mobile-view-investor-dashboard'>
                    <div className='startup-dashboard-profile-form-div'>
                        <div>
                            <img src={profileImage} alt="" />
                        </div>
                        <div>
                            <h4 className='mb-0 pt-3'>Nikhil</h4>
                            <p className='mb-0'>user since Mar 2017</p>
                        </div>
                    </div>
                    <div className='startup-side-nav-component-content-div'>
                        {!toggleMenu &&<Nav className='startup-side-nav' variant="pills" defaultActiveKey="link-1">
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={generalDetailFunction} className='startup-navbar-color py-2' eventKey="link-1">Generial Details</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={kycDocFunction} className='startup-navbar-color py-2' eventKey="link-2">KYC Documents</Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="basic-startup-form-div">
                                <Nav.Link onClick={investorManagerFunction} className='startup-navbar-color py-2' eventKey="link-3">Investment Manager</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        }
                        {toggleMenu && <div>
                            <GeneralDetails />
                            <KycDocument />
                            <InvestmentManager />
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InvestorAccount
