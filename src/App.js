import PublicRoutes from "./pages/public";

const isLogged = false

function App() {
  return <div className="App">{isLogged ? <div></div> : <PublicRoutes />}</div>;
}

export default App;
