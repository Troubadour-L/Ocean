import React, { useState, useContext } from 'react'
import styles from './Login.module.scss'
import loginPicture from '../../assets/pictures/login.svg'
import OceanInput from '../../components/OceanInput/OceanInput'
import { NumContext } from '../../App'

function Login() {

    const [loginName, setLoginName] = useState('')

    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const [nickName, setNickName] = useState('')

    const { loginStatus, setLoginStates } = useContext(NumContext)

    const fatherStatus = loginStatus

    const changeStatus = () => {
        fatherStatus.status = false
        setLoginStates({ ...fatherStatus })
        const a = document.getElementsByClassName('star0')
        const b = document.getElementsByClassName('star1')
        const c = document.getElementsByClassName('star2')
        const d = document.getElementsByClassName('star3')
        const list = [...a, ...b, ...c, ...d]
        list.forEach(item => {
            item.remove()
        })
    }

    return (
        <div className={styles.mainLoginModal}>
            <img src={loginPicture} style={{ width: '38%', height: '100%', marginLeft: '10%' }}></img>
            <div className={styles.content}>
                <p>Login</p>
                <div className={styles.inputBox}>
                    <input
                        placeholder='用&nbsp;&nbsp;户&nbsp;&nbsp;名'
                    />
                </div>
                <div className={styles.inputBox}>
                    <input
                        placeholder='密&nbsp;&nbsp;码' />
                </div>
                <div className={styles.inputBox} style={{ width: '30%', alignSelf: 'flex-start', marginLeft: '20%' }}>
                    <div style={{ display: 'flex', width: '100%' }}>
                        <button
                            className={styles.loginBtn}
                            onClick={() => changeStatus()}
                        >登&nbsp;&nbsp;&nbsp;录

                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login