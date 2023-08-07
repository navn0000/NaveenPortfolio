"use client";

import React from 'react'
import Styles from '../styleSheets/HomePage.module.css'
import { ColorRing } from  'react-loader-spinner'

const CustomLoader = () => {
    return(<div className={`${Styles.loader}`}>
<ColorRing
  visible={true}
  ariaLabel="blocks-loading"
  wrapperClass={Styles.loaderComponent}
  colors={['red', 'white', 'red', 'white', 'red']}
/>
    </div>)
}

export default CustomLoader