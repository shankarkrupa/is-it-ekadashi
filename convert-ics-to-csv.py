# ics to csv example
# dependency: https://pypi.org/project/vobject/

import vobject
import csv
import json

with open('ekadashi-dates.csv', mode='w') as csv_out:
    csv_writer = csv.writer(csv_out, delimiter=',', quotechar='"', quoting=csv.QUOTE_MINIMAL)
    # csv_writer.writerow(['TYPE', 'START', 'END'])
    # read the data from the file
    data = open("BAPSCalendar.ics").read()
    # iterate through the contents
    ekadashi_dates = []
    for cal in vobject.readComponents(data):
        for component in cal.components():
            print(component)
            if component.name == "VEVENT":
                # write to csv
                # csv_writer.writerow([component.summary.valueRepr()[:-7],component.dtstart.valueRepr(),component.dtend.valueRepr()])
                ekadashi_dates.append(str(component.dtstart.valueRepr()))
    print(ekadashi_dates)
