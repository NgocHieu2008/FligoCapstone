import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout/defaultlayout';
import PrimaryLayout from '~/components/Layout/PrimaryLayout/primarylayout';
import { useState, useEffect } from 'react';
function App() {

  // check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // check token in local storage
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);
  
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return <Route 
              key={index} 
              path={route.path} 
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
          {isLoggedIn && privateRoutes.map((route, index) => {
            const Layout = route.layout || PrimaryLayout;
            const Page = route.component;
            return <Route 
              key={index} 
              path={route.path} 
              element={
                <Layout>
                  <Page />
                </Layout>
              } />
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
