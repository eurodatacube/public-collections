# High-Resolution Snow & Ice Monitoring; River and Lake Ice Extent S1+S2

## Short description

The River and Lake Ice Extent S1+S2 (RLIE S1+S2) product is part of the Copernicus Land Monitoring Service (CLMS), 
pan-European High Resolution Snow and Ice Monitoring [(HR-S&I)](https://land.copernicus.eu/pan-european/biophysical-parameters/high-resolution-snow-and-ice-monitoring) Ice product suite. The River and Lake Ice Extent (RLIE) products measure the presence of ice in rivers and lakes described by the EU-HYDRO network database, in particular the area of snow-free or snow-covered ice. 
The RLIE S1+S2 product is computed from the combination of RLIE S1 and RLIE S2 products. The RLIE S2 product from a given day is gap-filled using the RLIE S1 information from the same day. Because the RLIE S1+S2 is only produced when RLIE S2 and RLIE S1 products are aquired on the same day, it is delivered in delayed-time for the entire EEA39 zone.
More information about the RLIE S1+S2 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum).

## Band information

The RLIE S1+S2 contains three layers: (1) the extent of rivers and lakes, (2) quality layer with confidence levels (QC), and (3) quality flags (QCFLAGS).

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
      <td>bit 1 - dimension (bit 8 active) or topographic shadow (bit 8 inactive), bit 2 - standing water (bit 8 active) or unseen pixels due to topography (bit 8 inactive), bit 3 - radar shadow (bit 8 active) or sun elevation angle too low for an accurate topographic correction (from MAJA), (bit 8 inactive), bit 4 - water & wetness (bit 8 active) or solar elevation angle tangent to slope (from MAJA), (bit 8 inactive), bit 5 - imperviousness ≥75%, bit 6 - tree cover density, bit 7 - grassland, bit 8 - S1-provided information (active) or S2-provided information (inactive) </td>
      <td>RLIE quality flags </td>
    </tr>          
   </tbody>
</table>

## More information

More information about the RLIE S1+S2 product methodology and workflow is outlined in the [product user manual](https://land.copernicus.eu/user-corner/technical-library/hrsi-ice-pum).

### Representative Images

<img src="extent-rovaniemi-findland.png" alt="River and Lake Ice Extent S1+S2" width="100%"/>

*River and Lake Ice Extent S1+S2, 2021, Rovaniemi, Findland.*

<br>
<br>
<img src="qlayer-rovaniemi-findland.png" alt="Confidence levels of the River and Lake Ice Extent layer S1+S2" width="100%"/>
<br>

*Confidence levels of the River and Lake Ice Extent S1+S2, 2021, Rovaniemi, Findland.*