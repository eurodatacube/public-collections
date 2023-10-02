# Sentinel-1 GRD CARD4L Processing

## Short Description

  Sentinel Hub provides the full archive of global Sentinel-1 GRD data, which can be processed based on [CARD4L NRB (Normalised Radar Backscatter)](https://ceos.org/ard) requirements to reduce the complexity of SAR data. The satellite data is processed to a minimum set of requirements and organized into a form, that allows immediate analysis with minimum user effort. Through the Euro Data Cube [Insights On Demand](https://eurodatacube.com/marketplace/data-products/on-demand) service, you can trigger on-demand processing of CARD4L compliant Sentinel-1 GRD data through [EDC Browser](https://browser.eurodatacube.com/?zoom=10&lat=41.9&lng=12.5&fromTime=1970-01-01T00%3A00%3A00.000Z&toTime=2021-10-22T14%3A36%3A31.329Z&algorithm=card4l)  and have the products delivered to a specified S3 bucket.  
  To access sample processed data, we provide freely accessible Sentinel-1 GRD archived CARD4L data covering Africa Continent [here](https://collections.eurodatacube.com/card4l/), in collaboration with [Geoscience Australia](http://www.ga.gov.au/) and [ESA](https://www.esa.int/). 

## Steps to process Sentinel-1 CARD4L data

1. Create EDC account [here](https://eurodatacube.com/register) and purchase enough [credits](https://eurodatacube.com/support?faq=purchase_credits)
1. Navigate to [EDC Browser](https://browser.eurodatacube.com/?zoom=10&lat=41.9&lng=12.5&fromTime=1970-01-01T00%3A00%3A00.000Z&toTime=2021-10-22T14%3A36%3A31.329Z&algorithm=card4l)
2. Select the required input parameters
3. Follow the check-out wizard to complete your order.

## Algorithm Input Parameters

Based on the selected input parameters, an analysis is run to determine the number of datatakes, distinct dates and total area of the data to be processed. The processing is currently limited to 20 datatakes. For larger orders, customers should get in contact with [Sentinel Hub support](https://forum.sentinel-hub.com/c/euro-data-cube/). 

### Table 1: Required parameters

| Parameter          | Possible values                         | Description                                        | 
| ---------------    | ----------------------------------------| -------------------------------------------------- | 
| Area of Interest   | Polygon or Rectangle | Area of Interest | 
| Time range         | From 2014-10-01 to date | Start and end date of the data to be processed | 
| Bucket Name        | The name of the AWS S3 bucket where the processed products will be delivered | Bucket must be in eu-central-1 region and configured to allow full access to Sentinel Hub. Check [aws bucket settings](https://docs.sentinel-hub.com/api/latest/api/batch/#aws-bucket-settings) | 

## Product specifications

### Table 2: Sentinel-1 CARD4L product specifications

| Specification               | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| Data source                 | Sentinel-1 GRD ([read more](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/)) |
| Sensor                      | C-SAR                                                        |
| Frequency                   | C-band (5.405 GHz)                                           |
| Acquisition mode            | Interferometric Wide (IW) swath mode ([read more](https://sentinels.copernicus.eu/web/sentinel/user-guides/sentinel-1-sar/acquisition-modes/interferometric-wide-swath) ). |
| Polarisation                | VV + VH                                                      |
| Backscatter                 | Gamma-0 (γ°)                                                 |
| Backscatter scaling         | Linear power                                                 |
| Coordinate reference system | EPSG: 4326                                                   |
| Pixel spacing - X (degree)  | 0.0002 (≈22.2 m at the Equator)                              |
| Pixel spacing - Y (degree)  | 0.0002 (≈22.2 m at the Equator)                              |
| Number of bands             | 5                                                            |
| Radiometric Terrain Correction| Yes,  based on [Flattening Gamma: Radiometric Terrain Correction for SAR Imagery](https://doi.org/10.1109/TGRS.2011.2120616)                                           |
| Digital Elevation Model     | [Copernicus DEM](https://docs.sentinel-hub.com/api/latest/data/dem/) (10m in EEA, 30m elsewhere) |


## Output  Information

### Table 3: Output Bands

Read more details on the bands [here](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#available-bands-and-data)

| Name  | Description                                     | Typical Range                                      | Sentinel Hub units |
| ----- | ----------------------------------------------- | -------------------------------------------------- | ------------------ |
| VV    | Linear backscatter intensity in VV polarization | 0 - 0.5 (Can reach very high values such as 1000)  | LINEAR_POWER       |
| VH    | Linear backscatter intensity in VH polarization | 0 - 0.5 (Can reach very high values (such as 1000) | LINEAR_POWER       |
| MASK  | Data mask                                       | 0, 1, 2                                            | DN                 |
| AREA  | Normalized scattering area                      | 0 - 2 (Can reach high values on fore-slopes.)      | DN                 |
| ANGLE | Local incidence angle                           | 0 - 180 degree                                     | DN                 |

### Table 4: Output Metadata

| Name  | Description                                     |
| ----- | ----------------------------------------------- |
| userdata.json | Intermediate metadata used to produce final CARD4L metadata  |
| metadata.json | Local incidence angle                           |
| metadata.xml | STAC compliant CARD4L compliant general metadata |

### Table 5: Data mask definition

| Value | Description                    |
| ----- | ------------------------------ |
| 0     | Nodata                         |
| 1     | Valid data                     |
| 2     | Invalid (in/near radar shadow) |

## Pricing

| Price  | Unit                    |
| ----- | ------------------------------ |
| 10 EUR   | 1.000.000 km²               |  

## Resources
- David Small's article [Flattening Gamma: Radiometric Terrain Correction for SAR Imagery](https://doi.org/10.1109/TGRS.2011.2120616)
- CEOS Analysis Ready Data for Land (CARD4L) [Product  Family specifications](https://ceos.org/ard/)
- CARD4L [Product Family Specification, Normalised Radar Backscatter](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf)
- EDC Checking-out "data on demand" [documentation](https://eurodatacube.com/documentation/checking_out_data_on_demand)
- Access processed archived data for areas within Africa [here](https://collections.eurodatacube.com/card4l/)

### Examples

<img src="blue_nile_ethiopia.png" alt="Blue Nile Ethiopia" width="100%"/>

*RGB visualisation of Blue Nile river looping across northwest Ethiopia . Contains modified Copernicus data [2022], processed by [Sentinel Hub](https://www.sentinel-hub.com/).*
