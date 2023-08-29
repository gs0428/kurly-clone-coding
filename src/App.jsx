import Layout from "../src/components/Layout";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";
function App() {
  const location = window.location.pathname;
  return <Layout>{location === "/kurly-clone-coding" ? <Market /> : <Beauty />}</Layout>;
}

export default App;
