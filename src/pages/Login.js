import "../styles/Esd.css";
import Background from "../components/Background";
import Login from "../components/Login";
export default function LoginForm() {
  return (
    <>
      <Background />
      <div className="cta-container">
        <div className="cta-box">
          <Login/>
        </div>
      </div>
    </>
  );
}
