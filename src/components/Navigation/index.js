import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import './navigation.css';

export const NavigationBar = ({ history, user }) => (
  <div className='container-fluid'>
    <Navbar className='navigation_container' collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Navbar.Brand style={{cursor: 'pointer'}} onClick={() => history.push('/')}>ReactPuppies</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {!user.authUser ? (
            <Nav.Link onClick={() => history.push('/login')}>Login</Nav.Link>
          ) : (
            <span>{user.authUser.fullName}</span>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </div>
)

const mapStateToProps = ({ user }) => ({
  user
})

export default withRouter(connect(mapStateToProps, null)(NavigationBar));