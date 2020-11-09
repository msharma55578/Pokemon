import React, { Component } from "react";
import { Card, CardDeck, ListGroup, ListGroupItem } from "react-bootstrap";

export default class MainPokemon extends Component {
  constructor() {
    super();
    this.state = {
      all:[],
      post: [],
      name:[],
    };
    this.getPokemon();
  }
  getPokemon = async () => {
    const api_call = await fetch(`https://rickandmortyapi.com/api/character/`);
    const response = await api_call.json();
    console.log(response.results);

    this.setState({
      //articleCount: response.articleCount,
      post: response.results,
      all: response,
    });
  };
  render() {
    return (
      <div >
        {/* <input onChange=""></input> */}
        <span style={{
            display: "flex",
            flexWrap: "wrap",
            backgroundColor:"black",
            // justifyContent:"space-around",
        
        }}>
          {this.state.post.map((i) => (
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
                {/* <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </Card.Text> */}
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
          ))}
        </span>
      </div>
    );
  }
}
