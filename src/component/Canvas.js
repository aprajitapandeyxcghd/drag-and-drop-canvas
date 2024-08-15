import React, { useState } from 'react';
import Draggable from 'react-draggable';
import { ResizableBox } from 'react-resizable';
import 'react-resizable/css/styles.css';
import './Canvas.css';

const Canvas = () => {
  const [cards, setCards] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalText, setModalText] = useState('');

  const addCard = () => {
    const newCard = {
      id: Date.now(),
      text: "This is some dummy text that can be expanded.",
      position: { x: 100, y: 100 },
    };
    setCards([...cards, newCard]);
  };

  const handleShowMore = (text) => {
    setModalText(text);
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  return (
    <div className="canvas">
      <button onClick={addCard}>Add Card</button>
      <div className="canvas-area">
        {cards.map((card) => (
          <Draggable key={card.id} defaultPosition={card.position}>
            <ResizableBox width={200} height={100} className="box">
              <div className="card">
                <p>{card.text.slice(0, 20)}...</p>
                <button onClick={() => handleShowMore(card.text)}>Show More</button>
              </div>
            </ResizableBox>
          </Draggable>
        ))}
      </div>

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <p>{modalText}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Canvas;
