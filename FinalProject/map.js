// data
const wetlandData = [
  {
    number: 1,
    name: "Wetland Pool 1",
    water:{
      lat: 41.02507167,
      long: -83.69828333,
      MeanTP: 0.18,
      MeanTN: 0.009,
      MeandisNH4: 0.34,
      MeandisNO3: 0.42,
      MeandisPO4: 0.03,
      htmlLink:""
    },
    soil: {
      lat: 41.0243, 
      long: -83.6968, 
      MeanTP: 675,
      MeanTN: 1697,
      MeanM3P: 27.15,
      MeanM3Fe: 398,
      MeanM3Al: 393,
      MeanSPSC: 63.71,
      MeanwEXp: 1,
      MeanwEXNH3: 1,
      MeamwEXNOx: 2.92,
      MeanpH: 6.92,
      MeanEC: 49.42,
      htmlLink: ""
    }
  
  },
  {
    number: 2,
    name: "Wetland Pool 2",
    water:{ 
    lat: 41.0242,
    long: -83.6951,
    MeanTP: 0.27,
    MeanTN: 2.74,
    MeandisNH4: 0.03,
    MeandisNO3: 0.13,
    MeandisPO4: 0.03,
    htmlLink:""
},
soil: {
    lat: 41.02401667, 
    long: -83.69453667, 
    MeanTP: 716,
    MeanTN: 1602,
    MeanM3P: 24.29,
    MeanM3Fe: 528,
    MeanM3Al: 592,
    MeanSPSC: 76.62,
    MeanwEXp: 0.91,
    MeanwEXNH3: 1.69,
    MeamwEXNOx: 5.78,
    MeanpH: 6.12,
    MeanEC: 23.81,
    htmlLink: ""
  }
   
  },
  {
    number: 3,
    name: "Wetland Pool 3",
    water:{ 
      lat: 41.02336667,
      long: -83.69515333,
      MeanTP: 0.05,
      MeanTN: 0.77,
      MeandisNH4: 0.04,
      MeandisNO3: 0.12,
      MeandisPO4: 0.01,
      htmlLink:""
  },
  soil: {
    lat: 41.02314167, 
    long: -83.69529, 
    MeanTP: 688,
    MeanTN: 1777,
    MeanM3P: 23.1,
    MeanM3Fe: 478,
    MeanM3Al: 646,
    MeanSPSC: 79.77,
    MeanwEXp: 0.97,
    MeanwEXNH3: 2.05,
    MeamwEXNOx: 5.06,
    MeanpH: 6.8,
    MeanEC: 46.79,
    htmlLink: ""
  }
  },
  {
    number:4,
    name: "Wetland Pool 4",
    water:{  
    lat: 41.02360333,
    long: -83.69424167,
    MeanTP: 0.15,
    MeanTN: 1.87,
    MeandisNH4: 0.09,
    MeandisNO3: 0.13,
    MeandisPO4: 0.03,
    htmlLink:""
},
soil: {
    lat: 41.02332667, 
    long: -83.69417333, 
    MeanTP: 677,
    MeanTN: 1560,
    MeanM3P: 21.32,
    MeanM3Fe: 463,
    MeanM3Al: 640,
    MeanSPSC: 79.4,
    MeanwEXp: 1.31,
    MeanwEXNH3: 2.38,
    MeamwEXNOx: 6.44,
    MeanpH: 6.71,
    MeanEC: 120,
    htmlLink: ""
  }

  
  },
  {
    number:5,
    name: "Wetland Pool 5",
    water:{ 
    lat: 41.02326333,
    long: -83.69358167,
    MeanTP: 0.31,
    MeanTN: 3.70,
    MeandisNH4: 0.25,
    MeandisNO3: 0.05,
    MeandisPO4: 0.01,
    htmlLink:""
},
soil: {
    lat: 41.02320667, 
    long: -83.69312667, 
    MeanTP: 671,
    MeanTN: 1537,
    MeanM3P: 21.03,
    MeanM3Fe: 476,
    MeanM3Al: 632,
    MeanSPSC: 80.98,
    MeanwEXp: 1.31,
    MeanwEXNH3: 2.52,
    MeamwEXNOx: 6.56,
    MeanpH: 6.73,
    MeanEC: 117,
    htmlLink: ""
  }
   
  },
  {
    number:6,
    name: "Wetland Pool 6",
    water:{
    lat: 41.02399,
    long: -83.69339833,
    MeanTP: 0.31,
    MeanTN: 2.65,
    MeandisNH4: 0.05,
    MeandisNO3: 0.17,
    MeandisPO4: 0.02,
    htmlLink:""
},
soil: {
    lat: 41.02402833, 
    long: -83.69265333, 
    MeanTP: 672,
    MeanTN: 1545,
    MeanM3P: 21.28,
    MeanM3Fe: 479,
    MeanM3Al: 636,
    MeanSPSC: 81.17,
    MeanwEXp: 1.33,
    MeanwEXNH3: 2.58,
    MeamwEXNOx: 6.54,
    MeanpH: 6.70,
    MeanEC: 114,
    htmlLink: ""
  }
    
  },
  {
    number:7,
    name: "Wetland Pool 7",
    water:{ 
    lat: 41.02391667,
    long: -83.6928,
    MeanTP: 0.09,
    MeanTN: 1.39,
    MeandisNH4: 0,
    MeandisNO3: 0.08,
    MeandisPO4: 0,
    htmlLink:""
},
soil: {
    lat: 41.024015, 
    long: -83.693035, 
    MeanTP: 672,
    MeanTN: 1545,
    MeanM3P: 21.28,
    MeanM3Fe: 479,
    MeanM3Al: 636,
    MeanSPSC: 81.26,
    MeanwEXp: 1.33,
    MeanwEXNH3: 2.58,
    MeamwEXNOx: 6.54,
    MeanpH: 6.70,
    MeanEC: 115,
    htmlLink: ""
  } 
  },
  {
    number:8,
    name: "Wetland Pool 8",
    water:{ 
    lat: 41.02349667,
    long: -83.69280667,
    MeanTP: 0.32,
    MeanTN: 2.85,
    MeandisNH4: 1.21,
    MeandisNO3: 0.11,
    MeandisPO4: 0.09,
    htmlLink:""
},
soil: {
    lat: 41.02354167, 
    long: -83.6928, 
    MeanTP: 676,
    MeanTN: 1555,
    MeanM3P: 21.49,
    MeanM3Fe: 482,
    MeanM3Al: 640,
    MeanSPSC: 81.58,
    MeanwEXp: 1.34,
    MeanwEXNH3: 2.88,
    MeamwEXNOx: 6.57,
    MeanpH: 6.69,
    MeanEC: 114,
    htmlLink: ""
  }
  },
  {
    number:9,
    name: "Wetland Pool 9",
    water:{  
    lat: 41.02328333,
    long: -83.69272667,
    MeanTP: 0.23,
    MeanTN: 2.24,
    MeandisNH4: 0.27,
    MeandisNO3: 0.11,
    MeandisPO4: 0.01,
    htmlLink:""
},
soil: {
    lat: 41.023195, 
    long: -83.69273333, 
    MeanTP: 674,
    MeanTN: 1545,
    MeanM3P: 21.64,
    MeanM3Fe: 485,
    MeanM3Al: 639,
    MeanSPSC: 81.46,
    MeanwEXp: 1.32,
    MeanwEXNH3: 3.04,
    MeamwEXNOx: 2.24,
    MeanpH: 6.69,
    MeanEC: 113,
    htmlLink: ""
  } 
  },
  {
    number:10,
    name: "Wetland Pool 10",
    water:{  lat: 41.023065,
    long: -83.69183667,
    MeanTP: 0.25,
    MeanTN: 1.09,
    MeandisNH4: 0,
    MeandisNO3: 0.08,
    MeandisPO4: 0.16,
    htmlLink:""
},
soil: {
    lat: 41.02316333, 
    long: -83.69160667, 
    MeanTP: 810,
    MeanTN: 1830,
    MeanM3P: 29.56,
    MeanM3Fe: 646,
    MeanM3Al: 438,
    MeanSPSC: 65.5,
    MeanwEXp: 1.81,
    MeanwEXNH3: 1.99,
    MeamwEXNOx: 7.55,
    MeanpH: 6.99,
    MeanEC: 240,
    htmlLink: ""
  }
  },
  {
    number:11,
    name: "Wetland Pool 11",
    water:{
    lat: 41.02355343,
    long: -83.69212492,
    MeanTP: 0.11,
    MeanTN: 1.51,
    MeandisNH4: 0,
    MeandisNO3: 0.13,
    MeandisPO4: 0.03,
    htmlLink:""
    },
    soil: {
        lat: 41.02360632, 
        long: -83.69197636, 
        MeanTP: 810,
        MeanTN: 1830,
        MeanM3P: 29.56,
        MeanM3Fe: 646,
        MeanM3Al: 438,
        MeanSPSC: 65.5,
        MeanwEXp: 1.81,
        MeanwEXNH3: 1.99,
        MeamwEXNOx: 7.55,
        MeanpH: 6.99,
        MeanEC: 240,
        htmlLink: ""
      }
    },
    {
        number:12,
        name: "Wetland Pool 12",
        water:{
        lat: 41.02409838,
        long: -83.69212031,
        MeanTP: 0.36,
        MeanTN: 3.30,
        MeandisNH4: 0.59,
        MeandisNO3: 0.10,
        MeandisPO4: 0.01,
        htmlLink:""  
        },
        soil: {
            lat: 41.02415, 
            long: -83.69154, 
            MeanTP: 804,
            MeanTN: 1852,
            MeanM3P: 29.20,
            MeanM3Fe: 631,
            MeanM3Al: 494,
            MeanSPSC: 70.07,
            MeanwEXp: 1.61,
            MeanwEXNH3: 2.12,
            MeamwEXNOx: 7.01,
            MeanpH: 6.81,
            MeanEC: 199,
            htmlLink: ""
          }
       
      },
      {
        number:13,
        name: "Wetland Pool 13",
        water:{
         lat: 41.02406833,
        long: -83.69137833,
        MeanTP: 0.14,
        MeanTN: 1.65,
        MeandisNH4: 0.02,
        MeandisNO3: 0.10,
        MeandisPO4: 0.04,
        htmlLink:""
      }, 
      soil: {
        lat: 41.02400833, 
        long: -83.69128, 
        MeanTP: 794,
        MeanTN: 1782,
        MeanM3P: 28.23,
        MeanM3Fe: 624,
        MeanM3Al: 502,
        MeanSPSC: 71.08,
        MeanwEXp: 1.02,
        MeanwEXNH3: 2.45,
        MeamwEXNOx: 7.09,
        MeanpH: 6.78,
        MeanEC: 186,
        htmlLink: ""
      }
        },
        {
            number:14,
            name: "Wetland Pool 14",
            water:{
            lat: 41.02389333,
            long: -83.69068,
            MeanTP: 0.28,
            MeanTN: 2.42,
            MeandisNH4: 0.04,
            MeandisNO3: 0.28,
            MeandisPO4: 0.01,
            htmlLink:""
            },
            soil: {
                lat: 41.02394167, 
                long: -83.69052667, 
                MeanTP: 775,
                MeanTN: 1627,
                MeanM3P: 19.86,
                MeanM3Fe: 500,
                MeanM3Al: 777,
                MeanSPSC: 97.26,
                MeanwEXp: 0.32,
                MeanwEXNH3: 1.40,
                MeamwEXNOx: 3.72,
                MeanpH: 5.85,
                MeanEC: 13.90,
                htmlLink: ""
              }
       
          },
          {
            number:15,
            name: "Wetland Pool 15",
            water:{
            lat: 41.02332,
            long: -83.69125333,
            MeanTP: 0.15,
            MeanTN: 2.12,
            MeandisNH4: 0.06,
            MeandisNO3: 0.06,
            MeandisPO4: 0.02,
            htmlLink:""
            },
            soil: {
                lat: 41.02327833, 
                long: -83.69111333, 
                MeanTP: 541,
                MeanTN: 989,
                MeanM3P: 27,
                MeanM3Fe: 663,
                MeanM3Al: 774,
                MeanSPSC: 99,
                MeanwEXp: 0.55,
                MeanwEXNH3: 1.31,
                MeamwEXNOx: 6.1,
                MeanpH: 5.97,
                MeanEC: 158,
                htmlLink: ""
              }
            
          },
          {
            number:16,
            name: "Wetland Pool 16",
            water:{
            lat: 41.02307667,
            long: -83.69081667,
            MeanTP: 0.1,
            MeanTN: 1.33,
            MeandisNH4: 0,
            MeandisNO3: 0.04,
            MeandisPO4: 0,
            htmlLink:""
            },
            soil: {
                lat: 41.02315333, 
                long: -83.69053667, 
                MeanTP: 650,
                MeanTN: 1700,
                MeanM3P: 27.24,
                MeanM3Fe: 476,
                MeanM3Al: 781,
                MeanSPSC: 89,
                MeanwEXp: 0.64,
                MeanwEXNH3: 1.23,
                MeamwEXNOx: 4.08,
                MeanpH: 5.98,
                MeanEC: 22.32,
                htmlLink: ""
              }
            
       
          },
          {
            number:!7,
            name: "Wetland Pool 17",
            water:{
            lat: 41.0236,
            long: -83.69033,
            MeanTP: 0.07,
            MeanTN: 0.69,
            MeandisNH4: 0.01,
            MeandisNO3: 0.05,
            MeandisPO4: 0,
            htmlLink:""
            },
            soil: {
                lat: 41.02333, 
                long: -83.69045167, 
                MeanTP: 511,
                MeanTN: 1140,
                MeanM3P: 12.4,
                MeanM3Fe: 320,
                MeanM3Al: 747,
                MeanSPSC: 91.33,
                MeanwEXp: 0.64,
                MeanwEXNH3: 2.03,
                MeamwEXNOx: 4.33,
                MeanpH: 6.75,
                MeanEC: 11.49,
                htmlLink: ""
              }
            
          },
          {
            number:18,
            name: "Wetland Pool 18",
            water:{
            lat: 41.02375833,
            long: -83.69006833,
            MeanTP: 0.09,
            MeanTN: 1.40,
            MeandisNH4: 0.12,
            MeandisNO3: 0.11,
            MeandisPO4: 0.06,
            htmlLink:""
            },
            soil: {
                lat: 41.02375333, 
                long: -83.68994, 
                MeanTP: 581,
                MeanTN: 1325,
                MeanM3P: 14.03,
                MeanM3Fe: 407,
                MeanM3Al: 585,
                MeanSPSC: 75.66,
                MeanwEXp: 2.97,
                MeanwEXNH3: 2.28,
                MeamwEXNOx: 4.65,
                MeanpH: 6.57,
                MeanEC: 16.77,
                htmlLink: ""
              }
          },
          {
            number:19,
            name: "Wetland Pool 19",
            water:{
            lat: 41.0231,
            long: -83.69028833,
            MeanTP: 0.17,
            MeanTN: 2.04,
            MeandisNH4: 0.67,
            MeandisNO3: 0.12,
            MeandisPO4: 0.01,
            htmlLink:""
            },
            soil: {
                lat: 41.02327315, 
                long: -83.68995202, 
                MeanTP: 539,
                MeanTN: 1204,
                MeanM3P: 7.64,
                MeanM3Fe: 286,
                MeanM3Al: 631,
                MeanSPSC: 80.8,
                MeanwEXp: 1.95,
                MeanwEXNH3: 1.43,
                MeamwEXNOx: 5.47,
                MeanpH: 6.17,
                MeanEC: 19.62,
                htmlLink: ""
              }
            
          },
          {
            number:20,
            name: "Wetland Pool 20",
            water:{
            lat: 41.023611,
            long: -83.688056,
            MeanTP: 0.47,
            MeanTN: 0.79,
            MeandisNH4: 0.03,
            MeandisNO3: 0.08,
            MeandisPO4: 0.46,
            htmlLink:""
            },
            soil: {
                lat: 41.023611, 
                long: -83.688056, 
                MeanTP: 592,
                MeanTN: 1713,
                MeanM3P: 14.8,
                MeanM3Fe: 527,
                MeanM3Al: 710,
                MeanSPSC: 96,
                MeanwEXp: 1.01,
                MeanwEXNH3: 1.91,
                MeamwEXNOx: 7.28,
                MeanpH: 6.52,
                MeanEC: 95.16,
                htmlLink: ""
              }
            
          
          },
        
          
          
        
        
       
      
    


];


// Set up the map
const map = L.map('map-container').setView([23.1703653, -73.7230592], 16); // Set the center to Indiana

// search bar 
function selectWetland() {
  // Get the selected wetland number from the dropdown
  const selectedWetlandNumber = document.getElementById('wetlandSelect').value;

  // Find the wetland in wetlandData with the matching number
  const foundWetland = wetlandData.find(wetland => wetland.number === parseInt(selectedWetlandNumber));

  // If wetland is found, center the map on its water location
  if (foundWetland && foundWetland.water) {
    map.setView([foundWetland.water.lat, foundWetland.water.long], 16);
    // Clear previous wetland information
    d3.select('.wetland-info').remove();
    // Display wetland information if found
    renderWetlandInfo(foundWetland);
  } else {
    // Inform the user that the wetland was not found
    d3.select('body').append('p').text('Wetland not found.');
  }
}


// also search

// Populate the wetland options in the dropdown
const wetlandSelect = document.getElementById('wetlandSelect');
wetlandData.forEach(wetland => {
  const option = document.createElement('option');
  option.value = wetland.number;
  option.textContent = wetland.name;
  wetlandSelect.appendChild(option);
});

// Function to handle wetland selection
function selectWetland() {
  const selectedValue = wetlandSelect.value;
  const selectedWetland = wetlandData.find(wetland => wetland.number === parseInt(selectedValue));

  if (selectedWetland) {
    map.setView([selectedWetland.lat, selectedWetland.long], 16);
    // Clear previous wetland information
    d3.select('.wetland-info').remove();
    // Display wetland information if found
    renderWetlandInfo(selectedWetland);
  }
}

// Add OpenStreetMap tile layer to the map
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: ''
}).addTo(map);

// Add wetland pools as markers to the map
wetlandData.forEach(pool => {
  let waterPopupContent = `
    <div style="font-family: Verdana, sans-serif; color: #333;">
      <b style="font-size: 16px; color: #007bff;">Wetland Pool:</b> ${pool.name}<br>
      <b style="font-size: 14px; color: #6610f2;">Wetland Number:</b> ${pool.number}<br>
      <b style="font-size: 14px; color: #6610f2;">Water Mean TP:</b> ${pool.water.MeanTP}<br>
      <b style="font-size: 14px; color: #e83e8c;">Water Mean TN:</b> ${pool.water.MeanTN}<br>
      <b style="font-size: 14px; color: #fd7e14;">Water Mean disNH4:</b> ${pool.water.MeandisNH4}<br>
      <b style="font-size: 14px; color: #486c74;">Water Mean disNO3:</b> ${pool.water.MeandisNO3}<br>
      <b style="font-size: 14px; color: #28a745;">Water Mean disPO4:</b> ${pool.water.MeandisPO4}<br>
      <a href="water_details.html?pool=${pool.name}">See More</a>
    </div>
  `;

  let soilPopupContent = `
    <div style="font-family: Arial, sans-serif; color: #333;">
      <b style="font-size: 16px; color: #007bff;">Wetland Pool:</b> ${pool.name}<br>
      <b style="font-size: 14px; color: #6610f2;">Wetland Number:</b> ${pool.number}<br>
      <b style="font-size: 14px; color: #6610f2;">Soil Mean TP:</b> ${pool.soil.MeanTP}<br>
      <b style="font-size: 14px; color: #e83e8c;">Soil Mean TN:</b> ${pool.soil.MeanTN}<br>
      <b style="font-size: 14px; color: #6610f2;">Soil Mean M3P:</b> ${pool.soil.MeanM3P}<br>
      <b style="font-size: 14px; color: #e83e8c;">Soil Mean M3Fe:</b> ${pool.soil.MeanM3Fe}<br>
      <b style="font-size: 14px; color: #fd7e14;">Soil Mean M3Al:</b> ${pool.soil.MeanM3Al}<br>
      <b style="font-size: 14px; color: #486c74;">Soil Mean SPSC:</b> ${pool.soil.MeanSPSC}<br>
      <b style="font-size: 14px; color: #486c74;">Soil Mean wEXp:</b> ${pool.soil.MeanwEXp}<br>
      <b style="font-size: 14px; color: #28a745;">Soil Mean wEXNH3:</b> ${pool.soil.MeanwEXNH3}<br>
      <b style="font-size: 14px; color: #dc3545;">Soil Mean wEXNOx:</b> ${pool.soil.MeanwEXNOx}<br>
      <b style="font-size: 14px; color: #28a745;">Soil Mean pH:</b> ${pool.soil.MeanpH}<br>
      <b style="font-size: 14px; color: #dc3545;">Soil Mean EC:</b> ${pool.soil.MeanEC}<br>
      <a href="soil_details.html?pool=${pool.name}">See More</a>
      
    </div>
  `;

  L.marker([pool.water.lat, pool.water.long])
    .addTo(map)
    .bindPopup(waterPopupContent)
    .openPopup();

  L.marker([pool.soil.lat, pool.soil.long])
    .addTo(map)
    .bindPopup(soilPopupContent)
    .openPopup();
});

