import React, {ReactElement} from "react";
import { render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";

import { ThemeProvider } from "./contexts/ThemeContext";

type Props = {
  children?: ReactElement
}

const Wrapper: React.FC<Props> = ({children}) => {
  return (
    <ThemeProvider>
      <MemoryRouter>
        { children }
      </MemoryRouter>
    </ThemeProvider>
  );
};

const customRender = (ui:ReactElement, options?:any) => {
  return render(ui, { wrapper: Wrapper, ...options })
};

export * from "@testing-library/react";

export { customRender as render };