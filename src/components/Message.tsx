import React from "react";
import { MessageData } from "../const/types";



const Message = (
  data: Partial<MessageData>
) => {
  if (!data.text) return null;

  return (
    <div className="card">
      <div>
      <i className="bi bi-trash3-fill"></i>

      </div>
      <div className="row">
        {data.photoURL ? (
          <div className="col-md-4">
            <img
              src={data.photoURL}
              alt="Avatar"
              className="img-fluid rounded-circle"
            />
          </div>
        ) : null}
        <div className="col-md-8">
          {data.displayName ? <p>{data.displayName}</p> : null}
          
          <p>{data.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Message;
