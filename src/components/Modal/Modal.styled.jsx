import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(247, 242, 241, 0.8);
  left: 0;
  top: 0;
`;

export const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(164, 161, 161);
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
  border-radius: 8px;
`;
