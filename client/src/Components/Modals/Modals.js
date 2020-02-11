import React from "react";
import "./Modals.css";
import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <ul className="list-inline">
          <li className="list-inline-item">
        <button
          className="btn btn-primary my-2 my-sm-0"
          href="/cart"
          type="submit"
          onClick={handleClose}
        >
          Continue Shopping
        </button>
        </li>
        <li className="list-inline-item">
        <Link
          to="/cart"
          className={
            window.location.pathname === "/cart"
              ? "nav-link active"
              : "nav-link"
          }
        >
          <button
            className="btn btn-primary my-2 my-sm-0"
            href="/cart"
            type="submit"
          >
            Go to Cart
          </button>
        </Link>
        </li>
        </ul>
      </section>
    </div>
  );
};

export default Modal;
