import ControlledComponent from "./IPComponents/ControlledComponent"
import UncontrolledComponent from "./IPComponents/Uncontrolledomponent"
import Context from "./IPComponents/Context.jsx";
import ContextPtifall from "./IPComponents/ContextPitfall.jsx";
import UseEffectVsUseLayoutEffect from "./IPComponents/UseEffectVsUseLayoutEffect.jsx";
import FocusUseRef from "./IPComponents/useRef/FocusUseRef.jsx";
import TimerUseRef from "./IPComponents/useRef/TimerUseRef.jsx";
import ReferenceValueUseRef from "./IPComponents/useRef/ReferenceValueUseRef.jsx";
import UseCallbackExampleOne from "./IPComponents/useCallback/UseCallbackExampleOne.jsx";
function App() {
  return (
    <>
     <ControlledComponent />
      <UncontrolledComponent />
      <Context />
      <ContextPtifall />
      <UseEffectVsUseLayoutEffect />
      <FocusUseRef />
      <TimerUseRef />
      <ReferenceValueUseRef />
      <UseCallbackExampleOne />
    </>
  )
}

export default App
