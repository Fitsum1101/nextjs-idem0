// Create a type for timeline items
export interface TimelineItem {
  year: string;
  desc: string;
  image: string;
  imageAlt: string;
  layout: "left" | "right"; // 'left' means content on left, image on right; 'right' means reversed
}
