import colors from "@app/themes/colors";
import fonts from "@app/themes/fonts";
import styled from "styled-components";

const StyledShareComponent = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
`;

const Modal = styled.div`
  position: relative;
  border: 2px solid #fff;
  height: 15rem;
  width: 20rem;
  padding: 2rem;
  border-radius: 0.3rem;
  font-family: ${fonts.family.monts};
`;

const StyledButton = styled.button`
  position: absolute;
  outline: none;
  border: none;
  background: none;
  right: 2%;
  top: 4%;
  font-size: 3rem;
  color: #fff;
  cursor: pointer;
`;

const StyledCopy = styled.button`
  background-color: ${colors.primary};
  position: absolute;
  outline: none;
  border: none;
  cursor: pointer;
  font-size: ${fonts.size.small};
  padding: 0.5rem;
  color: ${colors.buttonText};
  font-family: ${fonts.family.monts};
`;

const ShareComponent = ({ url, setDisplay }) => {
  const handleClose = () => {
    setDisplay(false);
  };

  return (
    <StyledShareComponent>
      <StyledButton onClick={handleClose}>X</StyledButton>
      <Modal>
        <p>{url}</p>
        <StyledCopy>Copy</StyledCopy>
      </Modal>
    </StyledShareComponent>
  );
};

export default ShareComponent;
