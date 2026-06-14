
// import ReactDOM from "react-dom/client";
// import "./index.css";
// import { RouterProvider } from "react-router-dom";
// import router from "./routes/router";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );



import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/router";
import Lenis from "@studio-freight/lenis";
import { HelmetProvider } from "react-helmet-async";
<HelmetProvider>
  <RouterProvider router={router} />
</HelmetProvider>

const lenis = new Lenis({
  duration: 1.2,
  smooth: true,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);