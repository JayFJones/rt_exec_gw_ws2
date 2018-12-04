
const { spawn } = require('child_process')
const WebSocket = require('ws')
const moment = require('moment')

// Here we spawn the process, and hold on to the results for that client. 
// We need a way to work back to the existing session.
// That will be part of the spawn callbacks.
function spawnCmd( cmdObj ) {
   var now = moment();
   // TODO assert that the object passed is valid.
   // Right here capture the moment metrics. Report to 
   // to the "console" that the command was received and change its state
   // to "running".
   // processes.push(cmdObj[0]);
   console.log("Timestamp: " + now)
   console.log("Process: " + JSON.stringify (cmdObj) )
   
   // const ls = spawn(cmdObj.cmd, []);
   const aCmd = cmdObj.cmd
   const ls = spawn('ls', ['-al', './'])

   ls.stdout.on('data', (data) => {
      // This is where we would make rpc calls to the
      // calling client to send them updated stdout data.
      console.log(`stdout: ${data}`)
      // session.call('com.example.update_stdout', [`${data}`]).then(
      //    res => {
      //       // What do do here? Keep going is what!
      //    },
      //    err => {
      //      // console.log(err)
      //      throw(err);
      //    }
      //  )
   });

   ls.stderr.on('data', (data) => {
      // This is where we would make rpc calls to the
      // calling client to send them updated stdout data.
      console.log(`stderr: ${data}`)
   });

   ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`)
      // Capture the moment on this close and then send back a 
      // the calling client and set its state to "complete"

   });

}


const wss = new WebSocket.Server({ port: 9000 });
wss.on('connection', function connection(ws) {
   ws.on('message', function incoming(message) {
     console.log('received: %s', message);
   });
 
   ws.send('something');
 });



