import ButtonLink from "@/app/_components/ButtonLink";
import { GridContainer } from "@/app/_components/GridContainer";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import { Profile } from "./Profile";

const ProfileCardsContainer = styled.div`
  grid-column: 3 / 11;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
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
            imgSrc="/assets/images/profile-images/keith.webp"
            name="Keith"
            age={67}
            reason="Rotator cuff surgery"
          />
          <Profile
            imgSrc="/assets/images/profile-images/ray.webp"
            name="Ray"
            age={62}
            reason="Knee replacement surgery"
          />
          <Profile
            imgSrc="/assets/images/profile-images/anna.webp"
            name="Anna"
            age={60}
            reason="Knee replacement surgery"
          />
          <Profile
            imgSrc="/assets/images/profile-images/elaine.webp"
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
