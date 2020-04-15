

## **To run:**

 - -clone this repo
 - -go to repo and run "npm install"
 - -go to repo/roadviz-backend and run "npm install"
 - -start the servers for back end and front end:
 - -go to repo/roadviz-back end and run "npm start"
 - -go to main repo and run "npm start" in a different terminal tab!

## EXTRAS:

This app runs on express/react but I used Python to get and clean the data, the script I wrote for this is in the <strong>extras</strong> folder

## // TODO

// Timeseries 
- add functionality to total/average selector 
- searchbox works, but it would be cool if it made suggestions as you typed
-  I don't know what "C" stands for in N,S,W,E,C, despite checking the meta-data. Just left it as C for now.

// Year Breakdown 
- consider switch to different chart type - changes in data from year to year aren't that big or obvious. 
- Add some filters/searches by road name.

// Geospatial 
- normalise data so it is easier to compare without zooming out. 
- Add some more filters for vehicle type etc

// Raw 
- add year selector to make the data load faster for slower machines
