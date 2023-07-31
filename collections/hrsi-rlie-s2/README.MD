# High-Resolution Snow & Ice Monitoring; River and Lake Ice Extent - Sentinel 2

## Short description

The River and Lake Ice Extent - Sentinel 2 (RLIE S2) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Snow and Ice Monitoring [(HR-S&I)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring) Ice product suite. The River and Lake Ice Extent (RLIE) products measure the presence of ice in rivers and lakes described by the EU-HYDRO network database, in particular the area of snow-free or snow-covered ice. 
The RLIE S2 product is released in near real time for the entire EEA39 zone based on the revisit time of the Sentinel 2 constellation (approximately every 5 days or less). Because it is time critical for several applications, every effort is made to provide near real time ice products between 6 and 12 hours after the data sensing time. 
More information about the RLIE S2 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum).

## Band information

The RLIE S2 contains three layers: (1) the extent of rivers and lakes, (2) quality layer with confidence levels (QC), and (3) quality flags (QCFLAGS).

<table>
  <thead>
    <tr>
      <th>Band Name</th>
      <th>Sample Type</th>
      <th>Expected Values</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>RLIE </td>
      <td >UINT 8 </td>
      <td>1 - open water, 100 - snow covered or snow - free ice, 254 - other features, 205 - cloud or cloud shadows, 255 - no data </td>
      <td>River and lake ice extent </td>
    </tr>
    <tr>
      <td>QC </td>
      <td >UINT8 </td>
      <td>0 - high quality, 1 - medium quality, 2 - low quality, 3 - minimal quality, 205 - cloud or cloud shadow, 255 - no data </td>
      <td>RLIE quality layer </td>
    </tr>  
    <tr>
      <td>QCFLAGS </td>
      <td >       </td>
      <td>bit 1 - topographical shadows, bit 2 - unseen pixels due to topography, bit 3 - sun elevation too low for an accurate topographic correction (from MAJA), bit 4 - solar elevation angle tangent to slope (from MAJA), bit 5 - imperviousness ≥75%, bit 6 - tree cover density ≥75%, bit 7 - grassland=1 </td>
      <td>RLIE quality flags </td>
    </tr>          
   </tbody>
</table>

## More information

<img src="extent-varese-como-lecco-italy.png" alt="Sentinel 2 River and Lake Ice Extent" width="100%"/>

*Sentinel 2 River and Lake Ice Extent, 2022, Varese-Como-Lecco, Italy.*

<br>
<br>
<img src="qlayer-varese-como-lecco-italy.png" alt="Confidence levels of the Sentinel 2 River and Lake Ice Extent layer" width="100%"/>
<br>

*Confidence levels of the Sentinel 2 River and Lake Ice Extent, 2022, Varese-Como-Lecco, Italy.*