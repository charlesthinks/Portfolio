import React from "react";
import PropTypes from "prop-types";
import compose from "recompose/compose";
import pure from "recompose/pure";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import TextField from "../components/TextField";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 8,
    display: "flex"
  },
  iconsWrapper: {
    height: 120
  },
  icons: {
    display: "flex"
  },
  icon: {
    width: 48,
    height: 48,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.palette.warning.main,
    marginRight: theme.spacing.unit,
    "&:hover": {
      backgroundColor: theme.palette.warning.dark
    }
  },
  list: {
    margin: 0,
    listStyle: "none",
    paddingLeft: 0
  },
  listItem: {
    paddingTop: theme.spacing.unit / 2,
    paddingBottom: theme.spacing.unit / 2
  },
  language: {
    marginTop: theme.spacing.unit,
    width: 150
  }
});

const LANGUAGES = [
  {
    code: "en-US",
    name: "English"
  },
  {
    code: "fr-FR",
    name: "Français"
  }
];

function AppFooter(props) {
  const { classes } = props;

  return (
    <Typography component="footer" className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <Grid container spacing={40}>
          <Grid item xs={6} sm={4} md={2}>
            <Grid
              container
              direction="column"
              justify="flex-end"
              className={classes.iconsWrapper}
              spacing={16}>
              <Grid item className={classes.icons}>
                <a
                  href="https://linkedin.com/in/charlesthinks"
                  className={classes.icon}
                  target="_blank">
                  <i className="fab fa-linkedin fa-2x" />
                </a>
                <a
                  href="https://github.com/charlesthinks"
                  className={classes.icon}
                  target="_blank">
                  <i className="fab fa-github fa-2x" />
                </a>
              </Grid>
              <Grid item>Made with ❤️.</Grid>
            </Grid>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Social
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="http://instagram.com/charlesthinks">Instagram</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="http://twitter.com/charlesthinks">Twitter</Link>
              </li>
              <li className={classes.listItem}>
                <Link href="http://linkedin.com/in/charlesthinks">
                  LinkedIn
                </Link>
              </li>
              <li className={classes.listItem}>
                <Link href="http://github.com/charlesthinks">GitHub</Link>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={4} md={2}>
            <Typography variant="h6" marked="left" gutterBottom>
              Contact
            </Typography>
            <ul className={classes.list}>
              <li className={classes.listItem}>
                <Link href="mailto:cduncan98@icloud.com">Email</Link>
              </li>
              <li className={classes.listItem}>Cell: (951) 268-0090</li>
              <li className={classes.listItem}>Monday - Friday</li>
              <li className={classes.listItem}>8AM - 10PM PST</li>
            </ul>
          </Grid>
        </Grid>
      </LayoutBody>
    </Typography>
  );
}

AppFooter.propTypes = {
  classes: PropTypes.object.isRequired
};

export default compose(
  pure,
  withStyles(styles)
)(AppFooter);
