export interface INav {
  href: string;
  name: string;
}

const Nav: INav[] = [
  {
    href: "/",
    name: "Home"
  },
  {
    href: "/blog",
    name: "Blog"
  },
  {
    href: "/readme",
    name: "README"
  }
];

export default Nav;
