import {Article, CommentType} from "@/app/articles/page";

export const articleApiUrl = 'http://localhost:3001/articles';

export const getArticles = async () => {
    try {
        const response = await fetch(articleApiUrl);
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const getArticleById = async (id: number) => {
    const apiSearchUrl = `${articleApiUrl}/${id}`

    try {
        const response = await fetch(apiSearchUrl);
        console.log('Successfully got article by id');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}

export const putCommentById = async (id: number, name: string, comment: string) => {
    const apiPostUrl = `${articleApiUrl}/${id}`;

    let articleToUpdate: Article = await getArticleById(id);
    const commentToAdd: CommentType = {
        author: name,
        comment: comment,
    }
    articleToUpdate.comments.push(commentToAdd)

    try {
        const response = await fetch(apiPostUrl, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(articleToUpdate),
        });

        console.log('Successfully posted article by id');
        return await response.json();
    } catch (error) {
        console.error(error);
    }
}