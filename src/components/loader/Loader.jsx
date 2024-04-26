import React from 'react'
import styles from './Loader.module.scss';
import { ColorRing } from 'react-loader-spinner';

const Loader = ({ basic }) => {

  if(basic) {
    return (
      <div className={styles.basicWrapper}>
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    )
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.loader}>  
        <ColorRing
          visible={true}
          height="80"
          width="80"
          ariaLabel="color-ring-loading"
          wrapperStyle={{}}
          wrapperClass="color-ring-wrapper"
          colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
        />
      </div>
    </div>
  )
}

export default Loader
