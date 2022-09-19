import React from "react";

import "./Timeline.css";

const Timeline = () => {
  return (
    <section className="set-bg section" id="timeline">
      <div className="content__wrapper">
        <ul className="timeline_list">
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Ideation Round</h1>
                <p className="timeline_msg">
                  {" "}
                  This is the first round, where all the innovative ideas will
                  be put forward by the participants.
                </p>
              </div>
              <div className="timeline_time">
                <p>Day 1</p>
                <p>10:00 - 13:00</p>
              </div>
            </div>
            <div className="timeline_icon">1</div>
          </li>
          <li className="timeline_item timeline_left">
            <div
              className="timeline_icon"
              style={{
                background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
              }}
            >
              2
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Lunch Break</h1>
                <p className="timeline_msg">
                  The participants can take a break from the tiring round that
                  had taken place earlier.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>13:00 - 15:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review 1</h1>
                <p className="timeline_msg">
                  The first review will be conducted now, wherein the idea and
                  part of the implementation will be evaluated. A speaker
                  session is also conducted!
                </p>
              </div>
              <div
                className="timeline_time"
                style={{
                  color: "#000",
                  background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
                }}
              >
                <p>15:00 - 20:00</p>
              </div>
            </div>
            <div
              className="timeline_icon"
              style={{
                background: "linear-gradient(90deg, #0a9991cc, #6ffff0cc)",
              }}
            >
              3
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#CAE9FF" }}>
              4
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Dinner Break</h1>
                <p className="timeline_msg">
                  A dinner break is much needed after a tiring review and
                  speaker session.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#CAE9FF" }}
              >
                <p>20:00 - 22:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review 2</h1>
                <p className="timeline_msg">
                  The second review is conducted, where more sections of
                  implementations are evaluated. This is the crux of our event.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>Day 1 - Day 2</p>
                <p>22:00 - 10:00</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#BEE9E8" }}>
              5
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#BEE9E8" }}>
              6
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Break</h1>
                <p className="timeline_msg">
                  A well-deserved break is allotted in which the participants
                  can have refreshments/lunch.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#BEE9E8" }}
              >
                <p>10:00 - 14:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review 3</h1>
                <p className="timeline_msg">
                  The third review is conducted, where more sections are
                  evaluated. We’ll be having another guest speaker session.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>14:00 – 18:00</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              7
            </div>
          </li>
          <li className="timeline_item timeline_left timeline_last">
            <div className="timeline_icon" style={{ background: "#5FA8D3" }}>
              8
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Final Presentation</h1>
                <p className="timeline_msg">
                  The final review/presentation is conducted, followed by the
                  result announcement. The winners are announced and the prizes
                  distributed. This concludes our event.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#5FA8D3" }}
              >
                <p>18:00 - 20:00</p>
              </div>
            </div>
          </li>
          {/* <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Review-3</h1>
                <p className="timeline_msg">
                  The third and final round begins, where the top 15
                  participants from the previous round can participate.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#24b47e" }}
              >
                <p>13:00 – 16:30</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#aff1b6" }}>
              9
            </div>
          </li>
          <li className="timeline_item timeline_left">
            <div className="timeline_icon" style={{ background: "#f6a4ec" }}>
              10
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Speaker Session</h1>
                <p className="timeline_msg">
                  {" "}
                  We are thrilled to announce that Mr./Mrs./Ms. ABC will be
                  present to give his/her ‘s ideas and views on the current fad.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#9251ac" }}
              >
                <p>16:30 – 17:00</p>
              </div>
            </div>
          </li>
          <li className="timeline_item timeline_right">
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">Results</h1>
                <p className="timeline_msg">
                  {" "}
                  Yayy!!! The results will be out and the winners will be
                  mentioned.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#555ac0" }}
              >
                <p>17:30</p>
              </div>
            </div>
            <div className="timeline_icon" style={{ background: "#87bbfe" }}>
              11
            </div>
          </li>
          <li className="timeline_item timeline_left timeline_last">
            <div className="timeline_icon" style={{ background: "#aff1b6" }}>
              12
            </div>
            <div className="timeline_info">
              <div className="timeline_desc">
                <h1 className="timeline_title">
                  Ending Ceremony and Prize Distribution
                </h1>
                <p className="timeline_msg">
                  {" "}
                  Hence, we officially conclude the hackathon with the prize
                  distribution for the winners, who displayed their unparalleled
                  talent and skill throughout.
                </p>
              </div>
              <div
                className="timeline_time"
                style={{ color: "#000", background: "#24b47e" }}
              >
                <p>18:00</p>
              </div>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};

export default Timeline;