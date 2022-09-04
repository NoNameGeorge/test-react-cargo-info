import { FC, useEffect, useState } from 'react'

import { statusWithColor } from '../../../config/cargo'
import { IStatus } from '../../../types/ICargo'

import classes from './StatusList.module.scss'

interface StatusListProps {
	id: number
	active: string
}

const StatusList: FC<StatusListProps> = ({ id, active }) => {
	const [isActive, setIsActive] = useState(false)
	const [activeStatus, setActiveStatus] = useState<IStatus | null>(null)

	useEffect(() => {
		statusWithColor.forEach((item) => {
			if (item.name === active) {
				setActiveStatus(item)
			}
		})
	}, [])

    const handleClick = (listItem: IStatus) => {
        setActiveStatus(listItem)
        setIsActive(false)
    } 

	return (
		<div className={`${classes.wrapper} ${isActive ? classes.active : ''}`}>
			<div
				className={classes.checked}
				onClick={() => setIsActive((prev) => !prev)}
			>
				<div
					className={classes.color}
					style={{ background: activeStatus?.color }}
				></div>
				<span>{activeStatus ? activeStatus.name : 'Выберите статус'} </span>
				<svg
					viewBox='0 0 10 6'
					fill='none'
					xmlns='http://www.w3.org/2000/svg'
				>
					<path
						d='M9 1L5 5L1 1'
						stroke='#141414'
					/>
				</svg>
			</div>
			<div className={classes.inner}>
				<div>
					{statusWithColor &&
						statusWithColor.map((listItem) => {
							const isActiveListItem = listItem.name === activeStatus?.name ? classes.active : ''

							return (
								<div
									key={`${id}-cargo-status-${listItem.name}`}
									className={isActiveListItem}
                                    onClick={() => handleClick(listItem)}
								>
									<div
										className={classes.color}
										style={{ background: listItem.color }}
									></div>
									{listItem.name}
								</div>
							)
						})}
				</div>
			</div>
		</div>
	)
}

export default StatusList
