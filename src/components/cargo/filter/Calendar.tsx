import { FC, Fragment, useEffect, useRef, useState } from 'react'

import * as calendar from './calendarConfig'

import classes from './Calendar.module.scss'

interface CalendarProps {
	handleDate: Function
	savedDate?: Date
	handleForms: Function
}

const monthNames = [
	'Январь',
	'Февраль',
	'Март', 
	'Апрель',
	'май',
	'Июнь',
	'Ибль',
	'Август',
	'Сентябрь',
	'Октябрь',
	'Ноябрь',
	'Декабрь',
]
const weekDayNames = ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'SAT']

const Calendar: FC<CalendarProps> = ({ handleDate, savedDate = new Date(), handleForms }) => {
	const wrapper = useRef<HTMLDivElement>(null)

	const [isActive, setIsActive] = useState<boolean>(false)
	const [selectedtDate, setSelectedDate] = useState(savedDate)
	const [currentDate, setCurrentDate] = useState(new Date())
	const [date, setDate] = useState(new Date())

	const getYear = () => +date.getFullYear()
	const getMonth = () => +date.getMonth()
	const getDay = () => +date.getDate()

	const handlePrevMonthButtonClick = () => {
		const date = new Date(getYear(), getMonth() - 1)

		setDate(date)
	}

	const handleNextMonthButtonClick = () => {
		const date = new Date(getYear(), getMonth() + 1)

		setDate(date)
	}

	const monthData = calendar.getMonthData(getYear(), getMonth())

	const handleCloseWrapper = (e: any) => {
		if (!wrapper.current || wrapper.current !== e.target) return

		handleClose()
	}

	const handleClose = (showClock: boolean = false) => {
		setIsActive((prev) => false)
		handleDate(selectedtDate)
		setTimeout(() => {
			handleForms(false, showClock)
		}, 500)
	}

	useEffect(() => {
		setIsActive((prev) => true)
	}, [])

	return (
		<div
			ref={wrapper}
			className={`${classes.wrapper} ${isActive ? classes.active : ''}`}
			onClick={handleCloseWrapper}
		>
			<div className={classes.inner}>
				<div className={classes.header}>
					<button onClick={handlePrevMonthButtonClick}>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.06 2.21999C10.1867 2.21999 10.3134 2.26665 10.4134 2.36665C10.6067 2.55999 10.6067 2.87999 10.4134 3.07332L6.06668 7.41999C5.74668 7.73999 5.74668 8.25999 6.06668 8.57999L10.4133 12.9267C10.6067 13.12 10.6067 13.44 10.4133 13.6333C10.22 13.8267 9.90002 13.8267 9.70668 13.6333L5.36002 9.28665C5.02002 8.94665 4.82668 8.48665 4.82668 7.99999C4.82668 7.51332 5.01335 7.05332 5.36002 6.71332L9.70668 2.36665C9.80668 2.27332 9.93335 2.21999 10.06 2.21999Z'
								fill='white'
							/>
						</svg>
					</button>

					<div className={classes.titleWrapper}>
						<div className={classes.title}>{monthNames[getMonth()]}</div>
						<div className={classes.year}>{getYear()}</div>
					</div>

					<button onClick={handleNextMonthButtonClick}>
						<svg
							width='26'
							height='26'
							viewBox='0 0 26 26'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M10.94 18.78C10.8133 18.78 10.6866 18.7333 10.5866 18.6333C10.3933 18.44 10.3933 18.12 10.5866 17.9267L14.9333 13.58C15.2533 13.26 15.2533 12.74 14.9333 12.42L10.5867 8.07335C10.3933 7.88001 10.3933 7.56001 10.5867 7.36668C10.78 7.17335 11.1 7.17335 11.2933 7.36668L15.64 11.7133C15.98 12.0533 16.1733 12.5133 16.1733 13C16.1733 13.4867 15.9866 13.9467 15.64 14.2867L11.2933 18.6333C11.1933 18.7267 11.0666 18.78 10.94 18.78Z'
								fill='white'
							/>
						</svg>
					</button>
				</div>

				<div className={classes.grid}>
					{weekDayNames.map((name, index) => {
						const isWeekend = index === 0 || index === 6 ? classes.red : ''

						return (
							<div
								key={`title-${name}`}
								className={`${classes.name} ${isWeekend}`}
							>
								{name}
							</div>
						)
					})}
					{monthData.map((week, index) => {
						return (
							<Fragment key={`week-${index}`}>
								{week.map((day, index) => {
									const isCurrentDay = calendar.areEqualDate(currentDate, day)
										? classes.currentDay
										: ''
									const isSelectedDay = calendar.areEqualDate(selectedtDate, day)
										? classes.currentDay
										: ''

									if (!day) return <div></div>

									return (
										<div
											key={`day-${index}`}
											className={`${classes.day} ${isCurrentDay} ${isSelectedDay}`}
											onClick={() => setSelectedDate(day)}
										>
											{day.getDate()}
										</div>
									)
								})}
							</Fragment>
						)
					})}
				</div>

				<div className={classes.buttonWrapper}>
					{/* <Button
						className={classes.customButton}
						onClick={() => handleClose()}
					>
						Cancel
					</Button>
					<Button
						onClick={() => handleClose(true)}
						isFill
					>
						Choose Time
					</Button> */}
				</div>
			</div>
		</div>
	)
}

export default Calendar
