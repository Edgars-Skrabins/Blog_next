import styles from './Home.module.css'
import Image from 'next/image'

export default function Home() {

    return (
        <div className='pageContainer'>
            <h2
                className='headerText'
            > Home </h2>

            <section className='sectionContainer'>

                <div className='seperator'>
                    <p className='seperator-text'> What can you do? </p>
                </div>

                <h3 className='sectionHeader'> What is Caerostri? </h3>

                <div className='row'>
                    <div className='col'>
                        <p className='sectionParagraph'>
                            Careostris Darwini, commonly known as Darwin's bark spider,
                            is a fascinating arachnid renowned for its remarkable silk-spinning abilities.
                        </p>

                        <p className='sectionParagraph'>
                            Careostri is named after this spider, as we do provide you with impressively written
                            blogs, all centered around Web Development.
                            Enjoy your stay!
                        </p>

                    </div>

                    <div className='col'>
                        <Image
                            className={styles.logo}
                            src="/logo.png"
                            alt="Logo"
                            width={1024}
                            height={673}
                        />
                    </div>

                </div>
            </section>

            <section>

                <div className='seperator'>
                    <p className='seperator-text'> Explore! </p>
                </div>

                <h3 className='sectionHeader'> Why us? </h3>

                <div className={styles.bubbleRow}>
                    <div className={styles.bubble}>
                        <p> CSS Tutorials </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Good Coding Practises </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Modern Blogs </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Relevant information </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> No Judgements! </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Community of Professionals </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> React Tutorials </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Helpful Mentors </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Responsive Design Blogs </p>
                    </div>

                    <div className={styles.bubble}>
                        <p> Community of Developers </p>
                    </div>
                </div>
            </section>
        </div>
    )
}
