import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Form, Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import css from './Header.module.css';
import HeaderListItem from './HeaderListItem';
import HeaderMenuLink from './HeaderMenuLink';

const links = [
  {
    id: 'features',
    title: 'Особенности',
    path: '#features',
  },
  {
    id: 'games',
    title: 'Игры',
    path: '#games',
  },
  {
    id: 'method',
    title: 'Метод интервального повторения',
    path: '#method',
  },
  {
    id: 'team',
    title: 'О команде',
    path: '#about',
  },
];

function createLink ({ id, title, path }) {
  return (
    <HeaderListItem key={id}>
      <HeaderMenuLink href={path}>{title}</HeaderMenuLink>
    </HeaderListItem>
  );
}

createLink.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};

const Header = () => (
  <Navbar expand="lg">
    <Navbar.Brand href="#home" className={css.logo}>RS Lang</Navbar.Brand>
    <Navbar.Toggle className={css.navbar_promo}
                   aria-controls="basic-navbar-nav"/>
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        {links.map(createLink)}
      </Nav>
      <Form inline>
        <Button className={css.enter_btn}
                variant="outline-success">Войти</Button>
      </Form>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
