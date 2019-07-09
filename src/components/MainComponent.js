import React, { Component } from 'react';
import Header from './HeaderComponent';
import Home from './HomeComponents';
import Contact from './ContactComponent';
import Footer from './FooterComponent';
import Menu from './MenuComponents';
import About from './AboutComponent';
import DishDetail from './dishDetailComponent';
import {Switch , Route , Redirect , withRouter} from 'react-router-dom';
import {connect} from 'react-redux' ; 


const mapStateToProps = state => {
        return {
          dishes : state.dishes , 
          promotions: state.promotions, 
          leaders : state.leaders,
          comments : state.comments
        };
}


class Main extends Component {


 

  render() {

    const DishWithId = ({match}) => {
      return (
        <DishDetail dish ={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10)[0] )}
        comment ={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))}
        />
      );
      }
    const HomePage = () => {
      return (
        <Home dish = {this.props.dishes.filter((dish) => dish.featured)[0]}
              leader = {this.props.leaders.filter((leader) => leader.featured)[0]}
               promotion = {this.props.promotions.filter((promotion) => promotion.featured)[0]}        
        
        />
      );
      }
      
        const AboutPage = () => {
      return (
        <About
              leaders = {this.props.leaders}  />
      );
      }
    return (
      <div>
       <Header/>
       <Switch>
         <Route path ="/home" component = {HomePage}/>
         <Route path ="/aboutus" component ={AboutPage} />
    <Route exact path ="/menu" component ={()=> <Menu dishes ={this.props.dishes} /> }/>
    <Route  path ="/menu/:dishId" component ={DishWithId}/>
    <Route exact path ="/contactus" component = {Contact}/>
    
       <Redirect to="/home"/>
       </Switch>
        <Footer/>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));