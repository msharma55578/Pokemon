import React,{useState,useEffect} from 'react'
import { Card, } from "react-bootstrap";

export default function Main_page() {
    const [data,setdata]=useState("");
    
    // useEffect(() => {
    //     {getCard}
    //   });
    getCard = async () => {
        const api_call = await fetch(`https://rickandmortyapi.com/api/character/`);
        const response = await api_call.json();
        console.log(response);
    
        setdata(response);
      };
    return (
        <div>
            {getCard}
            {data.map((i) => (
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={i.img} />
            <Card.Body>
              <Card.Title>i.title</Card.Title>
              <Card.Text>
                i.description
              </Card.Text>
            </Card.Body>
          </Card>
          ))}
        </div>
    )
}
