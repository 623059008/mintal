import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/FullWidthWithImage.js";
import Features from "components/features/ThreeColSimple.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats.js";
import SliderCard from "components/cards/ThreeColSlider.js";
import TrendingCard from "components/cards/TwoTrendingPreviewCardsWithImage.js";
import Blog from "components/blogs/PopularAndRecentBlogPosts.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import FAQ from "components/faqs/SimpleWithSideImage.js";
import SubscribeNewsLetterForm from "components/forms/SimpleSubscribeNewsletter.js";
import Footer from "components/footers/MiniCenteredFooter.js";
import Header from "components/headers/light.js";
import { useHistory } from 'react-router-dom';
export default () => (
  <AnimationRevealPage>
    <Header collapseBreakpointClass="sm"/>
    <Hero />
    <Features />
    <SliderCard />
    {/* <TrendingCard /> */}
    {/* <MainFeature /> */}
    {/* <Blog /> */}
    {/* <Testimonial textOnLeft={true}/> */}
    <FAQ />
    <Footer />
  </AnimationRevealPage>
);
