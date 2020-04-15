import requests
import json
import sys
import pprint
import pandas as pd
import numpy as np
from h3 import h3

base_url = 'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow-by-direction?filter[local_authority_id]=71&page%5Bnumber%5D='

# resolution for the h3
level = 11


# Function to get data from all pages (start and end are page numbers)
def get_data(start, end):

    count = 0
    all_pages_data = []
    for n in range(start, end):
        data = requests.get(
            f'https://roadtraffic.dft.gov.uk/api/average-annual-daily-flow-by-direction?filter[local_authority_id]=71&page%5Bnumber%5D={n}'
        ).content
        data = json.loads(data)
        all_pages_data.append(data)
        count += 1

    return all_pages_data


# Get the data from pages 1 - 42 (all the pages available)
data = get_data(1, 43)

# generate list of years (the years span many pages so we can just get top item on page

years = set(map(lambda x: x.get('data')[0].get('year'), data))

# Make the dict of empty arrays so can push data into it

data_by_year = {year: [] for year in years}

# Now push the data to it

for page in data:
    for row in page['data']:
        data_by_year[row.get('year')].append(row)

# Make a unique id for each data point by combining CPI with DOT
# and add in a h3 value by combining lat/long (should also be unique
# but let's not chance it


def make_unique_id(row: dict):

    return f'{row["count_point_id"]} {row["direction_of_travel"]}'


for k, v in data_by_year.items():
    for row in v:
        row['unique_id'] = make_unique_id(row)
        row['h3'] = h3.geo_to_h3(float(row['latitude']),
                                 float(row['longitude']), level)

# Export it to a json...
dby_json = json.dumps(data_by_year, sort_keys=True, indent=4)
with open('road_data.json', 'w') as f:
    json.dump(dby_json, f)

print(dby_json)
print('all data saved...')
