import React, { Component } from 'react';
import Calendar from '../components/Calendar.js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import sections from '../courses.json'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'
import "./registeration.css";
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
    const auth = JSON.parse(localStorage.getItem('auth'));
    if (auth === null) {
      document.location = '/login';
    } else {
      let x = sections.filter((item) => { return auth.plan.left.includes(item.shortName) });
      let pairs = findPairs(auth.subjects);
      let all = [];
      pairs.forEach(p => {
        all.push(p);
        p.relatives.forEach(r => {
          all.push(r);
        });
      });
      this.setState({
        possibleClasses: x,
        possibleCoarses: auth.plan.left,
        currentSelection: all,
      })
    }
  }
  addClass = (clazz) => {
    let booleanMatrix = [[], [], [], [], []];

    for (let j = 0; j < this.state.currentSelection.length; j++) {
      const element = this.state.currentSelection[j];
      for (let k = 0; k < element.times.length; k++) {
        const time = element.times[k];
        let from = time.from;
        if (from) {
          from = parseInt(from.split(":")[0]);
          let to = parseInt(time.to.split(":")[0]) + 1;
          for (let i = from; i < to; i++) {
            if (booleanMatrix[parseInt(time.day) - 1][i])
              return false;
            booleanMatrix[parseInt(time.day) - 1][i] = element;
          }
        }
      }
    }
    const canAdd = (x) => {
      let found = this.state.currentSelection.find((object) => { return object.shortName === x.shortName });
      if (found && found.length != 0)
        return { canAdd: "duplicate" };

      for (let k = 0; k < x.times.length; k++) {
        const time = x.times[k];
        let from = time.from;
        if (from) {
          from = parseInt(from.split(":")[0]);
          let to = parseInt(time.to.split(":")[0]) + 1;
          for (let i = from; i < to; i++) {
            if (booleanMatrix[parseInt(time.day) - 1][i])
              return { canAdd: false, taarod: booleanMatrix[parseInt(time.day) - 1][i] };
          }
        }
      }

      if (x.relatives)
        for (let i = 0; i < x.relatives.length; i++) {
          const element = x.relatives[i];
          let ca = canAdd(element);
          if (ca.canAdd !== true)
            return ca;
        }
      return { canAdd: true };
    }
    const ca = canAdd(clazz);

    const canAddRes = ca.canAdd;
    const taarod = ca.taarod;


    if (canAddRes === true) {
      this.state.currentSelection.push(clazz);
      clazz.relatives.forEach(element => {
        this.state.currentSelection.push(element);
      });
      this.setState({
        addData: { name: "", pairs: [], count: 0 }
      })
    } else if (canAddRes === "duplicate") {
      MySwal.fire({
        type: 'error',
        title: 'تم إضافة المادة مسبقا',
      })
    } else {
      MySwal.fire({
        type: 'error',
        title: 'يوجد تعارض مع مادة ' + taarod.shortName + " شعبة رقم " + taarod.sectionID,
      })
    }
    return true;
  }
  removeClass = (clazz1) => {
    let cs = this.state.currentSelection.filter((clazz2) => {
      return clazz2.shortName !== clazz1.shortName;
    })
    this.setState({ currentSelection: cs });
  }
  addClassModal = () => {
    let inputOptions = {};
    for (let i = 0; i < this.state.possibleCoarses.length; i++) {
      const e = this.state.possibleCoarses[i];
      let found = this.state.currentSelection.find((o) => {
        return o.shortName === e
      });
      if (found && found.length != 0)
        inputOptions[i] = e + ' | مضافة';
      else
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
        let course = inputOptions[result.value].split(" | ")[0];
        let possibleClasses = this.state.possibleClasses.filter((item) => { return item.shortName === course });
        let pairs = findPairs(possibleClasses);

        this.setState({
          addData: {
            name: course, pairs: pairs, count: possibleClasses.length
          }
        })
      }
    })
  }

  getSelectedClasses = () => {
    let rows = [];
    let totalTempCount = this.state.addData.count;

    const getCells = (element) => {
      let cells = [];
      cells.push(<td key={1}>{element.type}</td>);
      cells.push(<td key={2}>{element.doctor}</td>);
      cells.push(<td key={3}>{element.hours}</td>);
      cells.push(<td key={4}>{element.sectionID}</td>);
      cells.push(<td key={5}>{element.times.map((time) => { return (<div key={time.day + " " + time.from + " - " + time.to}>{time.day + " " + time.from + " - " + time.to}<br /></div>) })}</td>);
      return cells;
    }

    for (let i = 0; i < this.state.addData.pairs.length; i++) {

      let element = this.state.addData.pairs[i];
      let cells = getCells(element);

      cells.push(<td key={6} rowSpan={1 + element.relatives.length}><button type="button" className="btn btn-success btn-round"
        onClick={() => {
          this.addClass(element);
        }}
      >
        <i className="material-icons">add</i>
      </button></td>)
      if (i === 0) {
        cells.unshift(<td rowSpan={totalTempCount} key={0}>{this.state.addData.name}</td>)
        cells.push(<td rowSpan={totalTempCount} key={7}><button type="button" className="btn btn-danger btn-round"
          onClick={() => { this.setState({ addData: { name: "", pairs: [], count: 0 } }) }}>
          <i className="material-icons">remove</i>
        </button></td>)
      }
      rows.push(<tr key={i} className="bg-warning">{cells}</tr>);

      element.relatives.forEach(element2 => {
        rows.push(<tr key={element2.sectionID + " " + rows.length} className="bg-warning">{getCells(element2)}</tr>);

      });
    }

    this.state.currentSelection.forEach(clazz => {
      let cells = getCells(clazz);
      cells.unshift(<td key={0} >{clazz.shortName}</td>);
      if (clazz.relatives)
        cells.push(<td key={8} rowSpan={clazz.relatives.length + 1}> <button type="button" className="btn btn-danger btn-round"
          onClick={() => { this.removeClass(clazz) }}>
          <i className="material-icons">remove</i>
        </button> </td>);
      rows.push(<tr key={clazz.sectionID}>{cells}</tr>)
    });

    return rows;
  };

  render() {
    return (
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
    )
  }
}
