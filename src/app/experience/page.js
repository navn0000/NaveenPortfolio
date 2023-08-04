"use client";

import dynamic from "next/dynamic";
// const Animator = dynamic(
//   import("react-scroll-motion").then((it) => it.Animator),
//   { ssr: false }
// );

import {Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";
import Header from "../components/Header";
import {Styles} from '../styleSheets/HomePage.module.css'
import PR from '../assets/pr.jpeg'
import BR from '../assets/CoverPic.jpg'
import HomePage from "../components/HomePage";
import Skills from "../skills/page";

const Experience = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());
    return(<>
    <Header />
<ScrollContainer >
  <ScrollPage>
    <Animator animation={batch(MoveOut(0, -400))}>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
        <Skills />
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={FadeUp}>
      <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
    </Animator>
  </ScrollPage>
  <ScrollPage>
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
      <span style={{ fontSize: "40px" }}>
        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
        - I'm Dante Chun -
        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
      </span>
    </div>
  </ScrollPage>
  <ScrollPage>
    <Animator animation={batch(Fade(), Sticky())}>
      <span style={{ fontSize: "40px" }}>Done</span>
      <br/>
      <span style={{ fontSize: "30px" }}>
        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
      </span>
    </Animator>
  </ScrollPage>
</ScrollContainer>
    </>)
}

export default Experience