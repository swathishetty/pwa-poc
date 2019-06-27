import React, { Component } from 'react'
import axios from 'axios';
import { Modal } from 'react-bootstrap';
import SignatureCanvas from 'react-signature-canvas';
 
    class App extends Component {
      constructor(props){
        super(props);
        this.state ={
          contactList: [],
          showModal: false,
          trimmedDataURL: '',
        }
        this.setModal = this.setModal.bind(this);
        this.clear = this.clear.bind(this);
        this.trim = this.trim.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }
      sigPad= {}

      clear = () => {
        this.sigPad.clear()
      }

      trim = () => {
        this.setState({trimmedDataURL: this.sigPad.getTrimmedCanvas()
          .toDataURL('image/png')})
          this.setState({showModal: false});
      }
      setModal(){
        console.log('this.state.showModal ',this.state.showModal);
        this.setState({showModal: true});
        console.log('this.state.showModal ',this.state.showModal);
      }
      handleClose(){
        this.setState({showModal: false});
      }
      componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const contactList = res.data;
        this.setState({ contactList });
      })
      }

      render(){
        let {trimmedDataURL} = this.state;
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
          <Modal show={this.state.showModal} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Please Sign</Modal.Title>
          </Modal.Header>
            <Modal.Body>
                <SignatureCanvas penColor='green'
              canvasProps={{width: 500, height: 500, className: 'sigCanvas'}} 
              ref={(ref) => { this.sigPad = ref }}/>
            </Modal.Body>
            <Modal.Footer>
              <button onClick={this.clear}>
                Clear
              </button>
              <button onClick={this.trim}>
                Sign
              </button>
            </Modal.Footer>
          </Modal>
          <div onClick={this.setModal}>
          {
            trimmedDataURL.length > 0 ?
            <span>
            Signature
            <img src={trimmedDataURL} /> 
            </span>:
            "Click to Sign"
          }
          </div>
        </div>
        )
      }
     
    }
    export default App;