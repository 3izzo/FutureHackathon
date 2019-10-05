const puppeteer = require('puppeteer');
const fs = require('fs');
const courses = require('./courses.json');

module.exports = {
  getStudentInformation: async function(id, password, page) {
    try {
      await page.setViewport({height: 1080, width: 1920});
      await page.goto('https://edugate.ksu.edu.sa/ksu/init');
      await page.setCacheEnabled(true)
      // choosing the student
      await page.waitForSelector('tbody > tr > td > .ui-state-default > .ui-corner-all')
      await page.click('tbody > tr > td > .ui-state-default > .ui-corner-all')
      await page.waitForSelector('body > .pui-dropdown-panel > .pui-dropdown-items-wrapper > .pui-dropdown-items > .pui-dropdown-item:nth-child(2)')
      await page.click('body > .pui-dropdown-panel > .pui-dropdown-items-wrapper > .pui-dropdown-items > .pui-dropdown-item:nth-child(2)')
      
      // entering the id
      await page.waitForSelector("input[name='loginForm:username']")
      await page.click("input[name='loginForm:username']")
      await page.keyboard.type(id);
    
      // entering the password
      await page.waitForSelector("input[name='loginForm:password']")
      await page.click("input[name='loginForm:password']")
      await page.keyboard.type(password);
      await page.keyboard.press('Enter')
    
      await page.waitForNavigation({timeout: 6000});
    
      // getting the current gpa
      let user = await page.evaluate((sel) => {
        var user = {};
        user.name = document.querySelector('html body center div#center div#data div#left div.data_in table tbody tr td.n41 p span#studNameText').textContent
        user.gpa = document.querySelector('#myForm > div.data_in_2.right_dash > ul > li:nth-child(4)').textContent.split(':')[1].trim();
        user.collage = document.querySelector('#facNameText').textContent.split(':')[0];
        user.major = document.querySelector('#majorName').textContent.split(':')[0];
        user.mobileNumber = document.querySelector('#myForm > div.data_in_2.left_dash > ul > li:nth-child(3)').textContent.split(':')[1].trim();
        user.studyDuration = document.querySelector('#myForm > div.data_in_2.left_dash > ul > li:nth-child(1)').textContent.split(':')[2].trim().split('/')[1];
        return user;
      });
      user.stdNo = id;
            
      await page.goto("https://edugate.ksu.edu.sa/ksu/ui/student/student_transcript/index/studentTranscriptAllIndex.faces");

      let stats = await page.evaluate(() => {
        var gpaHistory = [];
        var termsNo = document.querySelectorAll('.pui-accordion-content').length;
        for (var i = 0; i < termsNo; i++) {
          var term = {};
          term.y =  parseFloat(document.querySelectorAll('.pui-accordion-content')[i].children[2].children[0].children[1].children[0].children[0].children[1].children[0].children[5].textContent);
          term.x = document.querySelectorAll('.pui-accordion-content')[i].children[0].children[0].children[0].children[0].textContent.split('(')[0].trim().replace('/','-');
          if (term.y !== 0 && term.y !== '' && Boolean(term.y) && term.y !== undefined) {
              gpaHistory.push(term);
          }
        }

        var hoursHistory = [];
        for (var i = 0; i < termsNo; i++) {
          var term = {};
          term.y =  parseFloat(document.querySelectorAll('.pui-accordion-content')[i].children[2].children[0].children[1].children[0].children[0].children[1].children[0].children[3].textContent);
          term.x = document.querySelectorAll('.pui-accordion-content')[i].children[0].children[0].children[0].children[0].textContent.split('(')[0].trim().replace('/','-');
          if (term.y !== 0 && term.y !== '' && Boolean(term.y) && term.y !== undefined) {
              hoursHistory.push(term);
          }
        }

        var gpa = {};
        var currentGPA = parseFloat(document.querySelectorAll('.pui-accordion-content')[1].children[2].children[0].children[1].children[0].children[0].children[1].children[1].children[5].textContent);
        var lastGPA = parseFloat(document.querySelectorAll('.pui-accordion-content')[2].children[2].children[0].children[1].children[0].children[0].children[1].children[1].children[5].textContent);
        var increaseRate = ( currentGPA * 100 / 5 ) - ( lastGPA * 100 / 5 );
        gpa = {currentGPA, lastGPA, rate: increaseRate.toFixed(2) };

        var totalHours = parseFloat(document.querySelectorAll('.pui-accordion-content')[1].children[2].children[0].children[1].children[0].children[0].children[1].children[1].children[3].textContent);

        return {gpaHistory: gpaHistory.reverse(), hoursHistory: hoursHistory.reverse(), gpa, totalHours};
      });  

      // let subjects = await page.evaluate((sel) => {
      //   var subjectsCount = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children.length;
      //   var subjects = [];
      //   for(var i = 0; i < subjectsCount; i++) {
      //     var name = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children[i].children[1].textContent;
      //     var hours = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children[i].children[2].textContent
      //     subjects.push({id: i, name: name, hours: hours, checked: true, grade: 'A+',});
      //   }
      //   return subjects;
      // });  

      
      await page.goto("https://edugate.ksu.edu.sa/ksu/ui/student/student_plan/index/forwardAllPlanIndex.faces");
      await page.waitForNavigation();

      let plan = await page.evaluate((sel) => {
        var taken = [];
        var left = [];
        var allSquares = document.querySelectorAll('td');
        for (let i = 0; i < allSquares.length; i++) {
          if (allSquares[i].bgColor == "#5a8842") {
            var subject = allSquares[i].textContent.replace(/\s+/g,'').slice(0,6)
            if (subject !== '') {
              taken.push(`${subject.slice(0,3)} ${subject.slice(3,6)}`);
            }
          } else if (allSquares[i].bgColor == "#823838" || allSquares[i].bgColor == "#D3E0E8") {
            var subject = allSquares[i].textContent.replace(/\s+/g,'').slice(0,6)
            if (subject !== '') {
              left.push(`${subject.slice(0,3)} ${subject.slice(3,6)}`);
            }
          }
        }
        return {taken, left}
      });

      stats.totalCourses = plan.taken.length;

      await page.goto("https://edugate.ksu.edu.sa/ksu/ui/student/student_schedule/index/forwardStudentSchedule.faces");
      await page.waitForNavigation();

      let subjects = await page.evaluate((courses) => {
        var subjectsCount = document.querySelectorAll('tr.ROW1, tr.ROW2').length - 2;
        var subjects = [];
        for(var i = 0; i < subjectsCount; i++) {
          var subject = {};
          var sectionID = document.querySelectorAll('tr.ROW1, tr.ROW2')[i].children[4].textContent;
          for (let j = 0; j < courses.length; j++) {
            if (sectionID == courses[j].sectionID) {
              subjects.push(courses[j]);
            }
          }
        }
        return subjects;
      }, courses);  

      const studentInformationJSON = {
        user,
        subjects: subjects,
        plan, 
        stats
      }

      await page.close();
      return(studentInformationJSON);
    } catch (error) {
      await page.close();
      console.log(error.message);
      return 'Somthing Wrong Happened';
    }

  },
};