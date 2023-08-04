"use client";

import React from 'react'
import Styles from '../styleSheets/Experience.module.css'
import { Blocks } from  'react-loader-spinner'

const CustomLoader = () => {
    return(<div className={`${Styles.loader}`}>

        <Blocks
  height="200"
  width="200"
  color="white"
  wrapperStyle={{}}
  wrapperClass={Styles.loaderComponent}
  visible={true}
  outerCircleColor="red"
  innerCircleColor="blue"
  barColor=""
  ariaLabel='circles-with-bar-loading'
/>
    </div>)
}

export default CustomLoader