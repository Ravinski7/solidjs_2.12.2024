import { Router, Route } from "@solidjs/router"
import Home from "./pages/Home";

export default function App() {
  return (
    <Router root={Layout}>
      <Route path="/" component={Home} />
    </Router>
  );
}

function Layout(props) {
  const appName = import.meta.env.VITE_APP_NAME;

  return (
    <div class="p-4 flex flex-col gap-4 ">
      <div class="">{appName}</div>
      {props.children}
      <div>Podnožje</div>
    </div>
  );
}


