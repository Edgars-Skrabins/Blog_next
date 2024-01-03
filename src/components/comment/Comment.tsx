import styles from './Comment.module.css'

type CommentProps = {
    author: string,
    comment: string,
}

const Comment = ({author, comment}: CommentProps) => {
    return (
        <div
            className={styles.container}
        >
            <div className={styles.authorContainer}>
                <p className={styles.author}> {author} </p>
            </div>
            <div className={styles.commentContainer}>
                <p className={styles.comment}>
                    {comment}
                </p>
            </div>
        </div>
    );
};

export default Comment;