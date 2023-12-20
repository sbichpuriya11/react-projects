import React, { useState } from "react";
import FileBase64 from "react-file-base64";
import "./styles.css";
const FormInput = () => {
  const [post, setPost] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const handleClear = (e) => {
    e.preventDefault();
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(post);
    setPost({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    });
  };
  return (
    <form className="form bg-light">
      <h4 className="text-center mb-5">Creating a Memory</h4>

      <div className="form-outline mt-4 border border-1 rounded-2">
        <input
          type="text"
          id="creator"
          className="form-control form-control-lg"
          name="creator"
          value={post.creator}
          onChange={(e) => setPost({ ...post, creator: e.target.value })}
        />
        <label className="form-label" htmlFor="creator">
          Creator
        </label>
      </div>

      <div className="form-outline mt-4 border border-1 rounded-2">
        <input
          type="text"
          id="title"
          name="title"
          className="form-control form-control-lg"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <label className="form-label" htmlFor="title">
          Title
        </label>
      </div>

      <div className="form-outline mt-4 border border-1 rounded-2">
        <textarea
          type="text"
          id="message"
          rows={3}
          name="message"
          className="form-control form-control-lg"
          value={post.message}
          onChange={(e) => setPost({ ...post, message: e.target.value })}
        />
        <label className="form-label" htmlFor="message">
          Message
        </label>
      </div>

      <div className="form-outline mt-4 border border-1 rounded-2">
        <input
          type="text"
          id="tags"
          name="tags"
          className="form-control form-control-lg"
          value={post.tags}
          onChange={(e) => setPost({ ...post, tags: e.target.value })}
        />
        <label className="form-label" htmlFor="tags">
          Tags (comma seperated)
        </label>
      </div>

      <div className="form-outline mt-4">
        <FileBase64
          type="file"
          onDone={({ base64 }) => setPost({ ...post, selectedFile: base64 })}
        />
      </div>
      <div className="mt-4 form-buttons mx-auto">
        <button
          className="btn btn-success btn-block rounded-1"
          onClick={(e) => handleSubmit(e)}
        >
          Create
        </button>
        <button
          className="btn btn-danger btn-block rounded-1"
          onClick={(e) => handleClear(e)}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default FormInput;
