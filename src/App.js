import React, { useState } from 'react';

import './App.css';

import Hero from './Hero';
import Footer from './Footer';

const App = () => {
  const [birthday, setBirthday] = useState('');
  const [display, setDisplay] = useState('');
  const [loading, setloading] = useState(false);

  const datesInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (birthday === '') {
      setDisplay('Please select your birthdate');
    } else {
      const dateArray = birthday.split('-');
      const year = dateArray[0];
      const month = dateArray[1];
      const day = dateArray[2];

      //passing the year, month and date to the function to format in different orders
      const palindromeBirthday = formatDate(year, month, day);

      setloading(true);

      setTimeout(() => {
        setloading(false);

        if (palindromeBirthday) {
          setDisplay(
            `Hurray!!, You birthday ${palindromeBirthday} is a  Palindrome Birthday`
          );
        } else {
          const [nextDate, difference] = findNextDate(year, month, day);
          setDisplay(
            `Ohh no, your birthday isn't palindrome, but the next nearest date is ${nextDate}. You have missed ${difference} days`
          );
        }
      }, 2000);
    }
  };

  //checking if the birthdate is a palindrome or not
  const checkPalindrome = (birthdate) => {
    let reverse = birthdate.split('').reverse('').join('');
    return reverse === birthdate;
  };

  // format the date according to different formats
  //checking if different formats are a palindrome or not
  const formatDate = (year, month, day) => {
    const yyyyMMDD = year + month + day;
    const mmDDYYYY = month + day + year;
    const ddMMYYYY = day + month + year;
    const yearIn2Digits = year.slice(-2);
    const yyMMDD = yearIn2Digits + month + day;
    const mmDDYY = month + day + yearIn2Digits;
    const ddMMYY = day + month + yearIn2Digits;

    switch (true) {
      case checkPalindrome(yyyyMMDD):
        return `${year}-${month}-${day}`;
      case checkPalindrome(mmDDYYYY):
        return `${month}-${day}-${year}`;
      case checkPalindrome(ddMMYYYY):
        return `${day}-${month}-${year}`;
      case checkPalindrome(yyMMDD):
        return `${yearIn2Digits}-${month}-${day}`;
      case checkPalindrome(mmDDYY):
        return `${month}-${day}-${yearIn2Digits}`;
      case checkPalindrome(ddMMYY):
        return `${day}-${month}-${yearIn2Digits}`;
      default:
        return null;
    }
  };

  //finding the next palindrome date neares to the current date

  const findNextDate = (year, month, day) => {
    let ddNo = Number(day);
    let mmNo = Number(month);
    let yyNo = Number(year);

    for (let i = 1; i > 0; i++) {
      // checking te next possible date
      ddNo = ddNo + 1;
      if (ddNo > Number(datesInMonth[mmNo - 1])) {
        ddNo = 1;
        mmNo = mmNo + 1;
        if (mmNo > 12) {
          mmNo = 1;
          yyNo = yyNo + 1;
        }
      }
      let yyString = yyNo.toString();
      let mmString = mmNo.toString();
      let ddString = ddNo.toString();
      if (mmString.length === 1) {
        mmString = '0' + mmString;
      }
      if (ddString.length === 1) {
        ddString = '0' + ddString;
      }
      let nextPalindromeDate = formatDate(yyString, mmString, ddString);
      if (nextPalindromeDate) {
        return [`${nextPalindromeDate}`, i];
      }
    }
  };

  return (
    <div id='scroll' className='App'>
      <Hero />
      <h1 className='App-heading'>
        Enter your birthdate and we will tell you if your birthdate is a
        palindrome
      </h1>
      <p className='App-desc'>
        This app checks your birthdate in 4 formats yyyy-mm-dd, dd-mm-yyyy,
        mm-dd-yy, m-dd-yyyy
        <br />
        e.g. if your birthdate is 01 Aug 1995, then app will check for 19950801,
        01081995, 080195, 1081995
      </p>
      <form className='Form-group' onSubmit={handleSubmit}>
        <div>
          <input
            type='date'
            onChange={(evt) => setBirthday(evt.target.value)}
          />
        </div>
        <button type='submit' className='Check'>
          Check
        </button>
      </form>
      {display !== '' && (
        <div className='Birthday-output'>
          <h3>{display}</h3>
        </div>
      )}
      {loading === true && (
        <div className='Birthday-loading'>
          <img
            src='https://img.pikbest.com/58pic/35/39/61/62K58PICb88i68HEwVnm5_PIC2018.gif!bw700'
            alt='loading'
          />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default App;
