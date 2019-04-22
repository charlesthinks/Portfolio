import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import LayoutBody from "../components/LayoutBody";
import Typography from "../components/Typography";
import Link from "@material-ui/core/Link";

const styles = theme => ({
  root: {
    marginTop: theme.spacing.unit * 8,
    marginBottom: theme.spacing.unit * 4
  },
  images: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexWrap: "wrap"
  },
  imageWrapper: {
    position: "relative",
    display: "block",
    padding: 0,
    borderRadius: 0,
    height: "40vh",
    [theme.breakpoints.down("sm")]: {
      width: "100% !important",
      height: 100
    },
    "&:hover": {
      zIndex: 1
    },
    "&:hover $imageBackdrop": {
      opacity: 0.15
    },
    "&:hover $imageMarked": {
      opacity: 0
    },
    "&:hover $imageTitle": {
      border: "4px solid currentColor"
    }
  },
  imageButton: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: theme.palette.common.white
  },
  imageSrc: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundSize: "cover",
    backgroundPosition: "center 40%"
  },
  imageBackdrop: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    background: theme.palette.common.black,
    opacity: 0.5,
    transition: theme.transitions.create("opacity")
  },
  imageTitle: {
    position: "relative",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 4}px ${theme
      .spacing.unit + 6}px`
  },
  imageMarked: {
    height: 3,
    width: 18,
    background: theme.palette.common.white,
    position: "absolute",
    bottom: -2,
    left: "calc(50% - 9px)",
    transition: theme.transitions.create("opacity")
  }
});

function ProductCategories(props) {
  const { classes } = props;

  const images = [
    {
      url:
        "https://images.unsplash.com/photo-1534081333815-ae5019106622?auto=format&fit=crop&w=400&q=80",
      title: "Tour",
      width: "33.3%",
      link: "https://avrybrdly93.github.io/Tour/"
    },
    {
      url:
        "https://images.unsplash.com/photo-1531299204812-e6d44d9a185c?auto=format&fit=crop&w=400&q=80",
      title: "BetterHealth",
      width: "33.3%",
      link: "http://better-health.herokuapp.com"
    },
    {
      url:
        "https://images.pexels.com/photos/1437863/pexels-photo-1437863.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Sublme",
      width: "33.4%",
      link: "http://sublme-music.herokuapp.com"
    },
    {
      url:
        "https://images.pexels.com/photos/1121123/pexels-photo-1121123.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
      title: "Crystal Collector",
      width: "38%",
      link: "https://charlesthinks.github.io/unit-4-game/"
    },
    {
      url: "https://media2.giphy.com/media/3o6gbbuLW76jkt8vIc/source.gif",
      title: "Giphy AJAX",
      width: "38%",
      link: "https://charlesthinks.github.io/Giphy-AJAX/"
    },
    {
      url: "https://media.giphy.com/media/KQS3zjDesBGpO/giphy.gif",
      title: "Psychic Game",
      width: "24%",
      link: "https://charlesthinks.github.io/Psychic-Game/"
    }
  ];

  return (
    <LayoutBody className={classes.root} component="section" width="large">
      <Typography variant="h4" marked="center" align="center" component="h2">
        Portfolio
      </Typography>
      <div className={classes.images}>
        {images.map(image => (
          <ButtonBase
            key={image.title}
            className={classes.imageWrapper}
            style={{
              width: image.width
            }}
            component={linkProps => (
              <Link
                {...linkProps}
                href={image.link}
                target="_blank"
                variant="button"
              />
            )}>
            <div
              className={classes.imageSrc}
              style={{
                backgroundImage: `url(${image.url})`
              }}
            />
            <div className={classes.imageBackdrop} />
            <div className={classes.imageButton}>
              <Typography
                component="h3"
                variant="h6"
                color="inherit"
                className={classes.imageTitle}>
                {image.title}
                <div className={classes.imageMarked} />
              </Typography>
            </div>
          </ButtonBase>
        ))}
      </div>
    </LayoutBody>
  );
}

ProductCategories.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(ProductCategories);
