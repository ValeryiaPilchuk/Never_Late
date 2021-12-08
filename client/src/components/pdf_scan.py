import sys
import tabula
from tabula import read_pdf
from csv import reader, DictReader
from pymongo import MongoClient
from pprint import pprint


def pdf_scan():
    # Username & Password
    USER = sys.argv[1]
    USERNAME = sys.argv[2]
    PASSWORD = sys.argv[3]

    # connect to MongoDB
    client = MongoClient('localhost', 27017)
    db = client.neverlate
    collection_name = db.neverlates

    # Issue the serverStatus command and print the results
    serverStatusResult=db.command("serverStatus")

    #check to see if properly connected
    pprint(serverStatusResult)


    assignment = '../__tests__/pdf samples/Syllabus_Sample1.pdf'
    assignments = []

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
                print(column_names, row)
            elif "Assignment" in row:
                description = row
                print(column_names, row)
            if "date" in row:
                date = row
                print(column_names, date)
            elif "Date" in row:
                date = row
                print(column_names, date)
            elif "Week" in row:
                date = row
                print(column_names, date)

        for row in csv_dict_reader:
            assignments.append(row[date], row[description])
        #    print(row[date], row[description])

    entry = {
        'user': USER,
        'assignments': [index for assignment, index in enumerate(
            assignments) if index not in assignments[assignment + 1:]]
    }

    collection_name.update_one({'user': USER}, {"$set": entry}, True)
