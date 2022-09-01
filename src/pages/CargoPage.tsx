import { FC } from 'react'

import { Footer, Header } from '../components/common'
import { SideMenu } from '../components/sideMenu'

import classes from './CargoPage.module.scss'

const CargoPage: FC = () => {
	return (
		<div className={classes.wrapper}>
			<SideMenu />
			<div className={classes.inner}>
				<Header />


				<Footer />
            </div>
		</div>
	)
}

export default CargoPage
