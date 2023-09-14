import React from 'react'
import { useTransition, useSpringRef, animated, easings } from '@react-spring/web'

interface CarouselContent {
  videoSrc: string,
  blurb: React.ReactNode
  url: string,
}

interface CarouselProps {
  contents: CarouselContent[]
}

interface CarouselState {
  activeContent: number
}

const VIDEO_HEIGHT = "20rem";
const BLURB_HEIGHT = "10rem";
const TOTAL_HEIGHT = "30rem";

export default function Carousel({ contents }: CarouselProps) {
  const transRef = useSpringRef();

  const [percentageThrough, setPercentageThrough] = React.useState(0);
  const [activeIndex, setActiveIndex] = React.useState(0);

  const transitions = useTransition(
    contents[activeIndex],
    {
      ref: transRef,
      from: { opacity: 0, transform: 'translate(100%)' },
      enter: { opacity: 1, transform: 'translate(0%)' },
      leave: { opacity: 0, transform: 'translate(-100%)' },
    });

  const incrementIndex = () => setActiveIndex(i => (i + 1) % contents.length);

  // trigger the animation every time activeIndex changes
  React.useEffect(() => {
    transRef.start()
  }, [activeIndex])

  return <div>
    <div className="d-flex justify-content-center" style={{ height: TOTAL_HEIGHT }}>
      {transitions((style, data) => {
        return (
          <animated.div className="position-absolute" style={style}>
            <video
              muted
              autoPlay
              src={data.videoSrc}
              style={{ height: VIDEO_HEIGHT }}
              onEnded={() => setTimeout(incrementIndex, 1000)}
              className="mx-auto"
            />
            <div className="mx-auto" style={{ width: "20rem", height: BLURB_HEIGHT, overflow: "scroll" }}>
              {data.blurb}
            </div>
          </animated.div>
        )
      })}
    </div>
  </div>

}
