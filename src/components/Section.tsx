import React from 'react';

type SectionProps = {
  id: string
  name: string
  children: React.ReactNode
}

const Section: React.FunctionComponent<SectionProps> = props => {
  return <section className="mt-5" style={{ overflow: "hidden", position: "relative", }}>
    <span
      id={props.id}
      style={{
        position: "absolute",
        top: "-100px",
        visibility: "hidden",
      }}></span>
    {props.children}
  </section>
}

export default Section;
