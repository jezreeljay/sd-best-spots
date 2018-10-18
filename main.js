$(document).ready(function() {
// write your code here

    $.getJSON("data.json", function(data) {
        let row = $('tr');
        let name = $('td');
        let desc = $('td');
        let location = $('td');
        let mapLink = $('<a>');
        row.append(name, desc, location);
        location.append(mapLink);
        name.html('name');
        desc.html('description');
        location.html('location');
        mapLink.html('Open in Google Maps');
        for (let i=0; i < data.length; i++) {
            row = $('<tr>');
            name = $('<td>', {'class': 'name'});
            desc = $('<td>', {'class': 'desc'});
            location = $('<td>', {'class': 'location'});
            mapLink = $('<a>', {'class': 'btn'});
            name.html(data[i].name);
            desc.html(data[i].description);
            mapLink.html('Open in Google Maps').attr({href:'https://www.google.com/maps?q='+data[i].location[0]+','+data[i].location[1], target:'_blank'});
            row.append(name, desc, location.append(mapLink));
            $('#top-spots').append(row);
        }
    });
});
