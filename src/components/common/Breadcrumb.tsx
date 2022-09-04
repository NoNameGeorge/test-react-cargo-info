import { FC } from 'react'

import classes from './Breadcrumb.module.scss'

interface BreadcrumbProps {
	title: string
	prevPage: string
}

const Breadcrumb: FC<BreadcrumbProps> = ({ title, prevPage }) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.back}>
				<svg
					viewBox='0 0 6 10'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M5 1L1 5L5 9'
						stroke='#ACACAC'
					/>
				</svg>
				<span>{prevPage}</span>
			</div>
			<h1 className={classes.title}>{title}</h1>
		</div>
	)
}

export default Breadcrumb
