import React, { Component } from 'react';
import Calendar from '../components/Calendar.js';
import Nav from '../components/Nav';
import Footer from '../components/Footer';

export default class Registeration extends Component {
  render() {
    return (
      <div className="wrapper ">
        <div className="main-panel">
          {/* Navbar */}
          <Nav />
          {/* End Navbar */}
          <div className="content">
            <div className="container">
              <Calendar classes={[
                {
                  shortName: "عال 212",
                  fullName: "تراكيب البيانات",
                  doctor: "د.فهد الضلعان",
                  type: "محاضرة",
                  sectionId: 21891,
                  hours: 3,
                  room: "123 hi ",
                  times: [
                    { day: "3", from: "13:00", to: "14:50" },
                    { day: "5", from: "13:00", to: "13:50" },
                    { day: "1", from: "13:00", to: "13:50" },
                  ]
                }, {
                  shortName: "عال 212",
                  fullName: "تراكيب البيانات",
                  doctor: "د.مشعل الدخيل",
                  type: "تمارين",
                  sectionId: 21892,
                  room: "456 hi ",
                  times: [
                    { day: "1", from: "16:00", to: "16:50" },
                  ]
                }, {
                  shortName: "عال 304",
                  fullName: "أخلاقبات المهنة و خرابيط",
                  doctor: "د.مشعل الدخيل",
                  type: "تمارين",
                  sectionId: 21892,
                  room: "456 hi ",
                  times: [
                    { day: "2", from: "16:00", to: "16:50" },
                  ]
                }]} />

            </div>
            <Footer />
          </div>
        </div>
      </div>
    )
  }
}
