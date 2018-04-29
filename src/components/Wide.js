import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

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
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 0.25em;

  @media (max-width: ${p => p.theme.deviceWidth.largePhone}) {
    margin: 0.8em 0;
  }

  &:hover {
    animation: ${anim} 300ms linear;
    color: ${p => p.theme.color.tertiary};
  }
`;

const createSpaced = text =>
  text.split('').map((t, i) => <div key={i}>{t}</div>);

const createConsoleString = (text, pos) =>
  text
    .split('')
    .map((t, i) => (i < pos ? t : i === pos ? '_' : ' '))
    .join('');

const randomTime = (min, max) => Math.random() * (max - min) + min;

class Wide extends React.Component {
  state = {
    hover: false,
    in: 0,
    position: 0
  };

  componentDidMount() {
    this.next();
  }

  hover = () => this.setState({ hover: true });

  leave = () =>
    this.setState({ hover: false }, () =>
      setTimeout(this.next, randomTime(100, 300))
    );

  next = () => {
    if (this.state.hover) return;
    const { children } = this.props;
    this.setState(
      state => ({ in: state.in + 1 }),
      () => {
        if (!this.state.hover) {
          if (this.state.in < children[this.state.position].length) {
            setTimeout(this.next, randomTime(100, 300));
          } else {
            setTimeout(this.reset, randomTime(5000, 12000));
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
      () => setTimeout(this.next, randomTime(100, 300))
    );
  };

  render() {
    const { children } = this.props;
    const child = children[this.state.position];
    const sub = this.state.hover
      ? child
      : createConsoleString(child, this.state.in);
    return (
      <Wrapper onMouseEnter={this.hover} onMouseLeave={this.leave}>
        {createSpaced(sub)}
      </Wrapper>
    );
  }
}

Wide.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default Wide;
