# Truck Detection 

## Short Description  
  The Truck detection algorithm detects the number of moving trucks along roads using Sentinel-2 level 2A data.  
  The author [Henrick Fisser](https://twitter.com/fisserhenrik), developed this algorithm (with the title: Truck detection – Sensing trade from space) in the context of the Euro Data Cube COVID-19 edition of Sentinel Hub’s custom script contest. 
  The algorithm exploits the small offset between Sentinel-2 bands which causes moving objects to appear as rainbows in RGB images allowing the detection and mapping of moving trucks.  
 
## Method
The **detection method** exploits small sensing offset of different wavelength that moving objects have in Sentinel-2 data which causes a specific reflectance relationship in the RGB, which looks like a rainbow. The method only targets the blue part of the ‘rainbow’ truck object since the dominance of blue reflectance is rare over land surfaces. This blue part of the truck serves as a marker. The detection is then achieved through reflectance band math calculations.  
**Initial step** - Create a road mask, Check that the following conditions are fulfilled:

- 0.06 < B02 < 0.2 - avoid building shadows
- B03 > 0.04 - avoid building shadows
- B04 > 0.04 - avoid building shadows
- B04 < 0.15 - avoid industry, greenhouses and other surfaces of very high reflectance
- B03 < 0.15 - avoid industry, greenhouses and other surfaces of very high reflectance
- B02 < 0.4 - be less strict with blue as we target it
- NDVI < 0.5 - avoid vegetation but keep in mind mixed pixels
- NDWI < 0.0001 - avoid water
- NDSI < 0.0001 - avoid snow

**Cloud masking** :
- If B02 > 0.25 or B03 > 0.25 or B04 > 0.25 -> cloudy pixel
- If (B02-B03)/(B02+B03) > 0.2 -> cloudy pixel
- If (B02-B04)/(B02+B04) > 0.2 -> cloudy pixel
- If (SLC == 8) or (SCL == 9) or (SCL == 10) or (SCL == 0) -> cloudy pixel

**Final step** - the ratios between B02 (blue) and B03 (green) and B02 and B04 (red) are calculated. The following thresholds are applied:  
- 0.03 < B02-B03-ratio < 0.17
- 0.05 < B02-B04-ratio < 0.2

**Result**- Each truck is represented by pixels with value 1. Connected pixels are filtered to identify single trucks and then  vectorized to get the final result. 
 
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
The output of the algorithm is locations (point geometries) and dates of detected trucks.

### Supported Output Format
 - GeoPackage (.gpkg)
 - Shapefile (.shp)
 - GeoJson (.geojson)  
 
### Supported Output Location  
 - S3 bucket  
 - EDC Workspace  
 - Direct download (for a limited time)

## Pricing
coming soon

## More Information
### Resources
 - The original code is available in [github repository](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19)  

### Application Areas
 - Monitor truck traffic
 - Sense disruptions of logistic flow
 - Complement highway usage data

### Limitations
 - False positives possible particularly in urban areas
 - Assumes moving vehicles
 - Difficult to validate vehicles of type truck only. 

### Examples

![trucks on sentinel 2](trucks.png)  

_example of trucks visible on sentinel 2 image_

![detected_trucks_](carlifornia.png)  

_Example of trucks detected (green dots) by the algorithm along Ventura freeway, southern California on 22-07-2020 with Sentinel 2 image overlay_



 

