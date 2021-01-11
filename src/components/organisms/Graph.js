import React, { useState } from "react";
import styled from "styled-components";
import { media, constant } from "../../utils/index";
import Attribute from "../molecules/Attribute";
import BottomSection from "../molecules/BottomSection";
import Modal from "../molecules/Modal";

import TopSection from "../molecules/TopSection";

const GraphWrapper = styled.div`
  margin-bottom: 5rem;
  background: white;
  padding: 6rem 0;
  width: ${constant.graphWrapperWidth.phone};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.05);

  ${media.tablet`
  width: ${constant.graphWrapperWidth.tablet};
  `}

  ${media.desktop`
  width: ${constant.graphWrapperWidth.desktop};
  `}
`;

const Graph = () => {
  const [attributes, setAttributes] = useState([
    { name: "Age 40+", id: "Age" + Math.floor(Math.random() * 1000 + 1) },
    {
      name: "Ethnicity",
      id: "Ethnicity" + Math.floor(Math.random() * 1000 + 1),
      additionals: ["Black", "Hispanic"],
    },
    { name: "Income yearly 45k USD+", id: "Income" + Math.floor(Math.random() * 1000 + 1) },
  ]);

  //For main minus
  const handleMinusClick = (id) => {
    const newAttributes = [];
    attributes.map((atr) => (atr.id !== id ? newAttributes.push(atr) : null));
    setAttributes(newAttributes);
  };

  //For additional attributes minus
  const handleAdditionalMinusClick = (id, additional) => {
    const newAttributes = [];

    attributes.forEach((atr) => {
      //checks if attributes id is different from parameter id(id of deleted attribute)
      if (atr.id !== id) {
        newAttributes.push(atr);
      } else {
        //if not, this means that this is attribute to handle
        const newAdditionals = [];
        let isFound = false;
        //checks which addtionals attribute is "to delete", all the rest puts pushes further
        for (let i = 0; i < atr.additionals.length; i++) {
          if (!isFound) {
            if (atr.additionals[i] !== additional) {
              newAdditionals.push(atr.additionals[i]);
            } else {
              //if it finds "to delete", it breakes(continue) from here (we don't want to delete more then one additional attribute if its more then one with the same name)
              isFound = true;
              continue;
            }
          }
          //contiues to push others
          if (isFound) {
            newAdditionals.push(atr.additionals[i]);
          }
        }
        newAttributes.push({ name: atr.name, id: atr.id, additionals: newAdditionals });
      }
    });
    setAttributes(newAttributes);
  };

  const hanldeFormSubmit = (data) => {
    const newAttributes = [...attributes];
    const attribute = { ...data, id: `${data.name + Math.floor(Math.random() * 1000 + 1)}` };
    newAttributes.push(attribute);
    setAttributes(newAttributes);
  };

  const handleAddFormSubmit = (id, data) => {
    const newAttributes = [];

    attributes.forEach((atr) => {
      if (atr.id === id) {
        atr.additionals.push(data.name);
        newAttributes.push(atr);
      } else {
        newAttributes.push(atr);
      }
    });

    setAttributes(newAttributes);
  };

  const handlePlusClick = () => {
    //Displays modal
    const myModal = document.querySelector(".myModal");
    myModal.style.display = "flex";
  };

  return (
    <>
      <GraphWrapper>
        <TopSection label="People" />
        {attributes.map((at) =>
          at.additionals ? (
            <Attribute
              extended
              key={at.id}
              id={at.id}
              name={at.name}
              additionals={at.additionals}
              buttonClick={() => handleMinusClick(at.id)}
              additionalMinusClick={handleAdditionalMinusClick}
              addFormSubmit={handleAddFormSubmit}
            />
          ) : (
            <Attribute
              key={at.id}
              id={at.id}
              name={at.name}
              buttonClick={() => handleMinusClick(at.id)}
            />
          )
        )}
        <BottomSection plusWithBackground plusButtonClick={handlePlusClick} />
        <Modal formSubmit={hanldeFormSubmit} />
      </GraphWrapper>
    </>
  );
};

export default Graph;
