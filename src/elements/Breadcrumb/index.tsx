import Link from "next/link";
import style from "./Breadcrumb.module.css";

type BreadcrumbPropType = {
  breadcrumbs: BreadcrumbType[];
};

const Breadcrumb: React.FC<BreadcrumbPropType> = ({ breadcrumbs }) => {
  return (
    <>
      <ul className={style.breadcrumb}>
        {breadcrumbs.map((item, index) => (
          <li key={index}>
            <Link href={item.link}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Breadcrumb;
