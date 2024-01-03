import mysql from 'mysql2';

const dbName = 'articles_db';

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'example',
    database: dbName,
});

db.connect((err) => {
    if (err) {
        console.error('Error connecting to server', err);
        return;
    }

    console.log('Connected to server');

    const articlesData = [
        {
            title: 'Sample Article 1',
            author: 'John Doe',
            dateCreated: new Date().toLocaleDateString(),
            tags: JSON.stringify(['technology', 'programming']),
            content: 'This is the content of the article.',
            comments: JSON.stringify([
                {author: 'Alice', comment: 'Great article!'},
                {author: 'Bob', comment: 'Well written!'},
            ]),
            description: 'A sample article about technology.',
        },
        {
            title: 'Sample Article 2',
            author: 'Jane Doe',
            dateCreated: new Date().toLocaleDateString(),
            tags: JSON.stringify(['science', 'research']),
            content: 'Another interesting article.',
            comments: JSON.stringify([
                {author: 'Charlie', comment: 'Interesting insights!'},
                {author: 'Diana', comment: 'I learned a lot!'},
            ]),
            description: 'An article exploring scientific research.',
        },
        {
            title: 'Exploring the Future of AI',
            author: 'Alan Turing',
            dateCreated: new Date().toLocaleDateString(),
            tags: JSON.stringify(['artificial intelligence', 'technology']),
            content: 'As we delve deeper into the realms of artificial intelligence, the possibilities seem limitless. From machine learning to neural networks, this article unravels the latest advancements and their impact on various industries. Join us on this journey into the future!',
            comments: JSON.stringify([
                {author: 'Eve', comment: 'Fascinating read! AI is changing the game.'},
                {author: 'Frank', comment: 'Great insights into the AI landscape!'},
            ]),
            description: 'An in-depth exploration of the evolving field of artificial intelligence.',
        },
        {
            title: 'The Marvels of Space Exploration',
            author: 'Carl Sagan',
            dateCreated: new Date().toLocaleDateString(),
            tags: JSON.stringify(['space', 'exploration', 'science']),
            content: 'Embark on a cosmic adventure as we uncover the marvels of space exploration. From the mysteries of distant galaxies to the latest space missions, this article is your gateway to the wonders of the universe. Join us in this celestial journey!',
            comments: JSON.stringify([
                {author: 'Grace', comment: 'Mind-blowing! Space is truly awe-inspiring.'},
                {author: 'Harry', comment: 'I never knew there was so much to discover out there!'},
            ]),
            description: 'A captivating exploration of the vastness and wonders of outer space.',
        },
        {
            title: 'Edgar and the forbidden JavaScript',
            author: 'Edgars Skrabins',
            dateCreated: new Date().toLocaleDateString(),
            tags: JSON.stringify(['space', 'exploration', 'science']),
            content: 'I have been thinking about many things recently, mostly my main point of thought is JavaScript. JavaScript has' +
                ' invaded my mind and corrupted me beyond recognition. It is scary really. But you know, there is not much you can do' +
                ' when Javascript does a thing on you. Either way, perhaps using TypeScript instead would save my mind from total' +
                ' destruction in the coming hours. What helps me stay alive, is the fact that most people on this planet are sleeping' +
                ' right now. Why? I do not know, perhaps it is because they are sleeping and I am not.',
            comments: JSON.stringify([
                {author: 'Grace', comment: 'Mind-blowing! Space is truly awe-inspiring.'},
                {author: 'Harry', comment: 'I never knew there was so much to discover out there!'},
            ]),
            description: 'A captivating exploration of the vastness and wonders of outer space.',
        }
    ];

    articlesData.forEach((article) => {
        db.query('INSERT INTO articles SET ?', article, (error, result) => {
            if (error) {
                console.error('Error inserting data:', error);
            } else {
                console.log(`Article inserted with ID: ${result.insertId}`);
            }
        });
    });

    db.end();
});
