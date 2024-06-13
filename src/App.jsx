import { Fragment } from 'react';
import Counter from './component/Counter';
import Header from './component/Header'
import Auth from './component/Auth'
import UserProfile from './component/UserProfile'
import { useSelector } from 'react-redux';


function App() {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Fragment>
      <Header />
      {!isAuth && <Auth />}
      {isAuth && <UserProfile />}
      <Counter />
    </Fragment>
  );
}

export default App;
