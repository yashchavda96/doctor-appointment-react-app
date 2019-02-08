import React, { Component } from 'react';
import _ from 'lodash';
import { Container } from 'reactstrap';
import NavBar from './components/NavBar';
import AddAppointments from './components/AddAppointments';
import SearchAppointments from './components/SearchAppointments';
import ListAppointments from './components/ListAppointments';
import Footer from './components/Footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      appointments: [],
      showAddBody: false,
      orderBy: 'patientName',
      orderDir: 'asc',
      searchText: '',
    };
  }

  componentDidMount() {
    fetch('./data.json')
      .then(res => res.json())
      .then(data => this.setState({
        appointments: data
      }))
      .catch(error => console.log('There has been a problem with fetching appointments.'))
  }

  saveAppointment = (newAppointment) => {
    let apts = this.state.appointments;
    apts.push(newAppointment);
    this.setState({
      appointments: apts
    });
  }
  deleteAppointment = (aptId) => {
    let apts = this.state.appointments;
    let aptToDelete = _.find(apts, _.matchesProperty('id', parseInt(aptId, 10)));
    const newApts = _.without(apts, aptToDelete)
    this.setState({
      appointments: newApts
    });
  }

  sort = (orderBy, orderDir) => {
    this.setState({
      orderBy: orderBy,
      orderDir: orderDir
    });
  }

  search = (query) => {
    this.setState({
      searchText: query
    });
  }

  render() {
    let filteredApts = [];
    let { orderBy, orderDir, searchText, appointments } = this.state;

    appointments.forEach((item) => {
      if (item.patientName.toLowerCase().indexOf(searchText) !== -1) {
        filteredApts.push(item);
      }
    });

    filteredApts = _.orderBy(filteredApts, orderBy, orderDir);


    return (
      <>
        <NavBar />
        <Container>
          <AddAppointments saveApt={this.saveAppointment} />
          <SearchAppointments sort={this.sort} search={this.search} orderBy={this.state.orderBy} orderDir={this.state.orderDir} />
          <ListAppointments appointments={filteredApts} onDelete={this.deleteAppointment} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default App;
