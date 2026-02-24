import React from "react";
import { useState } from "react";

import "./header.css";


interface MenuItem {
  label: string;
  children?: string[];
}

interface HeaderProps {
  itemArr: MenuItem[];
}


export const Header = ({ itemArr }: HeaderProps) => {
  
  const [active, setActive] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const firstItem = itemArr.map((item, index) => (
    <li
      className="menu-link"
      key={index}
      onClick={() => setOpenIndex(openIndex === index ? null : index)}
    >
      <button type="button" className="menu-link"> {item.label}</button>

      {Boolean(item.children?.length) && openIndex === index && (
        <ul>
          {item.children?.map((sub, subIndex) => (
            <li key={subIndex}>
              <a className="menu-link" href="">
                {sub}
              </a>
            </li>
          ))}
        </ul>
      )}
    </li>
  ));

  const showMenu = () => { 
    setActive(!active);
  }

  return (
    <div className="body">
      <header className="header">
        <div className="storybook-header">
          <div>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fillRule="evenodd">
                <path
                  d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
                  fill="#FFF"
                />
                <path
                  d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
                  fill="#555AB9"
                />
                <path
                  d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
                  fill="#91BAF8"
                />
              </g>
            </svg>
            <h1>Acme</h1>
          </div>
          <nav className={active ? "menu active" : "menu"}>
            <ul className="menu-list">{firstItem}</ul>
          </nav>
          <button
            type="button"
            onClick={() => showMenu()}
            className={
              active ? "button-burger active" : "button-burger"
            }
          >
            <span className="button-line"></span>
            <span className="button-line"></span>
            <span className="button-line"></span>
          </button>
        </div>
      </header>
      <section className="storybook-page">
        <h2>Pages in Storybook</h2>
        <p>
          We recommend building UIs with a process starting with atomic
          components and ending with pages.
        </p>
        <p>
          Render pages with mock data. This makes it easy to build and review
          page states without needing to navigate to them in your app. Here are
          some handy patterns for managing page data in Storybook:
        </p>
      </section>
    </div>
  );
};
