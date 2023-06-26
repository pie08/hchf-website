/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import Slider from "./Slider";

import styles from "../sass/components/Testimonials.module.scss";

const testimonials = [
  `I am a 70 year old male and had rotator cuff repair surgery November
2021. After the repair my surgeon advised me not to return to work
for 3 months. I had 6 months of Physical Therapy and was diligent
with my at home exercises. I returned to the gym 4 months after
surgery. After 6 months in the gym I returned to a fitness level
that seemed similar to that previous to my injury. Last summer I
tried to surf a few times, an activity I have enjoyed for 20 years.
My paddling was "OK" but I was not able to pop up. I knew then that
in spite of the physical therapy and my time in the gym my shoulder
was not right. Fortunately last Ocober a friend of mine recommended
Abie. She has been seeing him along with her sons for 10 years. I
have been working with Abie for 6 months now 3 times a week. 2 days
is primarily weight lifting with some stretching and the third day
is cardio and conditioning. Abie is a terrific trainer. He is
patient, upbeat and encouraging. He designs individual workouts that
have evolved in concert with my changing fitness level. He is
totally focused and an active participant in each workout. He has a
wonderful sense for the number of repetitions and the amount of
weight I can handle for each exercise. All sessions are 1:1 with
correct technique and the prevention of injury the number one
priority. Physical therapy and time in the gym are great after
surgery but not always sufficient to return to a level of fitness
required for some activities. Thanks to Abie I am hoping to get back
in the water this summer and enjoy surfing again.`,
  `After completing Physical Therapy for rotator cuff surgery, I was
still experiencing discomfort, weakness, and limited range of motion
in my shoulder. My wife trains with Abie and she recommended I see
him. Since working with Abie, I have full range of motion again in
my shoulder. Abie focuses on the entire body, not just the
surgically repaired areas. I have seen substantial strength
improvements in my entire body, particularly in my legs.`,
  `I have been training with Abie Berggren for 5 + years now. My
training was interrupted on October 14, 2019 when I was struck by a
Suburban and I had to have shoulder replacement surgery. For 9
months, I was only able to do Physical Therapy, I was then given the
green light to go back to my trainer. As helpful as PT was, I would
have never improved to where I am now without the training of Abie.
He encouraged me when I thought I could not do it. He pushed me to
the next level with safety always a top priority. Abie's expertise
in my situation mixing mobility with strengthening has been
invaluable. I started out with a 3lb dumbbell weight and am now up
to 25lbs. lf you have had some sort of sports injury, or are looking
to improve your overall strength and stamina, I would highly
recommend Abie Berggren.`,
  `Abie is very knowledgeable, diverse, and effective at his craft. I
initially began training with Abie to improve my overall health. In
short time, I became much stronger, stable and mobile, and
eventually lost over 30lbs with the assistance of Abie's nutritional
advice.\n\nAfter many years of putting off knee-replacement surgery, it
suddenly became clear that it was time. Abie was instrumental in
helping me prepare for post-surgical rehab and then continuing the
rehabilitation process after Physical Therapy expired. I steadily
progressed into more advanced movements over time to continually
improve the strength and stability of my surgically repaired knee as
well as the rest of my body. My overall body composition has changed
for the better and people have noticed!`,
];

function Tetsimonials() {
  return (
    <section className={styles.sectionTestimonials}>
      <div className="container">
        <p className="heading heading--sub margin-bottom-md">Testimonials</p>
        <h2 className="heading heading--secondary"></h2>
      </div>
      <div className={`container ${styles.testimonialWrapper}`}>
        <Slider
          contentArr={testimonials.map((text, i) => {
            return (
              <figure className={styles.testimonial} key={i}>
                <blockquote className={styles.testimonial__text}>
                  {text}
                </blockquote>
              </figure>
            );
          })}
          sliderType="content"
          height="35rem"
        />
        {/*     <figure className={styles.testimonial}>
          <blockquote className={styles.testimonial__text}>
            After completing Physical Therapy for rotator cuff surgery, I was
            still experiencing discomfort, weakness, and limited range of motion
            in my shoulder. My wife trains with Abie and she recommended I see
            him. Since working with Abie, I have full range of motion again in
            my shoulder. Abie focuses on the entire body, not just the
            surgically repaired areas. I have seen substantial strength
            improvements in my entire body, particularly in my legs.
          </blockquote>
        </figure> */}
      </div>
      <div className="link-to-wrapper">
        <Link to="/testimonials" className="btn btn--main">
          See all testimonials
        </Link>
      </div>
    </section>
  );
}

export default Tetsimonials;
