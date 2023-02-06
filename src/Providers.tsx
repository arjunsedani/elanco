// import { I18nextProvider } from "react-i18next";
// import { Provider } from "react-redux";
// import { BrowserRouter as Router } from "react-router-dom";

// import { MfeProps } from "types/digi-props";
// import { Locale, RegionId } from "types/enums";
// // import { getStyleTheme } from "@vista/shared-components/lib/utils/styleTheme";

// import store from "./data/store";
// import services from "./services";

// import { createI18nInstance } from "./utils/lang/i18n";

// import App from "./App";
// import { ThemeProvider } from "@health/theme-common";

// const Providers = (props: MfeProps) => {
//   const modifiedProps = { ...props };
//   const lng = modifiedProps.language?.toLowerCase() || Locale.EN;
//   const region = modifiedProps.regionId?.toUpperCase() || RegionId.TW;
//   const i18n = createI18nInstance(lng, region);
//   const basePath = modifiedProps?.basePath;
//   console.log("bases path", basePath)

//   return (
//     <I18nextProvider i18n={i18n}>
//       <Provider
//         store={store(services(modifiedProps), {
//           props: { data: modifiedProps as MfeProps },
//         })}
//       >
//         <Router basename={basePath || process.env.PUBLIC_URL}>
//           <ThemeProvider theme={getStyleTheme() as any}>
//             <App />
//           </ThemeProvider>
//         </Router>
//       </Provider>
//     </I18nextProvider>
//   );
// };

// export default Providers;


import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import { MfeProps } from "types/digi-props";
import {
  ChannelSite,
  Locale,
  RegionId,
  Site,
} from "types/enums";
import { getStyleTheme } from "@vista/shared-components/lib/utils/styleTheme";

import { ThemeProvider } from "@health/theme-common";
import Button from "@health/buttons";

const Providers = (props: MfeProps) => {
  const modifiedProps = { ...props };
  const lng = modifiedProps.language?.toLowerCase() || Locale.EN;
  const region = modifiedProps.regionId?.toUpperCase() || RegionId.TW;
  const basePath = modifiedProps?.basePath;

  let customerID = "";
  if (props.region === RegionId.SG || props.region === RegionId.HK) {
    customerID = props.sysGenUid;
  } else if (props.region === RegionId.TW) {
    customerID = props.sysGenUID;
  }


  return (
 <>
        {/* <Router basename={basePath || process.env.PUBLIC_URL}> */}
          <ThemeProvider theme={getStyleTheme() as any}>
          <Button kind="primary" size="medium">
      medium
    </Button>
          </ThemeProvider>
        {/* </Router> */}
   </>
  );
};

export default Providers;

