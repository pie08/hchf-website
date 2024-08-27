import ButtonLink from "@/app/_components/ButtonLink";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import { Profile } from "./Profile";
import { Container } from "@/app/_components/Container";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3.2rem;
`;

const ProfileCardsContainer = styled.div`
  grid-column: 3 / 11;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;

  @media screen and (max-width: 52em) {
    grid-column: 2 / 12;
  }

  @media screen and (max-width: 38em) {
    grid-column: 1 / -1;
    grid-template-columns: 1fr;
    justify-items: center;
  }
`;

interface ClientProfilesProps {}

const ClientProfiles: FC<ClientProfilesProps> = ({}) => {
  return (
    <Section data-gray>
      <SectionHeading>
        <h4>Client profiles</h4>
      </SectionHeading>

      <GridContainer>
        <ProfileCardsContainer>
          <Profile
            imgSrc="/assets/images/profiles/preview/keith.webp"
            name="Keith"
            age={67}
            reason="Rotator cuff surgery"
          />
          <Profile
            imgSrc="/assets/images/profiles/preview/ray.webp"
            name="Ray"
            age={62}
            reason="Knee replacement surgery"
          />
          <Profile
            imgSrc="/assets/images/profiles/preview/anna.webp"
            name="Anna"
            age={60}
            reason="Knee replacement surgery"
          />
          <Profile
            imgSrc="/assets/images/profiles/preview/elaine.webp"
            name="Elaine"
            age={67}
            reason="Osteoporosis / General Fitness"
          />
        </ProfileCardsContainer>
      </GridContainer>

      <ButtonLink href="/profiles">See all profiles</ButtonLink>
    </Section>
  );
};

export default ClientProfiles;
