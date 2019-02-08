import React from 'react';
import {
  InputGroup,
  InputGroupButtonDropdown,
  Input,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class SearchAppointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false
    };
  }
  handleSort = (e) => {
    this.props.sort(e.target.id, this.props.orderDir);
  };

  handleOrder = (e) => {
    this.props.sort(this.props.orderBy, e.target.id);
  };

  handleSearch = (e) => {
    this.props.search(e.target.value);
  };

  toggleDropDown = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <InputGroup className="mb-3">
        <Input id="searchField" placeholder="Search appointments by patient name" type="text" className="form-control" onChange={this.handleSearch} />
        <InputGroupButtonDropdown addonType="append" isOpen={this.state.dropdownOpen} toggle={this.toggleDropDown}>
          <DropdownToggle caret color="primary">
            Sort by
            </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem onClick={this.handleSort} id="patientName">Name {(this.props.orderBy === 'patientName') ? <span className="fas fa-check"></span> : null}</DropdownItem>
            <DropdownItem onClick={this.handleSort} id="patientAge">Age {(this.props.orderBy === 'patientAge') ? <span className="fas fa-check"></span> : null}</DropdownItem>
            <DropdownItem onClick={this.handleSort} id="gender">Gender {(this.props.orderBy === 'gender') ? <span className="fas fa-check"></span> : null}</DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={this.handleOrder} id="asc">Ascending {(this.props.orderDir === 'asc') ? <span className="fas fa-check"></span> : null}</DropdownItem>
            <DropdownItem onClick={this.handleOrder} id="desc">Descending {(this.props.orderDir === 'dsc') ? <span className="fas fa-check"></span> : null}</DropdownItem>
          </DropdownMenu>
        </InputGroupButtonDropdown>
      </InputGroup>
    );
  }
}

export default SearchAppointments;
