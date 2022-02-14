import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.scss';
import HomePage from './pages/homepage/homepage';
import ShopPage from './pages/shop/shop';
import AuthPage from './pages/auth/auth';
import Header from './components/header/header'

import { auth, createUserProfileDocument } from './firebase/utils';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      currentUser: null,
    }
  }

  componentDidMount() {
    this.unsubscribeFromAuth =  auth.onAuthStateChanged(async userAuth => {

      if (!!userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser: {
              id: snapshot.id,
              ...snapshot.data,
            },
          })
        })
      } else {
        this.setState({
          currentUser: null
        })
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }


  render() {
    const { currentUser } = this.state;

    return (
      <div>
        <Header currentUser={currentUser} />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route path='/auth' component={AuthPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
