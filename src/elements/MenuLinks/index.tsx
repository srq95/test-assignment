import Link from "next/link";

type MenuLinksType = {
  item: linksType;
};

const MenuLinks: React.FC<MenuLinksType> = ({ item }) => {
  return (
    <Link href={item.link}>
      {item.icon && <img src={item.icon} alt="" />}
      {item.name}
    </Link>
  );
};

export default MenuLinks;
