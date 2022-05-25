
import './App.css';

function App() {
  return (
    <div className='App'>
      <div className="container">
           	<header className="header">
				<a href="./index.html" class="logo-link">
					<img className="header-logo" src="./images/LOGO.svg" width="69" height="69" alt="firma logotipi" />
				</a>
					<div className="header-inner">
						<ul className="header-list">
							<li classNames="header-item">
								<a className="header-link" href="./index.html" >
									<span className="link-text">Home</span>
								</a>
							</li>
							<li className="header-item">
								<a className="header-link" href="#about" >About</a>
							</li>
							<li className="header-item">
								<a className="header-link" href="#work" >Services</a>
							</li>
							<li className="header-item">
								<a className="header-link" href="#customers" >Reviews</a>
							</li>
						</ul>
						<a className="header-get" href="#" >Get Started </a>
					</div>
          </header>
        </div>
    </div>
  );
}

export default App;
