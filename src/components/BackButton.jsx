import { Link } from "react-router-dom"
import arrowBack from "../assets/arrow_back.svg"

function BackButton({ to }) {
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-start",
        paddingBottom: "12px",
      }}
    >
      <Link
        to={to}
        aria-label="Go back"
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: "42px",
          height: "42px",
          borderRadius: "50%",
          border: "1px solid var(--border)",
          textDecoration: "none",
        }}
      >
        <img src={arrowBack} alt="" width="22" height="22" />
      </Link>
    </div>
  )
}

export default BackButton
