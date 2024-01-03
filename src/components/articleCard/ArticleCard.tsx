import React from 'react';
import styles from './BlogCard.module.css'
import {useRouter} from "next/navigation";

type ArticleCardProps = {
    id: number,
    title: string,
    author: string,
    dateCreated: string,
    description: string,
}

const ArticleCard = ({
                         id,
                         title,
                         author,
                         dateCreated,
                         description
                     }: ArticleCardProps) => {

    const router = useRouter();
    const openArticleView = () => {
        router.push(`/articles/${id}`);
    }

    const handleArticleCardClick = () => {
        openArticleView();
    }

    return (
        <div
            key={id}
            className={styles.container}
            onClick={handleArticleCardClick}
        >
            <h4 className={styles.title}> {title} </h4>
            <h5 className={styles.author}> {author} </h5>
            <p className={styles.description}>
                {description}
            </p>
            <time className={styles.dateCreated}>{dateCreated}</time>
        </div>
    );
};

export default ArticleCard;