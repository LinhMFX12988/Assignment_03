import React, { Component } from "react";
import { Card, CardImg, CardTitle, Button, Modal, ModalBody, ModalHeader, Label, Row, Col } from "reactstrap";
import { Link } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";
import { Control, LocalForm, Errors } from "react-redux-form";

///// Validators
const required = (val) => val && val.length;
const minLength = (len) => (val) => (val) && (val.length >= len);

class Nhanvien extends Component {

  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      isAddFormModalOpen: false
    };
    this.handelSearch = this.handelSearch.bind(this);
    this.input = React.createRef();

    this.toggleAddFormModal = this.toggleAddFormModal.bind(this);
    this.handelAddFormSubmit = this.handelAddFormSubmit.bind(this);
  }

  //--------------Uncontrolled Form----------------
  handelSearch(event) {
    this.setState({
      staffs: this.props.staffs.filter(staff => staff.name.toLowerCase().includes(this.input.current.value.toLowerCase()))
    });
    event.preventDefault();
  }

  //--------------Add Staffs-----------------
  handelAddFormSubmit(values) {
    console.log("Current State is: " + JSON.stringify(values));
    alert("Current State is: " + JSON.stringify(values));
  }

  toggleAddFormModal() {
    this.setState({
      isAddFormModalOpen: !this.state.isAddFormModalOpen
    });
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

                <Button outline onClick={this.toggleAddFormModal}>
                  <span className="fa fa-plus fa-lg"></span> Add
                </Button>

                {/*Add Form Modal*/}
                <Modal isOpen={this.state.isAddFormModalOpen}
                  toggle={this.toggleAddFormModal}
                >
                  <ModalHeader toggle={this.toggleAddFormModal}>
                    {" "}Thêm Nhân Viên{" "}
                  </ModalHeader>
                  <ModalBody>
                    <LocalForm
                      onSubmit={(values) => this.handelAddFormSubmit(values)}
                    >
                      <Row className="form-group">
                        <Label htmlFor="name" md={4}>
                          {" "}Tên:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".name"
                            id="name"
                            name="name"
                            placeholder="Họ tên ..."
                            className="form-control"
                            validators={{
                              required,
                              minLength: minLength(1),
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".name"
                            show="touched"
                            messages={{
                              require: "Required",
                              minLength: "Yêu cầu nhập",
                            }}
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="doB" md={4}>
                          {" "}Ngày sinh:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".doB"
                            id="doB"
                            name="doB"
                            placeholder="dd/mm/yyyy"
                            className="form-control"
                            validators={{
                              required,
                              minLength: minLength(1),
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".doB"
                            show="touched"
                            messages={{
                              require: "Required",
                              minLength: "Yêu cầu nhập",
                            }}
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="startDate" md={4}>
                          {" "}Ngày vào công ty:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".startDate"
                            id="startDate"
                            name="startDate"
                            placeholder="dd/mm/yyyy"
                            className="form-control"
                            validators={{
                              required,
                              minLength: minLength(1),
                            }}
                          />
                          <Errors
                            className="text-danger"
                            model=".startDate"
                            show="touched"
                            messages={{
                              require: "Required",
                              minLength: "Yêu cầu nhập",
                            }}
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="sale" md={4}>
                          {" "}
                          Phòng ban:
                          {" "}
                        </Label>
                        <Col md={8}>
                          <Control.select
                            model=".sale"
                            className="form-control"
                            name="sale"
                            id="sale"
                            validators={{
                              required,
                            }}
                          >
                            <option>Sale</option>
                            <option>HR</option>
                            <option>Marketing</option>
                            <option>IT</option>
                            <option>Finance</option>
                          </Control.select>
                          <Errors
                            className="text-danger"
                            model=".sale"
                            show="touched"
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="salaryScale" md={4}>
                          {" "}Hệ số lương:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".salaryScale"
                            id="salaryScale"
                            name="salaryScale"
                            placeholder="1"
                            className="form-control"
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="numberOfStaff" md={4}>
                          {" "}Số ngày nghỉ còn lại:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".numberOfStaff"
                            id="numberOfStaff"
                            name="numberOfStaff"
                            placeholder="0"
                            className="form-control"
                          />
                        </Col>
                      </Row>

                      <Row className="form-group">
                        <Label htmlFor="annualLeave" md={4}>
                          {" "}Số ngày đã làm thêm:{" "}
                        </Label>
                        <Col md={8}>
                          <Control.text
                            model=".annualLeave"
                            id="annualLeave"
                            name="annualLeave"
                            placeholder="0"
                            className="form-control"
                          />
                        </Col>
                      </Row>

                      {/*Add button*/}
                      <Row className="form-group">
                        <Col>
                          <Button type="submit" color="primary">
                            {" "}Thêm{" "}
                          </Button>
                        </Col>
                      </Row>

                    </LocalForm>
                  </ModalBody>
                </Modal>
                {/*************************End Button Add***************************/}

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

