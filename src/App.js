import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import './App.css';
import HomePage from './component/homepage.component';
import SignInAndSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';
import Header from './component/header/header.component';
import UserPage from './pages/userPage/userpage.component';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      currentUser: null
    };
  }
  unsubscribeFromAuth = null

  componentDidMount(){
    this.unsubscribeFromAuth= auth.onAuthStateChanged(async userAuth => {
     if(userAuth){
       const userRef = await createUserProfileDocument(userAuth);

       userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        },() => {
          console.log(this.state);
        });
       });
      
     }
     this.setState({currentUser: userAuth});
    });
  }
  componentWillUnmount(){
    this.unsubscribeFromAuth();
  }

  render(){
  return (
    <div>
    <Header currentUser={this.state.currentUser}/>
   
    <Switch>
    
       <Route exact path='/' component={HomePage}/>
       <Route path='/sign-up' component={SignInAndSignUp}/>
       <Route path='/user-page' component={UserPage}/>
       <Route path='/login'  render={() => 
        this.props.currentUser ?(
           <Redirect to='/user-page'/>
           ) : (
             <SignInAndSignUp/>)}
             />     
       </Switch>
    </div>
  );
}
}
export default App;
