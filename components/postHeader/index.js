import PropTypes from 'prop-types';
import styles from './postHeader.module.scss';

const HeadPost = ({ meta, isBlogPost }) => (
  <div className={styles.postHeader}>
    <h1 className={isBlogPost ? styles.title : styles.previewTitle}>
      {meta.title}
    </h1>
    <div className={styles.details}>
      {isBlogPost ? null : <p>{meta.description}</p>}
      <span>{meta.date}</span>
      <span role="img" aria-label="one coffee">
        {`☕ ${meta.readTime} min read`}
      </span>
      {!isBlogPost ? <span>Read more →</span> : null}
    </div>
  </div>
);

HeadPost.propTypes = {
  meta: PropTypes.object,
  isBlogPost: PropTypes.bool,
};

export default HeadPost;
