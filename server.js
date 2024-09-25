const {initialzeDatabase} = require('./db.connect');
const express = require('express');
const app = express();
const cors = require('cors');
const Games = require('./model/games.model')

initialzeDatabase();

app.use(express.json());

app.use(cors({
    origin: '*'
}))

async function addGame(newGame){
    try{
        const createNewGame = new Games(newGame);
        const saveGame = await createNewGame.save();
        return saveGame
    }catch(error){
        throw error
    }
}
app.post('/games/add',async (req,res) => {
    try{
        const saveGame = await addGame(req.body);
        if(saveGame){
            res.status(201).json({message: 'game added successfully', saveGame})
        }else{
            res.status(500).json({error: 'unable to add data'})
        }
    }catch(error){
        res.status(500).json({error: 'unable to perform operation an unexpected error occured'})
    }
})
async function readAllGames(){
    try{
        const findGames = await Games.find();
        return findGames
    }catch(error){
        throw error
    }
}
app.get('/games', async(req,res) => {
    try{    
        const findAllGames = await readAllGames();
        if(findAllGames){
            res.status(200).json({message: 'data found', findAllGames})
        }else{
            res.status(404).json({error: 'data not found'})
        }
    }catch(error){
        res.status(500).json({error: 'error occured'})
    }
})

app.listen(3000, () => {
    console.log('server is running on port 3000')
})