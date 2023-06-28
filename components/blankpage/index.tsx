import React from "react";

// Twitter Icon
import { FaTwitter, FaLinkedin } from "react-icons/fa";

// Soon Style
import style from "./soon.module.scss";
import Link from "next/link";

// Icon Style
const IconSettings = {
  fontSize: "16px",
};

const CoomingSoon = () => {
  return (
    <div id={style.coming_soon_container}>
      <h1>Nothing To See Here</h1>
      <div className={style.social_link_up}>
        <Link href="https://twitter.com/jeremytechie">
          <div className={`${style.social_button} ${style.twitter_button}`}>
            <p>Find Me On Twitter</p>
            <FaTwitter style={IconSettings} />
          </div>
        </Link>

        <Link href="https://www.linkedin.com/in/blyncnov">
          <div className={`${style.social_button} ${style.linkedln_button}`}>
            <p>Find Me On LinkedIn</p>
            <FaLinkedin style={IconSettings} />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default CoomingSoon;
