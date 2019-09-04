import React from "react";
import {
  Button,
  Form, 
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";

// import LoginForm from "./LoginForm";

export default () => (
  <Grid centered columns={2}>
    <Grid.Column>
      <Segment style={{ marginTop: "200px" }}>
      <Header as="h1" textAlign="center">
        Login
      </Header>
        <Form size="large">
          <Form.Input
            fluid
            icon="user"
            iconPosition="left"
            placeholder="Email address"
          />
          <Form.Input 
            fluid
            icon="lock"
            iconPosition="left"
            placeholder="Password"
            type="password"
          />
          <Button onClick={() => { console.log("clicked") }} >
            Login
          </Button>
        </Form> 
        {/* <LoginForm />*/}
      </Segment>
      <Message>
        Not registered yet? <a href="#">Sign Up</a>
      </Message>
    </Grid.Column>
  </Grid>
)