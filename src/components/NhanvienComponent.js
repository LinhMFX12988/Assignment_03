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
            <nav className="navbar navbar-light bg-light">
              <div className="container-fluid">
                <div></div>
                <form className="d-flex col-8 col-md-6 col-lg-4">
                  <input className="form-control me-2" 
                         type="search" 
                         placeholder="Search..." 
                         onChange={this.onChange} 
                        />

                  <button className="btn btn-outline-dark" 
                          type="button" 
                          onClick={this.handelSearch}>
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
