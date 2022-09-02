import { FC } from 'react'

import { ports, status } from '../../../config/cargo'

import List from './List'

import classes from './Filter.module.scss'

const newStatusList = ['Любой', ...status]

const Filter: FC = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<List
					title='Порт назначения'
					openText='Выберите порт'
					list={ports}
				/>
				<List
					title='Статус'
					openText='Выберите статус'
					list={newStatusList}
				/>
				<button className={classes.whiteButton}>Сбросить</button>
				<button className={classes.darkButton}>Применить</button>
			</div>
		</div>
	)
}

export default Filter
