import React from 'react';
import { Switch, Route }  from 'react-router-dom';

import './App.css';

import HomePage from './pages/homepages/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import Header from './components/header/header.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

//We have to modify the /App.js component.
//convert the function App to a class component
class App extends React.Component {
  constructor(){
    super();
    this.state={
      currentUser: null
    };
  }

  //we wouldn like to have any mamory liks tou our subscription
  //therfore we have to unsubscribe from the auth
  unsubscribeFromAuth = null;

  // we want to be aware when somebody signs in or out 
  //we use the onAuthChange method from the firebases  // auth // library
  //when components mount
  //we get a user object from firebase - greate ausers sessions
  componentDidMount(){

    //this OPEN SUBSCRIPTIONS is an open messaging system between our applicaion and firebase
    //whenever any change accour on firebase from any source 
    //firebase sends message that the auth status has change
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth =>{
      createUserProfileDocument(userAuth);
      // if sigh in taking back the user data
        if(userAuth){
          const userRef = await createUserProfileDocument(userAuth);
          userRef.onSnapshot(snapShot =>{
            this.setState({
              currentUser: {
                id: snapShot.id,
                ...snapShot.data()
              }
              
            });
            console.log(this.state);
          });
         
          // else takinkg back null
        }
          this.setState({currentUser: userAuth});
        
    });
  }

  //close the subscription whever the component will unmound
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
    return (
      <div >
        {/* let header nows the uf the user */}
        <Header currentUser={this.state.currentUser} />
        <Switch>
            <Route exact path='/' component={HomePage} />
            <Route path='/shop' component={ShopPage} />
            <Route path='/signin' component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
