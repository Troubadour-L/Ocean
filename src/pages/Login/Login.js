import React, { useState } from 'react'
import styles from './Login.module.scss'
import loginPicture from '../../assets/pictures/login.svg'
import OceanInput from '../../components/OceanInput/OceanInput'

function Login() {

    const [loginName, setLoginName] = useState('')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nickName, setNickName] = useState('')

    return (
        <div className={styles.mainLoginModal}>
            <img src={loginPicture} style={{ width: '38%', height: '100%', marginLeft: '10%' }}></img>
            <div className={styles.content}>
                <p>Login</p>
                <div className={styles.inputBox}>
                    <input></input>
                </div>
                <div className={styles.inputBox}>
                    <input></input>
                </div>
                <div className={styles.inputBox}>
                    <input></input>
                </div>
            </div>

            {/* <div>
                <span>密码</span>
                <OceanInput />
            </div>
            <div>
                <span>确认密码</span>
                <OceanInput />
            </div> */}
        </div>
    )
}

export default Login