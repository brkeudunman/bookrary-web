import PublicRoutes from "./pages/public";
import AppRoutes from './pages/app/index';

const isLogged = false;

function App() {
  return (
    <div className="App bg-[#F7FCFF] font-montserrat ">
      {isLogged ? <AppRoutes></AppRoutes> : <PublicRoutes />}
    </div>
  );
}

export default App;
