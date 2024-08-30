import ButtonLink from "@/app/_components/ButtonLink";
import { Section } from "@/app/_components/Section";
import { SectionHeading } from "@/app/_components/SectionHeading";
import { styled } from "@linaria/react";
import { FC } from "react";
import { Profile } from "./Profile";
import { Container } from "@/app/_components/Container";
import profilesData from "@/app/_data/profiles.json";
import { Profile as ProfileType } from "@/types/profile.type";
import { differenceInYears } from "date-fns";

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  gap: 3.2rem;
`;

const ProfileCardsContainer = styled.div`
  /* grid-column: 3 / 11; */
  grid-column: 1 / -1;
  justify-self: center;

  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3.2rem;
  justify-items: center;

  @media screen and (max-width: 52em) {
    grid-column: 2 / 12;
  }

  @media screen and (max-width: 38em) {
    grid-column: 1 / -1;
    grid-template-columns: 1fr;
  }
`;

interface ClientProfilesProps {}

const ClientProfiles: FC<ClientProfilesProps> = ({}) => {
  // get all needed profiles
  const keithData: ProfileType = profilesData.find(
    (profile) => profile.name === "keith"
  )!;
  const rayData: ProfileType = profilesData.find(
    (profile) => profile.name === "ray"
  )!;
  const annaData: ProfileType = profilesData.find(
    (profile) => profile.name === "anna"
  )!;
  const elaineData: ProfileType = profilesData.find(
    (profile) => profile.name === "elaine"
  )!;

  function calcAge(dob: Date) {
    return differenceInYears(Date.now(), dob);
  }

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
            age={calcAge(new Date(keithData.dateOfBirth))}
            reason={keithData.info.reason}
          />

          <Profile
            imgSrc="/assets/images/profiles/preview/ray.webp"
            name="Ray"
            age={calcAge(new Date(rayData.dateOfBirth))}
            reason={rayData.info.reason}
          />

          <Profile
            imgSrc="/assets/images/profiles/preview/anna.webp"
            name="Anna"
            age={calcAge(new Date(annaData.dateOfBirth))}
            reason={annaData.info.reason}
          />

          <Profile
            imgSrc="/assets/images/profiles/preview/elaine.webp"
            name="Elaine"
            age={calcAge(new Date(elaineData.dateOfBirth))}
            reason={elaineData.info.reason}
          />
        </ProfileCardsContainer>
      </GridContainer>

      <ButtonLink href="/profiles">See all profiles</ButtonLink>
    </Section>
  );
};

export default ClientProfiles;
