import React from "react";
import Header from "./components/Header";
import StaffList from "./components/STAFFS/StaffList";
import StaffDetail from "./components/STAFFS/StaffDetail";
import Department from "./components/DEPARTMENTS/Department";
import Salary from "./components/Salary";
import Footer from "./components/Footer";
import "./App.css";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addStaff } from './redux/ActionCreators';

const mapStateToProps = state => {
  return {
    staffs: state.staffs
  };
}

const mapDispatchToProps = (dispatch) => ({
  addStaff: (name, doB, startDate, department, salaryScale, annualLeave, overTime) => 
  dispatch(addStaff(name, doB, startDate, department, salaryScale, annualLeave, overTime))
});

function App({staffs, departments}) {

  // const [staff, setStaff] = useState(staffs)
  // const [department] = useState(departments);

  // // -------------------Add Staff--------------------
  // const addStaff = (newStaff) => {
  //   let newStaffs = staff.concat([{
  //     ...newStaff,
  //     id: staff.length,
  //     image: '/assets/images/alberto.jpg',
  //     department: department.filter(x => x.id === newStaff.department)[0]
  //   }]);
  //   console.log(newStaffs)
  //   setStaff(newStaffs);
  // }

  //--------------Render detail staff----------------
  const renderDetailStaff = ({ match }) =>
    <StaffDetail
      staffs={staffs.filter((staffs) =>
        staffs.id === parseInt(match.params.id, 10))[0]}
        addStaff={addStaff}
    />

  return (
    <>
      <Header />
      <Switch>
        <Route exact path="/staffs" component={() => <StaffList staffs={staffs} addStaff={addStaff}/>} />
        <Route path="/staffs/:id" component={renderDetailStaff} />
        <Route path="/department" component={() => <Department departments={departments} />} />
        <Route path="/salary" component={() => <Salary salary={staffs} />} />
        <Redirect to="/staffs" />
      </Switch>
      <Footer />
    </>
  );
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));


