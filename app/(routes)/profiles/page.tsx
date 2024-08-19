import ButtonLink from "@/app/_components/ButtonLink";
import { Container } from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";
import { Section } from "@/app/_components/Section";
import { styled } from "@linaria/react";
import { FC } from "react";
import {
  PiBuildingApartment,
  PiCheck,
  PiClock,
  PiHeartbeat,
  PiPersonSimpleRun,
  PiX,
} from "react-icons/pi";
import profilesData from "@/app/_data/profiles.json";

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`;

interface pageProps {}

const tempProfile: Profile = {
  vercelVideoSrc:
    "https://ipofgt4sminu9rdg.public.blob.vercel-storage.com/profiles/elaine-profile-g4U1qsIJcq35KEKmUPZVimtRkJu2kW.mp4",
  fallbackVideoSrc: "/assets/video/profiles/elaine-profile.mp4",
  name: "Elaine",
  age: "66",
  info: {
    reason: "Osteoporosis / General fitness",
    timePeriod: "5 years",
    activities: ["Gardening", "Sailing"],
    priorExperience: false,
  },
  testimonialLink: "/",
};

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeader title="Client Profiles" />

      <Section>
        <ProfileContainer>
          {profilesData.map((profile, i) => (
            <Profile key={i} profile={profile} />
          ))}
        </ProfileContainer>
      </Section>
    </>
  );
};

const StyledProfile = styled.div`
  max-width: 80rem;
  width: 100%;
  display: flex;
  gap: 4.8rem;
  padding: 1.6rem;
  background-color: var(--color-gray-50);

  & video {
    display: block;
    max-width: 30rem;
    height: 100%;
  }

  & div {
    display: flex;
    flex-direction: column;
    gap: 2.4rem;

    & h2 {
      color: var(--color-primary-800);

      & span {
        font-family: var(--font-poppins);
        color: var(--color-gray-400);
        font-weight: 400;
        font-size: 4rem;
      }
    }

    & ul {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;

      & li {
        display: flex;
        gap: 0.8rem;
        align-items: center;

        & p {
          font-size: 2rem;
        }
      }
    }
  }
`;

const IconWrapper = styled.div`
  & svg {
    color: var(--color-primary-800);
    width: 3.2rem;
    height: 3.2rem;
  }
`;

interface infoObj {
  reason: string;
  timePeriod: string;
  activities?: string[];
  priorExperience: boolean;
}

interface Profile {
  vercelVideoSrc: string;
  fallbackVideoSrc: string;
  name: string;
  age: string;
  info: infoObj;
  testimonialLink?: string;
  college?: string;
}

interface ProfileProps {
  profile: Profile;
}

const Profile: FC<ProfileProps> = ({ profile }) => {
  const {
    vercelVideoSrc,
    fallbackVideoSrc,
    name,
    age,
    info,
    testimonialLink,
    college,
  } = profile;

  return (
    <StyledProfile>
      <video
        loop
        muted
        autoPlay
        disablePictureInPicture
        width={300}
        height={533}
      >
        <source src={vercelVideoSrc} />
        <source src={fallbackVideoSrc} />
      </video>

      <div>
        <h2>
          {name} <span>- {age}</span>
        </h2>

        <ul>
          <li>
            <IconWrapper>
              <PiHeartbeat />
            </IconWrapper>
            <p>{info.reason}</p>
          </li>
          <li>
            <IconWrapper>
              <PiClock />
            </IconWrapper>
            <p>Client for {info.timePeriod}</p>
          </li>
          <li>
            <IconWrapper>
              <PiPersonSimpleRun />
            </IconWrapper>
            <p>{info.activities ? info.activities.join(", ") : "None"}</p>
          </li>
          <li>
            <IconWrapper>
              {info.priorExperience ? <PiCheck /> : <PiX />}
            </IconWrapper>
            <p>
              {info.priorExperience
                ? "Prior gym experience"
                : "No prior gym experience"}
            </p>
          </li>
          {college?.length && (
            <li>
              <IconWrapper>
                <PiBuildingApartment />
              </IconWrapper>
              <p>Commited to {college}</p>
            </li>
          )}
          {/* {college === "penn state" && (
            <li>
              <IconWrapper>
                <svg>
                  <use xlinkHref="/assets/images/penn-state-svg.svg#svg" />
                </svg>
              </IconWrapper>
              <p>Commited to Penn State</p>
            </li>
          )} */}
        </ul>

        {testimonialLink && (
          <ButtonLink href={testimonialLink} center={false}>
            See testimonial
          </ButtonLink>
        )}
      </div>
      <div></div>
    </StyledProfile>
  );
};

export default page;
