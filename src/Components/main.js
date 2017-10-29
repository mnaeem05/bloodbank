import React, { Component } from 'react';
import {AppBar, TextField, Checkbox, Drawer, RaisedButton, IconMenu, MenuItem, IconButton} from 'material-ui/';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import '../fbconfig'


const styles = {
  block: {
    maxWidth: 250,
    position: 'relative',
    left: 580,
    top: 50,
  },
  checkbox: {
    marginBottom: 5,
  },
  button3: {
    display: 'block',
    height: 30,
    width: 80,
    background: 'limegreen',
    cursor: 'pointer',
    fontFamily: "monospace",
    fontSize: 20,
    color: 'darkred',
    textAlign: 'center',
    fontWeight: 'bold',
    borderRadius: 10,
    position: 'relative',
    left: 590,
    top: 80,
  },
  boxlogin:{
    fontWeight: 'bold',
    color: '#ff6666',
    fontFamily: "monospace",
    cursor: 'pointer',
  },
  box02: {
    position: 'relative',
    right: 10,
    top: 10,
  },
  box01:{
    position: 'relative',
    right: 25,
    top: 10,
    fontSize: 18,
    color: '#555555',
    textDecoration: "none",
  },
  icon1: {
    position: 'relative',
    left: 650,
    bottom: 150,
  },
}

export default class Main extends Component {

      
constructor(props) {
    super(props);
    this.state = {
      username:'',
      email:'',
      value: '',
      open: false,
};

    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangeUserPwd = this.handleChangeUserPwd.bind(this);
    
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChangeUsername(event) {
    this.setState({username: event.target.value});
  }
   handleChangeUserPwd(event) {
    this.setState({pwd: event.target.value});
  }

  handleSubmit(event) {
    this.setState({username:''});
    this.setState({pwd:''});
    event.preventDefault();
      this.signin()    
  }
  signin() {
       firebase.auth().signInWithEmailAndPassword(this.state.username, this.state.pwd)
            .then((res) => {
                localStorage.setItem("user", JSON.stringify(res));
                window.location.href = "./dashboard"
            })
            .catch((e) => {
                console.log(e);
                switch (e.code) {
                    case "auth/wrong-password": // wrong password on sign in
                        alert(e.message)
                        break;
                    case "auth/user-not-found": // user not found on sign in on wrong email
                        alert(e.message)
                        break;
                }
            })
    }



  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
        <div>
    <IconMenu
      style={styles.icon1}
      iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
      anchorOrigin={{horizontal: 'left', vertical: 'top'}}
      targetOrigin={{horizontal: 'left', vertical: 'top'}}
    >
      <MenuItem primaryText="Account" />
      <MenuItem primaryText="Settings" />
      <MenuItem primaryText="Help" />
      <MenuItem primaryText="Sign out" />
    </IconMenu>


        <AppBar
    title="Blood Bank Online App"
    // iconClassNameRight="muidocs-icon-navigation-expand-more"
    iconElementLeft={<IconButton><Menu  onClick={this.handleToggle}/></IconButton>}
    /> 
        
        
        <Drawer           
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}>
          <MenuItem onClick={this.handleClose}>   
        <Link style={styles.box01} to="/dashboard">Dashboard</Link>
        </MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.box01}>Donor</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.box01}>Profile</MenuItem>
          <MenuItem onClick={this.handleClose} style={styles.box01}>Sign up</MenuItem>
        </Drawer>
        <h2 style={styles.boxlogin}>Login here</h2>
        <form onSubmit={this.handleSubmit}>
        <TextField
      hintText="Please type here"
      floatingLabelText="User Name"
      required
      value={this.state.username} onChange={this.handleChangeUsername}  
    /><br />
    <TextField
      hintText="Please type here"
      type="password"
      floatingLabelText="Password"
      required
      maxLength= '8'
      value={this.state.pwd} onChange={this.handleChangeUserPwd}
    /><br />
          <div style={styles.block}>
        <Checkbox
          label="I Agree"
          required
          style={styles.checkbox}/>
    </div>
    <button value="Submit" style={styles.button3}> Submit </button>
    </form>
    </div>
    )
  }
}
