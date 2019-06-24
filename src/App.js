import React, { Component } from 'react'
import axios from 'axios';

    class App extends Component {
      constructor(props){
        super(props);
        this.state ={
          contactList : []
        }
      }
    
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const contactList = res.data;
        this.setState({ contactList });
      })
      }

      render(){
        return (
          <div>
          <center><h1>Contact List</h1></center>
          {this.state.contactList.map((contact) => (
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{contact.name}</h5>
                <h6 class="card-subtitle mb-2 text-muted">{contact.email}</h6>
                <p class="card-text">{contact.company.catchPhrase}</p>
              </div>
            </div>
          ))}
        </div>

        )
      }
     
    }
    export default App;