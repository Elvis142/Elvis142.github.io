// Initialize the map
var mymap = L.map('map').setView([41.0236407,-83.6883797], 16 );

// Add a base layer (you can choose different tile layers)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(mymap);

// Updated Wetland data for multiple wetlands
var wetlandsData = [
    {
        name: "Wetland Pool 1",
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
        MeanEC: 49.42
    },
    {
     
        name: "Wetland Pool 2",
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
        MeanEC: 23.81
      },
      {
        
        name: "Wetland Pool 3",
       
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
        MeanEC: 46.79
     
      },
      {
        
        name: "Wetland Pool 4",
       
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
        MeanEC: 120
      
    
      
      },
      {
        
        name: "Wetland Pool 5",
        
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
        MeanEC: 117
      
       
      },
      {
       
        name: "Wetland Pool 6",
        
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
        MeanEC: 114
      
        
      },
      {
        
        name: "Wetland Pool 7",
        
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
        MeanEC: 115
      
      },
      {
        
        name: "Wetland Pool 8",
       
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
        MeanEC: 114
      
      },
      {
        
        name: "Wetland Pool 9",
        
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
        MeanEC: 113
      
      },
      {
        
        name: "Wetland Pool 10",
       
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
        MeanEC: 240
      
      },
      {
       
        name: "Wetland Pool 11",
       
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
            MeanEC: 240
          
        },
        {
            
            name: "Wetland Pool 12",
            
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
                MeanEC: 199
              
           
          },
          {
            
            name: "Wetland Pool 13",
            
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
            MeanEC: 186
          
            },
            {
                
                name: "Wetland Pool 14",
               
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
                    MeanEC: 13.90
                  
           
              },
              {
                
                name: "Wetland Pool 15",
                
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
                    MeanEC: 158
                  
                
              },
              {
                
                name: "Wetland Pool 16",
               
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
                    MeanEC: 22.32
                  
                
           
              },
              {
                
                name: "Wetland Pool 17",
               
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
                    MeanEC: 11.49
                  
                
              },
              {
                
                name: "Wetland Pool 18",
               
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
                    MeanEC: 16.77
                  
              },
              {
                
                name: "Wetland Pool 19",
               
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
                    MeanEC: 19.62
                  
                
              },
              {
                
                name: "Wetland Pool 20",
               
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
                    MeanEC: 95.16
              },
              {
                
                name: "Wetland Pool 21",
               
                lat: 41.023775, 
                long: -83.68677333, 
                MeanTP: 650,
                MeanTN: 1766,
                MeanM3P: 32.4,
                MeanM3Fe: 632,
                MeanM3Al: 828,
                MeanSPSC: 97.75,
                MeanwEXp: 1.27,
                MeanwEXNH3: 0.52,
                MeamwEXNOx: 8.46,
                MeanpH: 6.21,
                MeanEC: 102 
                  
              },
              {
                
                name: "Wetland Pool 22",
               
                lat: 41.0249, 
                long: -83.6873, 
                MeanTP: 633,
                MeanTN: 1414,
                MeanM3P: 19.91,
                MeanM3Fe: 334,
                MeanM3Al: 722,
                MeanSPSC: 81.51,
                MeanwEXp: 0.57,
                MeanwEXNH3: 0,
                MeamwEXNOx: 5.45,
                MeanpH: 6.43,
                MeanEC: 135 
                  
              },
              {
                
                name: "Wetland Pool 23",
               
                lat: 41.02476968, 
                long: -83.68654744, 
                MeanTP: 688,
                MeanTN: 2005,
                MeanM3P: 8.57,
                MeanM3Fe: 189,
                MeanM3Al: 717,
                MeanSPSC: 84.5,
                MeanwEXp: 1.48,
                MeanwEXNH3: 0.74,
                MeamwEXNOx: 4.04,
                MeanpH: 6.79,
                MeanEC: 62.17
                  
              },
              {
                
                name: "Wetland Pool 24",
               
                lat: 41.02404073, 
                long: -83.68573768, 
                MeanTP: 786,
                MeanTN: 2246,
                MeanM3P: 27.66,
                MeanM3Fe: 458,
                MeanM3Al: 822,
                MeanSPSC: 92.40,
                MeanwEXp: 2.11,
                MeanwEXNH3: 0,
                MeamwEXNOx: 7.95,
                MeanpH: 6.74,
                MeanEC: 125
                  
              },
              {
                
                name: "Wetland Pool 25",
               
                lat: 41.0239, 
                long: -83.68451, 
                MeanTP: 628,
                MeanTN: 1548,
                MeanM3P: 29.15,
                MeanM3Fe: 416,
                MeanM3Al: 724,
                MeanSPSC: 77.07,
                MeanwEXp: 1.57,
                MeanwEXNH3: 3.78,
                MeamwEXNOx: 6.12,
                MeanpH: 7.38,
                MeanEC: 174
                  
              },
              {
                
                name: "Wetland Pool 26",
               
                lat: 41.0246615, 
                long: -83.68480713, 
                MeanTP: 579,
                MeanTN: 1484,
                MeanM3P: 21.66,
                MeanM3Fe: 547,
                MeanM3Al: 705,
                MeanSPSC: 89.6,
                MeanwEXp: 1.90,
                MeanwEXNH3: 4,
                MeamwEXNOx: 5.43,
                MeanpH: 6.58,
                MeanEC: 34.40 
                  
              },
              {
                
                name: "Wetland Pool 27",
               
                lat: 41.0250677, 
                long: -83.68452684, 
                MeanTP: 630,
                MeanTN: 1451,
                MeanM3P: 10.73,
                MeanM3Fe: 454,
                MeanM3Al: 701,
                MeanSPSC: 95,
                MeanwEXp: 0.89,
                MeanwEXNH3: 0.68,
                MeamwEXNOx: 5.48,
                MeanpH: 6.69,
                MeanEC: 28.43
                  
              },
              {
                
                name: "Wetland Pool 28",
               
                lat: 41.025697, 
                long: -83.687512, 
                MeanTP: 504,
                MeanTN: 936,
                MeanM3P: 15.95,
                MeanM3Fe: 325,
                MeanM3Al: 642,
                MeanSPSC: 75.85,
                MeanwEXp: 0.70,
                MeanwEXNH3: 0,
                MeamwEXNOx: 4.41,
                MeanpH: 6.47,
                MeanEC: 129
                  
              },
              {
                
                name: "Wetland Pool 29",
               
                lat: 41.0255922, 
                long: -83.68695576, 
                MeanTP: 585,
                MeanTN: 1336,
                MeanM3P: 16.16,
                MeanM3Fe: 515,
                MeanM3Al: 808,
                MeanSPSC: 105,
                MeanwEXp: 1.62,
                MeanwEXNH3: 0,
                MeamwEXNOx: 6.46,
                MeanpH: 6.61,
                MeanEC: 224
                  
              },
              {
                
                name: "Wetland Pool 30",
               
                lat: 41.02529755, 
                long: -83.68665452, 
                MeanTP: 466,
                MeanTN: 888,
                MeanM3P: 7.48,
                MeanM3Fe: 322,
                MeanM3Al: 423,
                MeanSPSC: 59,
                MeanwEXp: 0.70,
                MeanwEXNH3: 0,
                MeamwEXNOx: 6.80,
                MeanpH: 7.17,
                MeanEC: 466
                  
              },
              {
                
                name: "Wetland Pool 31",
               
                lat: 41.0257763, 
                long: -83.68539545, 
                MeanTP: 558,
                MeanTN: 1324,
                MeanM3P: 10.66,
                MeanM3Fe: 497,
                MeanM3Al: 840,
                MeanSPSC: 113,
                MeanwEXp: 0.58,
                MeanwEXNH3: 0,
                MeamwEXNOx: 13.35,
                MeanpH: 7.11,
                MeanEC: 404
                  
              },
              {
                
                name: "Wetland Pool 32",
               
                lat: 41.02597848, 
                long: -83.68398425, 
                MeanTP: 657,
                MeanTN: 1654,
                MeanM3P: 18.28,
                MeanM3Fe: 334,
                MeanM3Al: 677,
                MeanSPSC: 77.8,
                MeanwEXp: 1.36,
                MeanwEXNH3: 0.76,
                MeamwEXNOx: 5.91,
                MeanpH: 7.27,
                MeanEC: 70.9
                  
              },
              {
                
                name: "Wetland Pool 33",
               
                lat: 41.02562025, 
                long: -83.68263845, 
                MeanTP: 682,
                MeanTN: 1220,
                MeanM3P: 12.15,
                MeanM3Fe: 418,
                MeanM3Al: 572,
                MeanSPSC: 76.75,
                MeanwEXp: 1.47,
                MeanwEXNH3: 0.67,
                MeamwEXNOx: 14.86,
                MeanpH: 7.38,
                MeanEC: 92.72
                  
              },
              {
                
                name: "Wetland Pool 34",
               
                lat: 41.02577748, 
                long: -83.68236927, 
                MeanTP: 565,
                MeanTN: 963,
                MeanM3P: 12.32,
                MeanM3Fe: 401,
                MeanM3Al: 481,
                MeanSPSC: 65.5,
                MeanwEXp: 1.93,
                MeanwEXNH3: 3.05,
                MeamwEXNOx: 4.52,
                MeanpH: 7.45,
                MeanEC: 97.07 
                  
              },
              {
                
                name: "Wetland Pool 35",
               
                lat: 41.02658766, 
                long: -83.68296658, 
                MeanTP: 641,
                MeanTN: 1475,
                MeanM3P: 12.36,
                MeanM3Fe: 387,
                MeanM3Al: 589,
                MeanSPSC: 76.6,
                MeanwEXp: 1.65,
                MeanwEXNH3: 1.69,
                MeamwEXNOx: 7.97,
                MeanpH: 6.98,
                MeanEC: 64.7 
                  
              },
              {
                
                name: "Wetland Pool 36",
               
                lat: 41.026435, 
                long: -83.68391333, 
                MeanTP: 593,
                MeanTN: 1472,
                MeanM3P: 13.12,
                MeanM3Fe: 162,
                MeanM3Al: 545,
                MeanSPSC: 58.6,
                MeanwEXp: 1.94,
                MeanwEXNH3: 0.80,
                MeamwEXNOx: 3.61,
                MeanpH: 6.92,
                MeanEC: 37.2
                  
              },
              {
                
                name: "Wetland Pool 37",
               
                lat: 41.026111, 
                long: -83.681944, 
                MeanTP: 605,
                MeanTN: 1568,
                MeanM3P: 12.12,
                MeanM3Fe: 333,
                MeanM3Al: 576,
                MeanSPSC: 72.42,
                MeanwEXp: 1.52,
                MeanwEXNH3: 0.92,
                MeamwEXNOx: 4.42,
                MeanpH: 7.05,
                MeanEC: 46.4
                  
              },
              {
                
                name: "Wetland Pool 38",
               
                lat: 41.0241303, 
                long: -83.68730402, 
                MeanTP: 593,
                MeanTN: 1629,
                MeanM3P: 11.42,
                MeanM3Fe: 501,
                MeanM3Al: 718,
                MeanSPSC: 99,
                MeanwEXp: 0.65,
                MeanwEXNH3: 0.72,
                MeamwEXNOx: 5.61,
                MeanpH: 6.32,
                MeanEC: 112 
                  
              },
              {
                
                name: "Wetland Pool 39",
               
                lat: 41.0241303, 
                long: -83.68730402, 
                MeanTP: 593,
                MeanTN: 1629,
                MeanM3P: 11.42,
                MeanM3Fe: 501,
                MeanM3Al: 718,
                MeanSPSC: 99,
                MeanwEXp: 0.65,
                MeanwEXNH3: 0.72,
                MeamwEXNOx: 5.61,
                MeanpH: 6.32,
                MeanEC: 112
                  
              },
              {
                
                name: "Wetland Pool 40",
               
                lat: 41.024722, 
                long: -83.685, 
                MeanTP: 600,
                MeanTN: 1487,
                MeanM3P: 18.74,
                MeanM3Fe: 642,
                MeanM3Al: 512,
                MeanSPSC: 105,
                MeanwEXp: 1.19,
                MeanwEXNH3: 2.83,
                MeamwEXNOx: 4.99,
                MeanpH: 6.82,
                MeanEC: 49.45
                  
              },
              {
                
                name: "Wetland Pool 41",
               
                lat: 41.02520867, 
                long: -83.68591037, 
                MeanTP: 536,
                MeanTN: 1112,
                MeanM3P: 11.6,
                MeanM3Fe: 582,
                MeanM3Al: 724,
                MeanSPSC: 103,
                MeanwEXp: 0.51,
                MeanwEXNH3: 0,
                MeamwEXNOx: 9.73,
                MeanpH: 7.29,
                MeanEC: 315
                  
              },
              {
                
                name: "Wetland Pool 42",
               
                lat: 41.02617482, 
                long: -83.6847705, 
                MeanTP: 715,
                MeanTN: 1646,
                MeanM3P: 11.20,
                MeanM3Fe: 481,
                MeanM3Al: 579,
                MeanSPSC: 82,
                MeanwEXp: 1.17,
                MeanwEXNH3: 0,
                MeamwEXNOx: 5.10,
                MeanpH: 7.18,
                MeanEC: 98.32
                  
              },
              {
                
                name: "Wetland Pool 43",
               
                lat: 41.02602987, 
                long: -83.68347154, 
                MeanTP: 496,
                MeanTN: 796,
                MeanM3P: 5.60,
                MeanM3Fe: 136,
                MeanM3Al: 559,
                MeanSPSC: 66.25,
                MeanwEXp:  1.84,
                MeanwEXNH3: 1.12,
                MeamwEXNOx: 6.25,
                MeanpH: 7.35,
                MeanEC: 69.92
                  
              },
              {
                
                name: "Around Run Upstream",
               
                lat: 41.01938711, 
                long: -83.68823181, 
                MeanTP: 582,
                MeanTN: 2144,
                MeanM3P: 25.45,
                MeanM3Fe: 1334,
                MeanM3Al: 152,
                MeanSPSC: 66,
                MeanwEXp: 0,
                MeanwEXNH3: 2.64,
                MeamwEXNOx: 6.98,
                MeanpH: 7.49,
                MeanEC: 474
                  
              },
              {
                
                name: "Around Run Connection To P1",
               
                lat: 41.023611, 
                long: -83.695834, 
                MeanTP: 543,
                MeanTN: 1587,
                MeanM3P: 20.26,
                MeanM3Fe: 735,
                MeanM3Al: 261,
                MeanSPSC: 50.5,
                MeanwEXp: 2.28,
                MeanwEXNH3: 2.11,
                MeamwEXNOx: 14.342,
                MeanpH: 7.43,
                MeanEC: 357
                  
              },
              {
                
                name: "Around Run Downstream",
               
                lat: 41.02394167, 
                long: -83.698265, 
                MeanTP: 563,
                MeanTN: 2236,
                MeanM3P: 18.48,
                MeanM3Fe: 917,
                MeanM3Al: 426,
                MeanSPSC: 81.4,
                MeanwEXp: 1.05,
                MeanwEXNH3: 0.86,
                MeamwEXNOx: 5.59,
                MeanpH: 7.43,
                MeanEC: 550
                  
              }




   
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
        <b style="font-size: 16px; color: #9b5000;">Wetland Pool:</b>${wetland.name}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean TP:</b> ${wetland.MeanTP}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean TN:</b> ${wetland.MeanTN}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean M3P:</b> ${wetland.MeanM3P}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean M3Fe:</b> ${wetland.MeanM3Fe}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean M3Al:</b> ${wetland.MeanM3Al}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean SPSC:</b> ${wetland.MeanSPSC}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean wEXp:</b> ${wetland.MeanwEXp}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean wEXNH3:</b> ${wetland.MeanwEXNH3}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean wEXNOx:</b> ${wetland.MeamwEXNOx}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean pH:</b> ${wetland.MeanpH}<br>
        <b style="font-size: 14px; color: #9b5000;">Mean EC:</b> ${wetland.MeanEC}
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
