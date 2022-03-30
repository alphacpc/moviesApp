from ast import Dict
import csv

filename = "./movies_metadata.csv"

with open(filename) as file:

    content = csv.DictReader(file)
    i  = 0
    for row in content:

        if i < 10:

            country = row['production_countries']
            
            row['production_countries'] = country.replace('[',"").replace("]","").split("\"")
            
            print(row,"\n")
           
            
        else:
            break

        i += 1    
