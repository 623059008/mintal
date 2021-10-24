import React from "react";
import Header from "components/headers/light.js";
import tw from "twin.macro"; //eslint-disable-line
import { css } from "styled-components/macro"; //eslint-disable-line
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/BackgroundAsImage.js";
import MainFeature from "components/features/TwoColSingleFeatureWithStats2.js";
import MainFeature2 from "components/features/TwoColWithTwoFeaturesAndButtons.js";
import Portfolio from "components/cards/PortfolioTwoCardsWithImage.js";
import Testimonial from "components/testimonials/TwoColumnWithImageAndProfilePictureReview.js";
import ContactUsForm from "components/forms/TwoColContactUsWithIllustration.js";
import Footer from "components/footers/MiniCenteredFooter.js";

export default () => (
  <AnimationRevealPage>
    {/* <Header/> */}
    <Hero />
    <MainFeature />
    <MainFeature2 />
    <Portfolio />
    <Testimonial
      subheading="Reviews"
      heading={
        <>
          Professionalism leads to <span tw="text-primary-500">appreciation.</span>
        </>
      }
      description="Here are what some of our patients are saying about our professional consultants."
      testimonials={[
        {
          imageSrc:
            "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3.25&w=512&h=512&q=80",
            quote:
            "Pandemic was a challenge posted to everyone, especially for international students who travelled away from home and parents, Thanks to Mintal, I felt I am not alone. After several talks with consultants, I felt more confident and less isolated.",
          customerName: "Clara",
          customerTitle: "Received consultation service during first year of graduate school."
        },
        {
          imageSrc:
            "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1024&q=80",
          profileImageSrc:
            "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=512&h=512&q=80",
          quote:
            "Life was, is, will be tough, but toughness cannot completely stop my pace. Mintal gives me courage, a refreshing scent of mint when I felt overworked. Work feels easier when you have a smile.",
          customerName: "Adam",
          customerTitle: "A current PhD student who just had his third talk with our member"
        }
      ]}
      textOnLeft={true}
    />
    <ContactUsForm />
    <Footer />
  </AnimationRevealPage>
);
