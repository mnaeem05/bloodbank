import React, { Component } from 'react';
import {AppBar, Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/';
import {Drawer, RaisedButton, IconMenu, MenuItem, IconButton} from 'material-ui/';
import * as firebase from 'firebase';
import CircularProgress from 'material-ui/CircularProgress';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import Menu from 'material-ui/svg-icons/navigation/menu';
import { Link } from 'react-router-dom';

const styles = {
  box07: {
    position: 'relative',
    left: 5,
    top: -20,
  },
  box06: {
    fontSize: 15,
    color: '#6c6f60',
    listStyleType: 'none',
  },
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
  box01:{
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
  box03: {
    position: 'relative',
    right: -80,
    top: 120,
  },
  box01:{
    position: 'relative',
    right: 25,
    top: 10,
    fontSize: 18,
    color: '#555555',
    textDecoration: "none",
  },
}

export default class dashboard extends Component {
ref = firebase.database().ref();
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

    componentDidMount() {
    this.ref.child("users").on("value", (snapshot) => {
      let data = snapshot.val();
      this.setState({ users: data });
    })
  }

  handleSubmit(event) {
    console.log('User Name: ' + this.state.username);
    console.log('User Password: ' + this.state.pwd);
    this.setState({username:''});
    this.setState({pwd:''});
    event.preventDefault();
  }

  

  handleToggle = () => this.setState({open: !this.state.open});
  handleClose = () => this.setState({open: false});

  render() {
    return (
        <div>
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
        <h2 style={{color:'#ff7373', fontSize: '20', fontFamily: "monospace", cursor: 'pointer'}}> BLOOD BANK - SAMPLE REJECTION CRITERIA </h2>  
        <ul style={styles.box06}>
        <li>Insufficient sample – appropriate volume blood tubes are supplied with. Insufficient samples will mean an inability to test and delay in results and provision of blood products.</li>
        </ul>
  {this.state.users ?
          <Table>
            <TableHeader>
              <TableRow>
                <TableHeaderColumn>ID</TableHeaderColumn>
                <TableHeaderColumn>Name</TableHeaderColumn>        
                <TableHeaderColumn>Email</TableHeaderColumn>
                <TableHeaderColumn>Age</TableHeaderColumn>
                <TableHeaderColumn>Gender</TableHeaderColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {
                Object.keys(this.state.users).map((data, index) => {
                  return (
                    <TableRow>
                      <TableRowColumn>{index + 1}</TableRowColumn>
                      <TableRowColumn>{this.state.users[data].name} </TableRowColumn>
                      <TableRowColumn>{this.state.users[data].email}</TableRowColumn>
                      <TableRowColumn>{this.state.users[data].age}</TableRowColumn>
                      <TableRowColumn>{this.state.users[data].gender} </TableRowColumn>
                    </TableRow>
                  );
                })
              }

            </TableBody>
          </Table>
          :
          <CircularProgress />
        }
      </div>
    )
  }
}
