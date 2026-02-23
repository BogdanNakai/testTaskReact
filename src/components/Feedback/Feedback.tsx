import React, { useEffect, useState } from "react";

import "./feedback.css";
export interface FeedbackProps {
  type?: "success" | "error" | "info";
  info: string;
  timeOut?: number;
}

export const Feedback = ({ type, info, timeOut}: FeedbackProps) => {
  const [message, setMessage] = useState(false);
  useEffect(() => {
    setMessage(!message);
    const timer = setTimeout(() => {
      setMessage(false);
    }, timeOut);
    return () => clearTimeout(timer);
  }, [info, timeOut]);

  const view = message ? "view" : "show";

  return (
    <section className="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a process starting with atomic components
        and ending with pages.
      </p>
      <p>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>
      <div
        className={[`message-container message-container_${type} ${view}`].join(
          " "
        )}
      >
        <div className="message-info">
          <span className="message-text">{info}</span>
        </div>
      </div>
    </section>
  );
};
