import React from "react";
import {
  AppBar,
  IconButton,
  Badge,
  MenuItem,
  Menu,
  Typography,
} from "@material-ui/core";
import { Toolbar } from "@material-ui/core";
import { ShoppingCart } from "@material-ui/icons";
import { mergeClasses } from "@material-ui/styles";
import logo from "../../assets/commerce.png";
import { Link, useLocation } from "react-router-dom";
import useStyles from "./styles";
const Navbar = ({ totalItems }) => {
  console.log(totalItems);
  const classes = useStyles();
  const location = useLocation();
  console.log(location);
  return (
    <>
      <AppBar position="fixed" className={mergeClasses.appBar} color="inherit">
        <Toolbar>
          <Typography
            component={Link}
            to="/e-commerce-app/"
            variant="h6"
            className={classes.title}
            color="inherit"
          >
            <img
              src={logo}
              alt="Commerce.js"
              height="25px"
              className={classes.image}
            />
            Commerce.js
          </Typography>
          <div className={classes.grow} />
          {location.pathname === "/e-commerce-app/" && (
            <div className={classes.button}>
              <IconButton
                component={Link}
                to="/e-commerce-app/cart/"
                aria-label="Show cart items"
                color="inherit"
              >
                <Badge
                  badgeContent={totalItems}
                  color="secondary"
                  overlap="rectangular"
                >
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
