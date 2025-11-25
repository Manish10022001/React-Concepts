import ControlledComponent from "./IPComponents/ControlledComponent"
import UncontrolledComponent from "./IPComponents/Uncontrolledomponent"
import Context from "./IPComponents/Context.jsx";
import ContextPtifall from "./IPComponents/ContextPitfall.jsx";
import UseEffectVsUseLayoutEffect from "./IPComponents/UseEffectVsUseLayoutEffect.jsx";
import FocusUseRef from "./IPComponents/useRef/FocusUseRef.jsx";
import TimerUseRef from "./IPComponents/useRef/TimerUseRef.jsx";
import ReferenceValueUseRef from "./IPComponents/useRef/ReferenceValueUseRef.jsx";
import UseCallbackExampleOne from "./IPComponents/useCallback/UseCallbackExampleOne.jsx";
import ExpensiveCalculationComponent from "./IPComponents/useMemo/ExpensiveCalculationComponent.jsx";
function App() {
  return (
    <>
     <ControlledComponent />
      <UncontrolledComponent />

      {/* useContext */}
      <Context />
      <ContextPtifall />

      <UseEffectVsUseLayoutEffect />

      {/* useRef */}
      <FocusUseRef />
      <TimerUseRef />
      <ReferenceValueUseRef />

      {/* useCallback */}
      <UseCallbackExampleOne />
      
      {/* useMemo */}
      <ExpensiveCalculationComponent num={85}/>
    </>
  )
}

export default App
