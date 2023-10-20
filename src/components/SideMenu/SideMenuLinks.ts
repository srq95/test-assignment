const SideMenuLinks: SideMenuLinksType[] = [
  {
    name: "Modules",
    icon: "/assets/images/icons/modules.svg",
    link: "/",
  },
  {
    name: "Job Titles",
    icon: "/assets/images/icons/briefcase.svg",
    link: "/",
  },
  {
    name: "Job Description",
    icon: "/assets/images/icons/briefcase.svg",
    link: "/",
  },
  {
    name: "Job Portal Roles",
    icon: "/assets/images/icons/briefcase.svg",
    link: "/",
  },
  {
    name: "Job Portal Users",
    icon: "/assets/images/icons/briefcase.svg",
    link: "/",
  },
  {
    name: "Countries",
    icon: "/assets/images/icons/globe.svg",
    link: "/",
    dropDown: [
      {
        name: "Countries",
        icon: "/assets/images/icons/globe.svg",
        link: "/",
        active: true,
      },
      {
        name: "Country Vacations",
        icon: "/assets/images/icons/briefcase-alt.svg",
        link: "/",
      },
    ],
  },
];

const SideMenuBottomLinks: SideMenuLinksType[] = [
  {
    name: "Logout",
    icon: "/assets/images/icons/logout.svg",
    link: "/",
  },
];

export { SideMenuLinks, SideMenuBottomLinks };
