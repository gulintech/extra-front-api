import "@aws-amplify/ui-react/styles.css";

import { Authenticator } from "@aws-amplify/ui-react";
import { Button } from "@mui/material";

function App() {
  return (
    <Authenticator>
      <Button variant="contained">Hello world!</Button>
    </Authenticator>
  );
}

export default App;
