import Layout from "../pages/Layout";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Network from "../pages/Network";
import Statistics from "../pages/Statistics";
import Administration from "../pages/Administration";
import Error404 from "../pages/Error404";

function App() {
  return (
    <BrowserRouter>
      <Routes>npm
        <Route path="/" element={<Layout/>}>
          <Route index element={<Dashboard/>}/>
          <Route path="/network" element={<Network/>}/>
          <Route path="/statistics" element={<Statistics/>}/>
          <Route path="/administration" element={<Administration/>}/>
          <Route path="*" element={<Error404/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
