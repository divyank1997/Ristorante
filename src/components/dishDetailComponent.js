import React , {Component} from 'react' ;
import { Card, CardImg,  CardText, CardBody,
    CardTitle ,Breadcrumb, BreadcrumbItem , Button , Modal , ModalHeader, ModalBody , Label , Row} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control , LocalForm , Errors } from 'react-redux-form';

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !(val) || (val.length <= len);
const minLength = (len) => (val) => val && (val.length >= len);


class CommentForm extends Component 
{
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen : false 
    };
    this.toggleModal = this.toggleModal.bind(this);      
        this.handleSubmit = this.handleSubmit.bind(this);  
  }
  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen
    });
  }
  handleSubmit(values) 
  {
    this.toggleModal();
    this.props.addComment(this.props.dishId , values.rating , values.author , values.comment);

    
  }
render () {
  return (
    <div>
        <Button outline onClick ={this.toggleModal}>
          <span className = "fa fa-pencil fa-lg"></span> Submit Comment
        </Button>
  <Modal isOpen = {this.state.isModalOpen} toggle = {this.toggleModal}>
                    <div className = "container">
                    <ModalHeader toggle = {this.toggleModal}>
                       Comment
                    </ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit ={(values) => this.handleSubmit(values)}>
                            <Row className = "form-group">
                                <Label htmlFor = "rating" > Rating </Label>
                                <Control.select  model =".rating " name="rating" id="rating" className ="form-control">
                                <option>1</option>
                                        <option>2</option>
                                        <option>3</option>   
                                        <option>4</option>
                                        <option>5</option>
                                </Control.select>
                            </Row>
                            <Row className = "form-group">
                                <Label htmlFor = "author" >Your name</Label>
                                <Control.text model = ".author" name="author" id="author" className ="form-control" 
                                validators = {{
                                  required , minLength : minLength(3) , maxLength : maxLength(15)
                                }}
                               />
                               <Errors
                               className = "text-danger"
                               model = ".author"
                               show ="touched"
                               messages = {{
                                   required : 'Required' , 
                                   minLength : 'Min length should be 3' , 
                                   maxLength : 'max length should be 15'
                               }}
                               
                               />
                            
                            </Row>
                            <Row className = "form-group" >
                                <Label htmlFor = "comment"> Comment</Label>
                                <Control.textarea model=".comment" name="comment" rows ="6" className ="form-control"></Control.textarea>
                             </Row>
                            <Button type="submit" name="submit" className ="bg-primary" >Submit</Button>
                        </LocalForm>
                    </ModalBody>
                    </div>
                </Modal>
                </div>
  );
}
}


  function RenderDish({dish}) {
    console.log("dish " ,dish)
    console.log("dishid " ,dish.id)
  if(dish != null) {
      return(
        <div className="container">
                <Card key ={dish.id}>
                  <CardImg top src={dish.image} alt={dish.name} />
                  <CardBody>
                    <CardTitle>{dish.name}</CardTitle>
                    <CardText>{dish.description}</CardText>
                  </CardBody>
                </Card>
        </div>
      );
   } 
    else {
      return(
        <div></div>
      );
    }  
  }

  function RenderComment({comments  , addComment , dishId}) {
    console.log("comment " , comments)
    if(comments != null){
    const newDish = comments.map((comment) => {
      return (
        <div className="list-unstyled">
          <li key={comment.id}>
            <p>{comment.comment}</p>
            <p>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</p>
          </li>
        </div>
      )
    });
  
    return (
          
        <div className="list-unstyled">
          <h4>Comments</h4>
          {newDish}
         <CommentForm addComment={addComment} dishId = {dishId}/>
        </div>
    );
  }

else return(
  <div></div>
  );
}


const DishDetail = (props) => {
    
  return (
    <div className="container">
    <div className="row">
        <Breadcrumb>

            <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
            <BreadcrumbItem active>{props.dish[0].name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
            <h3>{props.dish[0].name}</h3>
        </div>                
    </div>
    <div className="row">
        <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish[0]} />
        </div>
        <div className="col-12 col-md-5 m-1">
        
            <RenderComment comments={props.comments} addComment = {props.addComment} dishId = {props.dish[0].id} />
       
        </div>
    </div>
    </div>
);

  }


export default DishDetail;









