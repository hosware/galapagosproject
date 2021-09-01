import './App.css';
import React from 'react';
//import ProtectedRoute from './components/ProtectedRoute';
import { Route, Redirect } from 'react-router-dom';
import WelcomePage from './components/WelcomePage';
import NavBar from './components/NavBar';

class App extends React.Component {


  render() {

    return (
      <div>
        <NavBar />

        <Route
          exact path='/'
          render={props => <WelcomePage />}
        />

        {/* <Route
          exact path="/login"
          render={props => <Login user={this.state.user} setUser={this.setUser} {...props}/>}
          />

        <Route
          exact path="/signup"
          render={props => <Signup setUser={this.setUser} {...props}/>}
          />

        <Route
          exact path="/signupHousehold"
          render={props => <CreateHousehold user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
          />  


        <Route
          exact path='/loginHousehold'
          render={props => <JoinHousehold  user = {this.state.user} setUser={this.setUser} setHousehold={this.setHousehold} {...props}/>}
        />

        <Route
          exact path='/household'
          render={props => {
            if (this.state.user) return <Household user= {this.state.user} {...props} />
            else return <Redirect to='/' />
          }}
          />

        <Route
           exact path='/createOrJoinHousehold'
           render = {props => <HCreateOrJoin/>}
        />


          <Route 
            exact path='/household/items/:id'
            render={props => {
              if (this.state.user) return <ItemDetails user= {this.state.user} {...props} />
              else return <Redirect to='/'/>
            }}
            />
            <Route 
            exact path='/profile'
            render={props => {
              if (this.state.user) return <Profile user= {this.state.user} setUser = {this.setUser} household = {this.state.household} {...props} />
              else return <Redirect to='/'/>
            }}
            /> */}



        

        {/* This route is now protected */}
        {/* <Route
          exact path='/projects'
          // here we also use a render prop
          render={props => {
            if (this.state.user) return <Projects {...props} />
            else return <Redirect to='/' />
          }}
        /> */}
        {/* <Route
          exact path='/signup'
          // component={Signup}
          render={props => <Signup setUser={this.setUser} {...props} />}
        />
        <Route
          exact path='/login'
          render={props => <Login setUser={this.setUser} {...props} />} */}
        {/* /> */}
      </div>
    );
  }}

export default App;