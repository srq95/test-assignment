declare global {
  interface linksType {
    name: string;
    link: string;
    icon?: string;
    active?: boolean;
  }

  interface SideMenuLinksType extends linksType {
    dropDown?: linksType[];
  }

  interface BreadcrumbType {
    name: string;
    link: string;
  }
}

export default global;
