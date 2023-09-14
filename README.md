# SpotScope

## Project Overview

SpotScope is an IP geolocation tool that provides detailed geographical information about IP addresses. It is designed for curious users who want to locate IP addresses. Input an IPv4 address and SpotScope fetches its associated geolocation information, visualizing the approximate location on a map.

---

## Features

### IP to Location Mapping
- Accepts IP addresses in IPv4 format (`x.x.x.x`, where `x` is a number between 0 and 255).
- Fetches relevant geolocation details such as city, longitude, and latitude.

### Visual Representation
- Visualizes the fetched geolocation data on a map, pinpointing the approximate location.

### Database Lookup
- Utilizes a MongoDB database, hosted on a MongoDB cluster, that is populated with a scaled-down version of GeoLite2 data from MaxMind.

### Error Handling
- If the IP address is not found within the database, the application notifies users.

---

## Deployment Plans

- Currently, the full-scale version of SpotScope cannot be deployed since the complete MongoDB database (3.8 mill docs) cannot be hosted on MongoDB Atlas using the free plan. 
- There are plans to scale up to a paid plan on MongoDB Atlas but they won't happen within the immediate future.
- I've deployed a scaled down version of my product which can be found here: [tinyurl.com/SpotScope](https://tinyurl.com/SpotScope)

**Note:** 
- This scaled down version can only accept IP addresses from **1.0.0.0 to 45.150.X.X** 
- There are currently some **known** bugs with the application owing to incomplete fields in the `cityBlocks` collection in the GeoLite2 dataset. It is currently under active debugging so please bear that in mind. I plan to use a different dataset which can take some time to complete owing to a busy schedule.

---

## Technical Details

### Updating the Database

1. The MongoDB database is initially populated with GeoLite2 data.
2. Each IP address is stored with its corresponding start and end numeric addresses for easy range identification.

### How It Works

1. **IP Address Conversion**: When a user inputs an IPv4 address, it gets converted to a numeric format using the following JavaScript function:

``` javascript
function ConvertIPToNumber(ipAddress) {
  const ipSegments = ipAddress.split('.');
  let numericIP = 0;
  for (let i = 0; i < ipSegments.length; i++) {
    numericIP = numericIP * 256;
    numericIP += Number(ipSegments[i]);
  }
  return numericIP;
}
```

2. **Database Search**: The converted numeric IP is then used to search through the `cityBlocks` collection in MongoDB.
3. **Fetching Geoname ID**: Upon finding a match, the function retrieves the corresponding `geoname_id`.
4. **Locating City Details**: The `geoname_id` is used to search through the `cityLocations` collection, and the relevant information is displayed to the user.

---

## License and Copyright
Copyright © 2023 Akshay Kannan. All rights reserved.

**IMPORTANT:** This codebase and all its contents are proprietary and confidential. Any unauthorized use, reproduction, or distribution of the content is strictly prohibited. Any violation may result in legal action.
