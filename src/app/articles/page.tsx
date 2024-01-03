"use client"
import React, {useEffect, useState} from 'react';
import styles from './Articles.module.css'
import ArticleCard from "@/components/articleCard/ArticleCard";
import {getArticles} from "@/Utils/api";


export type CommentType = {
    author: string,
    comment: string,
}

export type Article = {
    id: number,
    title: string,
    author: string,
    dateCreated: string,
    tags: string[],
    content: string,
    comments: CommentType[],
    description: string,
}

const Page = () => {
    const [articles, setArticles] = useState<Article[]>([]);

    const fetchData = async () => {
        const articles = await getArticles();
        setArticles(articles);
    }

    useEffect(() => {
        fetchData()
            .then(() => {
                console.log("Successfully fetched data!")
            })
            .catch((error) => {
                console.log("Failed to fetch data", error)
            });
    }, []);

    return (
        <div className='pageContainer'>
            <h2 className='headerText'> Articles </h2>

            <div className='seperator'>
                <p className='seperator-text'> Read about your favorite topics! </p>
            </div>

            <section className={styles.blogsContainer}>
                {articles.map(({id, title, author, dateCreated, description}) => (
                    <ArticleCard
                        key={id}
                        id={id}
                        title={title}
                        author={author}
                        dateCreated={dateCreated}
                        description={description}
                    />
                ))}
            </section>
        </div>
    );
};

export default Page