import React from "react";
import { Avatar } from "antd";
import { Link } from "react-router-dom";

const Tile = ({ slug, id, avatar, bgColor, color, title, subtitle, isMobile }) => {
  return (
    <div className="list-item">
      {!isMobile && (
        <div className="avatar">
          <Avatar
            icon={avatar}
            style={{
              backgroundColor: bgColor,
              color: color,
            }}
          />
        </div>
      )}
      <Link to={`${slug}/${id}`} style={{ display: "block" }}>
        <div className="links">
          <div className="names">{title}</div>
          {!isMobile && subtitle && <div className="names">{subtitle}</div>}
          {/* to do */}
          {/* <div className="action"></div> */}
        </div>
      </Link>
    </div>
  );
};

export default Tile;
