import React from 'react'
import { useTransition, useSpringRef, animated } from '@react-spring/web'

interface CarouselProps {
  contents: string[]
}

interface CarouselState {
  activeContent: number
}


export default function Carousel({ contents }: CarouselProps) {
  const transRef = useSpringRef();

  const [activeIndex, setActiveIndex] = React.useState(0);

  const transitions = useTransition(
    activeIndex,
    {
      ref: transRef,
      keys: null,
      duration: 100,
      from: { opacity: 0, transform: 'translate(100%)' },
      enter: { opacity: 1, transform: 'translate(0%)' },
      leave: { opacity: 0, transform: 'translate(-50%)' },
    });

  React.useEffect(() => {
    transRef.start()
  }, [activeIndex])

  return <div>
    <div className="d-flex">
      {transitions((style, i) => {
        return (
          <animated.div className="mx-auto" style={style}>
            <img src={contents[i]} style={{ width: "5rem" }} />
          </animated.div>
        )
      })}
    </div>
    <button onClick={() => setActiveIndex((activeIndex + 1) % contents.length)}>hi</button>
  </div>

}
