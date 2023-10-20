import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import style from "./DashbroardHead.module.css";

const DashboardHead = () => {
  return (
    <>
      <div className={style.dashboardHead}>
        <h1>Countries</h1>
      </div>
      <div className={style.dashboardTopRightLink}>
        <button type="button">
          Add New Country
          <FontAwesomeIcon icon={faPlus} />
        </button>
      </div>
    </>
  );
};

export default DashboardHead;
