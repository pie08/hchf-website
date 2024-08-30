export interface infoObj {
  reason: string;
  timePeriod: { start: string; end: string | null };
  activities?: string[];
  priorExperience: boolean;
}

export interface Profile {
  cdnVideoSrc: string;
  fallbackVideoSrc: string;
  name: string;
  dateOfBirth: string;
  info: infoObj;
  testimonialLink?: string;
  college?: string;
}
