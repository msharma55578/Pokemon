import React, { Component } from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import Navbar from "./Navbar";
export default class PokemonSearch extends Component {
  constructor() {
    super();
    this.state = {
      all: [],
      post: [],
      name: [],
      search: null,
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
  searchSpace=(event)=>{
    let keyword = event.target.value;
    this.setState({search:keyword})
  }
  
  render() {
    const items = this.state.post.filter((i)=>{
        if(this.state.search == null)
            return i
        else if(i.name.toLowerCase().includes(this.state.search.toLowerCase()) || i.species.toLowerCase().includes(this.state.search.toLowerCase()) ||i.gender.toLowerCase().includes(this.state.search.toLowerCase())){
            return i
        }
      }).map((i) => {
      return (  
        <Card
          style={{
            width: "18rem",
            backgroundColor: "blue",
            // position:"relative",
            // boxShadow: "5px 5px 2px red 2px silver ",
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
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
      );
    });
    return (
      <div>
        <input
          type="text"
          placeholder="Enter item to be searched"
        //   style={elementStyle}
          onChange={(e) => this.searchSpace(e)}
        />
        {items}
      </div>
    );
  }
}
