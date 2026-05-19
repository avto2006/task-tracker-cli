import process from 'process'
import fs from 'fs'


const file = fs.readFileSync('tasks.json', 'utf-8',)
console.log(file);
const tasks = JSON.parse(file)
console.log(tasks);


const command = process.argv[2]

const text = process.argv.slice(3).join(" ")

const status = 'done'



console.log(`Command: ${command}
Task: ${text}
    `);

    const id =
       tasks.length === 0 
       ? 1
       : tasks[tasks.length - 1].id + 1

 const object = {
    id: id,
    description: text,
    status: status,
    createdAt: new Date(),
    updatedAt: new Date()
 }   

 const objectGo = JSON.stringify(object)
 tasks.push(objectGo)

 