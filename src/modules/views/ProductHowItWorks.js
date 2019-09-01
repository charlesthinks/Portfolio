import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";

const styles = theme => ({
  root: {
    display: "flex",
    backgroundColor: theme.palette.secondary.light,
    overflow: "hidden"
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
  title: {
    marginBottom: theme.spacing.unit * 14
  },
  number: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.secondary.main,
    fontWeight: theme.typography.fontWeightMedium
  },
  image: {
    height: 55,
    marginTop: theme.spacing.unit * 4,
    marginBottom: theme.spacing.unit * 4
  },
  curvyLines: {
    pointerEvents: "none",
    position: "absolute",
    top: -180,
    opacity: 0.7
  },
  button: {
    marginTop: theme.spacing.unit * 8
  }
});

function ProductHowItWorks(props) {
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
          className={classes.title}
          component="h2">
          Testimonials
        </Typography>
        <div>
          <Grid container spacing={40}>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="body2" align="center">
                  "Charles Duncan, simply put, just has an eye for design. It is
                  a rare gift. I’ve had the honor of instructing Charles for 6
                  months, in an extremely challenging boot camp coding class.
                  Above all, I was impressed not only with Charles' natural
                  affinity for design and development, but also his ability to
                  create engaging and highly stylized web presences. His natural
                  gift is a true asset for any positions requiring Full-Stack
                  Development and comes with my heartfelt recommendation."
                </Typography>
                <br />
                <div className={classes.number}>Joe Tanksley</div>
                <Typography variant="caption" className={classes.job}>
                  Senior Software Engineer - Front End (Media Services) /
                  Instructor - FSF (UC - Riverside via Trilogy Ed)
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="body2" align="center">
                  "Exceptional UX talent. Charles demonstrated a natural ability
                  to steer projects to adopting fluid and sensible UI. I believe
                  he would be invaluable to any front-end web development
                  teams."
                </Typography>
                <br />
                <div className={classes.number}>Hans Tang</div>
                <Typography variant="caption" className={classes.job}>
                  Lead Web Developer at CRM TECH
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="body2" align="center">
                  "Charles is an extremely creative and conscientious person. He
                  has great problem solving skills and is able to access a
                  problem and develop a solution. As a leader, he is able to
                  gain the trust of his teammates, incorporate different ideas
                  and create a solution that meets requirements."
                </Typography>
                <br />
                <div className={classes.number}>Nolen Diggs</div>
                <Typography variant="caption" className={classes.job}>
                  Full-Stack Developer an Independent Consultant
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className={classes.item}>
                <Typography variant="body2" align="center">
                  "Charles Duncan, can a natural talent for design that makes
                  him a great Designer, UX/UI or Front-End Developer. I had a
                  chance to work with Charles for six months in a Coding
                  Bootcamp and supervising him designing three web applications.
                  I am impressed that Charles can easily wireframe websites and
                  design blueprint of web applications before actually
                  developing it which makes the whole development process much
                  easier and more efficient for the whole team. He is a great
                  team player and can manage the front-end development team. If
                  you want to develop an eye-catching application, I recommend
                  you to add Charles to your team."
                </Typography>
                <br />
                <div className={classes.number}>Sean Roshan</div>
                <Typography variant="caption" className={classes.job}>
                  Full-Stack Software Developer / Java Developer / Project
                  Manager
                </Typography>
              </div>
            </Grid>
          </Grid>
        </div>
      </LayoutBody>
    </section>
  );
}

ProductHowItWorks.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductHowItWorks);
