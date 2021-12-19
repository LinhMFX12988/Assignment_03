import React, { Component } from "react";
import Header from "./HeaderComponent";
import Nhanvien from "./NhanvienComponent";
import StaffDetail from "./StaffListComponent";
import PhongBan from "./PhongbanComponent";
import Bangluong from "./Bangluong";
import Footer from "./FooterComponent";
import { STAFFS, ROLE, DEPARTMENTS } from "../shared/staffs";
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      departments: DEPARTMENTS,
      role: ROLE
    };
    this.addStaff = this.addStaff.bind(this)
  }

  //-----Add Staffs-----
  addStaff(newStaff, e) {
    let staffs1 = this.state.staffs;
    let newStaffs = staffs1.concat([{
      ...newStaff,
    }]);
    console.log('data: ',this.state.staffs.length)

    this.setState({
      staffs: newStaffs
    });
    // newStaff.preventDefault();
    e.preventDefault();

  }

  render() {
    const StaffWithId = ({ match }) =>
      <StaffDetail
        staffs={this.state.staffs.filter((staff) =>
          staff.id === parseInt(match.params.id, 10))[0]}
      />

    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/nhanvien" component={() => <Nhanvien staffs={this.state.staffs} addStaff={this.addStaff} />} />
          <Route path="/nhanvien/:id" component={StaffWithId} />
          <Route path="/phongban" component={() => <PhongBan departments={this.state.departments} />} />
          <Route path="/bangluong" component={() => <Bangluong staffs={this.state.staffs} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
