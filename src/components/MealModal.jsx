import "../App.css";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useGlobalContext } from "../context";

const MealModal = () => {
  const { modalMeal, show, handleClose, handleShow } = useGlobalContext();
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>{modalMeal.strMeal}</Modal.Title>
        </Modal.Header>
        <img
          src={modalMeal.strMealThumb}
          className="card-img-top"
          alt="..."
          style={{
            height: "300px",
          }}
        />
        <Modal.Body>{modalMeal.strInstructions}</Modal.Body>
        <a
          href={modalMeal.strSource}
          className="btn btn-outline-secondary"
          style={{
            jsutifyContent: "left",
            margin: "10px",
            width: "100px",
          }}
        >
          Recipe Link
        </a>
        <a
          href={modalMeal.strYoutube}
          className="btn btn-outline-secondary"
          style={{
            jsutifyContent: "left",
            margin: "10px",
            width: "100px",
          }}
        >
          Video Link
        </a>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MealModal;
