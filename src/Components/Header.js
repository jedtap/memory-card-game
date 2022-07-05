const Header = (props) => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">        
        <span className="navbar-brand mb-0 h1">Memory Pin Game</span>
        <span className="navbar-brand mb-0 h1 d-flex">Score: {props.score}. Best: {props.best}.</span>
      </div>
    </nav>
  );
};

export default Header;