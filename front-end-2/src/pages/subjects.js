import React, { Component } from 'react'

import Calendar from '../components/Calendar.js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

function findPairs(classes) {
  let pairs = [];
  let main;
  let subs = [];
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].type === "محاضرة") {
      if (main) {
        pairs.push([main].concat(subs));
        subs = [];
      }
      main = classes[i];
    }
    else if (classes[i].type === "تمارين" || classes[i].type === "عملي")
      subs.push(classes[i]);
  }
  if (main)
    pairs.push([main].concat(subs));
  return pairs;
}

function getCells(clazz) {
  let cells = [];
  cells.push(<td key={cells.length}>{clazz.type}</td>);
  cells.push(<td key={cells.length}>{clazz.doctor}</td>);
  cells.push(<td key={cells.length}>{clazz.sectionID}</td>);

  cells.push(<td key={cells.length}>{clazz.times.map((time, index) => {
    return (<div key={index}>{time.room}<br /></div>);
  })}</td>);

  cells.push(<td key={cells.length}>{clazz.times.map((time, index) => {
    return (<div key={index}>{time.day + " " + time.from + " - " + time.to}<br /></div>);
  })}</td>);
  return cells;
}

export default class Subjects extends Component {
  state = { sched: [], paired: [] };

  componentDidMount() {
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth === null) {
      document.location = '/login';
    }

    this.setState({
      sched: auth.subjects,
      paired: findPairs(auth.subjects),
    })

  }


  render() {
    console.log(this.state);

    return (
      <div className="main-panel">
        {/* Navbar */}
        <Nav />
        {/* End Navbar */}
        <div className="content">
          <div className="container">
            <Calendar classes={this.state.sched} />
            <table className="table table-bordered" >
              <thead>
                <tr>
                  <th>المادة</th>
                  <th>النشاط</th>
                  <th>الدكتور</th>
                  <th>رقم الشعبة</th>
                  <th>القاعة</th>
                  <th>الوقت</th>
                  <th>الواتساب</th>
                </tr>
              </thead>
              <tbody>{
                this.state.paired.map((pair, index) => {
                  let rows = [<tr key={index + " 0"}>
                    <td key={-2131} rowSpan={pair.length}>{pair[0].shortName}</td>
                    {getCells(pair[0])}
                    <td style={{ textAlign: "center" }} key={10} rowSpan={pair.length}><a href="https://web.whatsapp.com/"> <img src="https://image.flaticon.com/icons/svg/134/134937.svg" style={{ width: "40px" }}></img></a></td>
                  </tr>];
                  for (let i = 1; i < pair.length; i++) {
                    const element = pair[i];
                    rows.push(<tr key={index + " " + i}> {getCells(element)}</tr>);
                  }
                  return rows;
                })
              }</tbody>
            </table>
            <hr />
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
