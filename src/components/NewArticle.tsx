
import styles from './NewArticle.module.css';

interface Props {
  title: string;
  text: string;
}

const NewArticle = (props: Props) => {
  return (
    <article className={styles.newArticle}>
      <h3><a href="#">{props.title}</a></h3>
      <p>{props.text}</p>
    </article>

  )
}

export default NewArticle;