import React, { useState } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HeaderLink } from "./components";
import { makeStyles } from "@material-ui/core/styles";

export function HeaderNavigator(props: any) {
  const classes = useStyles();

  return (
    <Navbar className={classes.navBar}>
      <Nav>
        <Nav.Link href="#projects">Projects</Nav.Link>
        <Nav.Link href="#milestones">Milestones</Nav.Link>
        <Nav.Link href="#ert">Skills</Nav.Link>
      </Nav>
    </Navbar>
  );
}
const useStyles = makeStyles({
  navBar: { justifyContent: "center", backgroundColor: "white" },
});
