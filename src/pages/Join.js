import React from "react";
import { useNav } from "../customHooks/useNav";
import "./Page.css";

const Join = () => {
    // useNav takes in a navLinkId and returns a ref
    // this ref is used to register the navLinkId that's
    // currently in view, and apply activeClass styling
    // to the corresponding nav childElement

    const joinRef = useNav("Join");

    return (
        <section ref={joinRef} id="joinContainer">
            <img
                src="https://source.unsplash.com/random/600x600/?nature,water"
                alt="unsplash-img"
                height="100%"
                width="100%"
            />
            <div>
                <h3 id="joinTitle">Get Involved</h3>
                <p id="joinText">
                    {/* Every month we hold weekend long workshops to deeply engage
                    with important topics in AI Safety. The topics of workshops
                    change with each event; previously we ran one focusing on AI
                    Timelines. These events include many attendees beyond the LA
                    area and provide a great opportunity to network in the
                    broader AI Safety community Space for these workshops is
                    limited, so if you are interested in attending please apply
                    here [application link] */}
                    Our services and events include newsletters, blog posts,
                    workshops, projects, and more. Additionally, we hold a
                    quarterly fellowship for UCLA students to better understand
                    AI Safety and gain insight into the implications of
                    developing AGI in the field.
                </p>
                <p id="joinText">
                    To join the newsletter and be informed of upcoming events,
                    enter your information in the interest from below.
                    Alternatively, you can access the form{" "}
                    <a href="https://airtable.com/shrImJ6z27mX3tkkA">here</a>.
                </p>
                <iframe
                    title="AIS Interest Form"
                    class="airtable-embed"
                    src="https://airtable.com/embed/shrImJ6z27mX3tkkA?backgroundColor=red"
                    frameborder="0"
                    onmousewheel=""
                    width="100%"
                    height="500"
                    style={{
                        background: "transparent",
                        border: "1px solid #ccc",
                        margin: "20px",
                    }}
                ></iframe>

                {/* <script src="https://static.airtable.com/js/embed/embed_snippet_v1.js"></script><iframe class="airtable-embed airtable-dynamic-height" src="https://airtable.com/embed/shrImJ6z27mX3tkkA?backgroundColor=red" frameborder="0" onmousewheel="" width="100%" height="1100" style={{background: 'transparent', border: '1px solid #ccc'}}></iframe> */}
            </div>
        </section>
    );
};

export default Join;
