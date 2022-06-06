import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Button, Divider, Typography, styled } from "@mui/material";
import Countdown from "react-countdown";
import { Link } from "react-router-dom";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Component = styled(Box)`
  margin-top: 10px;
  font-size: 10px;
  background: #ffffff;
`;

const Deal = styled(Box)`
  padding: 10px 20px;
  display: flex;
`;
const Timer = styled(Box)`
  display: flex;
  margin-left: 10px;
  align-items: center;
  color: #7f7f7f7;
  font-size: 14px;
  font-weight: 700;
`;

const DealText = styled(Typography)`
  font-size: 22px;
  font-weight: 700;
  margin-right: 10px;
  /* line-height: 32px; */
`;

const ViewAllButton = styled(Button)`
  margin-left: auto;
  background-color: #2874f0;
  border-radius: 2px;
  font-size: 12px;
  font-weight: 600;
`;

const ImageCarousal = styled("img")({
  width: "auto",
  height: 150,
});

const TitleText = styled(Typography)`
  font-size: 13px;
  font-weight: 600;
  color: #212121;
`;

const DiscountText = styled(Typography)`
  font-size: 10px;
  color: green;
`;

const TaglineText = styled(Typography)`
  font-size: 10px;
  color: #212121;
  opacity: 0.7;
`;
const Slide = ({ products, title, timer }) => {
  const timerURL =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/timer_a73398.svg";
  const renderer = ({ hours, minutes, seconds }) => {
    return (
      <Box variant="span">
        {hours}:{minutes}:{seconds}
      </Box>
    );
  };
  return (
    <Component>
      <Deal>
        <DealText>{title}</DealText>
        {timer && (
          <Timer>
            <img src={timerURL} alt="countdown_timer" style={{ width: 25 }} />
            <Countdown date={Date.now() + 5.04e7} renderer={renderer} />
          </Timer>
        )}

        <ViewAllButton variant="contained">View All</ViewAllButton>
      </Deal>
      <Divider />
      <Carousel
        responsive={responsive}
        swipeable={false}
        draggable={false}
        centerMode={true}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        containerClass="carousel-container"
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        {products.map((product, id) => (
          <Link to={`product/${product.id}`} style={{ textDecoration: "none" }}>
            <Box style={{ padding: "25px 15px", textAlign: "center" }}>
              <ImageCarousal src={product.url} alt="product" key={id} />
              <TitleText>{product.title.shortTitle}</TitleText>
              <DiscountText>{product.discount}</DiscountText>
              <TaglineText>{product.tagline}</TaglineText>
            </Box>
          </Link>
        ))}
      </Carousel>
    </Component>
  );
};

export default Slide;
