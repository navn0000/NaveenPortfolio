"use client";

import Image from "next/image";
import CP from '../assets/CoverPic2.jpg'
import Styles from '../styleSheets/Skills.module.css'
import { ImBooks } from 'react-icons/im'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from "../components/Header";
import {AboutSplitOne, AboutSplitTwo, AboutSplitThree, AboutSplitFour, AboutSplitFive, AboutSplitSix }from "../components/About";


export default function About() {

  const ZoomInScrollOut = batch(FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move());
    return(<>
    <Header />

<ScrollContainer snap="mandatory">
  <ScrollPage >
    <Animator animation={batch(Fade(),MoveOut(0, -100))}>
    <AboutSplitOne />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={ZoomInScrollOut}>
    <AboutSplitTwo />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={MoveIn(1000, 0)}>
    <AboutSplitThree />
    </Animator>
  </ScrollPage>
  <ScrollPage>
        <Animator animation={MoveIn(-1000, 0)}>
            <AboutSplitFour />
         </Animator>
  </ScrollPage>
  <ScrollPage>
        <Animator animation={MoveIn(1000, 0)}>
            <AboutSplitFive />
         </Animator>
  </ScrollPage>
  <ScrollPage>
        <Animator animation={MoveIn(-1000, 0)}>
        <AboutSplitSix />
         </Animator>
  </ScrollPage>
</ScrollContainer></>)
}