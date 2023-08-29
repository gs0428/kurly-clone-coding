import { Route, Routes } from "react-router-dom";
import Layout from "../src/components/Layout";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";
function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Market />} />
        <Route path="/beauty" element={<Beauty />} />
      </Routes>
    </Layout>
  );
}

export default App;
