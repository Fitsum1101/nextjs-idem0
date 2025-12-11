export interface ContactBlockProps {
  icon: string;
  children: React.ReactNode;
}

export interface CounterItemProps {
  value: string | number;
  text: string;
}

export interface AwardItemProps {
  img: string;
  title: string;
  desc: string;
  ribbon?: boolean;
}
