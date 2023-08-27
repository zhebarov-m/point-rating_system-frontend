import { FC } from "react";
import styles from "../pages/RatingPage.module.scss";


const InfoAboveTable: FC = () => {
  return (
    <div className={styles.infoCurrentGroup}>
      <p>
        <span>Дисцилина:</span> Web-программирование
      </p>
      <p>
        <span>Форма отчетности:</span> Экзамен
      </p>
      <p>
        <span>Преподователь:</span> Жебаров Магомед Рамзанович
      </p>
      <p>
        <span>Группа: </span> И2.21-22
      </p>
    </div>
  );
};

export default InfoAboveTable;
