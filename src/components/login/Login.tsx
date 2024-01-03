"use client"
import React from 'react';
import styles from './Login.module.css'
import {signIn, signOut, useSession} from 'next-auth/react'

const Login = () => {
    const {data: session} = useSession();

    return (
        <div className={styles.container}>
            <h3> Account </h3>

            <button
                onClick={() => signIn()}
            >
                Sign in
            </button>

            <button
                onClick={() => signOut()}
            >
                Sign out
            </button>

            <p>
                {session?.user?.name}
            </p>

        </div>
    );
};

export default Login;