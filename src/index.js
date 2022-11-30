import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// function toCamelCase(str) {
//   const splitSrt = str.replace(/[^A-Z0-9]/gi, '_').split('_');

//   let finArray = [];

//   finArray.push(splitSrt.splice(0, 1));

//   for (const word of splitSrt) {
//     let wordArray = word.split('');
//     const firstLetter = wordArray[0].toUpperCase();

//     wordArray.splice(0, 1, firstLetter);
//     const wordJoin = wordArray.join('');

//     finArray.push(wordJoin);
//   }

//   const finSrting = finArray.join('');

//   return finSrting;
// }

function toCamelCase(str) {
  var regExp = /[-_]\w/gi;
  return str.replace(regExp, function (match) {
    return match.charAt(1).toUpperCase();
  });
}
console.log(toCamelCase('The_stealth-warrior'));
