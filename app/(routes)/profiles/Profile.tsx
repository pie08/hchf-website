"use client";

import ButtonLink from "@/app/_components/ButtonLink";
import { useIsVisible } from "@/app/_hooks/useIsVisible";
import calcClientTimePeriod from "@/app/_lib/calcClientTimePeriod";
import { Profile as ProfileType } from "@/types/profile.type";
import { styled } from "@linaria/react";
import { differenceInYears } from "date-fns";
import { FC, useEffect, useState } from "react";
import {
  PiBuildingApartment,
  PiCheck,
  PiClock,
  PiHeartbeat,
  PiPersonSimpleRun,
  PiX,
} from "react-icons/pi";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const StyledProfile = styled.div`
  max-width: 80rem;
  width: 100%;
  display: flex;
  gap: 4.8rem;
  padding: 1.6rem;
  background-color: var(--color-gray-50);

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
          font-size: 1.8rem;
        }
      }
    }
  }

  @media screen and (max-width: 38em) {
    flex-direction: column;
    max-width: 40rem;
  }
`;

const VideoContainer = styled.div`
  position: relative;

  & video {
    display: block;
    max-width: 30rem;
    /* normalized aspect ratio */
    aspect-ratio: 960 / 1706;
    object-fit: cover;
    z-index: 2;
  }

  & .loader {
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    translate: -50% -50%;
    max-width: 30rem;
    height: 100%;
    aspect-ratio: 960 / 1706;
  }

  @media screen and (max-width: 38em) {
    align-items: center;
  }
`;

const IconWrapper = styled.div`
  & svg {
    color: var(--color-primary-800);
    width: 3.2rem;
    height: 3.2rem;
  }
`;

interface ProfileProps {
  profile: ProfileType;
}

// todo: fix skeleton being too wide on mobile
const Profile: FC<ProfileProps> = ({ profile }) => {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const { isVisible, targetRef } = useIsVisible<HTMLVideoElement>();

  const {
    cdnVideoSrc,
    fallbackVideoSrc,
    name,
    dateOfBirth,
    info,
    testimonialLink,
    college,
  } = profile;

  // calculate age
  const age = differenceInYears(Date.now(), new Date(dateOfBirth));
  const clientTimePeriod = calcClientTimePeriod(info.timePeriod);

  useEffect(() => {
    if (isVisible) {
      targetRef.current?.play();
    }
  }, [targetRef, isVisible]);

  return (
    <StyledProfile id={name}>
      <VideoContainer>
        <video
          loop
          muted
          autoPlay={false}
          preload="none"
          disablePictureInPicture
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
          ref={targetRef}
        >
          <source src={cdnVideoSrc} />
          <source src={fallbackVideoSrc} />
          Your browser does not support the video tag. Please view in a modern
          browser
        </video>

        {!videoLoaded && (
          <span className="loader">
            <Skeleton
              height="100%"
              baseColor="var(--color-gray-200)"
              highlightColor="var(--color-gray-100)"
              duration={1}
            />
          </span>
        )}
      </VideoContainer>

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
            <p>Client for {clientTimePeriod}</p>
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
        </ul>

        {testimonialLink && (
          <ButtonLink href={testimonialLink} center={false}>
            See testimonial
          </ButtonLink>
        )}
      </div>
    </StyledProfile>
  );
};

export default Profile;
