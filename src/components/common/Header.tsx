import React, { FC } from 'react'

import classes from './Header.module.scss'

const Header: FC = () => {
    return (
        <div className={classes.wrapper}>
            <div className={classes.inputWrapper}>
                <svg
                    width='20'
                    height='20'
                    viewBox='0 0 20 20'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <path
                        d='M19.827 18.98L14.9656 14.1197C16.2697 12.6208 17.0592 10.6652 17.0592 8.52772C17.0592 3.82262 13.2313 0 8.52961 0C3.82346 0 0 3.82705 0 8.52772C0 13.2284 3.8279 17.0554 8.52961 17.0554C10.6676 17.0554 12.6236 16.2661 14.1229 14.9623L18.9843 19.8226C19.0996 19.9379 19.2548 20 19.4056 20C19.5564 20 19.7117 19.9423 19.827 19.8226C20.0577 19.592 20.0577 19.2106 19.827 18.98ZM1.19317 8.52772C1.19317 4.48337 4.48436 1.19734 8.52517 1.19734C12.5704 1.19734 15.8572 4.4878 15.8572 8.52772C15.8572 12.5676 12.5704 15.8625 8.52517 15.8625C4.48436 15.8625 1.19317 12.5721 1.19317 8.52772Z'
                        fill='#82868C'
                    />
                </svg>
                <input
                    type='text'
                    placeholder='Найти коносамент, груз, заказ и др.'
                />
            </div>

            <div className={classes.buttonWrapper}>
                <span>Менеджер</span>
                <button className={classes.circleButton}>
                    ИИ
                </button>
                <button className={classes.circleButton}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M18.3714 5.57143V5C18.3714 3.89543 17.476 3 16.3714 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H16.3714C17.476 21 18.3714 20.1046 18.3714 19V18.4286" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
                        <path d="M19.4 15.3425L21.7786 12.9639C22.1691 12.5734 22.1691 11.9402 21.7786 11.5497L19.4 9.1711" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
                        <path d="M12.2 12.2568H21.4571" stroke="white" strokeWidth="1.75" strokeLinecap="round" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Header
