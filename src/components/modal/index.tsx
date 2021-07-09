import React, { FC } from 'react'
import styled from 'styled-components'


interface Iprops {
 message: string
 onCloseModal: () => void
 onShuffleTiles: () => void
}

const Modal: FC<Iprops> = ({ message, onCloseModal, onShuffleTiles }) => {
 return (
  <StyledModal>
   <div className='modal-content'>
    <div className='modal-body'>
     {message}
    </div>
    <div className='footer'>
     <StyledButton onClick={() => {
      onShuffleTiles();
      onCloseModal();
     }}>
      Restart Game
     </StyledButton>
     <StyledButton onClick={onCloseModal}>
      Continue Playing
     </StyledButton>
    </div>
   </div>
  </StyledModal>
 )
}

export default Modal;


let StyledModal = styled.div`
position: fixed;
left: 0;
top: 0;
right: 0;
bottom: 0;
background-color: rgba(0, 0, 0, 0.4);
display: flex;
align-items: center;
justify-content: center;

.modal-content {
 width: 500px;
 background-color: #fff;
}

.modal-header{
 padding: 1rem;
}

.modal-body {
 padding: 1rem;
 display: flex;
 justify-content: center;
 text-transform: uppercase;
}

.footer {
 display: flex;
 justify-content: space-between;
 padding: 2rem;
}
`

const StyledButton = styled.button`
height: 2rem;
cursor: pointer;
`