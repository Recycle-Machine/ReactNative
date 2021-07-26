import React from "react"
import { NavigationContainer } from "@react-navigation/native"
import BadgesStack from "./src/Components/BadgesScreen/BadgesStack.js";

const App = () => {
  return(
  <NavigationContainer>
    <BadgesStack/>
  </NavigationContainer>
  );
};

export default App;
