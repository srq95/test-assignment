import { Row, Col } from "react-bootstrap";
import CountryData from "./CountryData";
import style from "./CountrySection.module.css";

const CountrySection = () => {
  return (
    <>
      <section>
        <Row>
          {CountryData.map((item, index) => (
            <Col md={4} key={index}>
              <div
                className={`${style.singleCountry} ${
                  item.addClass ? item.addClass : ""
                }`}
              >
                <div className={style.singleCountryHead}>
                  <h2>Country</h2>
                  <h3>{item.location}</h3>
                  <img src={item.icon} alt="" />
                </div>
                {item.detailList && (
                  <ul>
                    {item.detailList.map((detailItem, detailIndex) => (
                      <li key={detailIndex}>
                        <img src={detailItem.icon} alt="" />
                        <h3>{detailItem.name}</h3>
                        <p>{detailItem.detail}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {item.details && (
                  <div className={style.details}>
                    <img src={item.details.icon} alt="" />
                    <h3>{item.details.name}</h3>
                    <p>{item.details.detail}</p>
                  </div>
                )}
              </div>
            </Col>
          ))}
        </Row>
      </section>
    </>
  );
};

export default CountrySection;
