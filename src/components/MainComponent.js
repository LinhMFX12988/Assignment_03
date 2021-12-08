import React, { Component } from "react";
import Header from "./HeaderComponent";
import Nhanvien from "./NhanvienComponent";
import StaffDetail from "./StaffListComponent";
import PhongBan from "./PhongbanComponent";
import Bangluong from "./Bangluong";
import Footer from "./FooterComponent";
import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const mapStateToProps = state => {
  return {
    staffs: state.staffs,
    departments: state.departments,
    role: state.role
  }
}

class Main extends Component {
  // constructor(props) {
  //   super(props);

  // }

  render() {

    const StaffWithId = ({match}) =>
      <StaffDetail
        staffs={this.props.staffs.filter((staff) => 
        staff.id === parseInt(match.params.id, 10))[0]}
      />

    return (
      <div>
        <Header />       
        <Switch>
          <Route exact path="/nhanvien" component={() => <Nhanvien staffs={this.props.staffs} />} />
          <Route path="/nhanvien/:id" component={StaffWithId} />
          <Route path="/phongban" component={() => <PhongBan departments={this.props.departments} />} />
          <Route exact path="/bangluong" component={() => <Bangluong staffs={this.props.staffs} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
