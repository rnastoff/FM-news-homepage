
import styles from './NewBox.module.css'

import NewArticle from './NewArticle';

const NewBox = () => {
  return (
    <div className={styles.newBox}>
      <h2>New</h2>
      <NewArticle
        title={"Hydrogen VS Electric Cars"}
        text={"Will hydrogen-fueled cars ever catch up to EVs?"}
      />
      <hr />
      <NewArticle
        title={"The Downsides of AI Artistry"}
        text={"What are the possible adverse effects of on-demand AI image generation?"}
      />
      <hr />
      <NewArticle
        title={"Is VC Funding Drying Up?"}
        text={"Private funding by VC firms is down 50% YOY. We take a look at what that means."}
      />
    </div>
  )
}

export default NewBox;