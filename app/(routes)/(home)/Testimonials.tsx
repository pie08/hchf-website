"use client";

import { Container } from "@/app/_components/Container";
import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import Testimonial from "@/app/_components/Testimonial";
import { styled } from "@linaria/react";
import { FC, useState } from "react";
import TestimonialSlider from "./TestimonialSlider";
import ButtonLink from "@/app/_components/ButtonLink";

const TestimonialsSection = styled(Section)`
  background-image: linear-gradient(
      rgba(255, 255, 255, 85%),
      rgba(255, 255, 255, 85%)
    ),
    url("/assets/images/beach-bg.webp");
  background-size: cover;
`;

interface TestimonialsProps {}

const Testimonials: FC<TestimonialsProps> = ({}) => {
  return (
    <TestimonialsSection>
      <SectionHeading>
        <h4>Testimonials</h4>
        <h2>I help my client feel, move, and look better</h2>
      </SectionHeading>

      <GridContainer>
        <TestimonialSlider>
          <Testimonial
            text="After completing Physical Therapy for rotator cuff surgery, I was still experiencing discomfort, weakness, and limited range of motion in my shoulder. My wife trains with Abie and she recommended I see him. Since working with Abie, I have full range of motion again in my shoulder. Abie focuses on the entire body, not just the surgically repaired areas. I have seen substantial strength improvements in my entire body, particularly in my legs."
            author="Keith"
            quote={false}
            textFill
            limitText
          />
          <Testimonial
            text="Abie is very knowledgeable, diverse, and effective at his craft. I initially began training with Abie to improve my overall health. In short time, I became much stronger, stable and mobile, and eventually lost over 30lbs with the assistance of Abie's nutritional advice. After many years of putting off knee-replacement surgery, it suddenly became clear that it was time. Abie was instrumental in helping me prepare for post-surgical rehab and then continuing the rehabilitation process after Physical Therapy expired. I steadily progressed into more advanced movements over time to continually improve the strength and stability of my surgically repaired knee as well as the rest of my body. My overall body composition has changed for the better and people have noticed!"
            author="Anna"
            quote={false}
            textFill
            limitText
          />
          <Testimonial
            text="I am a 70 year old male and had rotator cuff repair surgery November 2021. After the repair my surgeon advised me not to return to work for 3 months. I had 6 months of Physical Therapy and was diligent with my at home exercises. I returned to the gym 4 months after surgery. After 6 months in the gym I returned to a fitness level that seemed similar to that previous to my injury. Last summer I tried to surf a few times, an activity I have enjoyed for 20 years. My paddling was 'OK' but I was not able to pop up. I knew then that in spite of the physical therapy and my time in the gym my shoulder was not right. Fortunately last Ocober a friend of mine recommended Abie. She has been seeing him along with her sons for 10 years. I have been working with Abie for 6 months now 3 times a week. 2 days is primarily weight lifting with some stretching and the third day is cardio and conditioning. Abie is a terrific trainer. He is patient, upbeat and encouraging. He designs individual workouts that have evolved in concert with my changing fitness level. He is totally focused and an active participant in each workout. He has a wonderful sense for the number of repetitions and the amount of weight I can handle for each exercise. All sessions are 1:1 with correct technique and the prevention of injury the number one priority. Physical therapy and time in the gym are great after surgery but not always sufficient to return to a level of fitness required for some activities. Thanks to Abie I am hoping to get back in the water this summer and enjoy surfing again."
            author="Tom"
            quote={false}
            textFill
            limitText
          />
        </TestimonialSlider>
      </GridContainer>

      <ButtonLink href="/testimonials">See all testimonials</ButtonLink>
    </TestimonialsSection>
  );
};

export default Testimonials;
