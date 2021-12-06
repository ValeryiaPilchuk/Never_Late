from pymongo import MongoClient
import requests
import smtplib
from bottle import run,request,post
import json
import pandas as pd 
from email.mime.multipart import MIMEMultipart 
import time
import schedule

"""
    This file is for send reminder email to users.
"""

client = MongoClient('mongodb+srv://Anil:Bhusal@cluster0.kjwlj.mongodb.net')
db = client.NeverLate

collection_name = db.neverlates

try:db.command("serverStatus")
except Exception as e: print(e)
else: print("You are connect!")

email_found = [user for user in collection_name.find({},{"_id":0, "email":1})]
print (email_found)
new_list = list(map(lambda x:list(x.values())[0],email_found))
print(new_list )

def sentmail():

    msg = MIMEMultipart('alternatvie')

    try:

        smtpserver = "smtp.gmail.com"
        smtpport = "587"
        from_email= "latenever294@gmail.com"
        password = "12qwaszxQWASZX"
        msg['TO'] = ",".join(new_list)
        msg = "check you email"

        server = smtplib.SMTP('smtp.gmail.com',587)
        server.starttls()
        server.login(from_email,password)
        server.sendmail(from_email,new_list,msg)
        server.close()
        print("email is sent")
    except Exception as e:
        print(str(e))
        print("failed to send email")



schedule.every().day.at("10:30").do(sentmail)
