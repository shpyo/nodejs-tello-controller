# nodejs-tello-controller

Simple Node.js Tello drone controller. You are able to send command to the drone. [Tello API reference](https://dl-cdn.ryzerobotics.com/downloads/tello/0228/Tello+SDK+Readme.pdf) you use to send commands.

## Example usage

To program your drone you have to open Terminal and run following commands:

```bash
node
> var TelloController = require('./index').default;
undefined
> var Tello = new TelloController()
undefined
> Tello.connect()
undefined
> Tello.send('command')
undefined
> Response from Tello: OK
> Tello.send('takeoff')
undefined
> Response from Tello: OK
Tello.send('land')
undefined
> Response from Tello: OK
> Tello.closeConnection()
undefined
> Connection closed
```