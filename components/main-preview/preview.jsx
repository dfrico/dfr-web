import posts from "./posts.json";
import Card from "../card";

// TODO: move to CMS
import post from '../../posts/hello-world';

function Preview() {
  return (
    <>
      {posts.map((p) => {
        return (
          <Card
            title={post.title}
            date={post.date}
            key={post.title}
            body={post.body}
            previewImage={post.previewImage}
          />
        );
      })}
    </>
  );
}

export default Preview;
