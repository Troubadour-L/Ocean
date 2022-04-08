import React, { useEffect, useRef } from "react";
import Header from '../../components/Header/Header'
import debounce from '../../utils/common'
import styles from './Home.module.scss'

const Home = () => {

    const headerRef = useRef()
    const contentRef = useRef()

    useEffect(() => {
        window.onload = () => {
            const headerHeight = headerRef.current.clientHeight
            contentRef.current.style.paddingTop = `${headerHeight + 10}px`
        }
        debounce(window.onmousemove = (e) => {
            const mouseOffsetY = e.clientY
            // debugger
            console.log(mouseOffsetY);
            if (mouseOffsetY < 50) {
                headerRef.current.style.display = 'block'
            } else {
                headerRef.current.style.display = 'none'
            }
            const headerHeight = headerRef.current.clientHeight
            contentRef.current.style.paddingTop = `${headerHeight + 10}px`
        })
        getHeader()
    }, [])

    const getHeader = () => {
        window.onresize = () => {
            const headerHeight = headerRef.current.clientHeight
            contentRef.current.style.paddingTop = `${headerHeight + 10}px`
        }
    }

    return (
        <>
            <Header ref={headerRef} />
            <div className={styles.content} ref={contentRef}>
            </div>
        </>
    )
}

export default Home