const Discord = require('discord.js')
const client = new Discord.Client()
const fs = require('fs')
const dotenv = require('dotenv');
dotenv.config();

let strikes = 7;

client.on('message', message => {
    if (message.content == '!start game' || message.content == '!Start game') 
    {
        
        message.channel.send('here is the new word.');
        fs.readFile('words.txt', 'utf8', (err,data) => {
            if (err) throw err;
            var array = data.toString().split("\n");
            randomWord = array[Math.floor(Math.random()*array.length)]
            //console.log(randomWord);
            message.channel.send(wordReplace(randomWord));
        });
    } 
    else if (message.content == '!cancel game' || message.content == '!Cancel game')
    {

    }

});


// Get your bot's secret token from:
// https://discordapp.com/developers/applications/
// Click on your application -> Bot -> Token -> "Click to Reveal Token"


bot_secret_token = process.env.TOKEN
client.login(bot_secret_token)

// functions
function search(word, letter)
{

    for (index = 0; index < word.length; index++) {
        if (word.charAt(index) == letter)
        {
            return true;
        }
    }
    return false;

}

/*
    fs.readFile(file, 'utf8', (err,data) => {
        if (err) throw err;
        var array = data.toString().split("\n");
        randomWord = array[Math.floor(Math.random()*array.length)]
        //console.log(randomWord);
        data = randomWord
        wordReplace(word)
    });
*/
    

function wordReplace(word)
{
    str = '';
    for (index = 0; index < word.length; index++)
    {
        str += '*';
    }
    return str
}

