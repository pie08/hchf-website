import { intervalToDuration } from "date-fns";

// return time in string for a clients time period
function calcClientTimePeriod(timePeriod: {
  start: string;
  end: string | null;
}) {
  // create interval object
  const interval = intervalToDuration({
    start: new Date(timePeriod.start),
    end: timePeriod.end === null ? Date.now() : timePeriod.end,
  });

  // return interval in string format
  return `${interval.years} years${
    interval.months ? `, ${interval.months} months` : ""
  }`;
}

export default calcClientTimePeriod;
