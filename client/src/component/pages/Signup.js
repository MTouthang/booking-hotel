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

const Signup = () => {
  return (
    <Container fluid="xl" className=" mt-5">
      <Card>
        <Form>
          <CardHeader className="text-center p-3"> Signup Here</CardHeader>
          <CardBody>
            <FormGroup>
              <label className="mb-2"> Name</label>
              <Input
                type="text"
                name="name"
                placeholder="Enter your name"
              ></Input>
            </FormGroup>
            <FormGroup>
              <label className="mb-2"> Email</label>
              <Input
                type="text"
                name="email"
                placeholder="Enter your email"
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
            <FormGroup>
              <label className="mb-1"> Confirm your password</label>
              <Input
                type="text"
                name="password_confirm"
                placeholder="Enter your password again"
              ></Input>
            </FormGroup>

            <Button> Signup </Button>
          </CardBody>
        </Form>
      </Card>
    </Container>
  );
};

export default Signup;
