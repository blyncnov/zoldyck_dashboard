import React from "react";

// Table Style
import style from "./table.module.scss";

// React Icon
import { BiLike } from "react-icons/bi";

const TableComponent = () => {
  return (
    <div>
      <div id={style.custom_table}>
        <div id={style.table_header}>
          <div>
            <h3>Current Tasks</h3>
            <span>Done 30%</span>
          </div>
          <div>
            <select name="period">
              <option value="Weekly">Weekly</option>
              <option value="Montly">Montly</option>
              <option value="Yearly">Yearly</option>
            </select>
          </div>
        </div>
        <br />
        {[0, 1, 2].map((data) => {
          return (
            <div key={data} id={style.table_td}>
              <div>
                <div className={style.sumary_icon}>
                  <BiLike />
                </div>
              </div>
              <div>
                <li>Product Review for Ul8 Market</li>
              </div>
              <div>
                <li>In Progress</li>
              </div>
              <div>
                <li>4hr</li>
              </div>
              <div>
                <li>...</li>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TableComponent;
