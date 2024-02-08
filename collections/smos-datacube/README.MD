![smos-logo](smos-logo.jpg)

# SMOS Level-2C Datacube Service

The service provides [ESA SMOS](https://earth.esa.int/eogateway/missions/smos) 
Level-2 data in form of global, analysis-ready Level-2C datacubes with the 
dimensions `time`, `lat`, and `lon`. The datacubes are computed on-the-fly 
from the SMOS data archive `s3://EODATA/SMOS` hosted on 
[CREODIAS](https://creodias.eu/). 


## Spatial coverage and resolution

The SMOS data is provided globally using a geographic projection
(`EPSG:4326` aka WGS84, World Geodetic System 1984). 

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

| Name         | Type    | Value range                            |
|--------------|---------|----------------------------------------|
| product_type | string  | "SMOS-L2C-SM" or "SMOS-L2C-OS"         |
| res_level    | integer | 0 to 4, defaults to 0                  |
| time_range   | string  | "YYYY-MM-DD/YYYY-MM-DD"                |
| agg_interval | string  | "", "1d", "2d", "4d", defaults to "1d" |

## Service output

The output of the service is a SMOS Level-2C raster datacube comprising 
a number of geophysical data variables with the dimensions `time`, `lat`, 
and `lon`. The variables depend on the selected SMOS product type, either
Soil Moisture or Ocean Salinity.

The datacube is provided as a 
[Zarr v2](https://zarr.readthedocs.io/en/stable/spec/v2.html) dataset (`.zarr`).

## Supported delivery methods

- AWS S3 bucket  
- EOxHub Managed Object Storage
- One-time Download 

## Pricing

- The price depends solely on the number of data days _N_ included in the data 
  cube. It is roughly _50N / log(29N)_ EUR. 
