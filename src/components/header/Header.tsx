import React from 'react';
import styles from './Header.module.css';
import Link from 'next/link';
import Image from "next/image";
import Login from "@/components/login/Login";

const Header: React.FC = () => {
    return (
        <header className={styles.container}>
            <Image
                className={styles.logo}
                src="/logo.png"
                alt="Logo"
                width={1024}
                height={673}
            />
            <h1 className={styles.websiteName}> Caerostri </h1>

            <nav className={styles.nav}>
                <Link
                    className={styles.link}
                    href='/'
                >
                    Home
                </Link>

                <Link
                    className={styles.link}
                    href='/articles'
                >
                    Articles
                </Link>

                <Link
                    className={styles.link}
                    href='/newsletter'
                >
                    Newsletter
                </Link>

                <Link
                    className={styles.link}
                    href='/aboutus'
                >
                    About Us
                </Link>
            </nav>

            <div className={styles.buttonWrapper}>
                <button className={styles.button}>
                    A
                </button>
                <Login/>
            </div>

        </header>
    );
};

export default Header;