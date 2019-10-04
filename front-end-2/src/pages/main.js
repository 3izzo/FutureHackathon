import React, { Component } from 'react';
import ksuLogo from '../ksu.jpg'
import { withRouter } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import sections from '../courses.json'

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

  componentWillMount() {
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

  componentDidMount() {
    console.log(this.state);
  }

  render() {

    return (
      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">
            <div className="container-fluid" style={{ width: 'calc(100% - 100px)' }}>

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
                    <div className="container">
                      <table className="table" >
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
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div class="card" onClick={() => {
                    this.props.history.push('/subjects');
                  }}>
                    <div class="card-header card-header-icon card-header-rose">
                      <div class="card-icon">
                        <i class="material-icons">book</i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title"> المواد المسجلة</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div class="card" onClick={() => {
                    this.props.history.push('/stats');
                  }}>
                    <div class="card-header card-header-icon card-header-warning">
                      <div class="card-icon">
                        <i class="material-icons">bar_chart</i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title">الاحصائيات</h4>
                    </div>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div class="card" onClick={() => {
                    this.props.history.push('/registeration');
                  }}>
                    <div class="card-header card-header-icon card-header-success">
                      <div class="card-icon">
                        <i class="material-icons">add</i>
                      </div>
                    </div>
                    <div class="card-body">
                      <h4 class="card-title"> تسجيل المواد</h4>
                    </div>
                  </div>
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