import { useState } from 'react';


import styles from './News.module.css';

import Nav from './Nav';
import Content from './Content';

const News = () => {

  const [mobileOpen, setMobile] = useState(false);

  let blackOverlayClass = mobileOpen ? styles.blackOverlayActive : "";

  return (
    <div className={styles.news}>
      <div className={`${styles.blackOverlay} ${blackOverlayClass}`}></div>
      <Nav
        mobileOpen={mobileOpen}
        setMobile={setMobile}
      />
      <Content />
    </div>
  )
}

export default News;