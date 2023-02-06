import ReactDOM from "react-dom";
import Providers from "./Providers";


import { providerProps } from "utils/test/mockProviderData";

ReactDOM.render(
  <Providers {...providerProps}/>,
  document.getElementById("root"),
);
