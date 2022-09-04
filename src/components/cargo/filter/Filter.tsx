import { FC, useState } from 'react'

import { ports, status } from '../../../config/cargo'

import List from './List'
import Calendar from './Calendar'

import classes from './Filter.module.scss'

const newStatusList = ['Любой', ...status]
const newPortsList = ['Любой', ...ports]

const Filter: FC = () => {
	const [activeDate, setActiveDate] = useState<String | null>(null)
	const [activeCalendar, setACtiveCalendar] = useState(false)

	const handleCalendar = (date: Date) => {
		console.log(date)
	}

	const handleClick = () => {
		setACtiveCalendar(prev => !prev)
	}

	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<List
					title='Порт назначения'
					openText='Выберите порт'
					list={newPortsList}
				/>
				<List
					title='Статус'
					openText='Выберите статус'
					list={newStatusList}
				/>
				<div className={classes.calendarWrapper}>
					<div
						className={classes.calendarButton}
						onClick={() => handleClick()}
					>
						<div>
							<div className={classes.title}>
								<span>Дата поступления в порт</span>
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
							<div className={classes.activeValue}>{activeDate ? activeDate : '__.__.____'}</div>
						</div>
						<svg
							width='20'
							height='20'
							viewBox='0 0 20 20'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								fillRule='evenodd'
								clipRule='evenodd'
								d='M3.53607 0.0736328C3.47467 0.114102 3.39127 0.1975 3.3508 0.258906C3.2908 0.349961 3.27713 0.44457 3.27693 0.770976L3.27666 1.17137L2.50518 1.17238C1.81061 1.17328 1.70814 1.18207 1.47752 1.2607C1.33662 1.30875 1.1215 1.40855 0.999434 1.48254C0.877364 1.55652 0.699239 1.69695 0.603614 1.79461C0.507989 1.89227 0.366465 2.07762 0.289082 2.20652C0.2117 2.33543 0.113692 2.55516 0.0712699 2.6948C-0.00435505 2.94375 -0.00568318 3.07184 0.00451213 9.23777L0.0149418 15.5268L0.148536 15.8003C0.23045 15.9679 0.366465 16.158 0.500098 16.2917C0.633731 16.4253 0.823848 16.5613 0.991504 16.6432L1.26494 16.7768L5.88514 16.7964L10.5053 16.8159L10.6338 17.1114C10.7044 17.274 10.8295 17.5176 10.9116 17.6528C10.9937 17.788 11.1608 18.0241 11.2829 18.1776C11.405 18.331 11.6344 18.5762 11.7927 18.7226C11.951 18.869 12.2242 19.0844 12.3999 19.2013C12.5756 19.3182 12.8492 19.4737 13.0078 19.5469C13.1664 19.6201 13.4104 19.7184 13.5501 19.7655C13.6897 19.8125 13.976 19.8844 14.1862 19.9252C14.4494 19.9764 14.7381 19.9995 15.1126 19.9995C15.4871 19.9995 15.7758 19.9764 16.039 19.9252C16.2492 19.8844 16.5354 19.8133 16.6751 19.7673C16.8147 19.7213 17.1059 19.5957 17.3222 19.4881C17.5384 19.3806 17.8641 19.1809 18.0459 19.0445C18.2278 18.908 18.5 18.6663 18.651 18.5074C18.802 18.3484 19.0092 18.1011 19.1115 17.9578C19.2138 17.8144 19.3811 17.533 19.4833 17.3323C19.5854 17.1316 19.7154 16.819 19.7721 16.6377C19.8287 16.4564 19.9022 16.1611 19.9353 15.9815C19.9707 15.7891 19.9954 15.4339 19.9954 15.1167C19.9954 14.7977 19.9708 14.4454 19.935 14.2518C19.9017 14.0722 19.8303 13.7846 19.7761 13.6128C19.722 13.4409 19.6096 13.1596 19.5265 12.9878C19.4434 12.8159 19.2832 12.5346 19.1706 12.3628C19.0554 12.187 18.7848 11.8709 18.552 11.6401C18.324 11.4141 18.0119 11.1511 17.8569 11.0542L17.5755 10.8784L17.5735 6.89402L17.5715 2.90965L17.4842 2.65348C17.4362 2.51258 17.3355 2.29543 17.2606 2.1709C17.1856 2.04641 17.0216 1.8491 16.8962 1.7325C16.7706 1.61586 16.5685 1.47027 16.4469 1.40891C16.3253 1.34754 16.1304 1.26898 16.0137 1.23434C15.8505 1.1859 15.6273 1.17137 15.0469 1.17137H14.2923L14.292 0.770976C14.2918 0.44457 14.2781 0.349961 14.2181 0.258906C14.1777 0.1975 14.0943 0.114102 14.0329 0.0736328C13.9575 0.0239844 13.8513 0 13.7063 0C13.5614 0 13.4552 0.0239844 13.3798 0.0736328C13.3184 0.114102 13.235 0.1975 13.1946 0.258906C13.1346 0.349961 13.1209 0.44457 13.1207 0.770976L13.1204 1.17137H12.0657H11.011L11.0108 0.770976C11.0106 0.44457 10.9969 0.349961 10.9369 0.258906C10.8964 0.1975 10.813 0.114102 10.7516 0.0736328C10.6763 0.0239844 10.57 0 10.4251 0C10.2802 0 10.1739 0.0239844 10.0986 0.0736328C10.0372 0.114102 9.95377 0.1975 9.9133 0.258906C9.8533 0.349961 9.83963 0.44457 9.83943 0.770976L9.83916 1.17137H8.78447H7.72978L7.72951 0.770976C7.72932 0.44457 7.71564 0.349961 7.65564 0.258906C7.61518 0.1975 7.53178 0.114102 7.47037 0.0736328C7.39502 0.0239844 7.28877 0 7.14385 0C6.99893 0 6.89268 0.0239844 6.81732 0.0736328C6.75592 0.114102 6.67252 0.1975 6.63205 0.258906C6.57205 0.349961 6.55838 0.44457 6.55818 0.770976L6.55791 1.17137H5.50322H4.44853L4.44826 0.770976C4.44807 0.44457 4.43439 0.349961 4.37439 0.258906C4.33393 0.1975 4.25053 0.114102 4.18912 0.0736328C4.11377 0.0239844 4.00752 0 3.8626 0C3.71768 0 3.61143 0.0239844 3.53607 0.0736328ZM3.27693 2.74363C3.27713 3.07004 3.2908 3.16465 3.3508 3.2557C3.39127 3.31711 3.47467 3.40051 3.53607 3.44098C3.61143 3.49062 3.71768 3.51461 3.8626 3.51461C4.00752 3.51461 4.11377 3.49062 4.18912 3.44098C4.25053 3.40051 4.33393 3.31711 4.37439 3.2557C4.43439 3.16465 4.44807 3.07004 4.44826 2.74363L4.44853 2.34324H5.50322H6.55791L6.55818 2.74363C6.55838 3.07004 6.57205 3.16465 6.63205 3.2557C6.67252 3.31711 6.75592 3.40051 6.81732 3.44098C6.89268 3.49062 6.99893 3.51461 7.14385 3.51461C7.28877 3.51461 7.39502 3.49062 7.47037 3.44098C7.53178 3.40051 7.61518 3.31711 7.65564 3.2557C7.71564 3.16465 7.72932 3.07004 7.72951 2.74363L7.72978 2.34324H8.78447H9.83916L9.83943 2.74363C9.83963 3.07004 9.8533 3.16465 9.9133 3.2557C9.95377 3.31711 10.0372 3.40051 10.0986 3.44098C10.1739 3.49062 10.2802 3.51461 10.4251 3.51461C10.57 3.51461 10.6763 3.49062 10.7516 3.44098C10.813 3.40051 10.8964 3.31711 10.9369 3.2557C10.9969 3.16465 11.0106 3.07004 11.0108 2.74363L11.011 2.34324H12.0657H13.1204L13.1207 2.74363C13.1209 3.07004 13.1346 3.16465 13.1946 3.2557C13.235 3.31711 13.3184 3.40051 13.3798 3.44098C13.4552 3.49062 13.5614 3.51461 13.7063 3.51461C13.8513 3.51461 13.9575 3.49062 14.0329 3.44098C14.0943 3.40051 14.1777 3.31711 14.2181 3.2557C14.2783 3.16445 14.2918 3.06992 14.292 2.73871L14.2923 2.3334L14.9661 2.35098C15.5709 2.36672 15.6579 2.3777 15.8157 2.45797C15.9124 2.50715 16.0328 2.58492 16.0833 2.63086C16.1337 2.67676 16.221 2.80223 16.2773 2.90965C16.3783 3.10262 16.3797 3.11676 16.3945 4.09129L16.4095 5.07762H8.78447H1.15947L1.17436 4.09129C1.18854 3.14953 1.19334 3.09703 1.28033 2.92918C1.33041 2.8325 1.40897 2.71215 1.4549 2.66172C1.5008 2.61129 1.60869 2.53332 1.69463 2.48844C1.78057 2.44359 1.92119 2.39477 2.00713 2.37996C2.09307 2.36516 2.41385 2.35082 2.72002 2.34812L3.27666 2.34324L3.27693 2.74363ZM16.4017 8.31351V10.3775L16.0403 10.3069C15.7983 10.2595 15.4957 10.2358 15.1237 10.235C14.734 10.2342 14.4545 10.256 14.1862 10.3081C13.976 10.3489 13.6897 10.4209 13.5501 10.4679C13.4104 10.5149 13.1664 10.6133 13.0078 10.6865C12.8492 10.7596 12.5732 10.9168 12.3946 11.0356C12.216 11.1545 11.9276 11.3855 11.7538 11.549C11.58 11.7125 11.3238 11.9977 11.1845 12.1827C11.0452 12.3677 10.8443 12.6948 10.7381 12.9096C10.6319 13.1245 10.4997 13.4407 10.4445 13.6124C10.3893 13.7841 10.3184 14.072 10.2869 14.2523C10.2555 14.4325 10.2298 14.8154 10.2298 15.1031V15.6262L5.92314 15.6155C1.69549 15.6052 1.61412 15.6035 1.48686 15.5268C1.41553 15.4839 1.31885 15.3872 1.27201 15.312L1.18682 15.1753L1.17623 10.7124L1.16568 6.24949H8.78365H16.4017V8.31351ZM6.28525 7.76324C6.21049 7.80078 6.10939 7.89125 6.06064 7.96426C5.99682 8.0598 5.97197 8.15394 5.97197 8.30027C5.97197 8.4466 5.99682 8.54074 6.06064 8.63629C6.10939 8.7093 6.21049 8.79976 6.28525 8.8373C6.39771 8.89383 6.52904 8.90562 7.04619 8.90562C7.56334 8.90562 7.69467 8.89383 7.80713 8.8373C7.88189 8.79976 7.98299 8.7093 8.03174 8.63629C8.09557 8.54074 8.12041 8.4466 8.12041 8.30027C8.12041 8.15394 8.09557 8.0598 8.03174 7.96426C7.98299 7.89125 7.88189 7.80078 7.80713 7.76324C7.69467 7.70672 7.56334 7.69492 7.04619 7.69492C6.52904 7.69492 6.39771 7.70672 6.28525 7.76324ZM9.76182 7.76324C9.68705 7.80078 9.58596 7.89125 9.53721 7.96426C9.47338 8.0598 9.44853 8.15394 9.44853 8.30027C9.44853 8.4466 9.47338 8.54074 9.53721 8.63629C9.58596 8.7093 9.68705 8.79976 9.76182 8.8373C9.87428 8.89383 10.0056 8.90562 10.5228 8.90562C11.0399 8.90562 11.1712 8.89383 11.2837 8.8373C11.3585 8.79976 11.4596 8.7093 11.5083 8.63629C11.5721 8.54074 11.597 8.4466 11.597 8.30027C11.597 8.15394 11.5721 8.0598 11.5083 7.96426C11.4596 7.89125 11.3585 7.80078 11.2837 7.76324C11.1712 7.70672 11.0399 7.69492 10.5228 7.69492C10.0056 7.69492 9.87428 7.70672 9.76182 7.76324ZM13.2384 7.76324C13.1636 7.80078 13.0625 7.89125 13.0138 7.96426C12.9499 8.0598 12.9251 8.15394 12.9251 8.30027C12.9251 8.4466 12.9499 8.54074 13.0138 8.63629C13.0625 8.7093 13.1636 8.79976 13.2384 8.8373C13.3508 8.89383 13.4822 8.90562 13.9993 8.90562C14.5165 8.90562 14.6478 8.89383 14.7603 8.8373C14.835 8.79976 14.9361 8.7093 14.9849 8.63629C15.0487 8.54074 15.0735 8.4466 15.0735 8.30027C15.0735 8.15394 15.0487 8.0598 14.9849 7.96426C14.9361 7.89125 14.835 7.80078 14.7603 7.76324C14.6478 7.70672 14.5165 7.69492 13.9993 7.69492C13.4822 7.69492 13.3508 7.70672 13.2384 7.76324ZM2.75482 10.4252C2.69342 10.4657 2.61002 10.5491 2.56955 10.6105C2.5199 10.6858 2.49592 10.7921 2.49592 10.937C2.49592 11.0819 2.5199 11.1882 2.56955 11.2635C2.61002 11.3249 2.69342 11.4083 2.75482 11.4488C2.85381 11.5141 2.94639 11.5224 3.56963 11.5224C4.19287 11.5224 4.28545 11.5141 4.38443 11.4488C4.44584 11.4083 4.52924 11.3249 4.56971 11.2635C4.61936 11.1882 4.64334 11.0819 4.64334 10.937C4.64334 10.7921 4.61936 10.6858 4.56971 10.6105C4.52924 10.5491 4.44584 10.4657 4.38443 10.4252C4.28545 10.3599 4.19287 10.3516 3.56963 10.3516C2.94639 10.3516 2.85381 10.3599 2.75482 10.4252ZM6.23139 10.4252C6.16998 10.4657 6.08658 10.5491 6.04611 10.6105C5.99646 10.6858 5.97248 10.7921 5.97248 10.937C5.97248 11.0819 5.99646 11.1882 6.04611 11.2635C6.08658 11.3249 6.16998 11.4083 6.23139 11.4488C6.33037 11.5141 6.42295 11.5224 7.04619 11.5224C7.66943 11.5224 7.76201 11.5141 7.861 11.4488C7.9224 11.4083 8.0058 11.3249 8.04627 11.2635C8.09592 11.1882 8.1199 11.0819 8.1199 10.937C8.1199 10.7921 8.09592 10.6858 8.04627 10.6105C8.0058 10.5491 7.9224 10.4657 7.861 10.4252C7.76201 10.3599 7.66943 10.3516 7.04619 10.3516C6.42295 10.3516 6.33037 10.3599 6.23139 10.4252ZM9.70795 10.4252C9.64654 10.4657 9.56314 10.5491 9.52267 10.6105C9.47303 10.6858 9.44904 10.7921 9.44904 10.937C9.44904 11.0819 9.47303 11.1882 9.52267 11.2635C9.56314 11.3249 9.64654 11.4083 9.70795 11.4488C9.80693 11.5141 9.89951 11.5224 10.5228 11.5224C11.146 11.5224 11.2386 11.5141 11.3376 11.4488C11.399 11.4083 11.4824 11.3249 11.5228 11.2635C11.5725 11.1882 11.5965 11.0819 11.5965 10.937C11.5965 10.7921 11.5725 10.6858 11.5228 10.6105C11.4824 10.5491 11.399 10.4657 11.3376 10.4252C11.2386 10.3599 11.146 10.3516 10.5228 10.3516C9.89951 10.3516 9.80693 10.3599 9.70795 10.4252ZM15.9273 11.5262C16.1068 11.5677 16.3754 11.6527 16.5242 11.7152C16.673 11.7777 16.93 11.9132 17.0953 12.0162C17.2606 12.1193 17.5386 12.3462 17.713 12.5207C17.8957 12.7034 18.1158 12.977 18.2323 13.1663C18.3435 13.347 18.4855 13.6272 18.5478 13.7888C18.6102 13.9505 18.6911 14.2303 18.7276 14.4107C18.7789 14.6637 18.7894 14.8597 18.7737 15.2694C18.7593 15.6435 18.7286 15.8868 18.6696 16.0932C18.6236 16.2544 18.508 16.5444 18.4128 16.7378C18.3176 16.9311 18.1249 17.2343 17.9847 17.4116C17.8422 17.5916 17.5875 17.8463 17.4075 17.9887C17.2303 18.129 16.927 18.3217 16.7337 18.417C16.5403 18.5123 16.2473 18.6268 16.0825 18.6714C15.9177 18.7161 15.632 18.7657 15.4478 18.7819C15.2634 18.7981 14.9618 18.7981 14.7774 18.7819C14.5931 18.7657 14.3075 18.7158 14.1427 18.6709C13.9779 18.626 13.6992 18.5199 13.5234 18.4351C13.3476 18.3503 13.0629 18.1749 12.8908 18.0452C12.7187 17.9156 12.4819 17.7001 12.3645 17.5664C12.2471 17.4326 12.07 17.1918 11.971 17.0313C11.872 16.8707 11.7401 16.6071 11.6779 16.4456C11.6157 16.284 11.5369 16.0163 11.5028 15.8507C11.4679 15.6817 11.4407 15.3598 11.4407 15.1167C11.4407 14.8736 11.4679 14.5517 11.5028 14.3826C11.5369 14.217 11.6156 13.9495 11.6778 13.7882C11.7399 13.6269 11.8808 13.3485 11.991 13.1695C12.1011 12.9905 12.3271 12.7065 12.4933 12.5384C12.6594 12.3702 12.9225 12.1504 13.0779 12.0498C13.2334 11.9493 13.4728 11.8161 13.6101 11.7538C13.7473 11.6916 13.9965 11.6029 14.1638 11.5567C14.3312 11.5105 14.6087 11.4621 14.7806 11.449C14.9524 11.436 15.2073 11.4311 15.347 11.4381C15.4866 11.4452 15.7478 11.4848 15.9273 11.5262ZM14.7861 12.6518C14.7247 12.6922 14.6413 12.7756 14.6008 12.837C14.5327 12.9403 14.5272 13.0386 14.5272 14.1401C14.5272 15.2417 14.5327 15.34 14.6008 15.4432C14.6413 15.5046 14.7247 15.588 14.7861 15.6285C14.8893 15.6966 14.9876 15.7021 16.0892 15.7021C17.1907 15.7021 17.289 15.6966 17.3922 15.6285C17.4537 15.588 17.537 15.5046 17.5775 15.4432C17.6272 15.3679 17.6512 15.2616 17.6512 15.1167C17.6512 14.9718 17.6272 14.8655 17.5775 14.7902C17.537 14.7287 17.4537 14.6454 17.3922 14.6049C17.2921 14.5389 17.1987 14.5312 16.4895 14.531L15.6985 14.5307L15.6983 13.7397C15.6981 13.0306 15.6904 12.9371 15.6244 12.837C15.5839 12.7756 15.5005 12.6922 15.4391 12.6518C15.3638 12.6021 15.2575 12.5781 15.1126 12.5781C14.9677 12.5781 14.8614 12.6021 14.7861 12.6518ZM2.80869 13.0367C2.73393 13.0742 2.63283 13.1647 2.58408 13.2377C2.52025 13.3332 2.49541 13.4274 2.49541 13.5737C2.49541 13.72 2.52025 13.8142 2.58408 13.9097C2.63283 13.9827 2.73393 14.0732 2.80869 14.1107C2.92115 14.1673 3.05248 14.1791 3.56963 14.1791C4.08678 14.1791 4.21811 14.1673 4.33057 14.1107C4.40533 14.0732 4.50643 13.9827 4.55518 13.9097C4.619 13.8142 4.64385 13.72 4.64385 13.5737C4.64385 13.4274 4.619 13.3332 4.55518 13.2377C4.50643 13.1647 4.40533 13.0742 4.33057 13.0367C4.21811 12.9802 4.08678 12.9684 3.56963 12.9684C3.05248 12.9684 2.92115 12.9802 2.80869 13.0367ZM6.28525 13.0367C6.21049 13.0742 6.10939 13.1647 6.06064 13.2377C5.99682 13.3332 5.97197 13.4274 5.97197 13.5737C5.97197 13.72 5.99682 13.8142 6.06064 13.9097C6.10939 13.9827 6.21049 14.0732 6.28525 14.1107C6.39771 14.1673 6.52904 14.1791 7.04619 14.1791C7.56334 14.1791 7.69467 14.1673 7.80713 14.1107C7.88189 14.0732 7.98299 13.9827 8.03174 13.9097C8.09557 13.8142 8.12041 13.72 8.12041 13.5737C8.12041 13.4274 8.09557 13.3332 8.03174 13.2377C7.98299 13.1647 7.88189 13.0742 7.80713 13.0367C7.69467 12.9802 7.56334 12.9684 7.04619 12.9684C6.52904 12.9684 6.39771 12.9802 6.28525 13.0367Z'
								fill='#3A3C40'
							/>
						</svg>
						{activeCalendar && (
							<Calendar
								handleDate={handleCalendar}
								handleForms={handleClick}
								// savedDate={activeDate}
							/>
						)}
					</div>
				</div>
				<button className={classes.whiteButton}>Сбросить</button>
				<button className={classes.darkButton}>Применить</button>
			</div>
		</div>
	)
}

export default Filter
