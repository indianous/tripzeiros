export default function durationConverter(minutes: number): string {
  if (minutes > 60) {
    const hour = Math.trunc(minutes / 60);
    minutes = minutes % 60;
    return hour.toString() + " h " + minutes.toString() + " min";
  } else {
    return minutes.toString() + " min";
  }
}
