"use client";

import { Animator, ScrollContainer, ScrollPage, batch, Fade, FadeIn, Move, MoveIn, MoveOut, ZoomIn } from "react-scroll-motion";
import { AboutSplitOne, AboutSplitTwo, AboutSplitThree, AboutSplitFour, AboutSplitFive, AboutSplitSix } from "../../components/About";


export default function About() {

  const ZoomInScrollOut = batch(FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move());
    return(<>
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