#!/bin/bash
#디렉토리권한
sudo chmod -R 777 /home/ubuntu/server

#깃허브에서 받은 파일로 이동
cd /home/ubuntu/server

echo "Stopping any existing node servers"
npm install pm2 -g
sudo pm2 delete index