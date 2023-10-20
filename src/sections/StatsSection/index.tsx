import StatsData from "./StatsData";
import style from "./StatsSection.module.css";
import { Row, Col } from "react-bootstrap";

const StatsSection = () => {
  return (
    <>
      <section className={style.statsSection}>
        <Row className="gapequal-xy">
          <Col md={6}>
            <Row className="gapequal-xy">
              {StatsData.map((item, index) => (
                <Col md={6} key={index}>
                  <div className={style.singleStat}>
                    <h2>{item.name}</h2>
                    <img src={item.icon} alt="" />
                    <p>{item.detail}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </Col>
          <Col md={6}>
            <div className={style.mapArea}>
              <img src="/assets/images/map/map.png" alt="" />
            </div>
          </Col>
        </Row>
      </section>
    </>
  );
};

export default StatsSection;
