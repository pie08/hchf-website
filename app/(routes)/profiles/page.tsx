import { Container } from "@/app/_components/Container";
import PageHeader from "@/app/_components/PageHeader";
import { Section } from "@/app/_components/Section";
import { styled } from "@linaria/react";
import { FC } from "react";
import profilesData from "@/app/_data/profiles.json";
import Profile from "./Profile";

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
          {profilesData.map((profile, i) => (
            <Profile key={i} profile={profile} />
          ))}
        </ProfileContainer>
      </Section>
    </>
  );
};

export default page;
