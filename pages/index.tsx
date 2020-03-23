import React from "react";
import TimeStartsNow from "../components/TimeStartsNow";

const WashHands: React.FC<{}> = () => (
  <iframe
    width="560"
    height="315"
    frameBorder={0}
    src="https://www.youtube.com/embed/AWZCcwJZses"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen={true}
  ></iframe>
);

const HomeTaskingIntro: React.FC<{}> = () => (
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/_DQ32Vahb1E"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const Task1Video: React.FC<{}> = () => (
  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/7tJCKtyz47E"
    frameBorder="0"
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen
  ></iframe>
);

const IndexPage: React.FC<{}> = () => (
  <div>
    <div>
      Please forgive this very work in progress page. I'm kinda building this
      page as time allows (and working a full-time job as well -- from home,
      naturally.)
    </div>
    <div>Sincerely,</div>
    <div>
      The Taskmaster('s Assistant('s Assistant))<sup>*</sup>
    </div>
    <div>
      <sup>*</sup>
      <em>self-appointed</em>
    </div>
    <TimeStartsNow />
    <HomeTaskingIntro />
    <Task1Video />
    <h3>Here's how long to wash your hands</h3>
    <WashHands />
  </div>
);

export default IndexPage;
