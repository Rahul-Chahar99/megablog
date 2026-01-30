import React from "react";
import { Container, PostForm as AddPostComponent } from "../Components";

function AddPost() {
  return (
    <div className="py-8">
      <Container>
        <AddPostComponent />
      </Container>
    </div>
  );
}

export default AddPost;
