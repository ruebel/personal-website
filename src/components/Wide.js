import React from "react";
import PropTypes from "prop-types";
import styled, { keyframes } from "styled-components";

const anim = keyframes`
  0% {
    transform: skew(0, 0) scale(1, 1);
  }
  33% {
    transform: skew(5deg, 0deg) scale(1, 1.1);
  }
  66% {
    transform: skew(-5deg, 0deg) scale(1, 1.1);
  }
  100% {
    transform: skew(0, 0) scale(1, 1);
  }
`;

const Wrapper = styled.div`
  color: ${p => p.theme.color.primary};
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  font-size: ${p => (p.isSmall ? 0.5 : 1)}em;
  margin-bottom: 0.25em;
  transition: all 300ms linear;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    margin: 0.8em 0;
  }

  &:hover {
    animation: ${anim} 300ms linear;
    color: ${p => p.theme.color.tertiary};
  }
`;

const createSpaced = text =>
  text.split("").map((t, i) => <div key={i}>{t}</div>);

const createConsoleString = (text, pos) =>
  text
    .split("")
    .map((t, i) => (i < pos ? t : i === pos ? "_" : " "))
    .join("");

const randomTime = (min, max) => Math.random() * (max - min) + min;

class Wide extends React.Component {
  state = {
    hover: false,
    in: 0,
    position: 0,
    timer: null
  };

  componentDidMount() {
    this.next();
  }

  hover = () => this.setState({ hover: true });

  leave = () =>
    this.setState({ hover: false }, () => this.setTimer(this.next, 300, 500));

  next = () => {
    if (this.state.hover) return;
    const { children } = this.props;
    this.setState(
      state => ({ in: state.in + 1 }),
      () => {
        if (!this.state.hover) {
          if (this.state.in < children[this.state.position].length) {
            this.setTimer(this.next, 100, 300);
          } else {
            this.setTimer(this.reset, 5000, 12000);
          }
        }
      }
    );
  };

  reset = () => {
    if (this.state.hover) return;
    const { children } = this.props;
    this.setState(
      state => {
        const nextPos = state.position + 1;
        return {
          in: 0,
          position: nextPos < children.length ? nextPos : 0
        };
      },
      () => this.setTimer(this.next, 500, 750)
    );
  };

  setTimer = (action, min, max) => {
    if (this.state.timer) {
      clearTimeout(this.state.timer);
    }
    setTimeout(action, randomTime(min, max));
  };

  render() {
    const { children, noAnimation, isSmall } = this.props;
    const child = children[this.state.position];
    const sub =
      this.state.hover || noAnimation
        ? child
        : createConsoleString(child, this.state.in);
    return (
      <Wrapper
        isSmall={isSmall}
        onMouseEnter={this.hover}
        onMouseLeave={this.leave}
      >
        {createSpaced(sub)}
      </Wrapper>
    );
  }
}

Wide.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired,
  noAnimation: PropTypes.bool,
  isSmall: PropTypes.bool
};

export default Wide;
