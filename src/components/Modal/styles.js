import styled from 'styled-components';

export const ModalContainer = styled.div`
  top: 0;
  left: 0; 
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  align-items: center;
  justify-content: center;
  background: rgba(0,0,0,0.3);

  #modal{
    border-radius: 4px;
    background: var(--mainWhite);
  }
`;
