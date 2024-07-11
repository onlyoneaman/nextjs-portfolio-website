import {JSX} from "react";

type Experience = {
  date: string;
  title: string;
  description: string;
  website: string;
  points: string[];
};

type RouteLink = {
  name: string;
  path: string;
  icon: JSX.Element;
}

type Blog = {
  title: string;
  description: string;
  date: string;
  image?: string;
  cardImage?: string;
  content: string;
  link?: string;
  label?: string;
  slug: string;
  hidden?: boolean;
}

export {
  Experience, RouteLink, Blog
}
