import React, { useState, useRef, RefObject, createRef } from "react";
import { CSSTransition } from "react-transition-group";
import styles from "./HamburgerTransition.module.css";
import Link from "next/link";
import { IoIosMenu, IoMdClose } from "react-icons/io";

const HamburgerTransition = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState(false);
  const nodeRef1 = React.useRef<HTMLDivElement>(null);
  const nodeRef2 = React.useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    setClick(!click);
  };

  const links = [
    { href: "/", label: "Home" },
    { href: "/crew/", label: "Crew" },
    { href: "/blog", label: "Blog" },
    { href: "/destinations", label: "Destinations" },
    { href: "/livestream", label: "Livestream" },
    { href: "/sponsors", label: "Sponsors" },
    { href: "/donate", label: "Donate" },
    { href: "/aboutus", label: "About Us" },
    { href: "/technical", label: "Technical" },
    { href: "/pressarchive", label: "Press" },
  ];

  const handleLinkClick = () => {
    setIsOpen(!isOpen);
    setClick(!click);
  };

  return (
    <>
      <div className={styles["hamburger-icons"]} onClick={toggleMenu}>
        <CSSTransition
          nodeRef={nodeRef1}
          in={isOpen}
          timeout={300}
          classNames={{
            enter: styles["icons-enter"],
            enterActive: styles["icons-enter-active"],
            exit: styles["icons-exit"],
            exitActive: styles["icons-exit-active"],
          }}
        >
          {click ? (
            <div ref={nodeRef1}>
              <IoMdClose size={50} className={styles["menu-icon"]} />
            </div>
          ) : (
            <div ref={nodeRef1}>
              <IoIosMenu size={50} className={styles["menu-icon"]} />
            </div>
          )}
        </CSSTransition>
      </div>

      <CSSTransition
        nodeRef={nodeRef2}
        in={isOpen}
        timeout={300}
        classNames={{
          enter: styles["menu-enter"],
          enterActive: styles["menu-enter-active"],
          exit: styles["menu-exit"],
          exitActive: styles["menu-exit-active"],
        }}
        unmountOnExit
      >
        <div ref={nodeRef2} className={styles.menu}>
          {links.map(({ href, label }) => (
            <div key={href}>
              <Link
                className={styles["page-link"]}
                href={href}
                onClick={handleLinkClick}
              >
                <>{label}</>
              </Link>
            </div>
          ))}
        </div>
      </CSSTransition>
    </>
  );
};

export default HamburgerTransition;