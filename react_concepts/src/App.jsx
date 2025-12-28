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
import CounterUseReducer from "./IPComponents/useReducer/CounterUseReducer.jsx";
import AppContext from "./IPComponents/useContext/AppContext.jsx";
import UseCallbackParent from "./IPComponents/useCallback/UseCallbackParent.jsx";
import { UseMemoDoubleNumbers } from "./IPComponents/useMemo/UseMemoDoubleNumbers.jsx";
import UseLayoutEffectUse from "./IPComponents/useLayoutEffect/UseLayoutEffectUse.jsx";
function App() {
  return (
    <>
      <UseLayoutEffectUse />
      <UseMemoDoubleNumbers />
      <UseCallbackParent />
      <AppContext />
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

      {/* useReducer */}
      <CounterUseReducer />
    </>
  )
}

export default App
