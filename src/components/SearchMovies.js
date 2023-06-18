import React from 'react';
import { useState, useEffect } from 'react'



function SearchMovies() {


	const keyword = '';

	// Credenciales de API
	const apiKey = 'http://www.omdbapi.com/?i=tt3896198&apikey=7c7f3cb2'; // Intenta poner cualquier cosa antes para probar

	const [state, setState] = useState({
		movies: [],
	});

	const [searchValue, setSearchValue] = useState('');
	useEffect(() => {
		if (searchValue) {
			fetch(`http://www.omdbapi.com/?s=${searchValue}&apikey=7c7f3cb2`)
				.then(response => response.json())
				.then(data => {
					console.log(data);
					setState(prevState => ({
						...prevState,
						movies: data.Search || [],
					}));
				})
				.catch(error => console.error(error));
		}
	}, [searchValue]);
	const handleSearch = e => {
		e.preventDefault()

		setSearchValue('')
	}

	return (

		<div className="container-fluid">
			<nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
				<button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
					<i className="fa fa-bars">Comision 18</i>
				</button>
				<ul className="navbar-nav ml-auto">
					<li className="nav-item dropdown no-arrow mx-1">
						<a className="nav-link dropdown-toggle" href="/" id="alertsDropdown">
							Comision 18</a>
					</li>
					<div className="topbar-divider d-none d-sm-block"></div>
					<li className="nav-item dropdown no-arrow">
						<a className="nav-link dropdown-toggle" href="/" id="userDropdown">
							<span className="mr-2 d-none d-lg-inline text-gray-600 small">Creado por Sol López</span>
							<i class="far fa-heart"></i>
						</a>
					</li>
				</ul>
			</nav>

			<div className="container-fluid">
				{apiKey !== '' ? (
					<>
						<div className="row my-4">
							<div className="col-12 col-md-6">
								{/* Buscador */}
								<form method="GET" onSubmit={handleSearch}>
									<div className="form-group">
										<label htmlFor="">Buscar por título:</label>
										<input
											type="text"
											className="form-control"
											value={searchValue}
											onChange={e => setSearchValue(e.target.value)}
										/>
									</div>
									<button className="btn btn-info">Search</button>
								</form>
							</div>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Películas para la palabra:{searchValue}</h2>
							</div>
							{/* Listado de películas */}
							{state.movies.length > 0 ? (
								state.movies.map((movie, i) => (
									<div className="col-lg-4 col-md-6 col-sm-12 my-4" key={i}>
										<div className="card shadow mb-4">
											<div className="card-header py-3">
												<h5 className="m-0 font-weight-bold text-gray-800">{movie.Title}</h5>
											</div>
											<div className="card-body">
												<div className="text-center">
													<img
														className="img-fluid px-3 px-sm-4 mt-3 mb-4"
														src={movie.Poster}
														alt={movie.Title}
														style={{ width: '100%', height: '200px', objectFit: 'cover' }}
													/>
												</div>
												<p>{movie.Year}</p>
											</div>
										</div>
									</div>







								))
							) : (
								<div className="alert alert-warning text-center">No se encontraron películas</div>
							)}
						</div>
					</>
				) : (
					<div className="alert alert-danger text-center my-4 fs-2">Eyyyy... ¿PUSISTE TU APIKEY?</div>
				)}
			</div>

		</div>)
}
export default SearchMovies;
