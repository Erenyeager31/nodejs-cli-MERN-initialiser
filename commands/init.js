import chalk from "chalk";
import { exec } from "child_process";

async function init() {
    try {
        // Creation of the React app
        await executeCommand('crao -n client', 'React app named client created successfully');

        // Creation of server folder and initialization
        await executeCommand('mkdir server && cd server && npm init -y', 'Server folder created and initialized');

        // Creation of required folders along with index.js and db.js
        await executeCommand('cd server && mkdir routes controller middleware models && type nul > index.js && type nul > db.js', 'Required folders and files created in server directory');

        // Installing required libraries for server
        await executeCommand('cd server && npm install express mongoose dotenv && type nul > .env', 'Required libraries installed for server');
    } catch (err) {
        console.log(chalk.red.bold(`Error: ${err.message}`));
    }
}

async function executeCommand(command, successMessage) {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(error);
                console.log(error)
                return;
            }
            // if (stderr) {
            //     console.log(chalk.red.bold(`Error: ${stderr}`));
            //     return;
            // }
            if (successMessage) {
                console.log(chalk.green.bold(successMessage));
            }
            resolve(stdout);
        });
    });
}

export default init;