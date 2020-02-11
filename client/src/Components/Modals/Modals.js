import React from "react";
import "./Modals.css";
import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          {children}
          <button onClick={handleClose}>Continue Shopping</button>
          <Link
              to="/cart"
              className={
                window.location.pathname === "/cart"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              <button>Go to Cart</button>
            </Link>
        </section>
      </div>
    );
  };

export default Modal;
