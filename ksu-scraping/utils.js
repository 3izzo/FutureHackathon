const puppeteer = require('puppeteer');
const fs = require('fs');

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
      user.password = password;
      
      await page.goto("https://edugate.ksu.edu.sa/ksu/ui/student/student_transcript/index/studentTranscriptAllIndex.faces");
      
      let lastHours = await page.evaluate((sel) => {
        return document.querySelector('#myForm\\:allTranscriptTable\\:1\\:default > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(3)')
          .textContent;
      });

      let lastPoints = await page.evaluate((sel) => {
        return document.querySelector('#myForm\\:allTranscriptTable\\:1\\:default > div:nth-child(2) > table:nth-child(3) > tbody:nth-child(1) > tr:nth-child(2) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2) > tr:nth-child(2) > td:nth-child(5)')
          .textContent;
      });

      let subjects = await page.evaluate((sel) => {
        var subjectsCount = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children.length;
        var subjects = [];
        for(var i = 0; i < subjectsCount; i++) {
          var name = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children[i].children[1].textContent;
          var hours = document.querySelector('#myForm\\:allTranscriptTable\\:0\\:default > div:nth-child(2) > table:nth-child(2) > tbody:nth-child(1) > tr:nth-child(4) > td:nth-child(1) > table:nth-child(1) > tbody:nth-child(2)').children[i].children[2].textContent
          subjects.push({id: i, name: name, hours: hours, checked: true, grade: 'A+',});
        }
        return subjects;
      });  

      const studentInformationJSON = {
        user,
        subjects: subjects
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