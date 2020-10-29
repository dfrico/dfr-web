import styles from './card.module.scss';

function Card({
  title,
  date,
  body,
  previewImage,
}) {
  return (<article className={styles.postCard}>
    <div className={styles.cardPreview}>
      <h3>{title}</h3>
      <p className={styles.date}>{new Date(date).toDateString()}</p>
      <div className={styles.textBody}>
        {body}
      </div>
    </div>
    {previewImage && <img src={previewImage} />}
  </article>)
}

export default Card;