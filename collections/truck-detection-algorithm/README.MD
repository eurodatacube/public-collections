# Truck Detection Algorithm

## Short Description  
  The Truck detection algorithm detects the number of moving trucks along roads using Sentinel-2 level 2A data.  
  The author [Henrick Fisser](https://twitter.com/fisserhenrik), developed this algorithm (with the title: Truck detection – Sensing trade from space) 
  in the context of the Euro Data Cube COVID-19 edition of Sentinel Hub’s custom script contest. It has now been integrated into the
  [Rapid Action on COVID-19 with Earth Observation](https://race.esa.int/) dashboard.
  The algorithm exploits the small offset between Sentinel-2 bands which causes moving objects to appear as rainbows in RGB images allowing the detection and mapping of moving trucks.   

## Method


## Input Parameters

### Table 1: Required Parameters
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Type </th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>aoi</td>
      <td>bbox</td>
      <td>Area of Interest</td>
    </tr>
    <tr>
      <td>projection</td>
      <td>int</td>
      <td>Projection</td>
    </tr>
    <tr>
      <td>time_period</td>
      <td>daterange</td>
      <td>Time period</td>
    </tr>
    <tr>
      <td>osm_Values</td>
      <td>stringlist</td>
      <td>OSM Values</td>
    </tr>
    <tr>
      <td>maxCC</td>
      <td>int</td>
      <td>Maximal cloud coverage</td>
    </tr>
    <tr>
      <td>week_days</td>
      <td>stringlist</td>
      <td>Week days</td>
    </tr>
   </tbody>
</table>  

## Output
### Supported Output Format
- GeoPackage (.gpkg)
- Shapefile (.shp)

### Supported Output Location
- S3 bucket
- EDC Workspace
- Direct download for a limited time.

## Pricing

## More Information

### References


 

