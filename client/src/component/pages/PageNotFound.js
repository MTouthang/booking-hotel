import React from "react";
import { Card, CardBody, CardHeader, Container } from "reactstrap";

const PageNotFound = () => {
  return (
    <Container fluid="xl" className="text-center mt-5">
      <Card>
        <CardHeader className="p-5"> Ooops!</CardHeader>
        <CardBody className="p-5">
          <h1> 404 </h1>
          <p> Page not found </p>
        </CardBody>
      </Card>
    </Container>
  );
};

export default PageNotFound;
