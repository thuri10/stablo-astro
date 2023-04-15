export interface Props {
  name: string;
  slug: string;
  image: string;
  bio: string;
}

export type Author = Props;

export const authors: Props[] = [
  {
    name: "Martin Muthuri",
    slug: "martin-thuri",
    image: "./src/assets/authors/mario.webp",
    bio: "Martin is a Software Engineer with experience in developing secure web applications using Javascript, perfoming security audits and ensuring that all code is compliant.",
  },
];
