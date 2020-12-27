import PropTypes from 'prop-types';
import styles from './postHeader.module.css';

const HeadPost = ({ meta, isBlogPost }) => (
  <>
    <div>
      <h1
        className={`${
          isBlogPost ? styles.title : styles.previewTitle
        } text-yellow mb-2`}
      >
        {meta.title}
      </h1>
      {isBlogPost ? null : <p className="text-gray-50">{meta.description}</p>}
    </div>

    <div className={styles.meta}>
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        {`☕ ${meta.readTime} min read`}
      </span>
      {!isBlogPost ? <span>Read more →</span> : null}
    </div>
  </>
);

HeadPost.propTypes = {
  meta: PropTypes.object,
  isBlogPost: PropTypes.bool,
};

export default HeadPost;
