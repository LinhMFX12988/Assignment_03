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

  constructor(props) {
    super(props);

    this.state = {
      staffs: props.staffs
    }
    this.addStaff = this.addStaff.bind(this);
  }

//-----Add Staffs-----
  addStaff(newStaff) {
    let staffs1 = this.state.staffs;
    let newStaffs = staffs1.concat([{
      ...newStaff,
      id: this.state.staffs.length,
      image: '/assets/images/alberto.png',
      department: this.props.departments.filter(x => x.id === newStaff.department)[0]
    }]);

    this.setState({
      staffs: newStaffs
    });
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
          <Route exact path="/nhanvien" component={() => <Nhanvien 
            staffs={this.state.staffs}
            addStaff={this.addStaff}
            />} />
          <Route path="/nhanvien/:id" component={StaffWithId} />
          <Route path="/phongban" component={() => <PhongBan departments={this.props.departments} />} />
          <Route exact path="/bangluong" component={() => <Bangluong staffs={this.state.staffs} />} />
          <Redirect to="/nhanvien" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
