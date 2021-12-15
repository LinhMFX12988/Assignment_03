import React from "react";
import { CardImg, CardTitle, CardText, CardBody, Breadcrumb, BreadcrumbItem } from "reactstrap";
import dateFormat from "dateformat";
import { Link } from "react-router-dom";

function RenderStaff({ staffs }) {

  return (
    <>
      <div className="row">
        <div className="col-12 col-md-4 col-lg-3">
          <CardImg width="100%" src={staffs.image} />
        </div>
        <CardBody className="col-12 col-md-8 col-lg-9">
          <CardTitle>Họ và tên : {staffs.name}</CardTitle>
          <CardText>Ngày sinh : {dateFormat(staffs.doB, "dd/mm/yyyy")}</CardText>
          <CardText>Ngày vào công ty : {dateFormat(staffs.startDate, "dd/mm/yyyy")}</CardText>
          <CardText>Phòng ban : {staffs.department.name}</CardText>
          <CardText>Số ngày nghỉ còn lại : {staffs.annualLeave}</CardText>
          <CardText>Số ngày đã làm thêm : {staffs.overTime}</CardText>
        </CardBody>
      </div>
    </>
  );
}

const StaffDetail = (props) => {

  if (props.staffs != null) {
    
    return (
      <div className="container">
        <hr />
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem><Link to="/nhanvien">Nhân Viên</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.staffs.name}</BreadcrumbItem>
          </Breadcrumb>
        </div>
        <hr />
        <div className="">
          <RenderStaff staffs={props.staffs} />
        </div>
        <hr />
      </div>
    );
  }

}
export default StaffDetail;
