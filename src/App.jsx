import "./App.css";
import ChangeState from "./Components/ChangeState";
import ClassComp from "./Components/ClassComp";
import ComponentdidMount from "./Components/ComponentdidMount";
import ComponentdidUpdate from "./Components/ComponentdidUpdate";
import ExampleLifeCycle from "./Components/ExampleLifeCycle";
import Exercise from "./Components/Exercise";
import Header from "./Components/Header";
import OldStateEx from "./Components/OldStateEx";
import OldStateMethod from "./Components/OldStateMethod";
import State from "./Components/State";

function App() {
  return (
    <>
      <ClassComp name="class" />
      <Header username="Junior" />
      <State />
      <ChangeState />
      <Exercise />
      <OldStateMethod />
      <OldStateEx />
      <ComponentdidMount />
      <ComponentdidUpdate />
      <ExampleLifeCycle />
    </>
  );
}

export default App;
