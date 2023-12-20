import React, { useState } from "react";
import { useEffect } from "react";
import {
  Container,
  AppBar,
  Typography,
  Grow,
  Grid,
  createTheme,
  ThemeProvider,
} from "@material-ui/core";

import memories from "./components/images/memories.png";
import Form from "./components/Form/Form";
import Posts from "./components/Posts/Posts";

import useStyles from "./styles.js";

import { useDispatch } from "react-redux";
import { getPosts } from "./actions/posts.js";
const theme = createTheme({
  typography: {
    fontFamily: ["sf pro display"],
  },
});

const App = () => {
  const classes = useStyles();

  const dispatch = useDispatch();

  const [currentId, setCurrentId] = useState(null);
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" className="app">
        <AppBar className={classes.appBar} position="static" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">
            Memories
          </Typography>
          <img
            className={classes.image}
            src={memories}
            alt="memories"
            height="60"
          />
        </AppBar>
        <Grow in>
          <Container>
            <Grid
              container
              justifyContent="space-between"
              alignItems="stretch"
              spacing={3}
              className={classes.mainContainer}
            >
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </ThemeProvider>
  );
};

export default App;
