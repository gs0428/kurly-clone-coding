import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Layout from "./pages/Layout";
import Market from "./pages/Market";
import Beauty from "./pages/Beauty";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "/", element: <Market /> },
      { path: "/beauty", element: <Beauty /> },
    ],
  },
]);

function App() {
  return (
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  );
}

export default App;
