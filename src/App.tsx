import { FC, useEffect } from 'react'
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import { CargoPage } from './pages'

const App: FC = () => {
    const locate = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        if (locate.pathname !== '/') {
            navigate('/')
        }
    }, [])

	return (
		<Routes>
			<Route
				path='/'
				element={<CargoPage />}
			/>
			<Route
				path='*'
				element={<CargoPage />}
			/>
		</Routes>
	)
}

export default App
