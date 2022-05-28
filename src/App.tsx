import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from "@aws-amplify/ui-react";

import { AppLayout } from "./views/_appLayout/AppLayout";

export function App() {
  return (
    <Authenticator hideSignUp={true}>
      <Authenticator.Provider>
        <AppLayout />
      </Authenticator.Provider>
    </Authenticator>
  );
}
