import React from "react";
import { useSpring, animated } from "react-spring";
import { BonusRules, StandardRules } from "./RulesSvg";

export function Rules(props) {

  function closeModal() {
    props.setIsModalOpen(false)
  }

  const modalProps = useSpring({ from: { opacity: 0, y: -100 }, to: { opacity: 1, y: 0 }, delay: 200 });

  return (
    <div className="rules__modal">
      <animated.div className="rules__container" style={modalProps}>
        <div className="rules__header">
          <h2>RULES</h2>
          <button onClick={closeModal}>
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path fill="#3B4262" fill-rule="evenodd" d="M16.97 0l2.122 2.121-7.425 7.425 7.425 7.425-2.121 2.12-7.425-7.424-7.425 7.425L0 16.97l7.425-7.425L0 2.121 2.121 0l7.425 7.425L16.971 0z" opacity=".25" /></svg>
          </button>
        </div>
        <div className="rules__content">
          {props.mode === "standard" && <StandardRules />}
          {props.mode === "bonus" && <BonusRules />}
        </div>
      </animated.div>
    </div>
  )
}