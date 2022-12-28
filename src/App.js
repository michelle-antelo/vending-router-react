import { BrowserRouter, Route } from "react-router-dom";
import VendingMachine from "./VendingMachine";
import Candy from "./Candy";
import Soda from "./Soda";
import Chips from "./Chips";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Route exact path={"/"}> <VendingMachine/> </Route>
        <Route exact path={"/candy"}> <Candy/> </Route>
        <Route exact path={"/soda"}> <Soda/> </Route>
        <Route exact path={"/chips"}> <Chips/> </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
