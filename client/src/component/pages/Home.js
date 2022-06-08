import React, { useState, useEffect } from "react";
import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Container,
  Button,
  CardImg,
  CardSubtitle,
  CardColumns,
} from "reactstrap";
import { getHotels } from "./helper/getHotels";

const Home = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  const loadHotels = () => {
    getHotels()
      .then((response) => {
        if (!response.ok) {
          throw Error("Sever not responding!");
        }
        return response.json();
      })
      .then((data) => {
        setHotels(data);
      })
      .catch((err) => {
        setError(err);
      });
  };

  useEffect(() => {
    loadHotels();
    console.log(hotels);
  }, []);

  return (
    <Container
      fluid="xl"
      className="text-center bg mt-6"
      style={{ marginBottom: "100px" }}
    >
      <h1> HOTEL LIST</h1>
      {hotels.map((hotel, index) => {
        return (
          <CardColumns key={index}>
            <Card>
              <CardImg src={hotel.photo} top width="100%"></CardImg>
              <CardBody>
                <CardTitle tag="h5">{hotel.name}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Rate: {hotel.dailyRate}
                </CardSubtitle>
                <CardText>{hotel.description}</CardText>
                <Button>Book Now</Button>
              </CardBody>
            </Card>
          </CardColumns>
        );
      })}
    </Container>
  );
};

export default Home;
