import { Hello } from "./components/Hello.jsx";
import { Fruits } from "./components/Fruits.jsx";
import { Inline } from "./components/Inline.jsx";
import { Square } from "./components/Square";
import { Time } from "./components/ternary";
import { Day } from "./components/dynamic";
import { Prime } from "./components/isprime";
import { Tc } from "./components/temperature";
import { ReversePalindrome } from "./components/palindrome";
import { Random } from "./components/random";
import { LeapYearCheck } from "./components/year";
import { UserGreeting } from "./components/Propcomp";
import { Divider } from "./components/Divider.jsx";

import React from "react";
import "./App.css";
function App() {
  return (
    <>
      <Divider exerciseNum={1} />
      <Hello />

      <Divider exerciseNum={2} />
      <Fruits />

      <Divider exerciseNum={3} />
      <Inline />

      <Divider exerciseNum={4} />
      <Square />

      <Divider exerciseNum={5} />
      <Time />

      <Divider exerciseNum={6} />
      <Day />

      <Divider exerciseNum={7} />
      <Prime />

      <Divider exerciseNum={8} />
      <Tc />

      <Divider exerciseNum={9} />
      <ReversePalindrome />

      <Divider exerciseNum={10} />
      <Random />

      <Divider exerciseNum={11} />
      <LeapYearCheck />

      <Divider exerciseNum={12} />
      <UserGreeting firstName="Harishankar" lastName="R" />
    </>
  );
}
export default App;
