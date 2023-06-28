import React from "react";
import Image from "next/image";

// Ambassador Image
import Meganorton from "@/public/model/jeremy.jpeg";

// React Icons
import { BiLike } from "react-icons/bi";
import { RiTimerLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { MdDateRange, MdOutlineAnalytics } from "react-icons/md";
import { BsCameraVideo, BsThreeDotsVertical } from "react-icons/bs";

// Dashboard Style
import style from "./dashboard.module.scss";

// Chat Components
import Chat from "@/components/chat";

// Chart Js Component
import BarChart from "@/chart/BarChart";

// Table Component
import TableComponent from "@/components/table";

// Icon Style
const IconSettings = {
  fontSize: "16px",
  fontWeight: "800",
};

// Fake Data
const FakeData = [
  {
    id: 1,
    icon: <BiLike style={IconSettings} />,
    title: "Finished",
    nos: "18",
    desc: "+8 tasks",
    up: true,
  },
  {
    id: 2,
    icon: <RiTimerLine style={IconSettings} />,
    title: "Tracked",
    nos: "31h",
    desc: "+8 tasks",
    up: false,
  },
  {
    id: 3,
    icon: <MdOutlineAnalytics style={IconSettings} />,
    title: "Efficiency",
    nos: "93%",
    desc: "+12%",
    up: true,
  },
];

const Dashboard = () => {
  return (
    <>
      <div id={style.dashboard_layout}>
        <div className={style.dashboard_main_section}>
          <section className={style.dashboard_welcome_container}>
            <div className={style.dashboard_flex_spacer}>
              <h2>Hello, Jeremy </h2>
              <p>Track team progress here, you almost reach a goal!</p>
            </div>
            <div className={style.dashboard_column_spacer}>
              <p>18, May 2023</p>
              <MdDateRange />
            </div>
          </section>
          <section>
            <div className={style.dashboard_summary_container}>
              {FakeData.map((data) => {
                return (
                  <div key={data.id} className={style.dashboard_summary_column}>
                    <div className={style.sumary_icon}>{data.icon}</div>
                    <div className={style.sumary_content}>
                      <h4>{data.title} </h4>
                      <div className={style.dashboard_summary_row_details}>
                        <h3> {data.nos} </h3>
                        <li className={data.up ? style.up : style.down}>
                          {data.desc}{" "}
                        </li>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </section>
          <br />
          <section>
            <BarChart />
          </section>
          <section>
            <TableComponent />
          </section>
        </div>

        <div className={style.dashboard_side_section}>
          <div className={style.dashboard_quick_profile}>
            <div className={style.profile_image_container}>
              <Image src={Meganorton} alt="Meganorton" />
            </div>
            <h3>Jeremy | TypeScript Engineer</h3>
            <li>@jeremytechie</li>
            <div className={style.dashboard_choose_mode}>
              <div>
                <IoCallOutline style={IconSettings} />
              </div>
              <div>
                <BsCameraVideo style={IconSettings} />
              </div>
              <div>
                <BsThreeDotsVertical style={IconSettings} />
              </div>
            </div>
          </div>

          <section>
            <Chat />
          </section>
        </div>
      </div>
    </>
  );
};

export default Dashboard;

Dashboard.getLayout = function getLayout(page: any) {
  return page;
};
