
type BlogExperienceEnum = "experience";
type BlogProjectEnum = "project";
type BlogThoughtEnum = "thought";
type BlogOpinionEnum = "opinion";
type BlogTutorialEnum = "tutorial";
type BlogOtherEnum = "other";

type BlogTypeEnum = BlogExperienceEnum | BlogProjectEnum | BlogThoughtEnum | BlogOpinionEnum |
  BlogTutorialEnum | BlogOtherEnum;

type Blog = {
  title: string;
  description: string;
  date: string;
  image?: string;
  cardImage?: string;
  content: string;
  type: BlogTypeEnum;
  link?: string;
  label?: string;
  slug: string;
  hidden?: boolean;
}

export type {
  Blog
}
