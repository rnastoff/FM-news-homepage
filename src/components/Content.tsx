
import styles from './Content.module.css';

import NewBox from './NewBox';
import RecentArticle from './RecentArticle';

import retroPC from '../images/image-retro-pcs.jpg';
import topLaptops from '../images/image-top-laptops.jpg';
import gamingGrowth from '../images/image-gaming-growth.jpg';

const Content = () => {
  return (
    <div className={styles.content}>

      <div className={styles.featureImage}></div>
      <div className={styles.featureTitle}>The Bright Future of Web 3.0?</div>
      <div className={styles.featureDetails}>
        <p>We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?</p>
        <button>READ MORE</button>
      </div>

      <NewBox />

      <RecentArticle
        num={"01"}
        title={"Reviving Retro PCs"}
        text={"What happens when old PCs are given modern upgrades?"}
        pic={retroPC}
        alt={"Retro PCs"}
      />
      <RecentArticle
        num={"02"}
        title={"Top 10 Laptops of 2022"}
        text={"Our best picks for various needs and budgets."}
        pic={topLaptops}
        alt={"Top 10 Laptops"}
      />
      <RecentArticle
        num={"03"}
        title={"The Growth of Gaming"}
        text={"How the pandemic has sparked fresh opportunities."}
        pic={gamingGrowth}
        alt={"Growth of Gaming"}
      />
    </div>
  )
}

export default Content;