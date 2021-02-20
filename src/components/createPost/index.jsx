import React from 'react';

const CreatePost = ({ handleSubmit, handleChange, errors }) => (
  <>
    <h3>CreatePost</h3>
    {errors && <p>{errors}</p>}
    <form onSubmit={handleSubmit}>
      <input type="text" onChange={(e) => handleChange(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  </>
);

export default CreatePost;
