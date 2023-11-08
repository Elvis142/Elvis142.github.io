const countries = [
    {
        name: 'Bolivia',
        coordinates: [-16.2902, -63.5887],
        description: 'Military dictatorships (1964-1982)',
        image: 'images/Bolivia.png' 

        
    },
    {
        name: 'Ecuador',
        coordinates: [-1.8312, -78.1834],
        description: 'State violence, human rights violations and political instability (1983 - 2008)',
        image: 'images/Ecuador.png' 
    },
    {
        name: 'Panama',
        coordinates: [8.5375, -80.7821],
        description: 'Military dictatorships (1968-1989)',
        image: 'images/Panama.png' 
    },
    {
        name: 'Chile',
        coordinates: [-35.6751, -71.5430],
        description: 'Pinochet dictatorship (1973-1990)',
        image: 'images/Chile.png' 
    },
    {
        name: 'Paraguay',
        coordinates: [-23.442503, -58.443832],
        description: 'Stroessner dictatorship (1954-1989)',
        image: 'images/Paraguay.png' 
    },
    {
        name: 'Peru',
        coordinates: [-9.1900, -75.0152],
        description: 'Internal armed conflict (1980-2000)',
        image: 'images/Peru.png' 
    },
    {
        name: 'Uruguay',
        coordinates: [-32.5228, -55.7658],
        description: 'Military dictatorship (1973-1985)',
        image: 'images/Uruguay.png' 
    },
    {
        name: 'Brazil',
        coordinates: [-14.2350, -51.9253],
        description: 'Military dictatorship (1964-1985)',
        image: 'images/Brazil.png' 
    },
    {
        name: 'Argentina',
        coordinates: [-38.4161, -63.6167],
        description: 'Dictatorship (1976-1983)',
        image: 'images/Argentina.png' 
    },
    {
        name: 'Venezuela',
        coordinates: [6.4238, -66.5897],
        description: 'Social crises and Bolivarian Revolution (1989-)',
        image: 'images/Venezuela.png' 
    },
    {
        name: 'Colombia',
        coordinates: [4.5709, -74.2973],
        description: 'Internal Armed Conflict (1960s-)',
        image: 'images/Colombia.png' 
    },
    {
        name: 'El Salvador',
        coordinates: [13.7942, -88.8965],
        description: 'Civil war (1980-1992)',
        image: 'images/ElSalvador.png' 
    }
];

const southAmericaBounds = [
    [-56.4, -180], // Southwest
    [19.5, -35]    // Northeast
];

const filteredCountries = countries.filter(country => {
    // Check if the country's coordinates are within the South America bounds
    const [lat, lng] = country.coordinates;
    return lat >= southAmericaBounds[0][0] && lat <= southAmericaBounds[1][0] &&
        lng >= southAmericaBounds[0][1] && lng <= southAmericaBounds[1][1];
});

const map = L.map('map').setView([-15, -60], 3);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

filteredCountries.forEach(country => {
    const marker = L.marker(country.coordinates)
        .addTo(map)
        .on('click', function() {
            const popupContent = `
                <img src="${country.image}" alt="Flag of ${country.name}" style="width:200px; height:auto;"><br> <!-- Image tag -->
                <strong>${country.name}</strong><br>
                <strong>Description:</strong> ${country.description}<br><br>
            `;
            L.popup()
                .setLatLng(marker.getLatLng())
                .setContent(popupContent)
                .openOn(map);
        });
});

map.setMaxBounds(southAmericaBounds);
map.on('drag', function () {
    map.panInsideBounds(southAmericaBounds, { animate: true });
});

const countrySelect = document.getElementById('country-select');
filteredCountries.forEach(country => {
    const option = document.createElement('option');
    option.value = country.name;
    option.textContent = country.name;
    countrySelect.appendChild(option);
});


// Event listener for country selection
countrySelect.addEventListener('change', function () {
    const selectedCountryName = countrySelect.value;
    const selectedCountry = countries.find(country => country.name === selectedCountryName);

    if (selectedCountry) {
        // Center the map on the selected country's coordinates
        map.setView(selectedCountry.coordinates, 6);

        // Show a popup with the selected country's information
        const popupContent = `
            <img src="${selectedCountry.image}" alt="Flag of ${selectedCountry.name}" style="width:200px; height:auto;"><br> <!-- Image tag -->
            <strong>${selectedCountry.name}</strong><br>
            <strong>Description:</strong> ${selectedCountry.description}<br><br>
        `;

        // Create a marker and popup for the selected country
        const marker = L.marker(selectedCountry.coordinates)
            .addTo(map)
            .bindPopup(popupContent)
            .openPopup();
    }
});


