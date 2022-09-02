import { FC, Fragment } from 'react'
import { Link } from 'react-router-dom'

import { menu } from '../../config/menu'

import classes from './SideMenu.module.scss'

import borderImage from '@/assets/images/menuBorder.png'

const SideMenu: FC = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.inner}>
				<Link
					to='/'
					className={classes.logo}
				>
					LOGO
				</Link>
				<button className={classes.button}>
					<svg
						viewBox='0 0 22 22'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M0 11C0 9.89543 0.895431 9 2 9H11H20C21.1046 9 22 9.89543 22 11C22 12.1046 21.1046 13 20 13H2C0.89543 13 0 12.1046 0 11Z'
							fill='white'
						/>
						<path
							d='M9 2C9 0.89543 9.89543 0 11 0C12.1046 0 13 0.895431 13 2V20C13 21.1046 12.1046 22 11 22C9.89543 22 9 21.1046 9 20V2Z'
							fill='white'
						/>
					</svg>
				</button>
				{menu.length &&
					menu.map((subMenu, subMenuIndex) => {
						return (
							<Fragment key={`submenu-item-${subMenuIndex}`}>
								{subMenu.map((menuItem, index) => {
									return (
										<Link
											to='/'
											key={`menu-item-${subMenuIndex}-${index}`}
											className={classes.menuItem}
										>
											<img
												alt=''
												src={menuItem.image}
												className={classes.image}
											/>
											<span>{menuItem.name}</span>
										</Link>
									)
								})}
								{subMenuIndex !== menu.length - 1 && (
									<img
										alt=''
										src={borderImage}
										className={classes.borderImage}
									/>
								)}
							</Fragment>
						)
					})}
			</div>
		</div>
	)
}

export default SideMenu
