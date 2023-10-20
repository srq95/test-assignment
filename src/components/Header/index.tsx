import { Row, Col } from "react-bootstrap";
import style from "./Header.module.css";
import Breadcrumb from "@/elements/Breadcrumb";
import Link from "next/link";

const Header = () => {
  const breadcrumbLinks: BreadcrumbType[] = [
    {
      name: "Dashboard",
      link: "/",
    },
    {
      name: "Job Portal",
      link: "/",
    },
    {
      name: "Country",
      link: "/",
    },
  ];

  const flags = [
    "/assets/images/flags/Japan.svg",
    "/assets/images/flags/Canada.svg",
    "/assets/images/flags/Pakistan.png",
  ];

  return (
    <>
      <section className={style.header}>
        <Row className="align-items-center">
          <Col md={6}>
            <Breadcrumb breadcrumbs={breadcrumbLinks} />
          </Col>
          <Col md={6}>
            <div className={style.rightArea}>
              <ul className={style.flagsList}>
                {flags.map((item, index) => (
                  <li key={index} className={index == 0 ? style.active : ""}>
                    <Link href="/">
                      <img src={item} alt="" />
                    </Link>
                  </li>
                ))}
              </ul>
              <ul>
                <li>
                  <Link href="/">
                    <img src="/assets/images/icons/user.svg" alt="" />
                    Hi, Nathaniel
                  </Link>
                </li>
              </ul>
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default Header;
