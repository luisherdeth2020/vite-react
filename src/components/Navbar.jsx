function Navbar({title = 'Luis Herdeth'}){
return (
	<nav className="navbar navbar-dark bg-dark">
		<div className="container justify-content-center">
			<a className="navbar-brand text-uppercase" href="/">
				{title}
			</a>
		</div>
	</nav>
);
}

export default Navbar;