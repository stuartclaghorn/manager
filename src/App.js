import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyBRIJZ9w5KT06bNw0DwykPuzgHMaye3d5o',
      authDomain: 'manager-b486c.firebaseapp.com',
      projectId: 'manager-b486c',
      storageBucket: 'manager-b486c.appspot.com',
      messagingSenderId: '968322983487',
      appId: '1:968322983487:web:f7490a5b2c29bf12827a8a',
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
