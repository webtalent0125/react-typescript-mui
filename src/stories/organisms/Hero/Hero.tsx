import * as React from "react";
import { useCallback } from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import homeStyles from "../../../theme/homeStyles";
import { Fade } from 'react-slideshow-image';
import type { Container, Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import 'react-slideshow-image/dist/styles.css'
import img1 from "./../../../images/1.jpg"
import img2 from "./../../../images/2.jpg"
import img3 from "./../../../images/3.jpg"

const images: any = [
  { url: img1 },
  { url: img2 },
  { url: img3 },
];

const banner = {
  position: "absolute",
  width: "100%",
  height: "100%",
  top: "0px",
  right: "0px",
} as React.CSSProperties;

const divStyle = {
  backgroundSize: 'cover',
  backgroundPosition: "center",
  height: '100vh'
} as React.CSSProperties;


const Hero = () => {

  const particlesInit = useCallback(async (engine: Engine) => {
    console.log(engine);

    // you can initialize the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    await console.log(container);
  }, []);

  return (
    <Box sx={homeStyles.heroBox}>
      <div style={banner}>
        <Particles
          style={{ zIndex: "-1", position: "relative" }}
          id="tsparticles"
          init={particlesInit}
          loaded={particlesLoaded}
          options={{
            background: {
              color: {
                value: "transparent",
              },
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              move: {
                direction: "bottom",
                enable: true,
                outModes: "out",
                speed: 2
              },
              number: {
                density: {
                  enable: true,
                  area: 800
                },
                value: 400
              },
              opacity: {
                value: 0.7
              },
              shape: {
                type: "circle"
              },
              size: {
                value: 5
              },
              wobble: {
                enable: true,
                distance: 10,
                speed: 10
              },
              zIndex: {
                value: {
                  min: 0,
                  max: 100
                }
              }
            },
          }}
        />
        <div style={{ zIndex: "-2", position: "relative" }}>
          <Fade arrows={false} duration={6000} transitionDuration={3000}>
            {images.map((fadeImage: any, index: number) => (
              <div key={index}>
                <div style={{ ...divStyle, 'backgroundImage': `url(${fadeImage.url})` }}></div>
              </div>
            ))}
          </Fade>
        </div>
      </div>
      <Grid container spacing={6} sx={homeStyles.gridContainer}>
        <Grid item xs={12} md={7}>
          <Typography variant="h3" fontWeight={700} sx={{ ...homeStyles.title, ...{ fontSize: { xs: "2rem", md: "3rem" } } }}>
            Procurement that makes a difference
          </Typography>
          <Box component="div"
            fontSize="h5.fontSize"
            overflow="hidden"
            whiteSpace="pre-line"
            textOverflow="ellipsis"
            height={240}
          >
            Welcome to Social Pro, your destination for socially responsible
            procurement. We've created a platform that enables you to make
            informed decisions about your procurement practices and prioritize
            social values alongside traditional criteria. Whether you're looking
            to support local businesses, promote ethical practices, or create
            employment opportunities for underrepresented groups, Social Pro has
            got you covered. Join us in building a more inclusive, sustainable,
            and equitable world through procurement.
          </Box>
          {/* <Typography variant="h6" sx={{ ...homeStyles.subtitleS, ...{ display: {} } }}>
            Welcome to Social Pro, your destination for socially responsible
            procurement. We've created a platform that enables you to make
            informed decisions about your procurement practices and prioritize
            social values alongside traditional criteria. Whether you're looking
            to support local businesses, promote ethical practices, or create
            employment opportunities for underrepresented groups, Social Pro has
            got you covered. Join us in building a more inclusive, sustainable,
            and equitable world through procurement.
          </Typography> */}

          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            Contact Us
          </Button>
        </Grid>
        <Grid item xs={12} sx={{ display: { xs: "none", md: "block" } }} md={5}>
          <img src={"hero.png"} alt="My Team" style={homeStyles.largeImage} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
