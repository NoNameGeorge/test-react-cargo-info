import { FC } from 'react'

import { SideMenu } from '../components/sideMenu'

import classes from './CargoPage.module.scss'

const CargoPage: FC = () => {
	return (
		<div className={classes.wrapper}>
			<SideMenu />
			<div className={classes.inner}>

            </div>
		</div>
	)
}

export default CargoPage
