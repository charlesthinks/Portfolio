import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Typography from "../components/Typography";
import TextField from "../components/TextField";
import Snackbar from "../components/Snackbar";
import LayoutBody from "../components/LayoutBody";
import Button from "../components/Button";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: 0,
    display: "flex"
  },
  cardWrapper: {
    zIndex: 1
  },
  card: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: theme.palette.warning.main,
    padding: `${theme.spacing.unit * 8}px ${theme.spacing.unit * 3}px`
  },
  cardContent: {
    maxWidth: 400
  },
  textField: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2
  },
  nameField: {
    width: "100%",
    marginBottom: theme.spacing.unit * 2
  },
  button: {
    width: "100%"
  },
  imagesWrapper: {
    position: "relative"
  },
  imageDots: {
    position: "absolute",
    top: -67,
    left: -67,
    right: 0,
    bottom: 0,
    width: "100%",
    background: "url(/static/onepirate/productCTAImageDots.png)"
  },
  image: {
    position: "absolute",
    top: -28,
    left: -28,
    right: 0,
    bottom: 0,
    width: "100%",
    maxWidth: 600
  }
});

class ProductCTA extends React.Component {
  state = {
    open: false
  };

  handleSubmit = event => {
    event.preventDefault();
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({
      open: false
    });
  };

  render() {
    const { classes } = this.props;

    const SITETYPE = [
      {
        name: "eCommerce"
      },
      {
        name: "Business"
      },
      {
        name: "Personal"
      }
    ];

    return (
      <LayoutBody className={classes.root} component="section" width="large">
        <Grid container spacing={0}>
          <Grid item xs={12} md={6} className={classes.cardWrapper}>
            <div className={classes.card}>
              <form
                onSubmit={this.handleSubmit}
                className={classes.cardContent}>
                <Typography variant="h2" component="h2" gutterBottom>
                  Get started
                </Typography>
                <Typography variant="h5">
                  Start building your beautiful site today.
                </Typography>
                <TextField
                  noBorder
                  className={classes.textField}
                  placeholder="Your email"
                />
                <TextField
                  noBorder
                  className={classes.nameField}
                  placeholder="Your fullname"
                />
                <TextField
                  select
                  SelectProps={{
                    native: true
                  }}
                  className={classes.nameField}
                  placeholder="Please select category...">
                  {SITETYPE.map(type => (
                    <option value={type.name} key={type.name}>
                      {type.name}
                    </option>
                  ))}
                </TextField>
                <Button
                  type="submit"
                  color="primary"
                  variant="contained"
                  className={classes.button}>
                  Get connected
                </Button>
              </form>
            </div>
          </Grid>
          <Grid item xs={12} md={6} className={classes.imagesWrapper}>
            <Hidden smDown>
              <div className={classes.imageDots} />
              <img
                src="https://images.pexels.com/photos/245032/pexels-photo-245032.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                alt="call to action"
                className={classes.image}
              />
            </Hidden>
          </Grid>
        </Grid>
        <Snackbar
          open={this.state.open}
          onClose={this.handleClose}
          message="You will be emailed within 24 hours confirming your request."
        />
      </LayoutBody>
    );
  }
}

ProductCTA.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCTA);
