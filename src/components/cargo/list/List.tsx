import React, { FC, useState } from 'react'

import { cargos } from '../../../config/cargo'

import Pagination from './Pagination'
import ListItem from './ListItem'

import classes from './List.module.scss'

const List: FC = () => {
	const [currentCargos, setCurrentCargos] = useState(cargos.slice(0, 20))

	const handleCount = (count: number) => {
		console.log(count)
		setCurrentCargos(cargos.slice(0, count))
	}

	console.log(currentCargos)

	return (
		<div className={classes.wrapper}> 
			<div className={classes.inner}>
				{currentCargos &&
					currentCargos.map((item) => {
						return (
							<ListItem
								key={`cargo-${item.id}`}
								info={item}
							/>
						)
					})}
			</div>

			<Pagination
				handleCount={handleCount}
				listLength={cargos.length}
			/>
		</div>
	)
}

export default List
