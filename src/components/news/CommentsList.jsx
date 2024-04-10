"use client";
import React, { useState } from "react";
import CommentsForm from "./CommentsForm";

const CommentsList = (props) => {
  const [key, setKey] = useState("Comments");
  return (
    <div className="container">
      <div
        id="controlled-tab-example"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
      >
        <div eventKey="Comments" title="Comments">
          <ul className="list-group bg-transparent list-group-flush">
            {props.data.map((item, i) => {
              return (
                <li className="list-group-item bg-transparent">
                  <h6 className="text-dark">
                    <i className="bi bi-person-circle"></i>{" "}
                    {item["users"]["firstName"]}
                  </h6>
                  <p className="text-secondary">{item["descriptions"]}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <div eventKey="Create" title="Create">
          <CommentsForm postID={props.postID} />
        </div>
      </div>
    </div>
  );
};

export default CommentsList;
