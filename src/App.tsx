import Router from './components/Router/Router';
import { AboutUs, Home, Register, SignIn, AppCart } from './pages/index';

function App() {
  return (
    <>
      <Router
        routes={[
          { path: '/home', component: Home },
          { path: '/about', component: AboutUs },
          { path: '/sign-in', component: SignIn },
          { path: '/register', component: Register },
          { path: '/cart', component: AppCart },
        ]}
      />
    </>
  );
}

export default App;
