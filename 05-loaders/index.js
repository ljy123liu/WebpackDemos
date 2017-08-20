var two = require("./two");
console.log(two.first);
document.write("i am index.js");
document.write("<br>");
document.write(two.first);
document.write("<br>");
document.write(two.second);
document.write("<br>");
document.write(two.three);
document.write("<br>");
document.write(two.four);
document.write("<br>");
document.write(two.five);
document.write("<br>");
document.write(two.six);

import React from 'react';
import {render} from 'react-dom';
import Greeter from './Greeter';

render(<Greeter />, document.getElementById('root'));


