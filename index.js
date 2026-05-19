import process from 'process'
import fs from 'fs'


const file = fs.readFileSync('tasks.json', 'utf-8',)
console.log(file);
const tasks = JSON.parse(file)
console.log(tasks);


const command = process.argv[2]



const text = process.argv.slice(3).join(" ")

// const status;

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
    status: "done",
    createdAt: new Date(),
    updatedAt: new Date()
 }  
 
 tasks.push(object)
 const changedTasks = JSON.stringify(tasks)
 
//  fs.writeFileSync('tasks.json', changedTasks)
 
if (command === 'list') {

    for(let i = 0; i < tasks.length; i++) {
         console.log(`
                   id: ${tasks[i].id},
                   description: ${tasks[i].description},
                   status: ${tasks[i].status}
            `);
    }

}



 