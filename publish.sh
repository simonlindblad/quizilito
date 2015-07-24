#!/bin/bash

ssh ida "rm /home/TDDD73/www-pub/nextgen/quiz/*"
scp -r build/ source/ ida:/home/TDDD73/www-pub/nextgen/quiz