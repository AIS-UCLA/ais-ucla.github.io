import React, { CSSProperties, useEffect } from "react";
import style from "react-syntax-highlighter/dist/cjs/styles/prism/base16-ateliersulphurpool.light";
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
  const [state, setState] = React.useState({ index: 0, paused: false });

  useEffect(() => {
    if (state.paused) {
      const cancelVal = setTimeout(
        () => setState(({ index }) => ({ paused: false, index: (index + 1) % quoteList.length })),
        5000
      );
      return () => clearTimeout(cancelVal);
    } else {
      return undefined;
    }
  }, [state]);

  const [str] = useWindupString(
    quoteList[state.index].quote,
    {
      pace: (c) => 2 * defaultGetPace(c, undefined),
      onFinished: () => setState(({ index, paused }) => ({ index, paused: true }))
    }
  );

  return <span
    style={props.style}
    className={props.className}
    children={str === "" ? "..." : str}
  />

}

export default GPT3Quote;