import React, { Component } from 'react';
import Sidebar from '../SideBar/Sidebar';
import Content from './Content';

class Dashboard extends Component {
  constructor() {
    super();
    this.state = {
      activeSection: null,
    };
  }

  handleSectionClick = (section) => {
    this.setState({ activeSection: section });
  };

  render() {
    return (
      <div className="dashboard">
        <Sidebar onSectionClick={this.handleSectionClick} />
        <Content activeSection={this.state.activeSection} />
      </div>
    );
  }
}

export default Dashboard;
