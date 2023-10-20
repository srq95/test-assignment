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

  interface StatsDataType {
    name: string;
    icon: string;
    detail: string;
  }

  interface CountryDataType {
    location: string;
    addClass?: string;
    detailList?: StatsDataType[];
    details?: StatsDataType;
  }
}

export default global;
