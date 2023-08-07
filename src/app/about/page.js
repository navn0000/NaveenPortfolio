"use client";

import Image from "next/image";
import CP from '../assets/CoverPic2.jpg'
import Styles from '../styleSheets/Skills.module.css'
import { ImBooks } from 'react-icons/im'
import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from "../components/Header";
import {AboutSplitOne, AboutSplitTwo, AboutSplitThree, AboutSplitFour, AboutSplitFive }from "../components/About";


export default function About() {
  const Spin = (cycle) =>
  ({
    in: {
      style: {
        // `p` is number (0~1)
        // When just before this page appear, `p` will be 0
        // When this page filled your screen, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
    out: {
      style: {
        // `p` is number (0~1)
        // When this page filled your screen, `p` will be 0
        // When just after this page disappear, `p` will be 1
        transform: (p) => `rotate(${p * 360 * cycle}deg)`,
      },
    },
  });
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
    <Animator animation={MoveIn(-1000, 0)}>
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
</ScrollContainer></>)
}