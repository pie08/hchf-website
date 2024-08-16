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
  transition: all 0.2s;

  &:hover {
    cursor: pointer;
    translate: 0 -4px;
  }
`;

const ProfileImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 1/1;

  & img {
    object-fit: cover;
  }
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
    font-size: 2rem;
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
      <ProfileImageWrapper>
        <Image src={imgSrc} alt={name} fill />
      </ProfileImageWrapper>

      <ProfileTextContainer>
        <h3>
          {name} <span>- {age}</span>
        </h3>
        <p>{reason}</p>
      </ProfileTextContainer>
    </StyledProfile>
  );
};
