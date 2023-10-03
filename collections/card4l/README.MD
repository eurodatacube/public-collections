# Sentinel-1 Radiometric Terrain Corrected SAR Backscatter 

## Short description

Sentinel-1 Radiometric Terrain Corrected SAR Backscatter is a product processed from [Sentinel-1 ground range detected (GRD)](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/) and is compliant with [CEOS Analysis Ready Data for Land (CARD4L)](https://ceos.org/ard/) specifications for Normalised Radar Backscatter (NRB) products. CARD4L compliant products fulfil requirements for general metadata, per-pixel metadata, radiometric and atmospheric corrections and geometric corrections outlined in the NRB  [product family specifications](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf).  

These products are processed using Sentinel Hub [CARD4L generation tool](https://apps.sentinel-hub.com/s1-card4l/) and are radiometrically calibrated to γ° (gamma-nought) backscatter, and provided as linear backscatter power. Full radiometric terrain correction (RTC) based on the technique developed by David Small[1], has been applied using the [Copernicus DEM](https://docs.sentinel-hub.com/api/latest/data/dem/) in order to mitigate topographic terrain effects on the backscatter induced by side-looking geometry of SAR imaging and compounded by rugged terrain. Speckle filtering has not been applied in order to preserve spatial resolution and user freedom.   
The twin Sentinel-1A and 1B satellites are designed to acquire data with a revisit cycle of 6 to 12 days providing continuous all-weather, day and night imagery for Land and Maritime Monitoring. This collection is comprised of CARD4L compliant Sentinel-1 VV and VH backscatter products over Africa for archived data, with new acquisitions being updated daily as they become available. To obtain CARD4L compliant Sentinel-1 data for other parts of the world, registered users have the possibility of custom processing using [CARD4L generation tool](https://apps.sentinel-hub.com/s1-card4l/). 

## Product specifications

#### Table 1:  Sentinel -1 RTC backscatter product  specifications

| Specification               | Description                                                  |
| --------------------------- | ------------------------------------------------------------ |
| Data source                 | Sentinel-1 GRD ([read more](https://sentinel.esa.int/web/sentinel/missions/sentinel-1)) |
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
| Digital Elevation Model     | [Copernicus DEM](https://docs.sentinel-hub.com/api/latest/data/dem/) (10m in EEA, 30m elsewhere) |

### Band information

#### Table 2: Sentinel -1 RTC  backscatter product bands  

Read more details on the bands [here](https://docs.sentinel-hub.com/api/latest/data/sentinel-1-grd/#available-bands-and-data)

| Name  | Description                                     | Typical Range                                      | Sentinel Hub units |
| ----- | ----------------------------------------------- | -------------------------------------------------- | ------------------ |
| VV    | Linear backscatter intensity in VV polarization | 0 - 0.5 (Can reach very high values such as 1000)  | LINEAR_POWER       |
| VH    | Linear backscatter intensity in VH polarization | 0 - 0.5 (Can reach very high values (such as 1000) | LINEAR_POWER       |
| MASK  | Data mask                                       | 0, 1, 2                                            | DN                 |
| AREA  | Normalized scattering area                      | 0 - 2 (Can reach high values on fore-slopes.)      | DN                 |
| ANGLE | Local incidence angle                           | 0 - 180 degree                                     | DN                 |

#### Table 3: Sentinel -1 RTC backscatter product Data mask definition

| Value | Description                    |
| ----- | ------------------------------ |
| 0     | Nodata                         |
| 1     | Valid data                     |
| 2     | Invalid (in/near radar shadow) |

## More information  

### References

- [1] [Flattening Gamma: Radiometric Terrain Correction for SAR Imagery](https://doi.org/10.1109/TGRS.2011.2120616)
- CEOS Analysis Ready Data for Land (CARD4L) [Product  Family specifications](https://ceos.org/ard/)
- CARD4L [Product Family Specification, Normalised Radar Backscatter](https://ceos.org/ard/files/PFS/NRB/v5.5/CARD4L-PFS_NRB_v5.5.pdf)
- Sentinel Hub [CARD4L generation tool](https://apps.sentinel-hub.com/s1-card4l/) 

### Representative Images  

### <img src="blue_nile_ethiopia.png" alt="Blue Nile Ethiopia" width="100%"/> 

*RGB visualisation of Blue Nile river looping across northwest Ethiopia . Contains modified Copernicus data [2022], processed by [Sentinel Hub](https://www.sentinel-hub.com/).*  
<br>
<img src="port_elizabeth_sa.png" alt="Port Elizabeth South Africa" width="100%"/> 

*Visualisation of Port Elizabeth, South Africa based on [Urban Areas Script](https://custom-scripts.sentinel-hub.com/sentinel-1/urban_areas/). Contains modified Copernicus data [2022], processed by [Sentinel Hub](https://www.sentinel-hub.com/) .*

