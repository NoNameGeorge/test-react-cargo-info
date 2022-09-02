import { FC, useState } from 'react'
import { Link } from 'react-router-dom'

import { Cargo } from '../../../types/ICargo'

import classes from './ListItem.module.scss'

interface ListItemProps {
	info: Cargo
}

const ListItem: FC<ListItemProps> = ({ info }) => {
	const [isActive, setIsActive] = useState(false)

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
				<span>{info.cargoType ? info.cargoType : '-'}</span>
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
			<div className={classes.hiddenInner}>
				<div className={classes.userInfo}>
					<div>
						<div>
							<div className={classes.title}>Статус груза</div>
							<div className={classes.value}>{info.status}</div>
						</div>
						<div></div>
						<div>
							<div className={classes.title}>Дата поступления груза в порт</div>
							<div className={classes.value}>{info.date}</div>
						</div>
						<div>
							<div className={classes.title}>Закрепленный заказ</div>
							<Link
								to='/'
								className={classes.value}
							>
								Заказ №{info.pinnedOrder}
							</Link>
						</div>
						<div>
							<div className={classes.title}>Менеджер</div>
							<div className={classes.value}>{info.manager}</div>
						</div>
						<div>
							<div className={classes.title}>Доставка груза до порта отправления</div>
							<div className={classes.value}>{info.deliveryToPort}</div>
						</div>
						<div>
							<div className={classes.title}>Грузоотправитель</div>
							<div className={classes.value}>{info.sender}</div>
						</div>
					</div>
					<div>
						<div>
							<div className={classes.title}>Тип контейнера</div>
							<div className={classes.value}>{info.cargoType}</div>
						</div>
						<div>
							<div className={classes.title}>Масса, тн</div>
							<div className={classes.value}>{info.weight}</div>
						</div>
						<div>
							<div className={classes.title}>Общий объем, м3</div>
							<div className={classes.value}>{info.volume}</div>
						</div>
						<div>
							<div className={classes.title}>Длина, метры</div>
							<div className={classes.value}>{info.length}</div>
						</div>
						<div>
							<div className={classes.title}>Высота, метры</div>
							<div className={classes.value}>{info.height}</div>
						</div>
						<div>
							<div className={classes.title}>Ширина, метры</div>
							<div className={classes.value}>{info.width}</div>
						</div>
						<div className={classes.notGrid}>
							<div className={classes.title}>Описание груза</div>
							<div className={classes.value}>{info.description}</div>
						</div>
					</div>
					<div>
						<div>
							<div className={classes.title}>ТМЦ</div>
							<div className={classes.value}>{info.tmts}</div>
						</div>
						<div>
							<div className={classes.title}>Фрахтовая единица</div>
							<div className={classes.value}>{info.freightUnit}</div>
						</div>
						<div>
							<div className={classes.title}>Расположение груза в порту</div>
							<div className={classes.value}>{info.location}</div>
						</div>
					</div>
				</div>
				<div className={classes.user}>
					<div className={classes.title}>Пользователь</div>
					<div className={classes.image}>ИИ</div>
					<div className={classes.name}>Иванов Иван</div>
					<div className={classes.mail}>example@mail.ru</div>
					<div className={classes.phone}>+7 (927) 777-55-55</div>
				</div>
				<div className={`${classes.userInfo} ${classes.userInfoFullWidth}`}>
					<div>
						<div className={classes.notGrid}>
							<div className={classes.title}>Файл транспортной накладной</div>
							<div className={classes.fileButton}>
								<svg
									width='14'
									height='16'
									viewBox='0 0 14 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.68798 1.5C8.89602 1.5 8.10449 1.81711 7.51141 2.44969L3.2071 7.03898C1.59763 8.75553 1.59763 11.515 3.2071 13.2316C3.25638 13.2844 3.3164 13.3266 3.38225 13.3557C3.38314 13.3561 3.38449 13.3564 3.38538 13.3568C5.00695 14.9098 7.5365 14.8925 9.09356 13.2316L12.1212 10.0026C12.1727 9.95139 12.2131 9.89032 12.2408 9.82295C12.2682 9.75558 12.282 9.68333 12.2811 9.61048C12.2802 9.53764 12.265 9.4657 12.2363 9.39892C12.2072 9.33214 12.1656 9.27192 12.1132 9.22181C12.0608 9.17169 11.9994 9.13275 11.9317 9.10726C11.8641 9.08177 11.7924 9.07023 11.7203 9.0734C11.6482 9.07657 11.5774 9.09431 11.5125 9.1256C11.4475 9.15693 11.3893 9.20112 11.3414 9.25563L8.31369 12.4845C7.10334 13.7755 5.19867 13.7755 3.98787 12.4845C2.77752 11.1935 2.77752 9.07702 3.98787 7.78599L8.2913 3.19671C9.07879 2.35717 10.2981 2.35717 11.0851 3.19671C11.8726 4.03615 11.8726 5.42171 11.0851 6.26117L7.16829 10.4387C6.80321 10.8276 6.27061 10.8273 5.90598 10.4387C5.5418 10.0502 5.5418 9.39588 5.90598 9.0073L9.05683 5.64681C9.10834 5.59556 9.14865 5.53448 9.17598 5.46712C9.2033 5.39975 9.21719 5.32749 9.21629 5.25465C9.21584 5.1818 9.20063 5.10986 9.17151 5.04308C9.14284 4.9763 9.10117 4.91609 9.04876 4.86597C8.99635 4.8159 8.93454 4.77692 8.8669 4.75143C8.7997 4.72594 8.72759 4.7144 8.65547 4.71757C8.5838 4.72073 8.51302 4.73848 8.44807 4.76977C8.38267 4.8011 8.32444 4.84528 8.27696 4.89979L5.12521 8.26028C4.36146 9.07453 4.36146 10.3715 5.12521 11.1857C5.17627 11.24 5.23764 11.2829 5.30573 11.3121C6.08023 11.9659 7.23682 11.9437 7.94816 11.1857L11.8654 7.00819C13.0028 5.79517 13.0194 3.89677 11.9756 2.62583C11.9506 2.56048 11.9129 2.50066 11.8654 2.44969C11.2719 1.81711 10.48 1.5 9.68798 1.5Z'
										fill='#141414'
									/>
								</svg>
								Добавить
							</div>
						</div>
						<div className={classes.notGrid}>
							<div className={classes.title}>Файл приемного акта</div>
							<div className={classes.fileButton}>
								<svg
									width='14'
									height='16'
									viewBox='0 0 14 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M9.68798 1.5C8.89602 1.5 8.10449 1.81711 7.51141 2.44969L3.2071 7.03898C1.59763 8.75553 1.59763 11.515 3.2071 13.2316C3.25638 13.2844 3.3164 13.3266 3.38225 13.3557C3.38314 13.3561 3.38449 13.3564 3.38538 13.3568C5.00695 14.9098 7.5365 14.8925 9.09356 13.2316L12.1212 10.0026C12.1727 9.95139 12.2131 9.89032 12.2408 9.82295C12.2682 9.75558 12.282 9.68333 12.2811 9.61048C12.2802 9.53764 12.265 9.4657 12.2363 9.39892C12.2072 9.33214 12.1656 9.27192 12.1132 9.22181C12.0608 9.17169 11.9994 9.13275 11.9317 9.10726C11.8641 9.08177 11.7924 9.07023 11.7203 9.0734C11.6482 9.07657 11.5774 9.09431 11.5125 9.1256C11.4475 9.15693 11.3893 9.20112 11.3414 9.25563L8.31369 12.4845C7.10334 13.7755 5.19867 13.7755 3.98787 12.4845C2.77752 11.1935 2.77752 9.07702 3.98787 7.78599L8.2913 3.19671C9.07879 2.35717 10.2981 2.35717 11.0851 3.19671C11.8726 4.03615 11.8726 5.42171 11.0851 6.26117L7.16829 10.4387C6.80321 10.8276 6.27061 10.8273 5.90598 10.4387C5.5418 10.0502 5.5418 9.39588 5.90598 9.0073L9.05683 5.64681C9.10834 5.59556 9.14865 5.53448 9.17598 5.46712C9.2033 5.39975 9.21719 5.32749 9.21629 5.25465C9.21584 5.1818 9.20063 5.10986 9.17151 5.04308C9.14284 4.9763 9.10117 4.91609 9.04876 4.86597C8.99635 4.8159 8.93454 4.77692 8.8669 4.75143C8.7997 4.72594 8.72759 4.7144 8.65547 4.71757C8.5838 4.72073 8.51302 4.73848 8.44807 4.76977C8.38267 4.8011 8.32444 4.84528 8.27696 4.89979L5.12521 8.26028C4.36146 9.07453 4.36146 10.3715 5.12521 11.1857C5.17627 11.24 5.23764 11.2829 5.30573 11.3121C6.08023 11.9659 7.23682 11.9437 7.94816 11.1857L11.8654 7.00819C13.0028 5.79517 13.0194 3.89677 11.9756 2.62583C11.9506 2.56048 11.9129 2.50066 11.8654 2.44969C11.2719 1.81711 10.48 1.5 9.68798 1.5Z'
										fill='#141414'
									/>
								</svg>
								Добавить
							</div>
						</div>
						<div>
							<div className={classes.title}>Номер приемного акта</div>
							<div className={classes.value}>{info.acceptanceActNumber}</div>
						</div>
						<div className={classes.buttonWrapper}>
							<button className={classes.change}>
								<svg
									width='11'
									height='13'
									viewBox='0 0 11 13'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M10.3984 2.04688L9.20312 0.851562C8.99219 0.640625 8.71094 0.5 8.40625 0.5H4.375C3.74219 0.5 3.25 1.01562 3.25 1.625V2.75H1.375C0.742188 2.75 0.25 3.26562 0.25 3.875V11.375C0.25 12.0078 0.742188 12.5 1.375 12.5H6.625C7.23438 12.5 7.75 12.0078 7.75 11.375V10.25H9.625C10.2344 10.25 10.75 9.75781 10.75 9.125V2.84375C10.75 2.53906 10.6094 2.25781 10.3984 2.04688ZM6.48438 11.375H1.51562C1.42188 11.375 1.375 11.3281 1.375 11.2344V4.01562C1.375 3.94531 1.42188 3.875 1.51562 3.875H3.25V9.125C3.25 9.75781 3.74219 10.25 4.375 10.25H6.625V11.2344C6.625 11.3281 6.55469 11.375 6.48438 11.375ZM9.48438 9.125H4.51562C4.42188 9.125 4.375 9.07812 4.375 8.98438V1.76562C4.375 1.69531 4.42188 1.625 4.51562 1.625H7V3.6875C7 4.01562 7.23438 4.25 7.5625 4.25H9.625V8.98438C9.625 9.07812 9.55469 9.125 9.48438 9.125ZM9.625 3.125H8.125V1.625H8.33594C8.38281 1.625 8.40625 1.64844 8.42969 1.67188L9.57812 2.82031C9.60156 2.84375 9.625 2.86719 9.625 2.91406V3.125Z'
										fill='#141414'
									/>
								</svg>
								редактировать
							</button>
							<button className={classes.divide}>разделить груз</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ListItem
