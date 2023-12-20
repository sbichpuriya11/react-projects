import React from "react";
import "./styles.css";

function Post({ post }) {
  return (
    <div className="col-lg-5 mx-auto mb-5">
      <div className="card bg-light">
        <img
          src={post.image}
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-author">Author</div>
        <p className="posting-time">time</p>
        <span className="edit-button" onClick={() => console.log("Hello")}>
          <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
        </span>
        <div className="card-body">
          <h5 className="card-title">Post title</h5>
          <p className="small">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <p className="hash-tags">#Hashtags</p>
          <button className="mx-auto btn like-button">
            <i className="fa fa-thumbs-up" aria-hidden="true"></i> Like {"0"}
          </button>
          <button className="mx-auto btn delete-button">
            <i className="fa fa-trash" aria-hidden="true"></i> Delete
          </button>
        </div>
      </div>
    </div>
  );
}

export default Post;
