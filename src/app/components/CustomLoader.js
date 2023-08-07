"use client";

import React from 'react'
import Styles from '../styleSheets/HomePage.module.css'
import { Circles } from  'react-loader-spinner'

const CustomLoader = () => {
    return(<div className={`${Styles.loader}`}>

<Circles
  color="#07e4f0"
  ariaLabel="circles-loading"
  wrapperStyle={{}}
  wrapperClass={Styles.loaderComponent}
  visible={true}
/>
    </div>)
}

export default CustomLoader