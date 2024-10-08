# Urban Delineation

## Short description 

Urban delineation algorithm classify and delineate urban clusters by typologies. Method was developed by Joint Research Centre (JRC) and described in Atlas of Human Planet 2019 
The algorithm uses the global-coverage built-up (GHS-BUILT-S_GLOBE_R2022A) and population (GHS-POP_GLOBE_R2022A) raster datasets as the input data (JRC’s GHSL).
The algorithm classifies and delineates settlements by typologies on two hierarchical levels.

At the first hierarchical level, the algorithm identifies the High Density Clusters (Urban Centre) and Moderate Density Clusters.

At the second hierarchical level, the algorithm identifies the High Density Clusters (Urban Centre), Dense Urban Clusters, Semi-Dense Urban Clusters and Peri-Urban Clusters.

## GHSL Data products

The Urban delineation algorithm combines two data products from the [Global Human Settlement Layer (GHSL) Data Package 2022](https://ghsl.jrc.ec.europa.eu/documents/GHSL_Data_Package_2022.pdf). Both are available as xcube datasets.

 GHS-BUILT-S R2022A - GHS built-up surface grid
 
 GHS-POP R2022A - GHS population grid 

#### GHSL products parameters
Spatial resolution: 1km

Coord. system: Mollweide (ESRI:54009)

Reference years: from 1975 to 2020, 5 years interval



## Results 

Geojson files containing polygons of High Density Clusters (Urban Centre), Moderate Density Clusters, Dense Urban Clusters, Semi-Dense Urban Clusters and Peri-Urban Clusters in selected AOI and reference year. 

The polygons are projected onto the WGS84 coordinate reference system.

### First hierarchical level 

<img src="ghsl-urban-delineation-level1-nomenclature.png" alt="level1 momenclature" width="50%"/>

<br>
<br>
First hierarchical level - definition

<br>
<img src="ghsl-urban-delineation-level1-definition.png" alt="level1 definition" width="50%"/>

<br>
<br>
First hierarchical level - result

<br>
<img src="ghsl-urban-delineation-level1-result.png" alt="polygons - result at the first hierarchical level" width="50%"/>
<br>
<br>

### Second hierarchical level 

<img src="ghsl-urban-delineation-level2-nomenclature.png" alt="level2 momenclature" width="50%"/>

<br>
<br>
Second hierarchical level - definition

<br>
<img src="ghsl-urban-delineation-level2-definition.png" alt="level2 definition" width="70%"/>

<br>
<br>
Second hierarchical level - result

<br>
<img src="ghsl-urban-delineation-level2-result.png" alt="polygons - result at the second hierarchical level" width="50%"/>
<br>

## Pricing
[Details in PRICING.MD](https://collections.eurodatacube.com/ghsl-urban-delineation/pricing.html)
