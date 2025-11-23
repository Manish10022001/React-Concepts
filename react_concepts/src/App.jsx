import ControlledComponent from "./IPComponents/ControlledComponent"
import UncontrolledComponent from "./IPComponents/Uncontrolledomponent"
import Context from "./IPComponents/Context.jsx";
import ContextPtifall from "./IPComponents/ContextPitfall.jsx";
import UseEffectVsUseLayoutEffect from "./IPComponents/UseEffectVsUseLayoutEffect.jsx";
function App() {
  return (
    <>
     <ControlledComponent />
      <UncontrolledComponent />
      <Context />
      <ContextPtifall />
      <UseEffectVsUseLayoutEffect />
    </>
  )
}

export default App
