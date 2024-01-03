import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
const PORT = 3001;

app.use(cors());

const dbName = "articles_db";

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to server', err);
        return;
    }

    console.log('Connected to server');

    db.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (error) => {
        if (error) {
            console.error('Error creating database', error);
        } else {
            console.log(`Database ${dbName} created or already exists`);
        }

        db.query(`USE ${dbName}`, (useDbError) => {
            if (useDbError) {
                console.error('Error switching to articles_db', useDbError);
            } else {
                console.log(`Switched to database "${dbName}"`);

                const createTableQuery = `
                        CREATE TABLE IF NOT EXISTS articles (
                        id BIGINT AUTO_INCREMENT PRIMARY KEY,
                        title VARCHAR(255) NOT NULL,
                        author VARCHAR(255) NOT NULL,
                        dateCreated TEXT,
                        tags JSON,
                        content TEXT,
                        comments JSON, 
                        description TEXT
                     )
                    `;

                db.query(createTableQuery, (tableError) => {
                    if (tableError) {
                        console.error('Error creating articles table', tableError);
                    } else {
                        console.log('articles table created or already exists');
                    }
                });
            }
        });
    });
});

app.use(express.json());

app.get('/articles', (req, res) => {
    db.query('SELECT * FROM articles', (error, results) => {
        if (error) throw error;
        res.json(results);
    });
});

app.get('/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.query('SELECT * FROM articles WHERE id = ?', id, (error, results) => {
        if (error) throw error;

        if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({message: 'Article not found'});
        }
    });
});

app.post('/articles', (req, res) => {
    const newArticle = req.body;
    newArticle.dateCreated = new Date().toLocaleDateString();

    newArticle.comments = Array.isArray(newArticle.comments) ? newArticle.comments : [];
    newArticle.tags = Array.isArray(newArticle.tags) ? newArticle.tags : [];

    db.query('INSERT INTO articles SET ?', newArticle, (error, result) => {
        if (error) throw error;
        newArticle.id = result.insertId;
        res.json(newArticle);
    });
});

app.put('/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const updatedArticle = req.body;

    updatedArticle.comments = Array.isArray(updatedArticle.comments) ? updatedArticle.comments : [];
    updatedArticle.tags = Array.isArray(updatedArticle.tags) ? updatedArticle.tags : [];

    db.query('UPDATE articles SET ? WHERE id = ?', [{
        ...updatedArticle,
        tags: JSON.stringify(updatedArticle.tags),
        comments: JSON.stringify(updatedArticle.comments)
    }, id], (error) => {
        if (error) throw error;
        res.json(updatedArticle);
    });
});

app.delete('/articles/:id', (req, res) => {
    const id = parseInt(req.params.id);

    db.query('DELETE FROM articles WHERE id = ?', id, (error) => {
        if (error) throw error;
        res.json({message: 'Article deleted successfully'});
    });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
