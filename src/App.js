import PublicRoutes from "./pages/public";
import AppRoutes from './pages/app/index';
import getToken from "./util/get-token";

const isLogged = getToken();

function App() {
  return (
    <div className="App bg-[#F7FCFF] font-montserrat ">
      {isLogged ? <AppRoutes/> : <PublicRoutes />}
    </div>
  );
}

export default App;
