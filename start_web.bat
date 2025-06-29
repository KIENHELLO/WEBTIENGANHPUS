@echo off
cd /d E:\CDTT2\PROJECT\WEB_TIENGANH\WEB_TIENGANH
start cmd /k "python manage.py runserver"

cd /d E:\CDTT2\PROJECT\WEB_TIENGANH\front_end
start cmd /k "npm start"
