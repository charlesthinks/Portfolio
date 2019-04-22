import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    overflow: "hidden",
    backgroundColor: theme.palette.secondary.light
  },
  layoutBody: {
    marginTop: theme.spacing.unit * 10,
    marginBottom: theme.spacing.unit * 15,
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  item: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `0px ${theme.spacing.unit * 5}px`
  },
  image: {
    height: 55
  },
  title: {
    marginTop: theme.spacing.unit * 5,
    marginBottom: theme.spacing.unit * 5
  },
  mainTitle: {
    marginBottom: theme.spacing.unit * 14
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180
  }
});

function ProductValues(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <LayoutBody className={classes.layoutBody} width="large">
        <img
          src="/static/themes/onepirate/productCurvyLines.png"
          className={classes.curvyLines}
          alt="curvy lines"
        />
        <Typography
          variant="h4"
          marked="center"
          className={classes.mainTitle}
          component="h2">
          About
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <i class="fas fa-graduation-cap fa-2x" />
                <Typography variant="h6" className={classes.title}>
                  Coding Bootcamp
                </Typography>
                <Typography variant="h5">
                  {
                    "Graduated from University of California, Riverside - Extension's Full Stack Coding BootCamp."
                  }
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <i class="fas fa-code fa-2x" />
                <Typography variant="h6" className={classes.title}>
                  Skills
                </Typography>
                <Typography variant="h5">
                  {
                    "HTML5, CSS3, JavaScript, jQuery, React.js, AJAX, Git, Node.js, MongoDB, MySQL + more."
                  }
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className={classes.item}>
                <i class="fas fa-palette fa-2x" />
                <Typography variant="h6" className={classes.title}>
                  UI/UX Design
                </Typography>
                <Typography variant="h5">
                  {
                    "I have 5 years Adobe Photoshop experience transitioning those skills into creating "
                  }
                  {"beautiful web applications."}
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </LayoutBody>
    </section>
  );
}

ProductValues.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductValues);
