import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibality] = useState(false);
  return (
    <div>
      <Alert onClose={() => setAlertVisibality(false)}>
        Hello <span>World</span>
      </Alert>
      {/* /dissmissable alert*/}
      {alertVisible && (
        <Alert onClose={() => setAlertVisibality(false)}>
          Oh, you clicked that button!
        </Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisibality(true)}>
        Don't click this button
      </Button>
    </div>
  );
}

export default App;
