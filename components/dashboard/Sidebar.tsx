import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { CLOSE } from "../../redux/actions/action";

// React Icon
import { CgTikcode } from "react-icons/cg";
import { RiTeamLine } from "react-icons/ri";
import { RiSettings3Line } from "react-icons/ri";
import { AiOutlineContacts } from "react-icons/ai";
import { BsDashCircle, BsInfoCircle } from "react-icons/bs";
import { GrNodes, GrHomeRounded } from "react-icons/gr";

// Icon Style
const Iconstyle = {
  fontSize: "1.5em",
  color: "#373131",
};

// Logo Icon Settings
const LogoIconSettings = {
  fontSize: "2.5em",
  color: "#373131",
};

const Sidebar = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  // Current Path
  const current_url_pathname: any = router.pathname;

  const CloseSidebar = () => {
    dispatch({ type: CLOSE });
  };

  const LogOutHandler = () => {
    dispatch({ type: CLOSE });

    // Redirect To Login Page After 2secs
    setTimeout(() => {
      router.push("/auth/login");
    }, 1000);
  };

  // Toggle State
  const ToggleState = useSelector(
    (state: any) => state.ModeReducer.isSideBarOpen
  );

  return (
    <>
      <div
        className={
          ToggleState ? "dashboard_sideBar" : "dashboard_sideBar active"
        }
      >
        <div className="dashboard_sidebar_height">
          <div className="dashboard_logo">
            <Link href="/dashboard" className="dashboard_logo_flex_container">
              <GrNodes style={LogoIconSettings} />
              <h2 style={{ color: "#000000" }}>Zoldyck </h2>
            </Link>
          </div>
        </div>

        <div className="dashboard_sidebar_navigation ">
          <ul>
            <div className="sidebar_top_part">
              <Link href="/" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <GrHomeRounded style={Iconstyle} />
                  <li>Home </li>
                </div>
              </Link>

              <Link href="/Projects" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <CgTikcode style={Iconstyle} />
                  </div>
                  <li>Projects</li>
                </div>
              </Link>

              <Link href="/Tasks" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <AiOutlineContacts style={Iconstyle} />
                  </div>
                  <li>Tasks</li>
                </div>
              </Link>

              <Link href="/Teams" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <RiTeamLine style={Iconstyle} />
                  </div>
                  <li>Teams </li>
                </div>
              </Link>

              <Link href="/Settings" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <RiSettings3Line style={Iconstyle} />
                  </div>
                  <li>Settings </li>
                </div>
              </Link>
            </div>

            <div className="sidebar_bottom_part">
              <Link href="/help" onClick={CloseSidebar}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <BsInfoCircle style={Iconstyle} />
                  </div>
                  <li>Help & Information</li>
                </div>
              </Link>

              <div onClick={LogOutHandler}>
                <div className="dashboard_flex_item">
                  <div id="sidebar__icon__style">
                    <BsDashCircle style={Iconstyle} />
                  </div>
                  <li>Log Out</li>
                </div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
