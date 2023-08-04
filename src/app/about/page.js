"use client";

import Image from "next/image";
import CP from '../assets/CoverPic2.jpg'
import Styles from '../styleSheets/Skills.module.css'
import { ImBooks } from 'react-icons/im'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from "../components/Header";
import {AboutSplitOne, AboutSplitTwo, AboutSplitThree, AboutSplitFour, AboutSplitFive }from "../components/Experience";
import {FaLinkedin} from 'react-icons/fa';
import {BiLogoTwitter} from 'react-icons/bi'

export default function About() {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return(<>
    <Header />
<ScrollContainer >
  <ScrollPage>
    <Animator animation={batch(MoveOut(0, -400))}>
        <AboutSplitOne />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
        <AboutSplitTwo />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
        <AboutSplitThree />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div>
      <span>
        <Animator animation={MoveIn(-1000, 0)}>
            <AboutSplitFour /></Animator>
        <Animator animation={MoveIn(1000, 0)}>
        <p className='text-center'>Linked<FaLinkedin /></p>
        </Animator>
        <Animator animation={MoveIn(-900, 0)}>
        <p className='text-center'>Linked In <BiLogoTwitter /></p>
 </Animator>
        <Animator animation={MoveOut(1000, 0)}>Gmail ✋🏻</Animator>
        </span>
    </div>
  </ScrollPage>
  {/* <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage> */}
</ScrollContainer></>)
}