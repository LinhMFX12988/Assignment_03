import React, { Component } from "react";
import { Card, CardImg, CardTitle, Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";
import { Control, LocalForm, Errors } from "react-redux-form";

class Nhanvien extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
    };

    this.handelSearch = this.handelSearch.bind(this);
    this.input = React.createRef();
  }
  
  //--------------Uncontrolled Form----------------
  handelSearch(event) {
    this.setState({
      staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(this.input.current.value.toLowerCase()))
    });
    event.preventDefault();
  }

  render() {

    const RenderNVItem = ({ staff }) =>
      <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
        <Link to={`/nhanvien/${staff.id}`} >
          <CardImg width="100%" src={staff.image} />
          <CardTitle className="text-center" style={{ color: "black" }}> {staff.name}</CardTitle>
        </Link>
      </Card>

    const nvien = this.state.staffs.map((staff) =>
      <div key={staff.id} className="col-6 col-md-4 col-lg-2">
        <RenderNVItem staff={staff} />
      </div>
    );

    return (
      <div className="container">
        <hr />
        <div className="col-12">
          <h1 className="text-center">Nhân Viên</h1>
          <div className="col">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">

                {/*************************Button Add***************************/}
                <div>
                  <Button outline >
                    <span className="fa fa-plus fa-lg"></span> Add
                  </Button>
                </div>
                <form className="d-flex col-8 col-md-6 col-lg-4" onSubmit={this.handelSearch}>
                  <input className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    ref={this.input}
                  />
                  <button className="btn btn-outline-dark"
                    type="submit"
                    value="Submit"
                  >
                    GO!
                  </button>
                </form>
              </div>
            </nav>
          </div>
          <hr />
          <div className="row">{nvien}</div>
          <hr />
        </div>
      </div>
    );
  }
}

export default Nhanvien;
