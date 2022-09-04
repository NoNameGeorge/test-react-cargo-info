import { FC, useState } from 'react'

import { ICargo } from '../../../types/ICargo'

import ListItemHiddenInfo from './ListItemHiddenInfo'

import classes from './ListItem.module.scss'

interface ListItemProps {
	info: ICargo
}

const ListItem: FC<ListItemProps> = ({ info }) => {
	const [isActive, setIsActive] = useState(true)

	const handleOpen = () => {
		if (isActive) return

		setIsActive(true)
	}

	const handleClose = () => {
		setIsActive(false)
	}

	return (
		<div
			className={`${classes.wrapper} ${isActive ? classes.active : ''}`}
			onClick={handleOpen}
		>
			<div className={classes.inner}>
				<div></div>
				<span>{info.cargoNumber ? info.cargoNumber : '-'}</span>
				<span>{info.cargoType ? info.type : '-'}</span>
				<span>{info.pinnedOrder ? info.pinnedOrder : '-'}</span>
				<span>{info.sender ? info.sender : '-'}</span>
				<span>{info.acceptanceActNumber ? info.acceptanceActNumber : '-'}</span>
				<span>{info.invoiceNumber ? info.invoiceNumber : '-'}</span>
				<span>{info.date ? info.date : '-'}</span>
				<button
					className={classes.open}
					onClick={handleClose}
				>
					<svg
						width='10'
						height='6'
						viewBox='0 0 10 6'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9 1L5 5L1 1'
							stroke='#141414'
						/>
					</svg>
				</button>
			</div>

			{isActive && <ListItemHiddenInfo info={info} />}
		</div>
	)
}

export default ListItem
