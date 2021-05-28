import LogoSmall from "./LogoSmall";

const Header = () => {
  return (
    <>
      <div className="layout">
        <div className="container-header">
          <div className="col-left">
            <LogoSmall />
          </div>
          <div className="col-right">My Collection</div>
        </div>
      </div>
      <div className="line"></div>
    </>
  );
};

export default Header;
