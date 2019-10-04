import React, { Component } from 'react';
import ksuLogo from '../ksu.jpg'
import { withRouter } from 'react-router-dom'
import Nav from '../components/Nav';
import Footer from '../components/Footer';

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
    const auth = JSON.parse(localStorage.getItem('auth'));
    console.log(auth);
    if (auth == null) {
      this.props.history.push('/login');
    } else {
      const {name, stdNo, gpa, collage, major, mobileNumber, studyDuration} = auth.user;
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
          <Nav/>
          {/* End Navbar */}
          <div className="content">
            <div className="container-fluid" style={{width: 'calc(100% - 100px)'}}>
              
              <div className="row">
                <div className="card card-profile">
                  <div className="card-avatar">
                    <a href="#pablo">
                      <img className="img" src={ksuLogo} />
                    </a>
                  </div>
                  <div className="card-body">
                    <h4 className="card-title" style={{marginBottom: '10px'}}>{this.state.name}</h4>
                    <h6 className="card-title">{this.state.collage}</h6> 
                    <h6 className="card-title">{this.state.major}</h6>
                  </div>
                </div>
              </div>
          
            </div>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Main);