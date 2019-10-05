import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

class Footer extends Component {

  logout = () => {
    localStorage.removeItem('auth');
    this.props.history.push('/login');
  }

  render() {
    return (
      <div style={{marginTop: '50px'}}>
        <footer className="footer">
          <div className="container-fluid">
            <nav className="float-left">
              <ul>
                <li>
                  <a style={{color: '#ad4e4e'}} href="#" onClick={this.logout}>
                    تسجيل خروج
                  </a>
                </li>
              </ul>
            </nav>
            <div className="copyright float-right">
              نادي تقنية المستقبل
            </div>
          </div>
        </footer>
      </div>
    )
  }
}

export default withRouter(Footer);
