const Header = (props) => {
  return (
    <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">        
        <span class="navbar-brand mb-0 h1">Memory Pin Game</span>
        <span class="navbar-brand mb-0 h1 d-flex">Score: {props.score}. Best: {props.best}.</span>
      </div>
    </nav>
  );
};

export default Header;