import React from "react";
import { Avatar } from 'antd';

const Author = ({ author }) => {
  return (
    <div className="list-item">
      <div className="avatar">
        <Avatar
          style={{
            backgroundColor: "#fde3cf",
            color: "#f56a00",
          }}
        >{author.firstName}</Avatar>
      </div>
      <div>{author?.firstName}</div>
      <div>{author?.lastName}</div>
      <div className="action"></div>
    </div>
  );
};

export default Author;
