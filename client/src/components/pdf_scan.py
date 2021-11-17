import tabula

from tabula import read_pdf
from csv import reader, DictReader
from pymongo import MongoClient


# pprint library is used to make the output look more pretty
from pprint import pprint
# connect to MongoDB, change the << MONGODB URL >> to reflect your own connection string
client = MongoClient("mongodb://localhost/neverlate")
db=client.admin
# Issue the serverStatus command and print the results
serverStatusResult=db.command("serverStatus")
pprint(serverStatusResult)

assignment = '../__tests__/pdf samples/Syllabus_Sample1.pdf'

#scans the pdf file and looks for all tables
table = read_pdf(assignment, pages="all", multiple_tables=True)
tabula.convert_into(assignment, "../__tests__/pdf samples/assignment_output.csv", output_format="csv", pages='all')
csv_assignment = "../__tests__/pdf samples/assignment_output.csv"

with open(csv_assignment, 'r') as read_obj:

    # pass the file object to DictReader() to get the DictReader object
    csv_reader = reader(read_obj)
    csv_dict_reader = DictReader(read_obj)

    # get column names from a csv file
    column_names = csv_dict_reader.fieldnames
    global description
    description = ""
    global date
    date = ""
    for row in column_names:
        if "assignment" in row:
            description = row
            print(column_names, row, 1)
        elif "Assignment" in row:
            description = row
            print(column_names, row, 11)
        if "date" in row:
            date = row
            print(column_names, date, 2)
        elif "Date" in row:
            date = row
            print(column_names, date, 22)
        elif "Week" in row:
            date = row
            print(column_names, date, 222)


    for row in csv_dict_reader:
        print(row[date], row[description])




