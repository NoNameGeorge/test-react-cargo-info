import { FC } from 'react'
import { Link } from 'react-router-dom'

import classes from './Footer.module.scss'

const Footer: FC = () => {
	return (
		<div className={classes.wrapper}>
			<div className={classes.copy}>© 2022 ООО “Компания”, Все права защищены.</div>
			<div className={classes.linkWrapper}>
				<Link to='/'>Вопрос-ответ</Link>
				<Link to='/'>Политика конфиденциальности</Link>
				<Link to='/'>История обновлений</Link>
			</div>
		</div>
	)
}

export default Footer
