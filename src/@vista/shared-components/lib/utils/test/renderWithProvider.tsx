import { render } from "@testing-library/react";
import { ReactNode } from "react";

import { ThemeProvider } from "@health/theme-common";

import { getStyleTheme } from "../styleTheme";

const styleTheme = getStyleTheme();

const renderWithProvider = (ui: ReactNode) => {
  return render(<ThemeProvider theme={styleTheme}>{ui}</ThemeProvider>);
};

export default renderWithProvider;
