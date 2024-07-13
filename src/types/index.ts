import {JSX} from "react";

type Experience = {
  date: string;
  title: string;
  description: string;
  role: string;
  companyName: string;
  website: string;
  points: string[];
  techStack: string[];
  fullLogo?: string;
};

type RouteLink = {
  name: string;
  path: string;
  icon: JSX.Element;
}

type Project = {
  title: string;
  description: string;
  date: string;
  tags?: string[];
  techStack?: string[];
  image: string;
  link?: string;
  label?: string;
  slug: string;
  hidden?: boolean;
  secondaryLink?: string;
  secondaryLabel?: string;
  content: string;
}

type Tool = {
  title: string;
  tag: string;
  image: string;
  link: string;
}

type CommonButtonProps = {
  variant?: 'primary' | 'secondary'
}

export type {
  Experience, RouteLink, Project, Tool, CommonButtonProps
}
