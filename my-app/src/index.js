import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Menu, Grid, Image, Dropdown, Header, Icon, Input, Button } from 'semantic-ui-react';

class TopMenu extends React.Component {
  render() {
    const itemStyle = { marginLeft: "250px", marginRight: "250px" };
    return (
        <Menu borderless className="topmenu">
          <Container>
            <Menu.Item>SHOP</Menu.Item>
            <Menu.Item>ABOUT</Menu.Item>

            <Menu.Item style={itemStyle}><Image src="//cdn.shopify.com/s/files/1/1300/6871/files/mnml-black_3x_088db30c-aa26-4fbf-93b6-997879f15bca_273x46.png?v=1525996330"/></Menu.Item>

            <Dropdown item icon="ellipsis horizontal" position="right">
              <Dropdown.Menu>
                <Dropdown.Item>Shop Instagram</Dropdown.Item>
                <Dropdown.Item>Contact</Dropdown.Item>
                <Dropdown.Item>Shipping</Dropdown.Item>
                <Dropdown.Item>Returns & Exchanges</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <Menu.Item>MY ACCOUNT</Menu.Item>

            <Menu.Item><Icon name="shopping bag"/></Menu.Item>
          </Container>
        </Menu>
    )
  }
}

class FullWidthImage extends React.Component {
  render() {
    const itemStyle = { color: "white" };
    return (
        <Grid className="main-background" columns={3}>
          <Grid.Column></Grid.Column>
          <Grid.Column className="middle aligned">
            <h3 style={itemStyle}>NEW ARRIVALS</h3>
            <Button secondary>SHOP NOW</Button>
          </Grid.Column>
          <Grid.Column></Grid.Column>
        </Grid>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <div className="footer-menu">
          <Grid container columns="seven">
            <Grid.Column>Search</Grid.Column>
            <Grid.Column>Contact Us</Grid.Column>
            <Grid.Column>Shipping</Grid.Column>
            <Grid.Column>Returns + Exchanges</Grid.Column>
            <Grid.Column>Terms + Conditions</Grid.Column>
            <Grid.Column>Privacy Policy</Grid.Column>
            <Grid.Column><Input action="Sign up" placeholder="Email address"/></Grid.Column>
          </Grid>
        </div>
    )
  }
}

class IslandSnow extends React.Component {

  render() {
    return (
        <div>
          <TopMenu/>
          <FullWidthImage/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<IslandSnow/>, document.getElementById('root'));