# Denmark GSAA

## Short Description  
Danish Geo-spatial Aid Application (GSAA) data collection is managed by [the Danish Agency for Agriculture](https://lbst.dk/om-os/). The data is made available for download on the agency’s website.  Additionally, the metadata are made available and can be searched on [Geodata-info.dk](https://www.geodata-info.dk/srv/eng/catalog.search#/home) which is managed by [the Danish Agency for Data Supply and Efficiency](https://sdfe.dk/).

This collection is comprised of agricultural fields ("Marker") which are an extract of fields notified to the Danish Agency for Agriculture from the most recent application year. A field is defined as a contiguous area on which one crop is grown. 

The fields are drawn in the internet field map (Internet Markkort (IMK)) by applicants wishing to apply for area support based on the available orthophotos. Additionally, the applicants submit a community form which together with the area of the notified field, form the basis for the payment of area aid. It is the responsibility of applicants that the field blocks are correct, however, as the Danish Agency for Agriculture must pay support based on accurate data, the field blocks are audited continuously throughout the year and updated in the internet field map (Internet Markkort (IMK)). Other related services are updated daily and reflect the current situation.  

Applicants also can submit amendments to their fields based on orthophotos taken during spring every year which are then made available during Autumn that same year.  Each field contains attributes with indication of field number, record number, CVR number, geographic area of the field, area eligible for basic payment, if basic payment is applied for or not (with values 1/0), crop code and crop name. 

Before June 1 annually, the agency shows datasets of previous year’s fields. After June 1 the dataset comprises of the current year’s fields. 


## Coordinate Reference System  

EPSG:25832 (ETRS89 / UTM zone 32N) , [more info](https://epsg.io/25832)  

Use the GDAL command below to convert the GSAA collection's CRS into CRS of your choice:

```
ogr2ogr [-s_srs srs_def] [-t_srs srs_def] [dstfile] [srcfile]
```
- `s_srs <srs_def>`: set source spatial reference
- `t_srs <srs_def>`: set target spatial reference
- `<dstfile>`: file with destination projection definition
- `<srcfile>`: file with source projection definition

Example of converting  from EPSG:25832 to EPSG:3857 
```
ogr2ogr -s_srs EPSG:25832 -t_srs EPSG:3857 gsaa_3857.shp gsaa_25832.shp
```

## Attribute Information  

### Table 1: Description of Attributes
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
      <td>JOURNALNR</td>
      <td >String</td>
      <td>Record number (available only for the collections 2016-2019) </td>
    </tr>
    <tr>
      <td>CVR</td>
      <td >String </td>
      <td> Registration number (available only for the collections 2011-2019)
    </td>
    </tr>
    <tr>
      <td>MARKNR</td>
      <td >String </td>
      <td> Field number</td>
    </tr>
    <tr>
      <td>AFGROEDE</td>
      <td >String</td>
      <td > Crop name (available only for the collections 2010-2019)
      </td>
    </tr>
    <tr>
      <td>AFGKODE</td>
      <td >Integer </td>
      <td>Crop code (available only for the collections 2010-2019)
    </td>
    </tr>
    <tr>
      <td>IMK_AREAL</td>
      <td >Double </td>
      <td> Total geographic area of the field in hectares
    </td>
    </tr>
    <tr>
      <td>GBANMELDT</td>
      <td >Double</td>
      <td> Area eligible for basic payment in hectares (available only for the 2019 collection)
    </td>
    </tr>
    <tr>
      <td>GB</td>
      <td >Integer</td>
      <td> If basic payment is applied for or not (1/0) (available only for the collections 2011-2019)
    </td>
    </tr>
  </tbody>
</table>   


### Table 2: Description of crop names
Download [description of crop names.xlsx](GSAA_DK_Description_of_crop_names.xlsx) 

## More Information

### References  

- [The Danish Agency for Agriculture](https://lbst.dk/landbrug/kort-og-markblokke/oversigt-over-al-kortdata-fra-landbrugsstyrelsen/#c30679)

- [Geodata-info.dk](https://sdfe.dk/hent-data/geodata-info/) . The Danish geoportal for spatial data and services.


### Online Resources    

- [Publicly available compressed ESRI Shapefiles](https://kortdata.fvm.dk/download/Index?page=Markblokke_Marker), updated at least every three years for the previous years Download under ‘Marker’. There are no limitations to the use of these data.    

- [Danish geoportal for spatial data, services search and metadata descriptions](https://www.geodata-info.dk/srv/eng/catalog.search#/home). Search ‘Marker’  

- [INSPIRE geoportal](https://inspire-geoportal.ec.europa.eu/results.html?country=dk&view=details&theme=none). Search ‘Marker’  
 
- Explore on Danish Agency for Agriculture's [MiljøGIS profile (public graphical viewer)](http://miljoegis.mim.dk/spatialmap?profile=lbst). Under ‘Marker’ section 

### Geographic Location  

![geographic location](dk_geographic_location.png)
Source: ESRI National Geographic

