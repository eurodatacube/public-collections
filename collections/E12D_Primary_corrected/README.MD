# E12D_Primary_corrected

## Short description

This indicator is based on the detection of moving trucks on motorways in the EU. The detection uses data from the Copernicus Sentinel-2 satellite.

This indicator is based on a method that enables to detect trucks on a large scale using Sentinel-2 data. The method exploits an effect related to the Sentinel-2 Multispectral Instrument (MSI) geometry. Sentinel-2 does not see a moving truck once but three times in the red-blue-green wavelengths. As the truck keeps traveling during this short time offset, it appears spectrally disassembled. This pattern may be used for detecting roaming trucks on roads. Although visual inspection cannot confirm that the objects are trucks, this is implied by the ratio between size of different vehicles and a Sentinel-2 pixel (see validation for details). However, a confusion with moving vehicles of similar size such as buses may occur. In order to generally reduce false detections the computation is constrained to road data from Open Street Maps (OSM).

Detected trucks in 2020 are compared with the median value of the baseline years 2017, 2018 and 2019. In each period the number of detected trucks in an area is divided by the number of observations in order to make the figures comparable across the continent. The counts of each year are compared with the baseline value, which is the median of the three baseline years. The median is used in order to reduce arbitrary oscillations of the baseline. Truck counts higher or lower 5 % than the baseline are denoted as 'High' or 'Low' respectively.

## Band information

The product contains one single band named "PrimaryRoadsActivity" expressed in number of trucks per month in heat maps.

## More information

- [Data Source](https://github.com/hfisser/Truck_Detection_Sentinel2_COVID19)
- [Data Documentation](https://www.sentinel-hub.com/docs/covid19/Henrik_Fisser-Truck_detection_S2_Covid19.zip)

![Europe, Number of Trucks (Beta) Primary Roads](PrimaryRoads.PNG)<br>
*Europe, Number of Trucks (Beta) Primary Roads*
