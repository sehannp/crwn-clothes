import React, {useEffect} from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.componenet';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { selectCurrentUser } from './redux/user/user.selector';
import CheckoutPage from './pages/checkout/checkout.component';
import { checkUserSession } from './redux/user/user.actions';

const App = ({checkUserSession, currentUser}) => {

  useEffect( () => {
    checkUserSession();
  },[checkUserSession])
  
  
  //render shown within the route below is another way of invoking route.. see : https://reacttraining.com/react-router/web/api/Route/render-func

    return (
    <div>
      <Header/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route path="/shop" component={ShopPage}/>
        <Route exact path="/signin" 
               render={ ()=> currentUser === null ?
                (<Redirect to='/'></Redirect>)
              :(<SignInAndSignUp></SignInAndSignUp>)
              }/>
        <Route exact path="/checkout" component={CheckoutPage}/>
        
      </Switch>
    </div>
    );

}


const mapStateToProps = (state)  => ({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps,mapDispatchToProps)(App);
