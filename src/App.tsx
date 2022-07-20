import "@aws-amplify/ui-react/styles.css";

import { BrowserRouter } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";

import { AppLayout } from "./views/_appLayout/AppLayout";

export function App() {
  return (
    <Authenticator hideSignUp={true}>
      <Authenticator.Provider>
        <BrowserRouter>
          <AppLayout />
        </BrowserRouter>
      </Authenticator.Provider>
    </Authenticator>
  );
}
