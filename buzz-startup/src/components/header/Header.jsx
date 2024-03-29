import React, { useContext, useEffect, useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './Header.css';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import headerImage from './../../images/startup-dashboard-profile-logo.png'
import { AuthContext } from '../../context/Auth.context';

function Header() {
    const router = useNavigate();

    const location = useLocation();
    const { id } = useParams();
    const isLoginPage = location.pathname === '/login';
    const isSignupPage = location.pathname === '/register';
    const isStartupPage = location.pathname === '/start-up-account';
    const isOverviewProfile = location.pathname === "/overview-profile";
    const isStartupMainDashboard = location.pathname === "/startup-main-form-dashboard";
    const isInvestorMainDashboard = location.pathname === "/investor-form-account";
    const isInvestorHomeDashboard = location.pathname === "/investor/home";
    const isInvestorAccountDashboard = location.pathname === "/investor/account";
    const isFullReport = location.pathname === "/full-report";
    const isInvestorVerificationComplete = location.pathname === "/investor-opportunity";
    const isInterestStartup = location.pathname === "/startup-interest";
    const isSingleInterestStartup = location.pathname.includes("/get-single-interest-startup-detail/");;
    const { state, dispatch } = useContext(AuthContext)
    const [expanded, setExpanded] = useState(false);

    const handleNavItemClick = (route) => {
        router(route)
        setExpanded(false); 
    };

    const handleLogoutNavItemClick = (route) => {
        router(route)
        dispatch({ type: 'LOGOUT' })
        setExpanded(false);
    }

    useEffect(() => {
        if (state?.user?._id) {
            router('/')
        }
    }, [state])


    if (isLoginPage || isFullReport || isSignupPage || isStartupPage || isOverviewProfile || isInvestorMainDashboard) {
        return null;
    }

    if (isInvestorHomeDashboard || isInvestorAccountDashboard || isInvestorVerificationComplete || isInterestStartup || isSingleInterestStartup) {
        return (
            <div id='navbar-header' >
                <Navbar expand="lg" fixed="top" className="bg-body-tertiary border-bottom-css-navbar p-0">
                    <Container>
                        <div className='navbar-heading-logo-color-1 navbar-logo-width' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last {isMenuOpen ? "show" : ""}'>
                            {/* <Navbar.Collapse id="basic-navbar-nav" className={isMenuOpen ? "show" : ""}> */}

                            <Nav className="navbar-nav right-investor-header-div">
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router("/investor-opportunity")}>Opportunities</Nav.Link>
                                {/* <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router("/investor/home")}>Opportunities</Nav.Link> */}
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router('/startup-interest')}>My Portfolio</Nav.Link>
                                <NavDropdown title={<img src={headerImage} className='hpid py-2' alt="Image" />} className='navbar-link-investor-menu-div i-mobile-view-size' id="basic-nav-dropdown">
                                    {/* <span className='nhid'><img className='pt-3 pb-3' src={headerImage} alt="" /></span> */}
                                    <NavDropdown.Item onClick={() => router('/investor/account')}>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleLogoutNavItemClick("/")}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

    if (isStartupMainDashboard) {
        return (
            <div id='navbar-header' >
                <Navbar expand="lg" fixed="top" className="bg-body-tertiary border-bottom-css-navbar p-0">
                    <Container>
                        <div className='navbar-heading-logo-color-1 navbar-logo-width' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last'>
                            <Nav className="navbar-nav right-investor-header-div startup-content-align">
                                {/* <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4' onClick={() => router("/overview-profile")}>Opportunities</Nav.Link>
                                <Nav.Link className='navbar-link-menu-div-investor-last i-mobile-view-size pt-4'>My Portfolio</Nav.Link> */}
                                <NavDropdown title={<img src={headerImage} className='shpid py-2' alt="Image" />} className='navbar-link-investor-menu-div i-mobile-view-size' id="basic-nav-dropdown">
                                    {/* <span className='nhid'><img className='pt-3 pb-3' src={headerImage} alt="" /></span> */}
                                    <NavDropdown.Item onClick={() => router('/overview-profile')}>My Profile</NavDropdown.Item>
                                    <NavDropdown.Item onClick={() => handleLogoutNavItemClick("/")}>Logout</NavDropdown.Item>
                                </NavDropdown>
                            </Nav>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
        )
    }

    return (
        <div id='navbar-header' >
            <Navbar expanded={expanded} expand="lg" fixed="top" className="bg-body-tertiary header-navbar-main-padding">
                <Container>
                    <div className='navbar-heading-logo-color' ><p className='mb-0 logo-cursor' onClick={() => router("/")}>BuzzStartups</p></div>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(!expanded)} />
                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div'>
                        <Nav className="me-auto navbar-menu-div" >
                            <Nav.Link className='navbar-link-menu-div' onClick={() => { handleNavItemClick("/startup-page") }}>Startups</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => { handleNavItemClick("/investor-page") }}>Investors</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => { handleNavItemClick("/about-us") }}>About Us</Nav.Link>
                            <Nav.Link className='navbar-link-menu-div' onClick={() => { handleNavItemClick("/contact-us") }}>Contact Us</Nav.Link>
                            {/* <Nav.Link className='navbar-link-menu-div'>Explore</Nav.Link> */}
                            <NavDropdown title="Explore" className='navbar-link-menu-div' id="basic-nav-dropdown">
                                {state?.user?.Email && <NavDropdown.Item onClick={() => handleNavItemClick("/my-innovation")}>MyInnovation</NavDropdown.Item>}
                                {/* <NavDropdown.Item onClick={() => handleNavItemClick("/my-innovation")}>MyInnovation</NavDropdown.Item> */}
                                <NavDropdown.Item onClick={() => handleNavItemClick("/portfolio")}>Portfolio</NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleNavItemClick("/pitch-deck")}>
                                    Pitch Deck
                                </NavDropdown.Item>
                                <NavDropdown.Item onClick={() => handleNavItemClick("/financial-modelling")}>Financial Modelling</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                    </Navbar.Collapse>

                    <Navbar.Collapse id="basic-navbar-nav" className='navbar-menu-main-div-last'>
                        <Nav className="me-auto navbar-menu-div">
                            {state?.user?.Email ? <Nav.Link className='navbar-link-menu-div-last' onClick={() => handleLogoutNavItemClick("/")}>Logout</Nav.Link> :
                                <Nav.Link className='navbar-link-menu-div-last' onClick={() => handleNavItemClick("/login")}>Login</Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header
