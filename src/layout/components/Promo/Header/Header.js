import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styled from 'styled-components';
import { Button, Navbar, Form, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import css from './../assets/css/Header.module.css';

const links = [
  {
    title: 'Особенности',
    path: '/features',
  },
  {
    title: 'Игры',
    path: '/games',
  },
  {
    title: 'Метод интервального повторения',
    path: '/method',
  },
  {
    title: 'О команде',
    path: '/team',
  }
];

function createLink({ title, path }) {
  return (
    <ListItem key={title}>
      <MenuLink href={path}>{title}</MenuLink>
    </ListItem>
  );
}

createLink.propTypes = {
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};


const ListItem = styled.li`
  list-style-type: none;
  width: fit-content;
  padding: 7px;
  @media(max-width: 991px) {
      padding: 10px 0;
  }
`;

const MenuLink = styled.a`
  text-decoration: none;
  font: normal 16px Exo, sans-serif;
  color: #485D68;  
  
  &:hover, &:focus, &:active {
    color: black;
  }
`;

const Header = () => {
  return (
    <Navbar expand="lg">
      <Navbar.Brand href="#home" className={css.logo}>RS Lang</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
            {links.map(createLink)}
        </Nav>
        <Form inline>
          <Button className={css.enter_button} variant="outline-success">Войти</Button>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
