import ButtonLink from "@/app/_components/ButtonLink";
import { Container } from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";
import { Section } from "@/app/_components/Section";
import { styled } from "@linaria/react";
import Image from "next/image";
import { FC } from "react";
import { PiClock, PiHeartbeat, PiPersonSimpleRun, PiX } from "react-icons/pi";

const ProfileContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6.4rem;
`;

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <>
      <PageHeader title="Client Profiles" />

      <Section>
        <ProfileContainer>
          <Profile />
        </ProfileContainer>
      </Section>
    </>
  );
};

const StyledProfile = styled.div`
  max-width: 80rem;
  display: flex;
  gap: 4.8rem;
  padding: 1.6rem;
  background-color: var(--color-gray-50);

  & img {
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

const Profile: FC = () => {
  return (
    <StyledProfile>
      <Image
        src="/assets/images/client-images/adult-training/elaine-1.webp"
        alt=""
        width={562}
        height={999}
      />

      <div>
        <h2>
          Elaine <span>- 66</span>
        </h2>

        <ul>
          <li>
            <IconWrapper>
              <PiHeartbeat />
            </IconWrapper>
            <p>General Fitness / Osteoporosis</p>
          </li>
          <li>
            <IconWrapper>
              <PiClock />
            </IconWrapper>
            <p>Client for 5 years</p>
          </li>
          <li>
            <IconWrapper>
              <PiPersonSimpleRun />
            </IconWrapper>
            <p>Gardening, Sailing</p>
          </li>
          <li>
            <IconWrapper>
              <PiX />
            </IconWrapper>
            <p>No prior gym experience</p>
          </li>
        </ul>

        <ButtonLink href="/" center={false}>
          See testimonial
        </ButtonLink>
      </div>
      <div></div>
    </StyledProfile>
  );
};

export default page;
