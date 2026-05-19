import process from 'process'

const command = process.argv[2]

const text = process.argv.slice(3).join(" ")

console.log(`Command: ${command}
Task: ${text}
    `);


