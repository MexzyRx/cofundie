import React, { useState } from "react";
// import PropTypes from "prop-types";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

import { COLORS } from "app-constants";

const Tab = styled.div`
  display: inline-block;
  cursor: pointer;
  padding: 1.5rem 0;
  padding-right: 4rem;
  margin-right: 10rem;
  
  border-bottom: ${props => (props.selected ? `solid 3px ${COLORS.BLUE}` : "")};
  /* border-bottom: solid 3px ${COLORS.BLUE}; */
  transform: translateY(2px);

  @media (max-width: 768px) {
    padding: .5rem 0;
    margin-right: 4rem;
    font-size: 60%;
  }
`;

const TabGroup = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  font-size: 150%;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
  margin-bottom: 4rem;
`;

const TabPanel = styled.div`
  min-height: 65rem;
  position: relative;
  overflow-x: hidden;

  @media (max-width: 768px) {
    min-height: 53rem;
  }
`;

const TabGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 95%;
  grid-template-rows: auto;
  width: 100vw;
`;

const Tabs = ({ items, currentTab, onChange }) => {
  const [previousTab, setPreviousTab] = useState(currentTab);

  const transition = useTransition(items[currentTab], item => item.key, {
    unique: true,
    from: tab => {
      return {
        transform: `translate3d(${(currentTab - previousTab) * 100}%,0,0)`,
        position: "static"
      };
    },
    enter: {
      transform: "translate3d(0%,0,0)",
      position: "static",
      opacity: 1
    },
    leave: tab => ({
      transform: `translate3d(${(previousTab - currentTab) * 100}%,0,0)`,
      zIndex: 1,
      opacity: 0,
      position: "absolute"
    })
  });
  if (currentTab !== previousTab) setPreviousTab(currentTab);

  return (
    <TabGrid>
      <TabGroup>
        {items.map((item, tabIndex) => (
          <Tab
            key={tabIndex}
            onClick={() => onChange(tabIndex)}
            selected={tabIndex === currentTab}
          >
            {item.label}
          </Tab>
        ))}
      </TabGroup>
      <TabPanel>
        {transition.map(({ item, props, key }) => (
          <animated.div
            key={key}
            style={{
              ...props
              // width: "100%",
              // height: "200px"
              // background: "linear-gradient(to right, red , yellow)"
            }}
            onClick={() => onChange(currentTab)}
          >
            {item.component}
          </animated.div>
        ))}
      </TabPanel>
    </TabGrid>
  );
};

Tabs.propTypes = {};

export default Tabs;
