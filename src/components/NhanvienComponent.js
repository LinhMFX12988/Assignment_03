import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardTitle,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  Row,
  Col,
  Label,
  FormGroup,
  Input
} from "reactstrap";
import { Link } from "react-router-dom";
import { STAFFS } from "../shared/staffs";

///// Validators

class Nhanvien extends Component {
  constructor(props) {
    super(props);

    this.state = {
      staffs: STAFFS,
      isAddFormModalOpen: false,
    };
    this.input = React.createRef();
  }

  //--------------Search Uncontrolled Form----------------
  handelSearch = (event) => {
    this.setState({
      staffs: this.props.staffs.filter((staff) =>
        staff.name
          .toLowerCase()
          .includes(this.input.current.value.toLowerCase())
      ),
    });
    event.preventDefault();
  };

  //--------------Add Staff Controlled Form----------------

  hendleChange = (e) => {
    let staffKey = e.target.name;
    let value = e.target.value;
    this.setState({
      [staffKey]: value
    })
  }

  toggleAddFormModal = () => {
    this.setState({
      isAddFormModalOpen: !this.state.isAddFormModalOpen,
    });
  };

  handelAddFormSubmit(e) {
    
    let staff = {
      // id: this.state.staffs.length + 1,
      name: this.state.name,
      doB: this.state.doB,
      salaryScale: this.state.salaryScale,
      startDate: this.state.startDate,
      department: this.state.department,
      annualLeave: this.state.annualLeave,
      overTime: this.state.overTime,
      salary: this.state.salary,
      image: '/assets/images/alberto.png'
    }     
    console.log(staff)
    this.props.addStaff(staff)

    e.preventDefault();
   
    
  }

  render() {
    const RenderNVItem = ({ staff }) => (
      <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
        <Link to={`/nhanvien/${staff.id}`}>
          <CardImg width="100%" src={staff.image} />
          <CardTitle className="text-center" style={{ color: "black" }}>
            {" "}
            {staff.name}
          </CardTitle>
        </Link>
      </Card>
    );

    const nvien = this.state.staffs.map((staff) => (
      <div key={staff.id} className="col-6 col-md-4 col-lg-2">
        <RenderNVItem staff={staff} />
      </div>
    ));

    return (
      <div className="container">
        <hr />
        <div className="col-12">
          <h1 className="text-center">Nhân Viên</h1>
          <div className="col">
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <Button outline onClick={this.toggleAddFormModal}>
                  <span className="fa fa-plus fa-lg"></span> Add
                </Button>

                <Modal
                  isOpen={this.state.isAddFormModalOpen}
                  toggle={this.toggleAddFormModal}
                >
                  <ModalHeader toggle={this.toggleAddFormModal}>
                    Thêm Nhân Viên
                  </ModalHeader>
                  <ModalBody>
                    <Form onSubmit={ this.handelAddFormSubmit }>
                      {/* Full name */}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="name" md={5}>
                            Họ tên
                          </Label>
                          <Col md={7}>
                            <Input
                              id="name"
                              name="name"
                              className="form-control"
                              value={this.state.name}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Date of birth*/}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="doB" md={5}>
                            Ngày sinh
                          </Label>
                          <Col md={7}>
                            <Input
                              type="date"
                              id="doB"
                              name="doB"
                              className="form-control"
                              value={this.state.doB}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Started Date*/}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="startDate" md={5}>
                            Ngày vào công ty
                          </Label>
                          <Col md={7}>
                            <Input
                              type="date"
                              id="startDate"
                              name="startDate"
                              className="form-control"
                              value={this.state.startDate}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Department */}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="department" md={5}>
                            Phòng ban
                          </Label>
                          <Col md={7}>
                            <Input
                              type="select"
                              id="department"
                              name="department"
                              className="form-control"
                              value={this.state.department}
                              onChange={this.hendleChange}
                            >
                              <option value="Dept01">Sale</option>
                              <option value="Dept02">HR</option>
                              <option value="Dept03">Marketing</option>
                              <option value="Dept04">IT</option>
                              <option value="Dept05">Finance</option>
                            </Input>
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Salary Scale */}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="salaryScale" md={5}>
                            Hệ số lương
                          </Label>
                          <Col md={7}>
                            <Input
                              id="salaryScale"
                              name="salaryScale"
                              placeHolder="1-3"
                              className="form-control"
                              value={this.state.salaryScale}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Annual Leave */}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="annualLeave" md={5}>
                            Số ngày nghỉ còn lại
                          </Label>
                          <Col md={7}>
                            <Input
                              id="annualLeave"
                              name="annualLeave"
                              className="form-control"
                              value={this.state.annualLeave}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Overtime */}
                      <FormGroup>
                        <Row className="form-group">
                          <Label htmlFor="overTime" md={5}>
                            Số ngày đã làm thêm
                          </Label>
                          <Col md={7}>
                            <Input
                              id="overTime"
                              name="overTime"
                              className="form-control"
                              value={this.state.overTime}
                              onChange={this.hendleChange}
                            />
                          </Col>
                        </Row>
                      </FormGroup>
                      {/* Submit button */}
                      <FormGroup>
                        <Row className="form-group">
                          <Col className="col-7 offset-5">
                            <Button type="submit" color="primary" >
                              Thêm
                            </Button>
                          </Col>
                        </Row>
                      </FormGroup>
                    </Form>
                  </ModalBody>
                </Modal>

                <form
                  className="d-flex col-8 col-md-6 col-lg-4"
                  onSubmit={this.handelSearch}
                >
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search..."
                    ref={this.input}
                  />
                  <button
                    className="btn btn-outline-dark"
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

