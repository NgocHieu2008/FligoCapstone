import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import { publicRoutes, privateRoutes } from '~/routes/routes';
import DefaultLayout from '~/components/Layout/layout';
function App() {
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
        </Routes>
      </div>
    </Router>
  );
}

export default App;
