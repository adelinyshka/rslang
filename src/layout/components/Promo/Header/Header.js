import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button, Navbar, NavDropdown, Form,FormControl, Nav } from 'react-bootstrap';

const HeaderWrapper = styled.header`
  display: flex;
`;

const List = styled.ul`
  display: flex;
  justify-content: space-between;
  max-width: 100%;
  font: normal 400 16px 'Exo, sans-serif';
  padding: 10px 20px;
  `;

const ListItem = styled.li`
  list-style-type: none;
  width: fit-content;
`;

const MenuLink = styled.a`
  text-decoration: none;
  margin: 10px;
  color: ${props => props.theme.usualFontColor};
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <List>
        <ListItem>
          <MenuLink href="">О приложении</MenuLink></ListItem>
        <ListItem>
          <MenuLink href="">Особенности</MenuLink></ListItem>
        <ListItem>
          <MenuLink href="">Игры</MenuLink></ListItem>
        <ListItem>
          <MenuLink href="">Метод интервального повторения</MenuLink></ListItem>
        <ListItem>
          <MenuLink href="">О команде</MenuLink></ListItem>
      </List>
      <Button variant="success">Войти</Button>{' '}

    </HeaderWrapper>

    //react-bootstrap
  // <Navbar bg="light" expand="lg">
  //   <Navbar.Brand href="#home">RS Lang</Navbar.Brand>
  //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //   <Navbar.Collapse id="basic-navbar-nav">
  //     <Nav className="ml-auto">
  //       <Nav.Link href="#about_app">О приложении</Nav.Link>
  //       <Nav.Link href="#features">Особенности</Nav.Link>
  //       <Nav.Link href="#method">Метод интервального повторения</Nav.Link>
  //       <Nav.Link href="#team">О команде</Nav.Link>
  //     </Nav>
  //     <Form inline>
  //       <Button variant="success">Войти</Button>
  //     </Form>
  //   </Navbar.Collapse>
  // </Navbar>

  );
};

export default Header;