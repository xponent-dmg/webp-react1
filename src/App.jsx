import { Hello } from "./components/Hello.jsx";
import { Fruits } from "./components/Fruits.jsx";
// import { Inline } from "./components/Inline.jsx";
import { Square } from "./components/Square";
import { Time } from "./components/ternary";
import { Day } from "./components/dynamic";
import { Prime } from "./components/isprime";
import { Tc } from "./components/temperature";
import { ReversePalindrome } from "./components/palindrome";
import { Random } from "./components/random";
import { LeapYearCheck } from "./components/year";
import { UserGreeting } from "./components/Propcomp";

import React from "react";
import "./App.css";
function App() {
  // return <Hello />;
  // return <Fruits />;
  // return <Inline />;
  // return <Square />;
  // return <Time />;
  // return <Day />;
  // return <Prime />;
  // return <Tc />;
  // return <ReversePalindrome />;
  // return <Random />;
  // return <LeapYearCheck />;
  return <UserGreeting firstName="Abhishek" lastName="S" />;
}
export default App;
