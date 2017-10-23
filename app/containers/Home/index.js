/*
 *
 * Home
 *
 */

import React from 'react';
import Helmet from 'react-helmet';

import './style.css';
import './styleM.css';



export default class Home extends React.PureComponent {
  render() {
    return (
      <div className="container">
        <Helmet title="Home" meta={[ { name: 'description', content: 'Description of Home' }]}/>

        <div className="outLineDiv">
          <div className="leftSide">
            <div className="topLeft">
            </div>
            <div className="bottomLeft">
            </div>
          </div>
          <div className="rightSide">
            <div className="fullRight">
            <div className="sakuraTopLeft01"></div>
            <div className="sakuraTopLeft02"></div>
            <h1>bento<br/>bonanza</h1>
            </div>
          </div>

        </div>/* off outLineDiv */

      </div>/* off container */
    );
  }
}

Home.contextTypes = {
  router: React.PropTypes.object
};
