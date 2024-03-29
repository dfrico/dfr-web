import PropTypes from 'prop-types';
import { Meta } from './post';

type Props = {
  meta: Meta;
  isBlogPost?: boolean;
};

function HeadPost({ meta, isBlogPost }: Props) {
  return (
    <>
      <div className={isBlogPost ? 'mt-4' : ''}>
        <h1
          className={`${
            isBlogPost
              ? 'font-extrabold font-rubik text-6xl leading-compact'
              : 'font-bold font-rubik text-2xl mt-0 overflow-hidden overflow-ellipsis twoLines'
          } text-yellow mb-2`}
        >
          {meta.title}
        </h1>
        {isBlogPost ? null : <p className="text-gray-50">{meta.description}</p>}
      </div>

      <div>
        <span className="text-gray-300 mr-4">{meta.date}</span>
        <span className="text-gray-300 mr-4" role="img" aria-label="one coffee">
          {`☕ ${meta.readTime} min read`}
        </span>
        {!isBlogPost ? (
          <span className="text-gray-300 mr-4">Read more →</span>
        ) : null}
      </div>
    </>
  );
}

HeadPost.propTypes = {
  meta: PropTypes.object,
  isBlogPost: PropTypes.bool,
};

export default HeadPost;
