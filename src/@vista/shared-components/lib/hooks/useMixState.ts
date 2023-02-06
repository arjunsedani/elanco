import { useRef, useState } from "react";

/**
 * # Feature
 * mix prop and state together so that we can make the component both control and uncontrol
 *
 * # Priority
 * 1.`prop` is the highest-level, once `prop` is not empty `defaultProp` and `innerState` will be override
 * 2. `innerState` is Medium-level, can override `defaultProp`
 * 3. `defaultProp` a defaultValue
 *
 * @link https://reactjs.org/docs/uncontrolled-components.html
 * @link https://reactjs.org/docs/forms.html#controlled-components
 * @link https://stackoverflow.com/questions/59369315/difference-between-react-controlled-component-and-uncontrolled-component
 *
 * @param prop pass a prop that can control the component
 * @param defaultValue default prop
 * @returns
 */
export const useMixState = <T>(prop: T, defaultValue: T) => {
  const [innerState, setInnerState] = useState(defaultValue);
  const propsValue = useRef(prop);
  const setState = (update: ((prevState: T) => T) | T): void => {
    if (prop === undefined) {
      setInnerState(update);
    }
  };
  propsValue.current = prop ?? propsValue.current;
  const mixValue = !prop ? innerState : propsValue.current;

  return [mixValue, setState] as const;
};
