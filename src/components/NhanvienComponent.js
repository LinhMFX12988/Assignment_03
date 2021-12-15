import React, { Component } from "react";
import { Card, CardImg, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";

class Nhanvien extends Component {

  constructor(props) {
    super(props);
    this.state = {
      staffs: STAFFS,
      filter: ""
    };
    this.handelSearch = this.handelSearch.bind(this);
    this.onChange = this.onChange.bind(this);
  }


  handelSearch() {
    this.setState({
      staffs: this.props.staffs.filter((searchName) => searchName.name.toLowerCase().includes(this.state.filter))
    })
  }

  onChange(val) {
    this.setState({
      filter: val.target.value
    })
  }

  render() {

    const RenderNVItem = ({ staff }) =>
      <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
        <Link to={`/nhanvien/${staff.id}`} >
          <CardImg width="100%" src={staff.image} />
          <CardTitle className="text-center" style={{ color: "black" }}> {staff.name}</CardTitle>
        </Link>
      </Card>

    // KHi truyền giá trị từ component Cha sang component con phải call là this.props
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
            <nav class="navbar navbar-light bg-light">
              <div class="container-fluid">
                <div></div>
                <form class="d-flex">
                  <input class="form-control me-2" type="search" placeholder="Search..." onChange={this.onChange} />
                  <button class="btn btn-outline-dark" type="button" onClick={this.handelSearch}>GO!</button>
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

// import React, { Component } from "react";
// import {
//   Card,
//   CardImg,
//   CardTitle,
//   Button,
//   Modal,
//   ModalBody,
//   ModalHeader,
//   Label,
//   Row,
//   Col,
// } from "reactstrap";
// import { Link } from "react-router-dom";
// import { STAFFS } from "../shared/staffs";
// import { Control, LocalForm, Errors } from "react-redux-form";

// ///// Validators
// const required = (val) => val && val.length;
// const maxLength = (len) => (val) => !(val) || (val.length <= len);
// const minLength = (len) => (val) => val && val.length >= len;

// class Nhanvien extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       isAddFormModalOpen: false,
//     };
//     this.handelSearch = this.handelSearch.bind(this);
//     this.input = React.createRef();

//     this.toggleAddFormModal = this.toggleAddFormModal.bind(this);
//     this.handelAddFormSubmit = this.handelAddFormSubmit.bind(this);
//   }

//   //--------------Uncontrolled Form----------------
//   handelSearch(event) {
//     this.props.mySearch()
//     this.setState({
//       staffs: this.props.staffs.filter((staff) =>
//         staff.name
//           .toLowerCase()
//           .includes(this.input.current.value.toLowerCase())
//       ),
//     });
//     event.preventDefault();
//   }

//   //--------------Add Staffs-----------------
//   handelAddFormSubmit(values) {
//     this.props.addStaff(values)
//   }

//   toggleAddFormModal() {
//     this.setState({
//       isAddFormModalOpen: !this.state.isAddFormModalOpen,
//     });
//   }

//   render() {
//     const RenderNVItem = ({ staff }) => (
//       <Card style={{ border: "1px solid rgb(112, 112, 112)" }}>
//         <Link to={`/nhanvien/${staff.id}`}>
//           <CardImg width="100%" src={staff.image} />
//           <CardTitle className="text-center" style={{ color: "black" }}>
//             {" "}
//             {staff.name}
//           </CardTitle>
//         </Link>
//       </Card>
//     );

//     const nvien = this.props.staffs.map((staff) => (
//       <div key={staff.id} className="col-6 col-md-4 col-lg-2">
//         <RenderNVItem staff={staff} />
//       </div>
//     ));

//     return (
//       <div className="container">
//         <hr />
//         <div className="col-12">
//           <h1 className="text-center">Nhân Viên</h1>
//           <div className="col">
//             <nav className="navbar navbar-light bg-light">
//               <div className="container-fluid">
//                 {/*************************Button Add***************************/}

//                 <Button outline onClick={this.toggleAddFormModal}>
//                   <span className="fa fa-plus fa-lg"></span> Add
//                 </Button>

//                 {/*Add Form Modal*/}
//                 <Modal
//                   isOpen={this.state.isAddFormModalOpen}
//                   toggle={this.toggleAddFormModal}
//                 >
//                   <ModalHeader toggle={this.toggleAddFormModal}>
//                     Thêm Nhân Viên
//                   </ModalHeader>
//                   <ModalBody>
//                     <LocalForm
//                       onSubmit={(values) => this.handelAddFormSubmit(values)}
//                     >
//                       <Row className="form-group">
//                         <Label htmlFor="name" md={5}>
//                           Tên
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".name"
//                             id="name"
//                             name="name"
//                             className="form-control"
//                             validators={{
//                               required,
//                               maxLength: maxLength(30),
//                               minLength: minLength(2),
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".name"
//                             show="touched"
//                             messages={{
//                               require: "Yêu cầu nhập",
//                               minLength: "Yêu cầu nhiều hơn 2 kí tự",
//                               maxLength: "Yêu cầu ít hơn 30 kí tự",                             
//                             }}
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="doB" md={5}>
//                           Ngày sinh
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".doB"
//                             id="doB"
//                             name="doB"
//                             className="form-control"
//                             type="date"
//                             validators={{
//                               required,
//                               minLength: minLength(1),
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".doB"
//                             show="touched"
//                             messages={{
//                               require: "Required",
//                               minLength: "Yêu cầu nhập",
//                             }}
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="startDate" md={5}>
//                           Ngày vào công ty
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".startDate"
//                             id="startDate"
//                             name="startDate"
//                             className="form-control"
//                             type="date"
//                             validators={{
//                               required,
//                               minLength: minLength(1),
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".startDate"
//                             show="touched"
//                             messages={{
//                               require: "Required",
//                               minLength: "Yêu cầu nhập",
//                             }}
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="sale" md={5}>
//                           Phòng ban
//                         </Label>
//                         <Col md={7}>
//                           <Control.select
//                             model=".department"
//                             className="form-control"
//                             name="sale"
//                             id="sale"
//                             validators={{
//                               required,
//                             }}
//                           >
//                             <option value="Dept01">Sale</option>
//                             <option value="Dept02">HR</option>
//                             <option value="Dept03">Marketing</option>
//                             <option value="Dept04">IT</option>
//                             <option value="Dept05">Finance</option>
//                           </Control.select>
//                           <Errors
//                             className="text-danger"
//                             model=".department"
//                             show="touched"
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="salaryScale" md={5}>
//                           Hệ số lương
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".salaryScale"
//                             id="salaryScale"
//                             name="salaryScale"
//                             className="form-control"
//                             type="number.toFixed()"
//                             placeholder="1.0 -> 3.0"
//                             validators={{
//                               required,
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".salaryScale"
//                             show="touched"
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="annualLeave" md={5}>
//                           Số ngày nghỉ còn lại
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".annualLeave"
//                             id="annualLeave"
//                             name="annualLeave"
//                             className="form-control"
//                             type="number.toFixed()"
//                             placeholder="0"
//                             validators={{
//                               required,
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".annualLeave"
//                             show="touched"
//                           />
//                         </Col>
//                       </Row>

//                       <Row className="form-group">
//                         <Label htmlFor="overTime" md={5}>
//                           Số ngày đã làm thêm
//                         </Label>
//                         <Col md={7}>
//                           <Control.text
//                             model=".overTime"
//                             id="overTime"
//                             name="overTime"
//                             className="form-control"
//                             type="number.toFixed()"
//                             placeholder="0"
//                             validators={{
//                               required,
//                             }}
//                           />
//                           <Errors
//                             className="text-danger"
//                             model=".overTime"
//                             show="touched"
//                           />
//                         </Col>
//                       </Row>

//                       {/*Add button*/}
//                       <Row className="form-group">
//                         <Col>
//                           <Button type="submit" color="primary">
//                             Thêm
//                           </Button>
//                         </Col>
//                       </Row>
//                     </LocalForm>
//                   </ModalBody>
//                 </Modal>
//                 {/*************************End Button Add***************************/}

//                 <form
//                   className="d-flex col-8 col-md-6 col-lg-4"
//                   onSubmit={this.handelSearch}
//                 >
//                   <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Search..."
//                     ref={this.input}
//                   />
//                   <button
//                     className="btn btn-outline-dark"
//                     type="submit"
//                     value="Submit"
//                   >
//                     GO!
//                   </button>
//                 </form>
//               </div>
//             </nav>
//           </div>
//           <hr />
//           <div className="row">{nvien}</div>
//           <hr />
//         </div>
//       </div>
//     );
//   }
// }

// export default Nhanvien;