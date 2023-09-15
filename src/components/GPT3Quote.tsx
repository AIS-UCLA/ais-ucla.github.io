import React, { CSSProperties, useEffect } from "react";
import { useWindupString, defaultGetPace } from "windups";

type Quote = {
  prompt: string,
  quote: string
}

const quoteList: Quote[] = [
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Keep calm and AI safe."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Don't be a fool, be AI safe!"
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "AI safety is no joke!"
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Intelligent machines need intelligent regulation."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Leaving AI safety to chance is reckless."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Only a fool would take risks with AI safety."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Be smart, be safe, be AI safe."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "When it comes to AI safety, an ounce of prevention is worth a pound of cure."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "If you can't be AI safe, be AI sorry."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Play it safe, make it AI safe."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "The safest AI is a well-regulated AI."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Better AI safe then AI sorry!"
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "A safe AI is a happy AI."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "A well-regulated AI is a well-behaved AI."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "An AI in safety is an AI in control."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Safety first when it comes to AI."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Don't be reckless, be AI safe."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Make AI safety your top priority."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Put AI safety first and foremost."
  },
  {
    prompt: "Write twenty slogans for our AI Safety club",
    quote: "Always remember: when it comes to AI safety, better safe than sorry!"
  },
];


function GPT3Quote(props: { style?: CSSProperties, className?: string }) {
  // if the animation is paused
  const [paused, setPaused] = React.useState(false);
  // which quote is being displayed
  const [index, setIndex] = React.useState(0);

  const [str, { pause, resume, isFinished }] = useWindupString(
    quoteList[index].quote,
    { pace: (c) => 2 * defaultGetPace(c, undefined) }
  );


  useEffect(() => {
    if (isFinished && !paused) {
      const cancelVal = setTimeout(
        () => setIndex((index + 1) % quoteList.length),
        5000
      );
      return () => clearTimeout(cancelVal);
    } else {
      return undefined;
    }
  }, [isFinished, paused]);

  const pauseQuote = () => {
    if (!isFinished) {
      pause()
    }
    setPaused(true)

  }

  const resumeQuote = () => {
    if (!isFinished) {
      resume()
    }
    setPaused(false)
  }

  return <span
    style={props.style}
    className={props.className}
    children={str === "" ? "..." : str}
    onClick={paused ? resumeQuote : pauseQuote}
  />

}

export default GPT3Quote;
