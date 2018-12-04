# Exec Gateway

## Goals

- Provide a web interface that is able to execute shell commands on a host.  
- Must be able to handle long running commands in real-time.
- Provides output for both STDOUT and STDERR
- Provides console logs showing status of command.


## Brainstorming

- Allow configuration of black/white lists for commands.
- Graceful recovery if network disconnect during long running command.
- 


# Starting Point
nodejs, websockets, and vue for the client side.

# Architecture
I originally was playing with the idea of crossbars.io. Then I realized it is a broadcast library. This is a one to one communication tool.  So crossbar is overkill in this situation.

See README.md files for client and server.