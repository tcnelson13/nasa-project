// const cluster = require("cluster");
// const os = require("os");

// Use pm2 commands
// Use pm2 start server.js
// Use pm2 start server.js -i max // uses the maximum number of cpus available
// Use pm2 list // shows all the processes
// Use pm2 logs // shows all the logs that are being written out
// Use pm2 logs --lines 200
// Use pm2 restart server // restarts the servers up again
// Use pm2 delete server
// Use pm2 start server.js -l logs.txt -i max // creates logs for all the instances running
// Use pm2 show 0 // shows the logs for a particular cluster id
// Use pm2 logs server [--lines 1000] to display logs
// Use pm2 env 0 to display environment variables
// Use pm2 monit to monitor CPU and Memory usage server
// Use pm2 reload server // Zero downtime restarts

// mongoose - npm package for connecting to mongodb - async feature

# SpaceX REST API

https://github.com/r-spacex/SpaceX-API

# Trigger a build

# Docker build - https://docs.docker.com/engine/reference/commandline/build/

// This builds and tags our docker image
docker build . -t tnelson13/nasa-project
docker build . --platform linux/arm64 -t tnelson13/nasa-project-arm64

// This runs the newly built docker container locally
docker run -it -p 8000:8000 tnelson13/nasa-project

// Login to docker
docker login

// This pushes our image out to docker hub
docker push tnelson13/nasa-project

# ssh into a computer

`ssh tcnelson13@127.0.0.1
we need a .pem public cert

````ssh -i "tc-test-account.pem" ec2-user@ec2-3-83-81-119.compute-1.amazonaws.com

In ssh, update everything
```sudo yum update -y
```sudo yum install docker
```sudo service docker start
```sudo docker info
```sudo usermod -a -G docker ec2-user
```exit
```login to ssh again (principle of least privelege)
```docker login
```docker run --restart=always -p 8000:80 tnelson13/nasa-project
// restart=always takes the place of pm2 in prod
````
