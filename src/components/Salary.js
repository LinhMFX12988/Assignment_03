import React, { useState } from "react";
import { Card, Breadcrumb, BreadcrumbItem, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';

function Salary(props) {
    const [onSort, setOnSort] = useState(props.salary)
    const [sortDown, setSortDown] = useState(true)

    //-------------------Sort ID----------------------
    const onSortChangeId = () => {
        const copyStaffId = [...onSort]
        
        if (sortDown) {
            copyStaffId.sort((a,b) =>  b.id - a.id)
        } else {
            copyStaffId.sort((a,b) =>  a.id - b.id)         
        }
        
        setSortDown(!sortDown);
        setOnSort(copyStaffId);
    }

    //-------------------Sort Salary----------------------
    const onSortChangeSalary = () => {
        const copyStaffId = [...onSort]
        
        if (sortDown) {
            copyStaffId.sort((a,b) =>  b.overTime - a.overTime)
        } else {
            copyStaffId.sort((a,b) =>  a.overTime - b.overTime)         
        }
        
        setSortDown(!sortDown);
        setOnSort(copyStaffId);
    }

    const renderSalary = onSort.map((salary) => {
        return (
            <div key={salary.id} className="col-12 col-md-6 col-lg-4">
                <Card className="text-center"
                    style={{
                        backgroundColor: "#c0bdc4",
                        border: "1px solid rgb(112, 112, 112)"
                    }}>
                    <h2> {salary.name}</h2><hr />
                    <CardBody>
                        <CardText>Mã nhân viên: {salary.id}</CardText>
                        <CardText>Hệ số lương: 1</CardText>
                        <CardText>Số giờ làm thêm: {salary.overTime}</CardText>
                    </CardBody>
                    <CardBody >
                        <Card style={{
                            border: "1px solid rgb(112, 112, 112)"
                        }}>
                            <CardTitle>
                                Lương: {3000000 + salary.overTime * 200000} đ
                            </CardTitle>
                        </Card>
                    </CardBody>
                </Card>
            </div>
        );
    });

    return (
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem>
                        <Link to="/staffs">Nhân Viên</Link>
                    </BreadcrumbItem>
                    <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                </Breadcrumb>
            </div>
            <div className="col-12">
                <h1 className="text-center">Bảng Lương</h1>

                {/*******Button Sort Salary******/}
                <button style={{ margin: 5, float: "right" }}
                    type="button"
                    onClick={onSortChangeSalary}
                    className="btn btn-outline-dark btn-sm col-4 col-md-2 col-lg-1">
                    Lương
                    <i className="fa fa-sort"></i>
                </button>

                {/*******Button Sort ID******/}
                <button style={{ margin: 5, float: "right" }}
                    type="button"
                    onClick={onSortChangeId}
                    className="btn btn-outline-dark btn-sm col-4 col-md-2 col-lg-1">
                    Mã NV
                    <i className="fa fa-sort"></i>
                </button>
                <br /><br />
                <div className="row">{renderSalary}</div>
            </div>
        </div>
    );
}

export default Salary;