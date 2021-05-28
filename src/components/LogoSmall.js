import logo from "../img/logo.png";

const LogoSmall = () => {
  return (
    <div className="container-logo-small">
      <img className="icon-logo-small" src={logo} alt="gamepad" />
      <div className="text-logo-small">Gamepad</div>
    </div>
  );
};

export default LogoSmall;
