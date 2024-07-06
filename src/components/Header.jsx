import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOutAPI } from '../redux/actions';
import NotificationModal from "./NotificationModal"; // Import the NotificationModal component

const Header = (props) => {
  const [activeItem, setActiveItem] = useState('home');
  const [showNotificationModal, setShowNotificationModal] = useState(false); // State to manage modal visibility

  const handleItemClick = (item) => {
    setActiveItem(item);
  };

  const handleNotificationClick = () => {
    setShowNotificationModal(true);
  };

  const handleCloseNotificationModal = () => {
    setShowNotificationModal(false);
  };

  return (
    <Container>
      <Content>
        <Logo>
          <NavLink to="/home">
            <img src="/images/home-logo.png" alt="Home" />
          </NavLink>
        </Logo>
        <Search>
          <div>
            <input type="text" placeholder="Search" />
            <SearchIcon>
              <img src="/images/search-icon.svg" alt="Search" />
            </SearchIcon>
          </div>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList>
              <NavLink
                to="/home"
                onClick={() => handleItemClick('home')}
                activeClassName="active"
              >
                <img src="/images/nav-home.svg" alt="Home" />
                <span>Home</span>
              </NavLink>
            </NavList>
            <NavList className="no-line">
              <NavLink
                to="/jobs"
                onClick={() => handleItemClick('jobs')}
                activeClassName="active"
              >
                <img src="/images/nav-jobs.svg" alt="Jobs" />
                <span>Jobs</span>
              </NavLink>
            </NavList>
            <NavList className="no-line">
              <NavLink
                to="/messaging"
                onClick={() => handleItemClick('messaging')}
                activeClassName="active"
              >
                <img src="/images/nav-messaging.svg" alt="Messaging" />
                <span>Messaging</span>
              </NavLink>
            </NavList>
            <NavList className="no-line">
              <NavLink
                to="#"
                onClick={() => handleNotificationClick()}
                activeClassName="active"
              >
                <img src="/images/nav-notifications.svg" alt="Notifications" />
                <span>Notifications</span>
              </NavLink>
            </NavList>
            <User className="no-line">
              <NavLink to="#">
                {props.user && props.user.photoURL ? (
                  <img src={props.user.photoURL} alt="User" />
                ) : (
                  <img src="/images/user.svg" alt="User" />
                )}
                <span>
                  Me
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </NavLink>
              <SignOut onClick={() => props.signOut()}>
                <a>Sign Out</a>
              </SignOut>
            </User>
            <Work className="no-line">
              <NavLink to="#">
                <img src="/images/nav-work.svg" alt="Work" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="Dropdown" />
                </span>
              </NavLink>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
      <NotificationModal show={showNotificationModal} onClose={handleCloseNotificationModal} />
    </Container>
  );
};

const Container = styled.div`
  background-color: white;
  border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  left: 0;
  padding: 0 24px;
  position: fixed;
  top: 0;
  width: 100vw;
  z-index: 100;
  @media (max-width: 767px) {
    padding: 15px;
  }
`;

const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  min-height: 100%;
  max-width: 1128px;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;

  img {
    width: 44px;
    height: 44px;
    object-fit: contain;
  }

  a {
    text-decoration: none;
  }
`;

const Search = styled.div`
  opacity: 1;
  flex-grow: 1;
  position: relative;
  & > div {
    max-width: 280px;
    input {
      border: none;
      box-shadow: none;
      background-color: #eef3f8;
      border-radius: 2px;
      color: rgba(0, 0, 0, 0.9);
      width: 218px;
      padding: 0 8px 0 40px;
      line-height: 1.75;
      font-weight: 400;
      font-size: 14px;
      height: 34px;
      border-color: #dce6f1;
      vertical-align: text-top;
    }
  }
`;

const SearchIcon = styled.div`
  width: 40px;
  position: absolute;
  z-index: 1;
  top: 10px;
  left: 2px;
  border-radius: 0 2px 2px 0;
  margin: 0;
  pointer-events: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Nav = styled.nav`
  margin-left: auto;
  display: block;
  @media (max-width: 768px) {
    position: fixed;
    left: 0;
    bottom: 0;
    background: white;
    width: 100%;
  }
`;

const NavListWrap = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  list-style-type: none;
`;

const NavList = styled.li`
  display: flex;
  align-items: center;

  a {
    align-items: center;
    background: transparent;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    font-weight: 400;
    justify-content: center;
    line-height: 1.5;
    min-height: 52px;
    min-width: 80px;
    position: relative;
    text-decoration: none;

    span {
      color: rgba(0, 0, 0, 0.6);
      display: flex;
      align-items: center;
    }

    &.active {
      span {
        color: rgba(0, 0, 0, 0.9);
      }

      &:after {
        content: "";
        transform: scaleX(1);
        border-bottom: 2px solid rgba(0, 0, 0, 0.9);
        bottom: 0;
        left: 0;
        position: absolute;
        transition: transform 0.2s ease-in-out;
        width: 100%;
      }
    }

    &.no-line a.active:after {
      content: none; 
    }

    @media (max-width: 768px) {
      min-width: 70px;
    }
  }
`;

const SignOut = styled(NavList)`
  position: absolute;
  top: 45px;
  background: white;
  border-radius: 0 0 5px 5px;
  width: 100px;
  height: 40px;
  font-size: 16px;
  transition-duration: 167ms;
  text-align: center;
  display: none;
  cursor: pointer;
  @media (max-width: 767px) {
    position: absolute;
    top: -45px;
    right: 15px;
    background: #eee;
  }
`;

const User = styled(NavList)`
  a > svg {
    width: 24px;
    border-radius: 50%;
  }

  a > img {
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }

  span {
    display: flex;
    align-items: center;
  }

  &:hover {
    ${SignOut} {
      align-items: center;
      display: flex;
      justify-content: center;
    }
  }

  &.no-line a.active:after {
    content: none;
  }
`;

const Work = styled(User)`
  @media (max-width: 575px) {
    display: none;
  }

  &.no-line a.active:after {
    content: none;
  }
`;

const mapStateToProps = (state) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOutAPI()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
