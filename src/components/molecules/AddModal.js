import React, { useRef } from "react";
import styled from "styled-components";
import { media } from "../../utils/index";
import { useForm } from "react-hook-form";

const ModalWrapper = styled.div`
  position: fixed;
  top: 35%;
  background: white;
  width: 80%;
  padding: 3rem 0;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.05);
  z-index: 100;

  ${media.tablet`
  width: 50%;
  
  `}

  ${media.desktop`
  width: 30%;
  
  `}
`;

const Label = styled.label`
  display: block;
  margin-bottom: 10px;
  font-size: 18px;
`;

const Input = styled.input`
  width: 100%;
  max-width: 300px;
  margin-bottom: 20px;
  display: block;
  background-color: transparent;
  border: none;
  color: ${({ theme }) => theme.greyFont};
  border-bottom: 1px solid ${({ theme }) => theme.greyFont};
  font-size: 17px;
  font-weight: bold;

  &:focus {
    outline: none;
    color: rgb(116, 118, 247);
  }
`;

const SubmitButton = styled.button`
  color: white;
  font-weight: bold;
  font-size: 15px;
  padding: 10px 25px;
  border: none;
  text-shadow: 2px 2px 5px rgba(89, 89, 89, 1);
  box-shadow: 0 6px 30px 0 rgba(0, 0, 0, 0.25);
  background: rgb(95, 121, 246);
  background: linear-gradient(0deg, rgb(116, 118, 247) 10%, rgba(187, 131, 252, 1) 100%);
  border-radius: 5px;
`;
const CloseButton = styled.button`
  position: absolute;
  right: 1.5rem;
  font-size: 1rem;
  font-weight: 700;
  color: rgb(116, 118, 247);
  top: 1.5rem;
  border: none;
  outline: none;
  background: transparent;
  transition: font-size 0.4s;

  :hover {
    font-size: 1.5rem;
  }
`;

const AddModal = ({ formSubmit, name, modalId }) => {
  const { register, handleSubmit } = useForm();
  const myModalRef = useRef(null);

  const handleClose = () => {
    myModalRef.current.style.display = "none";
  };

  const onSubmit = (data, e) => {
    formSubmit(modalId, data);
    e.target.reset();
  };

  return (
    <ModalWrapper className={modalId} ref={myModalRef}>
      <CloseButton onClick={handleClose}>X</CloseButton>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Label>additional attribute name</Label>
        <Input name="name" defaultValue="test" ref={register({ required: true })} />
        <SubmitButton type="submit">Submit</SubmitButton>
      </form>
    </ModalWrapper>
  );
};

export default AddModal;
