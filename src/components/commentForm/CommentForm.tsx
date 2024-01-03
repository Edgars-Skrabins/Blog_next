import React, {useState} from 'react';
import styles from './CommentForm.module.css'

type CommentFormProps = {
    onSubmitClick: (name: string, comment: string) => void,
}

const CommentForm = ({onSubmitClick}: CommentFormProps) => {

    const [nameInput, setNameInput] = useState('');
    const [commentInput, setCommentInput] = useState('');

    return (
        <form action="" className={styles.container}>

            <input
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setNameInput(e.currentTarget.value)}
                className={styles.nameInput}
            />

            <textarea
                name=""
                id=""
                cols={30}
                rows={10}
                placeholder="Enter your comment"
                onChange={(e) => setCommentInput(e.currentTarget.value)}
                className={styles.commentInput}
            ></textarea>

            <div className={styles.buttonWrapper}>
                <button
                    onClick={(e) => {
                        onSubmitClick(nameInput, commentInput)
                        e.preventDefault();
                    }}
                    className={styles.submitBtn}
                > Submit
                </button>
            </div>
        </form>
    );
};

export default CommentForm;