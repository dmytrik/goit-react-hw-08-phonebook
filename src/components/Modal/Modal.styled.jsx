import styled from '@emotion/styled';

export const Backdrop = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  left: 0;
  top: 0;
`;

export const ModalContent = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  width: 700px;
  height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
