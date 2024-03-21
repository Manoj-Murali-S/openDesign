const Navbar = () => {
  return (
    <div>
      <div className="nav">
        <input type="checkbox" id="nav-check"/>
        <div className="nav-header">

          <img src="/assets/Logo.png" className="navAbs" alt="" srcSet="" />

        </div>
        <div className="nav-btn">
          <label htmlFor="nav-check">
            <span></span>
            <span></span>
            <span></span>
          </label>
        </div>

        <div className="nav-links">
          <a href="">Overview</a>
          <a href="">Why Chennai ?</a>
          <a href="">Plot Benefits</a>
          <a href="" className="gradient">Contact US</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;