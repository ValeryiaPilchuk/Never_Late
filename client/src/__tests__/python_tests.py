from _csv import reader
from csv import DictReader

import tabula
from tabula import read_pdf

from client.src.components.pdf_scan import pdf_scan

#manual test for extracting from pdf (pdf_scan)
def test_extraction():

    assignment = '../__tests__/pdf samples/Syllabus_Sample1.pdf'

    # scans the pdf file and looks for all tables
    tabula.convert_into(assignment, "../__tests__/pdf samples/assignment_output.csv", output_format="csv", pages='all')
    csv_assignment = "../__tests__/pdf samples/assignment_output.csv"

    with open(csv_assignment, 'r') as read_obj:

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
            print(row[date], row[description])  #for now we are just checking that the right information is getting passed through
