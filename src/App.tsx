import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from "@aws-amplify/ui-react";

import { Main } from "./views/main";

function App() {
  return (
    <Authenticator hideSignUp={true}>
      <Authenticator.Provider>
        <Main />
      </Authenticator.Provider>
    </Authenticator>
  );
}

export default App;
