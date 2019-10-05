import React, { Component } from 'react';
import Calendar from '../components/Calendar.js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import sections from '../courses.json'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

function findPairs(classes) {
  let pairs = [];
  let main;
  for (let i = 0; i < classes.length; i++) {
    if (classes[i].type === "محاضرة") {
      if (main)
        pairs.push(main);
      main = classes[i];
      main.relatives = [];
    }
    else if (classes[i].type === "تمارين" || classes[i].type === "عملي")
      if (main.relatives) {
        main.relatives.push(classes[i]);
      } else
        main.relatives = [classes[i]];
  }
  if (main)
    pairs.push(main);
  return pairs;
}

export default class Registeration extends Component {
  state = { currentSelection: [], possibleClasses: [], possibleCoarses: [], addData: { name: "", pairs: [], count: 0 } };
  componentDidMount() {
    // console.log(sections);
    const auth = JSON.parse(localStorage.getItem('auth'));
    // console.log(auth);
    if (auth === null) {
      document.location = '/login';
    } else {
      let x = sections.filter((item) => { return auth.plan.left.includes(item.shortName) });
      console.log(x);
      this.setState({
        possibleClasses: x,
        possibleCoarses: auth.plan.left
      })
    }
  }
  addClass = (clazz) => {
    let booleanMAtrix = [[], [], [], [], []];
    this.state.currentSelection.forEach(element => {
      element.times.forEach(time => {
        console.log(time);
        
      });
    });
    return true;
  }
  addClassModal = () => {
    let inputOptions = {};
    for (let i = 0; i < this.state.possibleCoarses.length; i++) {
      const e = this.state.possibleCoarses[i];
      inputOptions[i] = e;
    }
    MySwal.fire({
      title: 'اختر المقرر',
      input: 'select',
      inputOptions,
      inputPlaceholder: 'اختر المقرر',
      showCancelButton: true,
    }).then((result) => {
      if (result.value) {
        let course = inputOptions[result.value];
        let possibleClasses = this.state.possibleClasses.filter((item) => { return item.shortName === course });
        let pairs = findPairs(possibleClasses);

        this.setState({
          addData: {
            name: course, pairs: pairs, count: possibleClasses.length
          }
        })
        console.log(possibleClasses);
        console.log(pairs);

      }
    })
  }

  getSelectedClasses = () => {
    let rows = [];
    let totalCount = this.state.addData.count;
    for (let i = 0; i < this.state.addData.pairs.length; i++) {

      const getCells = (element) => {
        let cells = [];
        cells.push(<td>{element.type}</td>);
        cells.push(<td>{element.doctor}</td>);
        cells.push(<td>{element.hours}</td>);
        cells.push(<td>{element.sectionID}</td>);
        cells.push(<td>{element.times.map((time) => { return (<div>{time.day + " " + time.from + " - " + time.to}<br /></div>) })}</td>);
        return cells;
      }
      let element = this.state.addData.pairs[i];
      let cells = getCells(element);

      cells.push(<td rowSpan={1 + element.relatives.length}><button type="button" className="btn btn-success btn-fab btn-fab-mini btn-round"
        onClick={() => {
          this.addClass(element);
        }}
      >
        <i class="material-icons">add</i>
      </button></td>)
      if (i == 0) {
        cells.unshift(<td rowSpan={totalCount}>{this.state.addData.name}</td>)
        cells.push(<td rowSpan={totalCount}><button type="button" className="btn btn-danger btn-fab btn-fab-mini btn-round" onClick={() => { this.setState({ addData: { name: "", pairs: [], count: 0 } }) }}>
          <i class="material-icons">remove</i>
        </button></td>)
      }
      rows.push(<tr className="bg-warning">{cells}</tr>);

      element.relatives.forEach(element2 => {
        rows.push(<tr className="bg-warning">{getCells(element2)}</tr>);

      });
    }
    return rows;
  };

  render() {
    console.log(this.state);

    return (
      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">
            <div className="container">
              <Calendar classes={this.state.currentSelection} />
              <hr />
              <h3>
                المواد المختارة
                <button className="btn btn-primary btn-round" style={{ margin: "10px" }}
                  onClick={this.addClassModal}>
                  إضافة مادة
                  <i className="material-icons">add</i>
                </button>
              </h3>
              <table className="table">
                <tbody>
                  <tr>
                    <th>
                      رمز المقرر
                    </th>
                    <th>
                      النشاط
                    </th>
                    <th>
                      الدكتور
                    </th>
                    <th>
                      الساعات
                    </th>
                    <th>
                      رقم الشعبة
                    </th>
                    <th>
                      الأوقات
                    </th>
                    <th colSpan={2}>
                      الاجراءات
                    </th>
                  </tr>
                  {this.getSelectedClasses()}
                </tbody>
              </table>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
