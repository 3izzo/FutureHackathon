import React, { Component } from 'react';
import ksuLogo from '../ksu.jpg'
import { withRouter } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import sections from '../courses.json';
import stats_icon from '../pie_chart-24px.svg';

class Main extends Component {
  state = {
    name: '',
    stdNo: '',
    gpa: '',
    collage: '',
    major: '',
    mobileNumber: '',
    studyDuration: 0,
  }

  componentDidMount() {
    console.log(sections);
    const auth = JSON.parse(localStorage.getItem('auth'));
    console.log(auth);
    if (auth == null) {
      this.props.history.push('/login');
    } else {
      const { name, stdNo, gpa, collage, major, mobileNumber, studyDuration } = auth.user;
      this.setState({
        name,
        stdNo,
        gpa,
        collage,
        major,
        mobileNumber,
        studyDuration
      })
    }
  }

  render() {

    return (
      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">
            <div className="container">

              <div className="row">
                <div className="card card-profile">
                  <div className="card-avatar">
                    <a href="#pablo">
                      <img className="img" src={ksuLogo} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title" style={{ marginBottom: '10px' }}>{this.state.name}</h4>
                    <h6 className="card-title">{this.state.collage}</h6>
                    <h6 className="card-title">{this.state.major}</h6>
                    <br/>
                    <div className="container" style={{marginBottom: '-26px'}}>
                      <table className="table" >
                        <tbody>
                          <tr >
                            <th style={{ width: "20vh" }}>الرقم الجامعي:</th>
                            <th style={{ width: "50%" }}>{this.state.stdNo}</th>
                            <th style={{ width: "20vh" }}>رقم الجوال:</th>
                            <th style={{ width: "10vh" }}>{this.state.mobileNumber}</th>
                          </tr>
                          <tr>
                            <th style={{ width: "20vh" }}>المعدل التراكمي:</th>
                            <th style={{ width: "50%" }}>{this.state.gpa}</th>
                            <th style={{ width: "20vh" }}>مدة الدراسة:</th>
                            <th style={{ width: "10vh" }}>{this.state.studyDuration}</th>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                    <button 
                    style={{width: '100%', height: '161px', fontSize: '21px'}} 
                    class="btn btn-rose"
                    onClick={() => {
                      this.props.history.push('/subjects');
                    }}
                    >
                      <i class="material-icons" style={{fontSize: '53px'}}>book</i>
                      <br/> 
                      <br/>
                      المواد المسجلة
                    </button>
                </div>

                <div className="col-md-4 col-sm-12">
                  <button 
                  style={{width: '100%', height: '161px', fontSize: '21px'}} 
                  class="btn btn-warning"
                  onClick={() => {
                    this.props.history.push('/stats');
                  }}
                  >
                    <i class="material-icons" style={{fontSize: '53px'}}>stats_icon</i>
                    <br/> 
                    <br/>
                    الاحصائيات
                  </button>
                </div>

                <div className="col-md-4 col-sm-12">
                  <button 
                    style={{width: '100%', height: '161px', fontSize: '21px'}} 
                    class="btn btn-success"
                    onClick={() => {
                      this.props.history.push('/registeration');
                    }}
                    >
                      <i class="material-icons" style={{fontSize: '53px'}}>add</i>
                      <br/> 
                      <br/>
                      تسجيل المواد
                    </button>
                </div>
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);