import React from 'react';
import { DropdownMenu, MenuItem } from 'react-bootstrap-dropdown-menu';
import { BrowserRouter as Router, Redirect, Link } from 'react-router-dom';
import UserNav from './userloginnav';

export class Review extends React.Component {
    constructor(props) {
      super(props);
     }

     render() {
        return (
          <div>
         <UserNav makeMeLoggedIn={this.props.makeMeLoggedIn}/>
          <div className="base-container">
          <div className="header">Social Analytics</div>
          <div className="header1">REVIEW</div>
          <div className="content">
          <div className="image">
            <img src={require('../../login.png')} />
            
          
          </div>
        </div>
        <div className="image">
        <img src="" alt="User Image" />
        </div>
        <DropdownMenu>
        <MenuItem text="HOME" location="/myProfile" />
        <MenuItem text="PROFILE" location="/profile" />
        <MenuItem text="REVIEW" location="/review" />
        <MenuItem text="FAQs" location="/faq" />
        <MenuItem text="LOGOUT" location="/" />
        <MenuItem text="DEVELOPERS" location="/developer" />
      </DropdownMenu>
      </div>
      </div>
       );
        }
    }   

export default Review;