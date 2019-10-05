import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container-fluid">
            {/* <nav className="float-left">
              <ul>
                <li>
                  <a href="https://www.creative-tim.com">
                    انس
                  </a>
                </li>
                <li>
                  <a href="https://creative-tim.com/presentation">
                    عبادة
                  </a>
                </li>
                <li>
                  <a href="http://blog.creative-tim.com">
                    وضاح
                  </a>
                </li>
              </ul>
            </nav> */}
            <div className="copyright float-right">
              نادي تقنية المستقبل
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
