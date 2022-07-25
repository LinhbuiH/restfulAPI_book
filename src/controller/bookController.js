const fs = require('fs');
const fileData = './book.json';

const bookController = {
    getBook: (req, res) => {
        fs.readFile(fileData, (err, data) => {
            if (err)
                throw err;
            res.end(data);
        });
    },

    getBooksById: (req, res) => {
        fs.readFile(fileData, (err, data) => {
            if (err) throw err;
            const userId = req.params['id'];
            let listUsers = JSON.parse(data);
            let bookFilted = listUsers[userId];
            res.end(JSON.stringify(bookFilted));
        });
    },

    addBook: (req, res) => {
        fs.readFile(fileData, (err, data) => {
            if (err) throw err;
            let listData = JSON.parse(data);
            const newId = Object.keys(listData).length + 1;
            console.log(newId);
            listData[newId] = req.body;
    
            fs.writeFile(fileData, JSON.stringify(listData), (err) => {
                if (err) throw err;
                res.status(200).send(listData[newId]);
            });
        });
    },

    updateBook: (req, res) => {
        fs.readFile(fileData, (err, data) => {
            if (err) throw err;
            let listData = JSON.parse(data);
            const userId = req.params['id'];
            listData[userId] = req.body;
    
            fs.writeFile(fileData, JSON.stringify(listData), (err) => {
                if (err) throw err;
                res.status(200).send(listData[userId]);
            });
        });
    },

    deleteBook: (req, res) => {
        fs.readFile(fileData, (err, data) => {
            if (err) throw err;
            let listData = JSON.parse(data);
            const userId = req.params['id'];
            delete listData[userId];
    
            fs.writeFile(fileData, JSON.stringify(listData), (err) => {
                if (err) throw err;
                res.status(200).send('Deleted User Successfully!');
            });
        });
    }
}

module.exports = bookController;