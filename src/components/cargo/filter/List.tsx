import { FC, useState } from 'react'

import classes from './List.module.scss'

interface ListProps {
	list: string[]
	title: string
	openText: string
}

const List: FC<ListProps> = ({ list, title, openText }) => {
	const [activeStatus, setActiveStatus] = useState(list[0])
	const [isActiveHiddenMenu, setIsActiveHiddenMenu] = useState(false)

	const handleClick = (listIndex: number) => {
		setActiveStatus(list[listIndex])
		setIsActiveHiddenMenu((prev) => !prev)
	}

	return (
		<div className={classes.wrapper}>
			<div
				className={`${classes.inner} ${isActiveHiddenMenu ? classes.active : ''}`}
				onClick={() => setIsActiveHiddenMenu((prev) => !prev)}
			>
				<div>
					<div className={classes.title}>
						<span>{title}</span>
						<svg
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<rect
								x='0.5'
								y='0.5'
								width='15'
								height='15'
								rx='7.5'
								stroke='#E0E0E0'
							/>
							<path
								d='M7.52148 9.2373C7.51823 9.12012 7.5166 9.03223 7.5166 8.97363C7.5166 8.62858 7.56543 8.33073 7.66309 8.08008C7.7347 7.89128 7.85026 7.70085 8.00977 7.50879C8.12695 7.36882 8.33691 7.16536 8.63965 6.89844C8.94564 6.62826 9.14421 6.41341 9.23535 6.25391C9.3265 6.0944 9.37207 5.92025 9.37207 5.73145C9.37207 5.38965 9.23861 5.09017 8.97168 4.83301C8.70475 4.57259 8.3776 4.44238 7.99023 4.44238C7.61589 4.44238 7.30339 4.55957 7.05273 4.79395C6.80208 5.02832 6.6377 5.39453 6.55957 5.89258L5.65625 5.78516C5.73763 5.11784 5.97852 4.60677 6.37891 4.25195C6.78255 3.89714 7.31478 3.71973 7.97559 3.71973C8.67546 3.71973 9.23372 3.91016 9.65039 4.29102C10.0671 4.67188 10.2754 5.13249 10.2754 5.67285C10.2754 5.98535 10.2021 6.27344 10.0557 6.53711C9.90918 6.80078 9.62272 7.12142 9.19629 7.49902C8.90983 7.75293 8.72266 7.9401 8.63477 8.06055C8.54688 8.18099 8.48177 8.31934 8.43945 8.47559C8.39714 8.63184 8.37272 8.88574 8.36621 9.2373H7.52148ZM7.46777 11V9.99902H8.46875V11H7.46777Z'
								fill='#CECECE'
							/>
						</svg>
					</div>
					<div className={classes.activeValue}>{isActiveHiddenMenu ? openText : activeStatus}</div>
				</div>
				<svg
					width='10'
					height='6'
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M1 5L5 1L9 5'
						stroke='#2A2E37'
					/>
				</svg>
			</div>
			<div className={`${classes.hiddenInner} ${isActiveHiddenMenu ? classes.active : ''}`}>
				<div>
					{list.map((listItem, index) => {
						return (
							<div
								key={`status-list-item-${index}`}
								className={classes.listItem}
								onClick={() => handleClick(index)}
							>
								{listItem}
							</div>
						)
					})}
				</div>
			</div>
		</div>
	)
}

export default List
