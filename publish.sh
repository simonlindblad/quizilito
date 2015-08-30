#!/bin/bash

ssh ida "rm -rf /home/TDDD73/www-pub/python/quiz/*"
scp -r index.shtml build/ source/ ida:/home/TDDD73/www-pub/python/quiz
ssh ida "chmod 775 -R /home/TDDD73/www-pub/python/quiz/*"
