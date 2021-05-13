# Lake Water Quality 300m

## Short description

The Lake Water Quality NRT 300m product provides optical observations of global inland water bodies (nominally 4200) that are either 
 medium and large sized lakes according to Global Lakes and Wetlands Database or most strategic for monitoring. 
 The product consists of three water quality parameters: (1) turbidity, which is a key indicator of water clarity, quantifying the
 haziness of the water and acting as an indicator of underwater light availability.(2) trophic state index, an indicator of  productivity of a lake in terms of 
 phytoplankton and is used for monitoring eutrophication status of a water body and (3) lake water-leaving reflectances which can be used to
 produce true-color images or for further development of the algorithms. The input is Sentinel-3 OLCI L1b data. The products are provided as 10-day averages of 
 the parameters except for lake water-leaving reflectances which corresponds to the  the most representative spectrum of the period of observation. 

## Variables   
### Table 1: specification of the bands of the Lake Water Products   
<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Min</th>
	  <th>Max</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Rw400_rep </td>
      <td > Fully normalized water leaving reflectances at 400nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw412_rep </td>
      <td > Fully normalized water leaving reflectances at 412nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw443_rep </td>
      <td > Fully normalized water leaving reflectances at 443nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw490_rep </td>
      <td > Fully normalized water leaving reflectances at 490nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw510_rep </td>
      <td > Fully normalized water leaving reflectances at 510nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw560_rep </td>
      <td > Fully normalized water leaving reflectances at 560nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw620_rep </td>
      <td > Fully normalized water leaving reflectances at 620nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw665_rep </td>
      <td > Fully normalized water leaving reflectances at 665nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw674_rep </td>
      <td > Fully normalized water leaving reflectances at 674nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    <tr>
      <td>Rw681_rep </td>
      <td > Fully normalized water leaving reflectances at 681nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    <tr>
      <td>Rw709_rep </td>
      <td > Fully normalized water leaving reflectances at 709nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw754_rep </td>
      <td > Fully normalized water leaving reflectances at 754nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw760_rep </td>
      <td > Fully normalized water leaving reflectances at 760nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw764_rep </td>
      <td > Fully normalized water leaving reflectances at 764nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw767_rep </td>
      <td > Fully normalized water leaving reflectances at 767nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw779_rep </td>
      <td > Fully normalized water leaving reflectances at 779nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw865_rep </td>
      <td > Fully normalized water leaving reflectances at 865nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw885_rep </td>
      <td > Fully normalized water leaving reflectances at 885nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw900_rep </td>
      <td > Fully normalized water leaving reflectances at 900nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>Rw940_rep </td>
      <td > Fully normalized water leaving reflectances at 940nm </td>
	  <td> 0 </td>
	  <td> 1</td>
    </tr>
    <tr>
      <td>RwDayNum_rep</td>
      <td > Age, in days, after the start of the observation period, of the most representative water-leaving reflectance spectrum </td>
	  <td> 1 </td>
	  <td> 11</td>
    </tr>
    <tr>
      <td>crs</td>
      <td > Coordinate reference system </td>
	  <td>  </td>
	  <td> </td>
    </tr>
    <tr>
      <td> first_obs</td>
      <td > Number of days passed from the start of the sensing period until the first cloud-free observation </td>
	  <td>  0 </td>
	  <td> 10 </td>
    </tr>
    <tr>
      <td>last_obs</td>
      <td > Number of days passed from the start of the sensing period until the last cloud-free observation </td>
	  <td>  0 </td>
	  <td> 10 </td>
    </tr>
    <tr>
      <td>num_obs</td>
      <td > Number of observations </td>
	  <td>  0 </td>
	  <td> </td>
    </tr>
    <tr>
      <td>trophic_state_mean</td>
      <td > Trophic state index (TSI) obtained from chlorophyll-a observations, averaged over the observation period </td>
	  <td>  0 </td>
	  <td> 100</td>
    </tr>
      <td>turbidity_mean</td>
      <td > Mean turbidity </td>
	  <td>  0 </td>
	  <td> </td>
    </tr>
  </tbody>
</table>  

## More information

- [Data source](https://land.copernicus.eu/global/products/lwq)
- [Product User Manual](https://land.copernicus.eu/global/sites/cgls.vito.be/files/products/CGLOPS2_PUM_LWQ300_1km_v1.3.1_I1.10.pdf)

![ Chesapeake Bay](clms-lake-water-quality.png)  
*Turbidity mean of the Chesapeake Bay, United States as visualised in QGIS*