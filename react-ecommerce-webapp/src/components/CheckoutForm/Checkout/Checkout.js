import React, { useState } from "react";
import {
  Paper,
  Stepper,
  Step,
  StepLabel,
  Typography,
  CircularProgress,
  Divider,
  Button,
  CssBaseline,
} from "@material-ui/core";
import useStyles from "./styles";
import AddressForm from "../AddressForm";
import PaymentForm from "../PaymentForm";
import { useEffect } from "react";
import { commerce } from "../../../lib/commerce";
import { Link, useHistory } from "react-router-dom";
const steps = ["Shipping address", "Payment details"];
const Checkout = ({ cart, order, error, onCaptureCheckout }) => {
  const [activeStep, setActiveStep] = useState(0);
  const classes = useStyles();
  const [checkoutToken, setCheckoutToken] = useState(null);
  const [shippingData, setShippingData] = useState({});
  const history = useHistory();
  const [isFinished, setIsFinished] = useState(false);

  let Confirmation = () =>
    order.customer ? (
      <>
        <Typography variant="h5">
          Thank you for your purchase, {order.customer.firstname}{" "}
          {order.customer.lastname}
        </Typography>
        <Divider className={classes.divider}></Divider>
        <Typography variant="subtitle2">
          Order ref: {order.customer_reference}
        </Typography>
        <br />
        <Button
          variant="outlined"
          type="button"
          component={Link}
          to="/e-commerce-app/"
        >
          Back to Home
        </Button>
      </>
    ) : isFinished ? (
      <>
        <Typography variant="h5">Thank you for your purchase</Typography>
        <Divider className={classes.divider}></Divider>
        <br />
        <Button
          variant="outlined"
          type="button"
          component={Link}
          to="/e-commerce-app/"
        >
          Back to Home
        </Button>
      </>
    ) : (
      <div className={classes.spinner}>
        <CircularProgress />
      </div>
    );

  if (error) {
    Confirmation = () => (
      <>
        <Typography variant="h5">Error : {error}</Typography>
        <br />
        <Button
          variant="outlined"
          type="button"
          component={Link}
          to="/e-commerce-app/"
        >
          Back to Home
        </Button>
      </>
    );
  }

  useEffect(() => {
    const generateToken = async () => {
      try {
        const token = await commerce.checkout.generateToken(cart.id, {
          type: "cart",
        });
        // console.log(token);
        setCheckoutToken(token);
      } catch (error) {
        //history.pushState("/e-commerce-app");
      }
    };
    generateToken();
  }, [cart]);

  const Form = () =>
    activeStep === 0 ? (
      <AddressForm checkoutToken={checkoutToken} next={next} />
    ) : (
      <PaymentForm
        shippingData={shippingData}
        checkoutToken={checkoutToken}
        backStep={backStep}
        onCaptureCheckout={onCaptureCheckout}
        nextStep={nextStep}
        timeout={timeout}
      />
    );

  const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
  const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

  const next = (data) => {
    setShippingData(data);
    nextStep();
  };

  const timeout = () => {
    setTimeout(() => {
      setIsFinished(true);
    }, 3000);
  };

  return (
    <>
      <CssBaseline />
      <div className={classes.toolbar} />
      <main className={classes.layout}>
        <Paper className={classes.paper}>
          <Typography variant="h4" align="center">
            Checkout
          </Typography>
          <Stepper activeStep={activeStep} className={classes.stepper}>
            {steps.map((step) => (
              <Step key={step}>
                <StepLabel>{step}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <Confirmation />
          ) : (
            checkoutToken && <Form />
          )}
        </Paper>
      </main>
    </>
  );
};

export default Checkout;
