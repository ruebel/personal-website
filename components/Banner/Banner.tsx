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
  const sub = isHovered ? child : createConsoleString(child, cursorPos);

  useEffect(() => {
    if (animate && !isHovered) {
      let timer: NodeJS.Timeout;

      if (!isStarted) {
        timer = setTimeout(() => {
          setIsStarted(true);
        }, randomTime(1000, 2000));
      } else if (cursorPos < child.length) {
        timer = setTimeout(() => {
          setCursorPos((p) => (p + 1) % (child.length + 1));
        }, randomTime(100, 300));

        return () => clearTimeout(timer);
      } else if (children.length > 1) {
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
      className={styles.banner}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {createSpaced(sub)}
    </div>
  );
}

function createSpaced(text: string) {
  return text.split("").map((t, i) => <div key={i}>{t}</div>);
}

function createConsoleString(text: string, pos: number) {
  return text
    .split("")
    .map((t, i) => (i < pos ? t : i === pos ? "_" : " "))
    .join("");
}

function randomTime(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
