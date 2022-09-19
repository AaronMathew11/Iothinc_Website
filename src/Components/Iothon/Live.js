import React from "react";

import './Live.css';

const Live = () => {
  return (
    <section className="set-bg section section--live w-full text-white" id="live">
      <div className="content__wrapper text-center">
        <h2 className="section__title section__title--live ">
          <span className="live__dot"></span>Live
        </h2>
        <p className="text-[1.125rem] leading-8 mb-[2.5rem]">
          <strong>When and where will everything happen?</strong> <br />
          The Speaker session will be live. We will update the timings later.
        </p>
        <a
          href="https://www.youtube.com/channel/UCr0gmDHLFsec0nS2lQp69eg"
          target="_blank"
          rel="noopener noreferrer"
          className=""
          role="button"
        >
          <span className="btn red">Go to Live</span>
        </a>
      </div>
    </section>
  );
};

export default Live;
