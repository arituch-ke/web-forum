import { SVGProps } from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface Post {
  id: number;
  author_id: number;
  title: string;
  body: string;
  image_url: string;
  created_at: string;
}

export interface Author {
  id: number;
  name: string;
  role: string;
  place: string;
  avatar_url: string;
}
