const express = require('express');

const cors = require('cors');

const app = express();

const PORT = 3001;

// data pre sorting

const road_data = require('./data/road_data.json');

const roadData = JSON.parse(road_data);

const vehicles = [
  'two_wheeled_motor_vehicles',
  'cars_and_taxis',
  'buses_and_coaches',
  'lgvs',
  'hgvs_2_rigid_axle',
  'hgvs_3_rigid_axle',
  'hgvs_4_or_more_rigid_axle',
  'hgvs_3_or_4_articulated_axle',
  'hgvs_5_articulated_axle',
  'hgvs_6_articulated_axle',
  'all_hgvs',
  'all_motor_vehicles',
];

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

//@ get all data (for timeseries)
// TODO add filter options
app.post('/timeseries', (req, res) => {
  const vehiclesList = req.body.vehicles;
  const roadTypes = req.body.roadTypes;
  const roadCats = req.body.roadCats;
  const directions = req.body.directions;
  const roadName = req.body.roadName;
  const startName = req.body.startName;
  const endName = req.body.endName;

  const datasets = [];
  const roadDataArray = Object.values(roadData);

  // select only the data front end has requested:
  const filteredData = [];
  roadDataArray.forEach((yearColumn) => {
    let filteredColumn = yearColumn.filter((item) => {
      return (
        Object.values(item).some((value) => roadTypes.includes(value)) &&
        Object.values(item).some((value) => roadCats.includes(value)) &&
        Object.values(item).some((value) => directions.includes(value))
      );
    });

    // If search, filter again for the search
    // Could use return item.road_name.includes(roadName) for search suggestions

    if (roadName.length > 0) {
      filteredColumn = filteredColumn.filter((item) => {
        return item.road_name === roadName;
      });
    }

    filteredData.push(filteredColumn);
  });

  // color table for coding the chart
  const colors = {
    two_wheeled_motor_vehicles: 'orange',
    cars_and_taxis: 'yellow',
    buses_and_coaches: 'green',
    lgvs: 'red',
    hgvs_2_rigid_axle: 'powderblue',
    hgvs_3_rigid_axle: 'deepskyblue',
    hgvs_4_or_more_rigid_axle: 'cornflowerblue',
    hgvs_3_or_4_articulated_axle: 'blue',
    hgvs_5_articulated_axle: 'darkblue',
    hgvs_6_articulated_axle: 'mediumslateblue',
    all_hgvs: 'violet',
    all_motor_vehicles: 'indigo',
  };

  vehiclesList.forEach((vehicle) => {
    const totals = [];
    filteredData.forEach((yearColumn) => {
      const total = yearColumn.reduce((acc, current) => {
        return acc + current[vehicle];
      }, 0);
      totals.push(total);
    });

    const dataset = {
      label: vehicle,
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: colors[vehicle],
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: totals,
    };

    datasets.push(dataset);
  });

  res.json(datasets);
});

//@ get raw (ish) data for raw page
// TODO add more filters
app.post('/raw', (req, res) => {
  res.json(roadData);
});

// @ get individual year totals for each year
// TODO add more filter options or average/total road types etc
app.post('/year', (req, res) => {
  const year = req.body.year;
  const yearColumn = roadData[year];

  let totals = [];
  vehicles.forEach((vehicle) => {
    const total = yearColumn.reduce((acc, current) => {
      return acc + current[vehicle];
    }, 0);

    totals.push(total);
  });

  res.json(totals);
});

// @ get data by year for geospatial component
app.post('/yeargeo', (req, res) => {
  const year = req.body.year;
  const yearColumn = roadData[year];

  const data = yearColumn.map((row) => {
    return { hex: row.h3, count: row.cars_and_taxis };
  });

  res.json(data);
});

app.listen(PORT, () =>
  console.log(`Server listening at http://localhost:${PORT}`)
);
