import PublicRoutes from "./pages/public";

const isLogged = false;

function App() {
  return (
    <div className="App bg-[#F7FCFF] w-screen h-screen font-montserrat">
      {isLogged ? <div></div> : <PublicRoutes />}
    </div>
  );
}

export default App;
