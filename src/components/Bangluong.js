import React, { Component } from "react";
import { Card, Breadcrumb, BreadcrumbItem, CardBody, CardText, CardTitle } from "reactstrap";
import { Link } from 'react-router-dom';
import { STAFFS } from "../shared/staffs";


class Bangluong extends Component {

    constructor(props) {
        super(props);

        this.state = {
            staffs: STAFFS,         
        };
    }

    onSortChangeId = () => {
        const { currentSort } = this.state;
		let nextSort;
		
		if(currentSort === 'down') { 
            nextSort = 'up'; 
            this.setState({staffs: STAFFS.sort((a,b) => b.id - a.id)})}
		else if(currentSort === 'up') {
            nextSort = 'default'; 
            this.setState({staffs: STAFFS.sort((a,b) => a.id- b.id)})}
		else { 
            nextSort = 'down'; this.setState((a) => a) 
        }
		
		this.setState({
			currentSort: nextSort
		})         
    }

    onSortChangeMoney = () => {
        const { currentSort } = this.state;
		let nextSort;
		
		if(currentSort === 'down') { 
            nextSort = 'up'; 
            this.setState({staffs: STAFFS.sort((a,b) => b.overTime - a.overTime)})}
		else if(currentSort === 'up') {
            nextSort = 'default'; 
            this.setState({staffs: STAFFS.sort((a,b) => a.overTime- b.overTime)})}
		else { 
            nextSort = 'down'; this.setState((a) => a) 
        }
		
		this.setState({
			currentSort: nextSort
		})     
    }

    render() {
        const RenderBangLuong = ({ staff }) => {

            return (
                <Card className="text-center"
                    style={{
                        backgroundColor: "#e6dff5",
                        border: "1px solid rgb(112, 112, 112)"
                    }}>
                    <h2> {staff.name}</h2><hr />
                    <CardBody>
                        <CardText>Mã nhân viên: {staff.id}</CardText>
                        <CardText>Hệ số lương: 1</CardText>
                        <CardText>Số giờ làm thêm: {staff.overTime}</CardText>
                    </CardBody>
                    <CardBody >
                        <Card style={{
                            border: "1px solid rgb(112, 112, 112)"
                        }}>
                            <CardTitle>
                                Lương: {3000000 + staff.overTime*200000} đ
                            </CardTitle>
                        </Card>
                    </CardBody>
                </Card>
            );
        }


        const nvien = this.state.staffs.map((staff) =>

            <div key={staff.id} className="col-12 col-md-6 col-lg-4">
                <RenderBangLuong staff={staff} />
            </div>
        );

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/nhanvien">Nhân Viên</Link>
                        </BreadcrumbItem>
                        <BreadcrumbItem active>Bảng Lương</BreadcrumbItem>
                    </Breadcrumb>
                </div>
                <div className="col-12">
                    <h1 className="text-center">Bảng Lương</h1>
                    <button style={{ margin: 5, float: "right" }} 
                            type="button"
                            onClick={this.onSortChangeMoney}                             
                            className="btn btn-outline-dark btn-sm">
                                Lương 
                        <i onClick={this.onSortChangeId} className="fa fa-sort"></i>
                    </button>
                    <button style={{ margin: 5, float: "right" }} 
                            type="button"
                            onClick={this.onSortChangeId}
                            className="btn btn-outline-dark btn-sm">
                        Mã NV 
                        <i onClick={this.onSortChangeId} className="fa fa-sort"></i>
                    </button>
                    <br /><br /><hr />
                    <div className="row">{nvien}</div>
                    <hr />
                </div>
            </div>
        );

    }
}
export default Bangluong;