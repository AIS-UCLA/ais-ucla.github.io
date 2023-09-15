import React from 'react'
import { ArrowRight } from 'react-bootstrap-icons';
import { useTransition, useSpringRef, animated, easings } from '@react-spring/web'


interface CarouselContent {
  title: string,
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
      from: { opacity: 0, transform: 'translate(-50%)' },
      enter: { opacity: 1, transform: 'translate(0%)' },
      leave: { opacity: 0, transform: 'translate(50%)' },
    });

  const incrementIndex = () => setActiveIndex(i => (i + 1) % contents.length);

  // trigger the animation every time activeIndex changes
  React.useEffect(() => {
    transRef.start()
  }, [activeIndex])

  return <div className='d-flex justify-content-between flex-wrap'>
    <div className="border border-dark mb-3">
      {
        contents.map((content, i) => {
          return <div
            key={i}
            className="d-flex justify-content-center m-2"
            style={{
              backgroundColor: i === activeIndex ? "lightgray" : "white",
              cursor: "pointer",
            }}
            onClick={() => setActiveIndex(i)}
          >
            {content.title}
          </div>
        })
      }
    </div>
    <div className="d-flex justify-content-center" style={{ width: "40rem", height: VIDEO_HEIGHT }}>
      {transitions((style, data) => {
        return (
          <animated.div className="position-absolute" style={style}>
            <video
              muted
              autoPlay
              controls
              src={data.videoSrc}
              style={{ maxWidth: "100%", maxHeight: VIDEO_HEIGHT }}
              onEnded={() => setTimeout(incrementIndex, 1000)}
              className="mx-auto"
            />
          </animated.div>
        )
      })}
    </div>
    <div className="mt-3" >
      {contents[activeIndex].blurb}
      <div className='mt-3'>
        <a href={contents[activeIndex].url}>See More <ArrowRight /></a>
      </div>
    </div>
  </div>
}
