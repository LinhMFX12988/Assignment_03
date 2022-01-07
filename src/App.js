import React, { useState } from "react";
import Header from "./components/Header";
import StaffList from "./components/StaffList";
import StaffDetail from "./components/StaffDetail";
import Department from "./components/Department";
import Salary from "./components/Salary";
import Footer from "./components/Footer";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments
  }
}
console.log('test', mapStateToProps)
function App() {
  const [staff, setStaff] = useState(staffs);
  const [department] = useState(departments);

  //-------------------Add Staff--------------------
  const addStaff = (newStaff) => {
    let newStaffs = staff.concat([{
      ...newStaff,
      id: staff.length + 1,
      image: '/assets/images/alberto.jpg',
      department: department.filter(x => x.id === newStaff.department)[0]
    }]);

    setStaff(newStaffs);
  }

  //--------------Render detail staff----------------
  const renderDetailStaff = ({ match }) =>
    <StaffDetail
      staffs={staff.filter((staffs) =>
        staffs.id === parseInt(match.params.id, 10))[0]}
    />

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/staffs" component={() => <StaffList staffs={staff} addStaff={addStaff} />} />
        <Route path="/staffs/:id" component={renderDetailStaff} />
        <Route path="/department" component={() => <Department departments={department} />} />
        <Route path="/salary" component={() => <Salary salary={staff} />} />
        <Redirect to="/staffs" />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(connect(mapStateToProps)(App));
