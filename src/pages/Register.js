import "../styles/Esd.css";
import Background from "../components/Background";
import Register from "../components/Register";
export default function RegisterForm() {
  return (
    <>
      <Background />
      <div className="cta-container">
        <div className="cta-box">
          <Register/>
         

        </div>
      </div>
    </>
  );
}
