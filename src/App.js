import React, { Component } from 'react';

import Navbar from './components/Navbar'
import Main from './components/Main'
import { fetchVaccines } from './actions/vaccines'

import './App.scss';
import { connect } from 'react-redux';

class App extends Component {
  componentDidMount () {
    this.props.fetchVaccines()
  }

  render() {
    return (
      <div>
        <Navbar />
        <Main />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  fetchVaccines: () => fetchVaccines(dispatch)
})

export default connect(null, mapDispatchToProps)(App)