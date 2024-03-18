![smos-logo](smos-logo.jpg)

# SMOS Level-2C Datacube Service

The service provides [ESA SMOS](https://earth.esa.int/eogateway/missions/smos) 
Level-2 data in form of analysis-ready Level-2C datacubes with the 
dimensions `time`, `lat`, and `lon`. The datacubes are computed on-the-fly 
from the SMOS data archive `s3://EODATA/SMOS` hosted on 
[CREODIAS](https://creodias.eu/). 

## Spatial coverage and resolution

The SMOS data is provided globally or for a custom area of interest
using a geographic projection (`EPSG:4326` aka WGS84, 
World Geodetic System 1984). 

Users can choose from five spatial resolutions by specifying a resolution 
level ranging from zero to four. Zero refers to a resolution of 
360/8192 ~ 0.044 degrees ~ 4.88 km. Higher levels subsequently increase the 
resolution by a factor of two.

Note that the native spatial resolution of SMOS data is roughly 25 km. 
This service performs an oversampling of the data to ensure no information
is lost during spatial projection. It therefore uses a nearest-neighbor 
resampling at higher resolution involving pixel duplication. 

## Temporal coverage and resolution

The SMOS satellite completes one orbit approximately every 100.1 minutes.
Therefore, 29 (number of orbits times two) level-2 data products are stored per 
day. If no aggregation interval is specified, the service will append a time 
step for each level-2 data product to the datacube. Otherwise, data variables 
are aggregated by their mean, with a minimum aggregation interval of one day.

Currently, the provided time range must not exceed 400 days.

## Service parameters

| Name         | Type    | Value range                                             |
|--------------|---------|---------------------------------------------------------|
| product_type | string  | "SMOS-L2C-SM" or "SMOS-L2C-OS"                          |
| time_range   | string  | "YYYY-MM-DD/YYYY-MM-DD"                                 |
| agg_interval | string  | "none", "1D", "2D", "4D", defaults to "1D"              |
| bbox         | string  | Spatial AOI as Geometry WKT, defaults global coverage   |
| res_level    | integer | 0 to 4, defaults to 0                                   |

## Service output

The output of the service is a SMOS Level-2C raster datacube comprising 
a number of geophysical data variables with the dimensions `time`, `lat`, 
and `lon`. The variables depend on the selected SMOS product type, either
Soil Moisture or Ocean Salinity. The datacube is provided as a 
[Zarr v2](https://zarr.readthedocs.io/en/stable/spec/v2.html) dataset (`.zarr`).

Soil Moisture datacubes of type `SMOS-L2C-SM` contain the following variables:

| Variable          | Type    | Units  |
|-------------------|---------|--------|
| Soil_Moisture     | float32 | m3 m-3 |
| Soil_Moisture_DQX | float32 | m3 m-3 |
| Chi_2             | uint8   | -      |
| Chi_2_P           | uint8   | -      |
| N_RFI_Y           | uint16  | -      |
| N_RFI_X           | uint16  | -      |
| RFI_Prob          | uint8   | -      |

Ocean Salinity datacubes of type `SMOS-L2C-OC` contain the following variables:

| Variable            | Type     | Units |
|---------------------|----------|-------|
| SSS_anom            | float32  | psu   |
| SSS_corr            | float32  | psu   |
| Sigma_SSS_anom      | float32  | psu   |
| Sigma_SSS_corr      | float32  | psu   |
| Dg_quality_SSS_anom | uint16   | -     |
| Dg_quality_SSS_corr | uint16   | -     |
| Dg_chi2_corr        | uint16   | -     |
| Dg_RFI_X            | uint16   | -     |
| Dg_RFI_Y            | uint16   | -     |
| Coast_distance      | uint8    | -     |
| Mean_acq_time       | float32  | dd    |
| X_swath             | float32  | m     |

## Supported delivery methods

- AWS S3 bucket  
- EOxHub Managed Object Storage
- One-time Download 

## Pricing

The price depends on the selected time range and area of interest. 
The minimum price per request is 10€; a non-linearly increasing discount 
is provided for larger coverages:

| Time range | Spatial AOI | Price |
|------------|-------------|-------|
| 1 day      | 10° x 10°   | 10€   |
| 1 day      | 90° x 90°   | 10€   |
| 1 month    | 90° x 90°   | 25€   |
| 1 month    | global      | 140€  |
| 1 year     | 90° x 90°   | 150€  |
| 1 year     | global      | 1150€ |


