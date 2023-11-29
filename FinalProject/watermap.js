// Initialize the map
var mymap = L.map('map').setView([41.0236407,-83.6883797], 16 );

// Add a base layer (you can choose different tile layers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Wetland data for multiple wetlands
var wetlandsData = [
    {
        name: "Wetland pool 1",
        lat: 41.02507167,
        long: -83.69828333,
        MeanTP: 0.18,
        MeanTN: 0.009,
        MeandisNH4: 0.34,
        MeandisNO3: 0.42,
        MeandisPO4: 0.03
    },
    {
   
        name: "Wetland Pool 2", 
        lat: 41.0242,
        long: -83.6951,
        MeanTP: 0.27,
        MeanTN: 2.74,
        MeandisNH4: 0.03,
        MeandisNO3: 0.13,
        MeandisPO4: 0.03
      },
      {
        
        name: "Wetland Pool 3", 
          lat: 41.02336667,
          long: -83.69515333,
          MeanTP: 0.05,
          MeanTN: 0.77,
          MeandisNH4: 0.04,
          MeandisNO3: 0.12,
          MeandisPO4: 0.01
      },
      {
        
        name: "Wetland Pool 4",  
        lat: 41.02360333,
        long: -83.69424167,
        MeanTP: 0.15,
        MeanTN: 1.87,
        MeandisNH4: 0.09,
        MeandisNO3: 0.13,
        MeandisPO4: 0.03
      },
      {
        
        name: "Wetland Pool 5", 
        lat: 41.02326333,
        long: -83.69358167,
        MeanTP: 0.31,
        MeanTN: 3.70,
        MeandisNH4: 0.25,
        MeandisNO3: 0.05,
        MeandisPO4: 0.01
      },
      {
       
        name: "Wetland Pool 6",
        lat: 41.02399,
        long: -83.69339833,
        MeanTP: 0.31,
        MeanTN: 2.65,
        MeandisNH4: 0.05,
        MeandisNO3: 0.17,
        MeandisPO4: 0.02
      },
      {
        
        name: "Wetland Pool 7", 
        lat: 41.02391667,
        long: -83.6928,
        MeanTP: 0.09,
        MeanTN: 1.39,
        MeandisNH4: 0,
        MeandisNO3: 0.08,
        MeandisPO4: 0
      },
      {
        
        name: "Wetland Pool 8", 
        lat: 41.02349667,
        long: -83.69280667,
        MeanTP: 0.32,
        MeanTN: 2.85,
        MeandisNH4: 1.21,
        MeandisNO3: 0.11,
        MeandisPO4: 0.09
      },
      {
        
        name: "Wetland Pool 9",  
        lat: 41.02328333,
        long: -83.69272667,
        MeanTP: 0.23,
        MeanTN: 2.24,
        MeandisNH4: 0.27,
        MeandisNO3: 0.11,
        MeandisPO4: 0.01
      },
      {
        
        name: "Wetland Pool 10",  lat: 41.023065,
        long: -83.69183667,
        MeanTP: 0.25,
        MeanTN: 1.09,
        MeandisNH4: 0,
        MeandisNO3: 0.08,
        MeandisPO4: 0.16
      },
      {
       
        name: "Wetland Pool 11",
        lat: 41.02355343,
        long: -83.69212492,
        MeanTP: 0.11,
        MeanTN: 1.51,
        MeandisNH4: 0,
        MeandisNO3: 0.13,
        MeandisPO4: 0.03
        },
        {
            
            name: "Wetland Pool 12",
            lat: 41.02409838,
            long: -83.69212031,
            MeanTP: 0.36,
            MeanTN: 3.30,
            MeandisNH4: 0.59,
            MeandisNO3: 0.10,
            MeandisPO4: 0.01 
        },
        {
            
            name: "Wetland Pool 13",
            lat: 41.02406833,
            long: -83.69137833,
            MeanTP: 0.14,
            MeanTN: 1.65,
            MeandisNH4: 0.02,
            MeandisNO3: 0.10,
            MeandisPO4: 0.04
          }, 
          {
                
                name: "Wetland Pool 14",
          
                lat: 41.02389333,
                long: -83.69068,
                MeanTP: 0.28,
                MeanTN: 2.42,
                MeandisNH4: 0.04,
                MeandisNO3: 0.28,
                MeandisPO4: 0.01
            },
            {
                
                name: "Wetland Pool 15",
          
                lat: 41.02332,
                long: -83.69125333,
                MeanTP: 0.15,
                MeanTN: 2.12,
                MeandisNH4: 0.06,
                MeandisNO3: 0.06,
                MeandisPO4: 0.02
            },
            {
                
                name: "Wetland Pool 16",
          
                lat: 41.02307667,
                long: -83.69081667,
                MeanTP: 0.1,
                MeanTN: 1.33,
                MeandisNH4: 0,
                MeandisNO3: 0.04,
                MeandisPO4: 0
            },
            {
                
                name: "Wetland Pool 17",
          
                lat: 41.0236,
                long: -83.69033,
                MeanTP: 0.07,
                MeanTN: 0.69,
                MeandisNH4: 0.01,
                MeandisNO3: 0.05,
                MeandisPO4: 0
            },
            {
                
                name: "Wetland Pool 18",
          
                lat: 41.02375833,
                long: -83.69006833,
                MeanTP: 0.09,
                MeanTN: 1.40,
                MeandisNH4: 0.12,
                MeandisNO3: 0.11,
                MeandisPO4: 0.06
                },
                {
                
                name: "Wetland Pool 19",
          
                lat: 41.0231,
                long: -83.69028833,
                MeanTP: 0.17,
                MeanTN: 2.04,
                MeandisNH4: 0.67,
                MeandisNO3: 0.12,
                MeandisPO4: 0.01
                },
                {
                
                name: "Wetland Pool 20",
          
                lat: 41.023611,
                long: -83.688056,
                MeanTP: 0.47,
                MeanTN: 0.79,
                MeandisNH4: 0.03,
                MeandisNO3: 0.08,
                MeandisPO4: 0.46
                },
                {
                   
                    name: "Wetland Pool 21",
                    
                    lat: 41.02401833,
                    long: -83.686875,
                    MeanTP: 0.11,
                    MeanTN: 1.46,
                    MeandisNH4: 0,
                    MeandisNO3: 0.06,
                    MeandisPO4: 0.06,
                    
                },
                {
                    
                    name: "Wetland Pool 22",
                    
                    lat: 41.02490333,
                    long: -83.68770167,
                    MeanTP: 0.17,
                    MeanTN: 1.70,
                    MeandisNH4: 0.05,
                    MeandisNO3: 0.16,
                    MeandisPO4: 0.15,
                    
                    },
                    {
                       
                        name: "Wetland Pool 24",
                       
                        lat: 41.02399667,
                        long: -83.68573833,
                        MeanTP: 0.22,
                        MeanTN: 2.46,
                        MeandisNH4: 0.05,
                        MeandisNO3: 0.17,
                        MeandisPO4: 0.012,
                       
                    },
               
                {
                  
                  name: "Wetland Pool 25",
                  
                  lat: 41.02397167,
                  long: -83.684735,
                  MeanTP: 0.18,
                  MeanTN: 1.49,
                  MeandisNH4: 0.07,
                  MeandisNO3: 0.09,
                  MeandisPO4: 0.04,
                  
               
                  
                },
                {
                  
                  name: "Wetland Pool 26",
                 
                  lat: 41.02462167,
                  long: -83.68506667,
                  MeanTP: 0.10,
                  MeanTN: 1.59,
                  MeandisNH4: 0.71,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.01,
                 
                  },
                  
                {
                  
                  name: "Wetland Pool 27",
                   
                  lat: 41.02508862,
                  long: -83.68454802,
                  MeanTP: 0.23,
                  MeanTN: 4.12,
                  MeandisNH4: 0.06,
                  MeandisNO3: 0.06,
                  MeandisPO4: 0.07,
                 
              },
              
                {
                 
                  name: "Wetland Pool 28",
                 
                  lat: 41.02573302,
                  long: -83.68745159,
                  MeanTP: 0.36,
                  MeanTN: 4.21,
                  MeandisNH4: 0,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.29,
                 
                  },
                 
                {
                  number:29,
                  name: "Wetland Pool 29",
                 
                  lat: 41.02555833,
                  long: -83.68697833,
                  MeanTP: 0.67,
                  MeanTN: 5.94,
                  MeandisNH4: 0.25,
                  MeandisNO3: 0.06,
                  MeandisPO4: 0.04,
                 
                  },
                  
                {
                  number:30,
                  name: "Wetland Pool 30",
                 
                  lat: 41.02596167,
                  long: -83.686375,
                  MeanTP: 0.17,
                  MeanTN: 2.23,
                  MeandisNH4: 0.44,
                  MeandisNO3: 0.18,
                  MeandisPO4: 0.07,
                 
                  },
                 
                {
                  number:31,
                  name: "Wetland Pool 31",
                 
                  lat: 41.0257497,
                  long: -83.68536039,
                  MeanTP: 0.24,
                  MeanTN: 2.68,
                  MeandisNH4: 0.08,
                  MeandisNO3: 0.09,
                  MeandisPO4: 0.03,
                 
                  },
                  
                {
                  number:32,
                  name: "Wetland Pool 32",
                 
                  lat: 41.025785,
                  long: -83.68403,
                  MeanTP: 0.05,
                  MeanTN: 1.79,
                  MeandisNH4: 0.30,
                  MeandisNO3: 0.62,
                  MeandisPO4: 0.02,
                 
                  },
                 
                {
                  number:33,
                  name: "Wetland Pool 33",
                 
                  lat: 41.02552833,
                  long: -83.68259833,
                  MeanTP: 0.34,
                  MeanTN: 3.54,
                  MeandisNH4: 0,
                  MeandisNO3: 0.06,
                  MeandisPO4: 0.03,
                 
                },
               
                  {
                  number:34,
                  name: "Wetland Pool 34",
                 
                  lat: 41.025795,
                  long: -83.68270333,
                  MeanTP: 0.12,
                  MeanTN: 2.19,
                  MeandisNH4: 0.12,
                  MeandisNO3: 0.08,
                  MeandisPO4: 0,
                 
                  },
                 
                {
                  number:35,
                  name: "Wetland Pool 35",
                 
                  lat: 41.026435,
                  long: -83.683175,
                  MeanTP: 0.14,
                  MeanTN: 1.93,
                  MeandisNH4: 0.17,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.06,
                 
                  },
                
                {
                  number:36,
                  name: "Wetland Pool 36",
                 
                 lat: 41.02677,
                  long: -83.68446333,
                  MeanTP: 0.20,
                  MeanTN: 1.71,
                  MeandisNH4: 1.93,
                  MeandisNO3: 0.21,
                  MeandisPO4: 0.14,
                 
                  },
                  
                {
                  number:37,
                  name: "Wetland Pool 37",
                 
                  lat: 41.0270377,
                  long: -83.68223537,
                  MeanTP: 0.09,
                  MeanTN: 2.10,
                  MeandisNH4: 0.09,
                  MeandisNO3: 0.08,
                  MeandisPO4: 0.01,
                 
                  },
                  
                {
                  number:38,
                  name: "Wetland Pool 38",
                 
                  lat: 41.026389,
                  long: -83.681944,
                  MeanTP: 0.16,
                  MeanTN: 2.40,
                  MeandisNH4: 0.07,
                  MeandisNO3: 0.09,
                  MeandisPO4: 0.08,
                 
                  },
                 
                {
                  number:39,
                  name: "Wetland Pool 39",
                 
                  lat: 41.02411,
                  long: -83.68771833,
                  MeanTP: 0.10,
                  MeanTN: 1.60,
                  MeandisNH4: 0.01,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.01,
                 
                  },
                  
                {
                  number:40,
                  name: "Wetland Pool 40",
                 
                  lat: 41.02408627,
                  long: -83.68646655,
                  MeanTP: 0.08,
                  MeanTN: 1.32,
                  MeandisNH4: 0.04,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.01,
                 
                  },
                 
                {
                  number:41,
                  name: "Wetland Pool 41",
                 
                  lat: 41.02517,
                  long: -83.686015,
                  MeanTP: 0.56,
                  MeanTN: 5.76,
                  MeandisNH4: 0,
                  MeandisNO3: 0.07,
                  MeandisPO4: 0.05,
                 
                  },
                  
                {
                  number:42,
                  name: "Wetland Pool 42",
                 
                  lat: 41.02624333,
                  long: -83.68481,
                  MeanTP: 0.35,
                  MeanTN: 3.30,
                  MeandisNH4: 0.03,
                  MeandisNO3: 0.09,
                  MeandisPO4: 0.07,
                 
                  },
                  
                {
                  number:43,
                  name: "Wetland Pool 43",
                 
                  lat: 41.02600167,
                  long: -83.68352167,
                  MeanTP: 0.13,
                  MeanTN: 4.11,
                  MeandisNH4: 0.26,
                  MeandisNO3: 2.18,
                  MeandisPO4: 0,
                 
                  },
                 
                {
                  number:44,
                  name: "Around Run Upstream",
                 
                  lat: 41.02335333,
                  long: -83.695715,
                  MeanTP: 0.03,
                  MeanTN: 3.07,
                  MeandisNH4: 0.09,
                  MeandisNO3: 2.83,
                  MeandisPO4: 0.02,
                 
                  },
                  
                {
                  number:45,
                  name: "Around Run Connection To P1",
                 
                  lat: 41.02345667,
                  long: -83.69620333,
                  MeanTP: 0.11,
                  MeanTN: 2.71,
                  MeandisNH4: 0.07,
                  MeandisNO3: 2.13,
                  MeandisPO4: 0.07,
                 
                  },
                  
                {
                  number:46,
                  name: "Around Run Downstream",
                 
                  lat: 41.023889,
                  long: -83.698333,
                  MeanTP: 0.04,
                  MeanTN: 1.75,
                  MeandisNH4: 0.05,
                  MeandisNO3: 1.32,
                  MeandisPO4: 0.01,
                 
                  },
                 

    
            
            
    ];
    

// JavaScript for dropdown functionality
var dropdownBtn = document.querySelector('.dropdown-btn');
var dropdownContent = document.querySelector('.dropdown-content');

// Add markers and event listeners dynamically
wetlandsData.forEach(function (wetland) {
    // Add marker for each wetland to the map
    var marker = L.marker([wetland.lat, wetland.long]).addTo(mymap);
    marker.bindPopup(`
        <div style="font-family: Times New Roman, sans-serif; color: #333;">
        <b style="font-size: 16px; color: #007bff;">Wetland Pool:</b>${wetland.name}<br>
        <b style="font-size: 14px; color: #007bff;">Mean TP:</b> ${wetland.MeanTP}<br>
        <b style="font-size: 14px; color: #007bff;">Mean TN:</b> ${wetland.MeanTN}<br>
        <b style="font-size: 14px; color: #007bff;">Mean NH4:</b> ${wetland.MeandisNH4}<br>
        <b style="font-size: 14px; color: #007bff;">Mean NO3:</b> ${wetland.MeandisNO3}<br>
        <b style="font-size: 14px; color: #007bff;">Mean PO4:</b> ${wetland.MeandisPO4}
        </div>
    `);

    // Create a wetlandElement for each wetland in the dropdown
    var wetlandElement = document.createElement('a');
    wetlandElement.textContent = wetland.name;

    // Show the wetland on the map when clicked in the dropdown
    wetlandElement.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default behavior (e.g., navigating to a new page)
      marker.openPopup();
      dropdownContent.style.display = 'none';
  });

    // Append wetlandElement to dropdownContent
    dropdownContent.appendChild(wetlandElement);
});

// Toggle dropdown visibility when the button is clicked
dropdownBtn.addEventListener('click', function () {
    dropdownContent.style.display = (dropdownContent.style.display === 'block') ? 'none' : 'block';
});

// Close the dropdown if the user clicks outside of it
window.addEventListener('click', function (event) {
    if (!event.target.matches('.dropdown-btn') && !event.target.matches('.dropdown-content')) {
        dropdownContent.style.display = 'none';
    }
});
