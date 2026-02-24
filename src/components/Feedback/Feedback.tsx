import React, { useEffect, useState } from "react";

import "./feedback.css";
export interface FeedbackProps {
  type?: "success" | "error" | "info";
  message: string;
  duration?: number;
  showCloseButton?: boolean;
}

export const Feedback = ({
  type,
  message,
  duration,
  showCloseButton,
}: FeedbackProps) => {
  const [visible, setVisible] = useState(false);

  const btnClose = () => { 
    setVisible(false)
  }
  
  const viewMasseg = () => {
    setVisible(true);
  };

  useEffect(() => {
    if (!visible) return;

    const timer = setTimeout(() => {
      setVisible(false);
    }, duration ?? 3000);

    return () => clearTimeout(timer);
  }, [visible, duration]);

  const view = visible ? "show" : "hide";

  return (
    <section className="storybook-page">
      <h2>Pages in Storybook</h2>
      <p>
        We recommend building UIs with a process starting with atomic components
        and ending with pages.
      </p>
      <button
        className={[`button-feedback button-feedback_${type}`].join(" ")}
        onClick={viewMasseg}
      >
        {type}
      </button>
      <p>
        Render pages with mock data. This makes it easy to build and review page
        states without needing to navigate to them in your app. Here are some
        handy patterns for managing page data in Storybook:
      </p>
      <div className={[`message-container ${type} ${view}`].join(" ")}>
        <div className="message-info">
          <span className="message-text">{message}</span>

          {visible && showCloseButton &&(
            <button
              type="button"
              onClick={btnClose}
              className="message-button-close"
            >
              X
            </button>
          )}
        </div>
      </div>
    </section>
  );
};
