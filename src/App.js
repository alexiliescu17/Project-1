import React from 'react';
import UserList from './components/UserList';
import UserAddForm from './components/UserAddForm';
import PostList from './components/PostList';
import './App.css';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      background: 'white',
      color: 'black',
      users: [],
      posts: [],
      dis:3
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        data = data.filter(user => user.id < 6);
        data.forEach(user => {
          user.isGoldClient = false; 
          user.salary="4500 RON";
          user.image=<img src='https://via.placeholder.com/150/92c952/' alt='Man'/>
        });
        this.setState({users: data});
      });
      fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        data = data.filter(post => post.userId < 4);
        this.setState({posts: data});
      });
    }


  //Function for background color change
  changeColor(event) {
    this.setState({background: event.target.value});
  }
  
  //Function for text color change
  changeTextColor(event) {
    this.setState({color: event.target.value});
  }
  
//Function for display userlist
  changeUsers() {
    this.setState({dis: 10});
    console.log(this.state.dis);
  }

//Function for display Postlist
  changePosts() {
    this.setState({dis: 5});
    console.log(this.state.dis);
  }

  
  getMaxId(users) {
    let maxId = 0;

    users.forEach(user => {
      if (user.id > maxId) {
        maxId = user.id;
      }
    });

    return maxId;
  }

  submitAddForm(event, name, email, isGoldClient) {
    event.preventDefault();
    this.setState(prevState => {
      return {
        users: [
          ...prevState.users,
          {
            id: this.getMaxId(prevState.users) + 1,
            name,
            email,
            isGoldClient
          }
        ]
      }
    });
  }

  render() {
    return(
      <div className="app" style={{background: this.state.background, color:this.state.color}}>
        <div className="title">
          <h1>Admin panel - Proiectul 1</h1>
        </div>
        
        <div className="page">
        <div className="console">
          <div className="user-form">
            <UserAddForm submitAddForm={(event, name, email, isGoldClient) => this.submitAddForm(event, name, email, isGoldClient)}/>
          </div>
          <div className="showbuttons">
            <h3>Show list:</h3>
            <input type="button" onClick={() => this.changeUsers()} value="Afiseaza lista utilizatori" />
            <input type="button" onClick={() => this.changePosts()} value="Afiseaza lista postari" /> 
          </div>
          <div className="selectcolor">
            <h3>Theme:</h3>
            <label for="BackgroungColor">Select your background color:</label>
            <input type="color" onChange={(event) => this.changeColor(event)} name='BackgroundColor'/>
            <label for="TextColor">Select your text color:</label>
            <input type="color" onChange={(event) => this.changeTextColor(event) } name='TextColor '/>
          </div>
        </div>
        
        <div className="centralpanel">
          <div>
            {this.state.dis === 10 && this.state.background !== '#000000'
              ? <UserList users={this.state.users}/>
              : null
            }
          </div>
          <div>
            {this.state.dis === 5 && this.state.background !== '#000000'
              ? <PostList posts={this.state.posts}/>
              : null
            }
          </div>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
