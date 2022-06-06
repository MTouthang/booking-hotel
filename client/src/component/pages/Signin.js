import React from "react";
import {
  Button,
  Card,
  Container,
  Form,
  CardHeader,
  CardBody,
  FormGroup,
  Input,
} from "reactstrap";

const Signin = () => {
  return (
    <Container fluid="xl" className=" mt-5">
      <Card>
        <Form>
          <CardHeader className="text-center p-3"> Signin Here</CardHeader>
          <CardBody>
            <FormGroup>
              <label className="mb-2"> Email</label>
              <Input
                type="text"
                name="email"
                placeholder="Enter your mail"
              ></Input>
            </FormGroup>
            <FormGroup>
              <label className="mb-1"> Password</label>
              <Input
                type="text"
                name="password"
                placeholder="Enter your password"
              ></Input>
            </FormGroup>
            <Button> Signin </Button>
          </CardBody>
        </Form>
      </Card>
    </Container>
  );
};

export default Signin;
