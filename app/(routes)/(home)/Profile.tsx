"use client";

import { styled } from "@linaria/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FC } from "react";

const StyledProfile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  padding: 1.6rem;
  background-color: var(--color-gray-white);
  border: 2px solid var(--color-gray-200);
  max-width: 35rem;
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    border: 2px solid var(--color-gray-300);
  }

  @media screen and (max-width: 38em) {
    max-width: 30rem;
  }
`;

const ProfileImage = styled(Image)`
  display: block;
  width: 100%;
  height: 100%;
`;

const ProfileTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  align-items: center;

  h3 {
    color: var(--color-primary-800);

    & span {
      font-family: var(--font-poppins);
      color: var(--color-gray-400);
      font-weight: 400;
    }
  }

  & p {
    font-size: 1.8rem;
  }
`;

interface ProfileProps {
  imgSrc: string;
  name: string;
  age: number;
  reason: string;
}

export const Profile: FC<ProfileProps> = ({ imgSrc, name, age, reason }) => {
  const router = useRouter();

  return (
    <StyledProfile
      onClick={() => router.push(`/profiles#${name.toLowerCase()}`)}
    >
      <ProfileImage src={imgSrc} alt={name} width={600} height={600} />

      <ProfileTextContainer>
        <h3>
          {name} <span>- {age}</span>
        </h3>
        <p>{reason}</p>
      </ProfileTextContainer>
    </StyledProfile>
  );
};
