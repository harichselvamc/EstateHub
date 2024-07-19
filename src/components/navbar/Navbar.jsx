import "./navbar.scss";
function Navbar() {
  return (
    <nav>
      <div className="left">
        <a href="/" className="logo">
          <img src="src\assets\logo.png" alt="logo" />
          <span>EstateHub</span>
        </a>
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">contact us</a>
        <a href="/">Agents</a>
      </div>
      <div className="right">

        <a href="/">Signin</a>
        <a href="/">Signup</a>
      </div>
    </nav>
  );
}
export default Navbar;
