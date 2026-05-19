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

if (command === "list"  &&  text === "done") {
    const done = tasks.filter(e => e.status === 'done')
     for(let i = 0; i < done.length; i++) {
    console.log(`
            id: ${done[i].id},
            description: ${done[i].description},
            status: ${done[i].status}
        `);
    }
    
} else if (command === "list" && text === "todo") {
 const todo = tasks.filter(e => e.status === 'todo')
     for(let i = 0; i < todo.length; i++) {
    console.log(`
            id: ${todo[i].id},
            description: ${todo[i].description},
            status: ${todo[i].status}
        `);
    }
} else if (command === "list" && text === "in_progress") {
     const in_progress = tasks.filter(e => e.status === 'in_progress')
     for(let i = 0; i < in_progress.length; i++) {
    console.log(`
            id: ${in_progress[i].id},
            description: ${in_progress[i].description},
            status: ${in_progress[i].status}
        `);
    }
}





 