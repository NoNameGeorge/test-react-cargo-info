import { FC, useEffect, useState } from 'react'

import { activeSortImage, cargos, sortImage } from '../../../config/cargo'

import Pagination from './Pagination'
import ListItem from './ListItem'
import { Filter } from '../filter'
import { Breadcrumb } from '../../common'

import classes from './List.module.scss'

const count = [20, 50, 100]

const List: FC = () => {
	const [sortType, setSortType] = useState('cargoNumber')
	const [activeCount, setActiveCount] = useState(count[0])
	const [currentCargos, setCurrentCargos] = useState(cargos.slice(0, activeCount))
	const [activePage, setActivePage] = useState(1)
	const [pagesCount, setPagesCount] = useState(0)

	const handleCount = (count: number) => {
		console.log(count)
		setCurrentCargos(cargos.slice(0, count))
	}

	console.log(currentCargos) 

	useEffect(() => {
		const filteredCorgos = cargos.sort((a: any, b: any) => {
			return a[sortType] - b[sortType]
		})

		setCurrentCargos(filteredCorgos.slice(0, activeCount))
	}, [sortType])

	const handlePrevPage = () => {
		if (activePage <= 1) return

		setActivePage((prev) => prev - 1)
	}

	const handleNextPage = () => {
		if (activePage >= pagesCount) return

		setActivePage((prev) => prev + 1)
	}

	useEffect(() => {
		let count = cargos.length / activeCount

		if (Math.trunc(count) < count) {
			count = Math.trunc(count) + 1
		}

		setPagesCount(count)
	}, [activeCount])

	const handleChangeCount = (count: number) => {
		setActiveCount(count)
		handleCount(count)
	}

	return (
		<div className={classes.wrapper}>
			<Breadcrumb
				title='Все грузы'
				prevPage='Вернуться на главную'
			/>
			<Filter />
			<div className={classes.inner}>
				<div className={classes.filterTitle}>
					<div></div>
					<span onClick={() => setSortType('cargoNumber')}>
						Номер груза
						{sortType === 'cargoNumber' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('type')}>
						Тип
						{sortType === 'type' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('pinnedOrder')}>
						Закрепленный заказ
						{sortType === 'pinnedOrder' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('sender')}>
						Грузоотправитель
						{sortType === 'sender' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('actNumber')}>
						Номер приемного акта
						{sortType === 'actNumber' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('invoiceNumber')}>
						Номер транспортной/ЖД накладной
						{sortType === 'invoiceNumber' ? activeSortImage : sortImage}
					</span>
					<span onClick={() => setSortType('date')}>
						Дата поступления в порт
						{sortType === 'date' ? activeSortImage : sortImage}
					</span>
					<div></div>
				</div>
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
				activeCount={activeCount}
				setActiveCount={setActiveCount}
				count={count}
				handlePrevPage={handlePrevPage}
				handleNextPage={handleNextPage}
				pagesCount={pagesCount}
				handleChangeCount={handleChangeCount}
			/>
		</div>
	)
}

export default List
