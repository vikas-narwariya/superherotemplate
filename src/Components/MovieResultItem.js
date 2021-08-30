import React, { Component } from "react";
import { Container, Card, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const MovieResultItem = ({ data }) => {
  // const dispatch = useDispatch();
  // const fav = useSelector((state) => state);
  // const addFav = (hero) => {
  //   dispatch({ type: "ADD_HERO", payload: { data: hero } });
  // };
  // const removeFav = (hero) => {
  //   dispatch({ type: "DEL_HERO", payload: { data: hero } });
  // };
  return (
    <Container>
      <Row 
      style={{
        marginLeft: "27%"
      }}>
          <Card
            style={{
              width: "30rem",
              marginTop: "2rem",
              borderColor: "black",
              borderRadius: "20px"
            }}
          >
            <Card.Img variant="top" src={data.image.url} alt="super pic" style={{    marginTop: "20px",
    borderRadius: "20px"}} />
            <Card.Body>
              <Card.Title style={{color: "black"}}>{data.name}</Card.Title>
              <Card.Text style={{color: "black"}}>{data.biography["full-name"]}</Card.Text>
              <Card.Text style={{color: "black"}}>Publisher : {data.biography.publisher}</Card.Text>
              <Card.Text style={{color: "black"}}>
                Intelligences : {data.powerstats.intelligence}
              </Card.Text>
              <Card.Text style={{color: "black"}}>
                Power:
                {data.powerstats.power}
              </Card.Text >
              <Button className="btn1">
                <Link to={`/viewmore/${data.id}`} className="link">
                  View More
                </Link>
              </Button>
              <Button
                className="btn2"
                variant="primary"
                // onClick={() => addFav(data)}
              >
                Add Favourites
              </Button>
            </Card.Body>
          </Card>
      </Row>
    </Container>
  );
};

export default MovieResultItem;
