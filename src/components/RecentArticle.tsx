
import styles from './RecentArticle.module.css';

interface Props {
  num: string;
  title: string;
  text: string;
  pic: string;
  alt: string;
}

const RecentArticle = (props: Props) => {
  return (
    <article className={styles.recentArticle}>
      <div className={styles.recentArticleImage}>
        <img src={props.pic} alt={props.alt} />
      </div>
      <div className={styles.recentArticleDetails}>
        <h4>{props.num}</h4>
        <div className={styles.recentArticleTitle}><a href="#">{props.title}</a></div>
        <p>{props.text}</p>
      </div>
    </article>
  )
}

export default RecentArticle;