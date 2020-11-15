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
    href: "/about",
    name: "About"
  }
];

export default Nav;
