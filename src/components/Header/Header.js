import React, { forwardRef } from 'react'
import { SettingOutlined, PoweroffOutlined } from '@ant-design/icons';
import style from './Header.module.scss'
import charactor from '../../assets/pictures/charactor.jpg'

const Header = forwardRef((params, headerRef) => {
    return (
        <div>
            <header ref={headerRef} className={style.header}>
                <div className={style.information}>
                    <div className={style.charactor}>
                        <img title='个人信息' src={charactor} alt="" />
                    </div>
                    <SettingOutlined title='设置' style={{ cursor: 'pointer' }} />
                    <PoweroffOutlined title='退出登录' style={{ cursor: 'pointer' }} />
                </div>
            </header>
        </div>
    )
})

export default Header