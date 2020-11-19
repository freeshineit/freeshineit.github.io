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
    href: "/readme",
    name: "README"
  }
];

export default Nav;
