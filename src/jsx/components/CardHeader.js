import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

import panda from "../../Images/panda.gif";

const CardHeader = () => {
  const [data, setData] = useState({ title: "Public", icon: "bi bi-globe" });
  return (
    <>
      <div className="d-flex justify-content-between">
        <div className="profile d-flex align-items-center">
          <img src={panda} className="profile-pic" />
          <b className="profile-name">James Franco</b>
        </div>
        <div>
          <DropdownButton variant="success" title={data?.title}>
            <Dropdown.Item
              onClick={() => setData({ title: "Public", icon: "bi bi-globe" })}
            >
              <div
                className={`d-flex cus-drop-down ${
                  data?.title === "Public" && "active"
                }`}
              >
                <i className="bi bi-globe"></i>
                <div className="d-flex flex-column">
                  <b>Public</b>
                  <span>Visible to everyone</span>
                </div>
              </div>
            </Dropdown.Item>
            <Dropdown.Item
              onClick={() => setData({ title: "Private", icon: "bi bi-lock" })}
            >
              <div
                className={`d-flex cus-drop-down ${
                  data?.title === "Private" && "active"
                }`}
              >
                <i className="bi bi-lock"></i>
                <div className="d-flex flex-column">
                  <b>Private</b>
                  <span>Visible to your followers</span>
                </div>
              </div>
            </Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
    </>
  );
};

export default CardHeader;
