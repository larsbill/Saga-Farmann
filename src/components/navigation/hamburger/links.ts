export const links = (crewId: string) => {
  return [
    { href: "/", label: "Home" },
    { href: `/crew_members/${crewId}`, label: "Crew" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/about-us", label: "About us" },
    { href: "/the_ship", label: "The ship" },
    { href: "/pressarchive", label: "Press" },
  ];
};
