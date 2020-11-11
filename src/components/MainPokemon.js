import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Navbar from "./Navbar"
import "./Pokemon.css"
export default class MainPokemon extends Component {
  constructor() {
    super();
    this.state = {
      all:[],
      post: [],
      name:[],
      search:null
    };
    this.getPokemon();
  }
  getPokemon = async () => {
    const api_call = await fetch(`https://rickandmortyapi.com/api/character/`);
    const response = await api_call.json();
    console.log(response.results);

    this.setState({
      post: response.results,
      name: response.results,
      all: response,
    });
  };
  searchByName =(e)=>{
    e.preventDefault();
    let searched=e.target.search.value
    console.log(searched)

    for(let i=0;i<this.state.name.length;i++){
      if(this.state.name[i].name===searched){
        // this.setState({
        //   post: this.state.name[i],
        // },()=>console.log(this.state.post)); 
        console.log(this.state.name[i].name)
      }
    }

  }
  render() {
    return (
      <div >
        <Navbar loadPokemon={this.searchByName}/>
        <span style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor:"gray",
            justifyContent:"space-around",
        
        }}>
          {this.state.post.map((i) => (
            <Card
              style={{
                width: "18rem",
                // backgroundColor: "blue",
                
                border:"solid",
                position:"relative",
                boxShadow: "15px 15px 12px red 12px silver ",
              }}
            >
              <Card.Img variant="top" src={i.image} />
              <Card.Body>
                <Card.Title>Name:{i.name}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
            <ListGroupItem>STATUS: {i.status}</ListGroupItem>
            <ListGroupItem>SPECIES: {i.species}</ListGroupItem>
            <ListGroupItem>GENDER: {i.gender}</ListGroupItem>
            <ListGroupItem>ORIGIN: {i.origin.name}</ListGroupItem>
            <ListGroupItem>LAST LOCATION: {i.location.name}</ListGroupItem>
              </ListGroup>
            </Card>
          ))}
        </span>
      </div>
    );
  }
}