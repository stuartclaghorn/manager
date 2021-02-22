import React, { Component } from 'react';
import { connect } from 'react-redux';
import { ListView, View, Text } from 'react-native';
import { employeesFetch } from '../actions';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeesFetch();

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    this.DataSource = ds.CloneWithRows(this.props.employees);
  }

  componentWillReceiveProps(nextProps) {

  }

  render() {
    return (
      <View>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
        <Text> Employee List</Text>
      </View>
    );
  }
}

const mapStateToProps = () => ({ employees: this.state.employees });

export default connect(mapStateToProps, { employeesFetch })(EmployeeList);
