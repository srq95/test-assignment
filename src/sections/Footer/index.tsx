import Link from "next/link";
import style from "./Footer.module.css";

const Footer = () => {
  const FooterLinks = [
    {
      name: "About",
      link: "/",
    },
    {
      name: "Support",
      link: "/",
    },
    {
      name: "Contact Us",
      link: "/",
    },
  ];
  return (
    <>
      <footer className={style.footer}>
        <ul>
          {FooterLinks.map((item, index) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </footer>
    </>
  );
};

export default Footer;
