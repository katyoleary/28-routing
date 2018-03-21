'use strict';

import './style.main.scss';

import React from 'react';
import ReactDom from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import LandingContainer from './components/landing-container';
import DashboardContainer from './components/dashboard-container';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      //what the hell goes here idk
    }

    this.getApp = this.getApp.bind(this);
  }

  getApp() {
    return {
      state: this.state,
      setState: this.setState.bind(this),
    }
  }

  componentDidUpdate() {
    console.log('__STATE__', this.state);
  }

  render() {
    return() //TODO return JSX layer later
  }
}
