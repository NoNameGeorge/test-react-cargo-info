import { FC } from 'react'

import classes from './Pagination.module.scss'

interface PaginationProps {
	handleCount: Function
	setActiveCount: Function
	activeCount: number
	count: number[]
	handlePrevPage: Function
	handleNextPage: Function
	handleChangeCount: Function
	pagesCount: number
}

const Pagination: FC<PaginationProps> = ({
	handleCount,
	activeCount,
	setActiveCount,
	count,
	handlePrevPage,
	handleNextPage,
	pagesCount,
	handleChangeCount,
}) => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.showingCount}>
				<span>Показывать по</span>
				{count.length &&
					count.map((countItem) => {
						const isActivevClass = countItem === activeCount ? classes.active : ''

						return (
							<button
								key={`count-${countItem}`}
								className={`${isActivevClass}`}
								onClick={() => handleChangeCount(countItem)}
							>
								{countItem}
							</button>
						)
					})}
			</div>
			{pagesCount && (
				<div className={classes.pages}>
					<button
						className={classes.prev}
						onClick={() => handlePrevPage()}
					>
						<svg
							viewBox='0 0 5 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M1.68085 4.50281L4.86382 1.13527C4.90726 1.08959 4.94168 1.03523 4.96505 0.975349C4.98843 0.915467 5.00031 0.851264 4.99999 0.786479C5.00017 0.721883 4.98822 0.657892 4.96485 0.598214C4.94147 0.538536 4.90714 0.484355 4.86382 0.438811L4.5851 0.144024C4.54191 0.0980813 4.49051 0.061687 4.43389 0.0369616C4.37727 0.0122361 4.31657 -0.000326176 4.25532 6.43612e-06C4.19424 -0.000176951 4.13374 0.0124578 4.07731 0.037179C4.02088 0.0619002 3.96966 0.0982164 3.92659 0.144024L0.136176 4.15177C0.0927366 4.19745 0.0583256 4.25181 0.0349475 4.31169C0.0115694 4.37157 -0.000308402 4.43578 6.0854e-06 4.50056C6.0854e-06 4.63333 0.0478783 4.75822 0.136176 4.85048L3.9234 8.85598C3.96659 8.90192 4.01799 8.93831 4.07461 8.96304C4.13123 8.98776 4.19193 9.00033 4.25319 8.99999C4.31426 9.00018 4.37477 8.98754 4.43119 8.96282C4.48762 8.9381 4.53885 8.90178 4.58191 8.85598L4.86063 8.56119C4.94788 8.46879 4.99688 8.34354 4.99688 8.21296C4.99688 8.08237 4.94788 7.95713 4.86063 7.86473L1.67979 4.50056L1.68085 4.50281Z'
								fill='#3A3C40'
							/>
						</svg>
					</button>

					{/* activePage */}

					<button
						className={classes.next}
						onClick={() => handleNextPage()}
					>
						<svg
							viewBox='0 0 5 9'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M3.31915 4.50281L0.136176 1.13527C0.0927362 1.08959 0.0583248 1.03523 0.0349469 0.975349C0.0115685 0.915467 -0.000308514 0.851264 5.72205e-06 0.786479C-0.00016737 0.721883 0.0117788 0.657892 0.0351529 0.598214C0.058527 0.538536 0.092864 0.484355 0.136176 0.438811L0.414898 0.144024C0.458087 0.0980813 0.509488 0.061687 0.566107 0.0369616C0.622725 0.0122361 0.68343 -0.000326176 0.744685 6.43612e-06C0.805761 -0.000176951 0.866264 0.0124578 0.92269 0.037179C0.979116 0.0619002 1.03034 0.0982164 1.07341 0.144024L4.86382 4.15177C4.90726 4.19745 4.94167 4.25181 4.96505 4.31169C4.98843 4.37157 5.00031 4.43578 4.99999 4.50056C4.99999 4.63333 4.95212 4.75822 4.86382 4.85048L1.0766 8.85598C1.03341 8.90192 0.982009 8.93831 0.925391 8.96304C0.868772 8.98776 0.808067 9.00033 0.746812 8.99999C0.685737 9.00018 0.625233 8.98754 0.568807 8.96282C0.512381 8.9381 0.461152 8.90178 0.41809 8.85598L0.139367 8.56119C0.0521221 8.46879 0.00311804 8.34354 0.00311804 8.21296C0.00311804 8.08237 0.0521221 7.95713 0.139367 7.86473L3.32021 4.50056L3.31915 4.50281Z'
								fill='#3A3C40'
							/>
						</svg>
					</button>
				</div>
			)}
		</div>
	)
}

export default Pagination
