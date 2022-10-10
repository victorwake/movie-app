
import {MovieDetails} from './pages/MovieDetails';
import {LandingPage} from './pages/LandingPage';
import styles from './components/Titulo.module.css';
import {BrowserRouter as Router, Routes, Route, Link, Navigate,} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <header className="cabeza">
      <Link to="/">
      <h1 className={styles.titulo}>Movies</h1>
      </Link>
      </header>
      <main>
      <Routes>
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
      </main>
    </div>
    </Router>
  );
}

export default App;