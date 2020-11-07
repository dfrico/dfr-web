import PropTypes from 'prop-types';
import Link from 'next/link';
import PostHeader from '../postHeader';
import styles from './preview.module.scss';

const PostPreview = ({ post }) => {
  const {
    link,
    module: { meta },
  } = post;

  return (
    <article className={styles.preview}>
      <Link href={`/blog${link}`}>
        <a className={styles.link}>
          <div className={styles.container}>
            <div className={styles.textWrapper}>
              <PostHeader meta={meta} />
            </div>
            {meta.postImg ? (
              <div className={styles.imgWrapper}>
                <img src={meta.postImg} alt={meta.title} />
              </div>
            ) : null}
          </div>
        </a>
      </Link>
    </article>
  );
};

PostPreview.propTypes = {
  post: PropTypes.object,
};

export default PostPreview;
