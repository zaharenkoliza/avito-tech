import AppRoutes from './routes/AppRoutes'
import { Link, BrowserRouter } from 'react-router-dom'
import './app.css';
import { Icon, SvgIcon, SvgIconProps } from '@mui/material';

function HomeIcon(props: SvgIconProps) {
	return (
		<SvgIcon {...props}>
			<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
		</SvgIcon>
	);
}

function App() {
//   const [count, setCount] = useState(0)

  return (
		<BrowserRouter>
			<nav>
				<ul>
					<li>
						<Link to="/list">
							<HomeIcon color="primary" />
						</Link>
					</li>
					<li>
						<Link to="/form">
							<Icon color="primary">add_circle</Icon>
						</Link>
					</li>
				</ul>
			</nav>
			<main>
				<AppRoutes />
			</main>
		</BrowserRouter>
    // <>
    //   <div>
    //     <a href="https://vite.dev" target="_blank">
    //       <img src={viteLogo} className="logo" alt="Vite logo" />
    //     </a>
    //     <a href="https://react.dev" target="_blank">
    //       <img src={reactLogo} className="logo react" alt="React logo" />
    //     </a>
    //   </div>
    //   <h1>Vite + React</h1>
    //   <div className="card">
    //     <button onClick={() => setCount((count) => count + 1)}>
    //       count is {count}
    //     </button>
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to test HMR
    //     </p>
    //   </div>
    //   <p className="read-the-docs">
    //     Click on the Vite and React logos to learn more
    //   </p>
    // </>
  )
}

export default App
