"use client";

import { classes } from "@/utils/classes";
import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./banner.module.css";

type BannerProps = {
  animate?: boolean;
  children: string[];
  delayStart?: boolean;
  href?: string;
};

export function Banner({
  animate = true,
  children,
  delayStart = false,
  href,
}: BannerProps) {
  const [childPosition, setChildPosition] = useState(0);
  const [cursorPos, setCursorPos] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isStarted, setIsStarted] = useState(!delayStart);

  const child = children[childPosition];
  // If the user is hovering the banner, show the full text
  // so they can know what they are going to click on
  const sub = isHovered && href ? child : createConsoleString(child, cursorPos);

  useEffect(() => {
    if (animate && (!isHovered || !href)) {
      let timer: NodeJS.Timeout;

      if (!isStarted) {
        // This timer is used to delay the start of the animation
        timer = setTimeout(() => {
          setIsStarted(true);
        }, randomTime(1000, 2000));
      } else if (cursorPos < child.length) {
        // This timer is used to animate the cursor
        timer = setTimeout(() => {
          setCursorPos((p) => (p + 1) % (child.length + 1));
        }, randomTime(100, 300));

        return () => clearTimeout(timer);
      } else if (children.length > 1) {
        // This timer is used to swap alternate versions of the text
        timer = setTimeout(() => {
          setChildPosition((p) => (p + 1) % children.length);
          setCursorPos(0);
        }, randomTime(5000, 12000));
      }
      return () => clearTimeout(timer);
    }
  }, [animate, children.length, child.length, cursorPos, isHovered, isStarted]);

  return href ? (
    <Link
      className={classes([styles.banner, styles.bannerWithHover])}
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      target={href.startsWith("http") ? "_blank" : undefined}
    >
      {createSpaced(sub)}
    </Link>
  ) : (
    <div
      className={classes([styles.banner, styles.bannerHighlight])}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {createSpaced(sub)}
    </div>
  );
}

/**
 * Wraps each character in a div to create a spaced effect
 */
function createSpaced(text: string) {
  return text.split("").map((t, i) => <div key={i}>{t}</div>);
}

/**
 * Creates a string with a cursor at the given position
 */
function createConsoleString(text: string, pos: number) {
  return text
    .split("")
    .map((t, i) => (i < pos ? t : i === pos ? "_" : " "))
    .join("");
}

/**
 * Generates a random time (number) between min and max
 */
function randomTime(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
