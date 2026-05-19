import process from 'process'
import fs from 'fs'


const file = fs.readFileSync('tasks.json', 'utf-8',)
console.log(file);











const command = process.argv[2]

const text = process.argv.slice(3).join(" ")



console.log(`Command: ${command}
Task: ${text}
    `);


