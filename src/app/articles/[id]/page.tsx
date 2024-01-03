"use client"
import React, {useEffect, useState} from 'react';
import {getArticleById, putCommentById} from "@/Utils/api";
import {Article} from "@/app/articles/page";
import styles from './[id].module.css'
import Comment from '../../../components/comment/Comment'
import CommentForm from "@/components/commentForm/CommentForm";

type PageProps = {
    params: {
        id: number;
    };
}

const Page = ({params}: PageProps) => {

    const [article, setArticle] = useState<Article>();

    const {id} = params;

    const fetchData = async () => {
        const data = await getArticleById(id);
        setArticle(data);
    }

    useEffect(() => {
        fetchData()
            .then(() => {
                console.log("Successfully fetched data!");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const handleCommentCreation = async (name: string, comment: string) => {
        await putCommentById(id, name, comment);
        fetchData()
            .then(() => {
                console.log("Successfully fetched data!");
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }

    console.log(article?.comments);

    return (
        <>
            <div className={styles.container}>
                <h2 className={styles.title}> {article?.title} </h2>
                <h3 className={styles.author}> {article?.author}</h3>
                <p className={styles.content}> {article?.content}</p>
                <time className={styles.createdAt}> {article?.dateCreated} </time>

                <div className={styles.commentForm}>
                    <CommentForm
                        onSubmitClick={handleCommentCreation}
                    />
                </div>

                <hr className={styles.commentHr}/>

                <div className={styles.comments}>
                    {article?.comments.map(({author, comment}) => (
                        <Comment
                            key={Math.random()}
                            author={author}
                            comment={comment}
                        />
                    ))}
                </div>

            </div>
        </>
    );
};

export default Page