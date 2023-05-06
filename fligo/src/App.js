import {BrowserRouter, Route, Switch} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes/routes';
import DefaultLayout from '~/components/Layout/DefaultLayout/defaultlayout';
import PrimaryLayout from '~/components/Layout/PrimaryLayout/primarylayout';
import { useState, useEffect } from 'react';
import {SearchProvider} from '~/components/SearchBar/SearchContext'
import { UserProvider } from "~/contexts/UserContext";
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
          {!isLoggedIn &&
            privateRoutes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={true}
                component={route.component}
              />
            ))}
        </Switch>
      </BrowserRouter>
        </SearchProvider>
    </UserProvider>
  );
}

export default App;
