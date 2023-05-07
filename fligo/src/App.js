import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout/defaultlayout';
import PrimaryLayout from '~/components/Layout/PrimaryLayout/primarylayout';
import { useState, useEffect } from 'react';
import {SearchProvider} from '~/components/SearchBar/SearchContext'
import { UserProvider } from "~/contexts/UserContext";
import decode from 'jwt-decode';
function App() {

  // check if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // check token in local storage
  const token = localStorage.getItem("token");

  if(token){
    const decoded = decode(token);
  const currentTime = Date.now() / 1000; // lấy giá trị thời gian hiện tại
  if (decoded.exp < currentTime) {
    // Nếu thời hạn token đã hết hạn, ta xóa token khỏi localStorage
    localStorage.removeItem('token');
    // và đặt lại state
    setIsLoggedIn(false);
    window.location.reload();
    window.location.href = "/";
  }
  }

  useEffect(() => {
    if (token) {
      setIsLoggedIn(true);
    }
  }, [token]);
  
  return (
    <UserProvider>
      <SearchProvider>
      <BrowserRouter>
        <Switch>
          {publicRoutes.map((route, index) => {
            const Layout = route.layout || DefaultLayout;
            const Page = route.component;
            return (
              <Route
                key={index}
                path={route.path}
                exact={true}
                render={(props) => (
                  <Layout>
                    <Page {...props} />
                  </Layout>
                )}
              />
            );
          }
          )}
          {isLoggedIn &&
            privateRoutes.map((route, index) => {
              const Layout = route.layout || PrimaryLayout;
              const Page = route.component;
              return (
                <Route
                  key={index}
                  path={route.path}
                  exact={true}
                  render={(props) => (
                    <Layout>
                      <Page {...props} />
                    </Layout>
                  )}
                />
              );
            })}
        </Switch>
      </BrowserRouter>
        </SearchProvider>
    </UserProvider>
  );
}

export default App;
