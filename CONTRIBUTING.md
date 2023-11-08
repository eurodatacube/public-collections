**The goal of this registry is to expand access to useful data collections available on Euro Data Cube.** With that in mind, we prefer to list collections that are clearly documented, actively supported and that can be used for research or educational purposes. Collections are included at the discretion of the Euro Data Cube team, which may remove collections from the registry at any time. Data providers are responsible for maintaining and supporting the data that they share.

## How are collections added to the registry?

Each collection in this repository is described in a dedicated YAML file in [/collections](https://github.com/eurodatacube/public-collections/tree/main/collections) directory, e.g. [/collections/global-land-cover.yaml](https://github.com/eurodatacube/public-collections/tree/main/collections/global-land-cover.yaml)
Data providers can create a new YAML file copying the structure of the most similar existing one. After committing it to the GitHub, create a pull request and Euro Data Cube team will review it and publish it in the Registry.
Note that all external additional files should be stored in a directory with the exact same name as the associated YAML file. Note also that thumbnail image should have the same name as the associated YAML file. Lowercase is recommended for all file names and paths.
Users are also welcome to revise existing collections, e.g. adding new usage examples, tools, etc.

### YAML file structure

For openEO Platform specific extension of YAML file structure: WMTS should be added after CustomScripts, Extent and everything else after Configurations.

<details>
   <summary>basic YAML file</summary>

```YAML
Name:
Description:
Documentation:
AdditionalInfoExternal:
    Title:
    Path:
Image:
EDCBrowser:
EOBrowser:
Flickr:
Explore:
Resolution:
GeographicalCoverage:
TemporalAvailability:
TemporalResolution:
UpdateFrequency:
BandInformation:
     or
BandInformation:
  Table:
      Columns:
        - Name: Name
          Title: Name
        - Name: Description
          Title: Description
        - Name: Notes
          Title: Notes
      Rows:
        - Name:
          Description:
          Notes:
Variables:
Attributes:
ProducedResults:
     or
ProducedResults:
  Table:
      Columns:
        - Name: Name
          Title: Name
        - Name: Description
          Title: Description
        - Name: Units
          Title: Units
      Rows:
        - Name:
          Description:
          Units:
Contact:
Provider:
ManagedBy:
Tags:
License:
LicenseType:
LicenseUrl:
Resources:
  - Group:
  - EndPoint:
    Name:
    Role:
    Type:
    Notes:
    Primary:
    CollectionId:
    Database:
    Collection:
    DatasetName:
    StoreInstanceID:
    StoreTitle:
    DataID:
  - Group:
    DatasetName:
    CollectionId:
CustomScipts:
  Title:
  URL:
Configurations:
  - href:
    rel:
    type:
    title:
  - href:
    rel:
    type:
    title:
    sentinelhub:layer_name:
    sentinelhub:mosaicking_order:
    sentinelhub:upsampling:
DataAtWork:
  Tutorials:
    - Title:
      URL:
      AuthorName:
      AuthorURL:
  Tools & Applications:
    - Title:
      URL:
      AuthorName:
      AuthorURL:
  Publications:
    - Title:
      URL:
      AuthorName:
RegistryEntryAdded:
RegistryEntryLastModified:
```

</details>

<details>
   <summary>EDC Bring Your Own Algorithm (BYOA) YAML file extension</summary>

```YAML
BYOAID:
Tags:
  - on-demand
```
</details>

<details>
   <summary>openEO Platform YAML file extension</summary>

```YAML
OpenEOPID:
WMTS:
  - href:
    layer_id:
    dimensions:
      warnings:
Extent:
  spatial:
    bbox:
  temporal:
    interval:
CubeDimensions:
  x:
    type:
    axis:
    extent:
    reference_system:
  y:
    type:
    axis:
    extent:
    reference_system:
  t:
    type:
    extent:
    step:
  bands:
    type:
    values:
sci:citation:
Summaries:
CRS:
```
</details>

### Collection metadata explanation

Below is a description for each metadata field.

<details>
   <summary>basic metadata</summary>

| Field | Type | Description & Style |
| --- | --- | --- |
| **Name** | String | Full name of the collection.|
| **Description**|MD|A high-level description of the collection. Only the first 600 characters will be displayed on the homepage of the [Euro Data Cube Public Collections](https://collections.eurodatacube.com/).|
 **Documentation**|MD| A link to documentation of the collection on the data provider's website.|
|**AdditionalInfoExternal**|MD | Additional documentation of the collection contained in a README.MD file saved in this repository.|
|**AdditionalInfoExternal >> Title**|MD | Additional info. |
|**AdditionalInfoExternal >> Path**|Path | Path to README.MD with additional info on the github repo.|
|**Image**| Path | Path to thumbnail image representing the collection that is to be displayed on the homepage. Automatically sized to 200 pixels width for display. |
| **EDC Browser** | String | Link to the collection displayed in the EDC Browser.|
|**EOBrowser**|String | Link to the collection displayed in EO Browser. |
|**Flickr**|String | Link to Flickr album if collection is not available on EO Browser. |
|**Explore**|MD| Link to where the collection can be explored, e.g. Jupyter Notebook or graphical viewer. |
|**Resolution**|MD| Spatial resolution of raster collection.|
|**GeographicalCoverage**|MD| A short description on geographical coverage of the collection, it could be land, ocean or lat-lon extents.|
|**TemporalAvailability**|MD| The time period of availability of the collection (recommended format: `'YYYY-MM-DD - YYYY-MM-DD'`).|
|**TemporalResolution**|MD | The time period of data acquisition for the exact same location.|
|**UpdateFrequency**|MD| An explanation of how frequently the collection is updated.|
|**BandInformation**|MD| Description of available bands and data. It could be a link to the description or a table with the description. |
|**Variables**|String| Name and description of collections' variables. |
|**Attributes**|String| Name, description and type of algorithm input parameters. |
|**ProducedResults**|String| Name and description of algorithm results. |
|**Contact**|MD|Contact details. |
|**Provider**|MD|The name of the organization that provides the collection. |
|**ManagedBy**|String|The name of the organization that manages the collection.|
|**Tags**|List of strings|Tags that topically describe the collection. Tags must include either `open data` or `commercial data` , `xcube` or `sentinel hub` or `geodb` , `raster` or `vector` , `systematic` or `on-demand`.|
|**License**|MD|An explanation of the collection license and/or a link to more information.|
|**Resources**|List of lists|A list of resources to access the collections. Each resource entry requires collection specific metadata as below.|
|**Resources > Group**|String| Category of the resources. Must either be `Sentinel Hub Resources` or `xcube Resources` or `geoDB Resources`. |
|**Resources > Endpoint**|String|Endpoint where the Sentinel Hub collection can be accessed. Should start with the protocol (`https://`).|
|**Resources > Name**|String|Name of the service provider.|
|**Resources > Role**|String|Roles of the provider. Any of `licensor`, `producer`, `processor` or `host`.|
|**Resources > Type**|String|Sentinel Hub Collection identifier name e.g. `S1LC`.|
|**Resources > Primary**|Boolean|Indicator of which endpoint to use (if the collection is available on several endpoints).|
|**Resources > CollectionId**|String|Sentinel Hub BYOC collection ID.|
|**Resources > Database**|String|Name of geoDB database of the collection.|
|**Resources > Collection**|String|Name of geoDB table collection.|
|**Resources > DatasetName**|String|Name of the xcube dataset.|
|**Resources > StoreInstanceID**|String|ID of the xcube store.|
|**Resources > StoreTitle**|String|Name of xcube store of the collection.|
|**Resources > DataID**|String|Name identifier of the collection in the xcube store.|
|**Resources > Notes**|MD| More info regarding the collection.|
|**CustomScripts**|MD | Collections' custom scripts. |
|**CustomScripts > Title**| String | Collections' custom script title.|
|**CustomScripts > URL** | String | Link to the collections' custom script. |
|**DataAtWork [> Tutorials, Tools & Applications, Publications]** |List of lists| (Optional) A list of links to example tutorials, tools & applications or publications that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > Title**|String|The title of the tutorials, tools & applications or publications that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > URL**|String|A link to the tutorial, tool & applications or publication that use the data.|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorName**|String|Name(s) of person or entity that created the tutorial, tool, application, or publication. Limit scientific publication author lists to the first six authors in the format Last Name First Initial, followed by 'et al.'|
|**DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorURL**|String|(Optional) URL for person or entity that created the tutorial, tool, application or publication.|
|**RegistryEntryAdded**|String|Date of the collection added to the registry.|
|**RegistryEntryLastModified**|String|Date of the last collection modification.|

</details>
<details>
   <summary>EDC Browser metadata (metadata used by the EDC Browser)</summary>

| Field                            | Type       | Description & Style        |
|----------------------------------|--------| --------------------------|
| **Configurations** |List of lists| |
| **Configurations > href**| String | **REQUIRED**. The actual link in the format of an URL. Relative and absolute links are both allowed.|
| **Configurations > rel**| String | **REQUIRED**. Relationship between the current document and the linked document. See ["Relation types"](https://github.com/radiantearth/stac-spec/blob/master/collection-spec/collection-spec.md#relation-types) for more information. |
| **Configurations > type**| String| [Media type](https://github.com/radiantearth/stac-spec/blob/master/catalog-spec/catalog-spec.md#media-types) of the referenced entity. |
| **Configurations > title**| String |A human readable title to be used in rendered displays of the link. |
| **Configurations > sentinelhub:layer_name:**| String | Layer name of the visualization used for the EDC Browser.|
| **Configurations > sentinelhub:mosaicking_order:**| String | Mosaicking order type used for the visualization in the EDC Browser.|
| **Configurations > sentinelhub:upsampling:**| String |Upsampling method used for the visualization in the EDC Browser. |

</details>

<details>
   <summary>EDC Bring Your Own Algorithm (BYOA) metadata (metadata used by BYOA)</summary>

| Field                            | Type | Description & Style        |
|----------------------------------|--------| --------------------------|
| **BYOAID**                       | String | **REQUIRED.** Algorithm ID used within BYOA (see [documentation](https://eurodatacube.com/documentation/offer_algorithms_for_on_demand_data_generation)).|
| **Tags**                         | List of strings | Tags must include `on-demand` to be listed at https://dev.eurodatacube.com/marketplace/data-products/on-demand.|

</details>

<details>
   <summary>openEO Platform metadata (metadata used within the openEO Platform project)</summary>

| Field                            | Type | Description & Style        |
|----------------------------------|--------| --------------------------|
| **OpenEOPID**                    | String | **REQUIRED.** Collection name to be used within the openEO Platform (see [Naming convention](https://docs.openeo.cloud/federation/backends/collections.html#naming-convention)).| 
| **WMTS**                         | List of dictionary | Based on [STAC Web Map Links Extension](https://github.com/stac-extensions/web-map-links).| 
| **WMTS > href**| String | Link to the WMTS, without any WMTS specific query parameters.|
| **WMTS > layer_id** | String | The layers to show on the map. | 
| **WMTS > dimensions** | Dictionary | Any additional dimension parameters to add to the request as key-value-pairs, usually added as query parameters. | 
| **WMTS > dimensions > warnings** | Boolean | Should always be set to YES for openEO Platform. |
| **DocumentationLinks** | List of strings | | |
| **DocumentationLinks > href** | String | **REQUIRED**. The actual link in the format of an URL. Relative and absolute links are both allowed.| 
| **DocumentationLinks > rel** | String |**REQUIRED**. Relationship between the current document and the linked document.  | 
| **DocumentationLinks > type** | String | Media type of the referenced entity.| 
| **DocumentationLinks > title** | String| A human readable title to be used in rendered displays of the link.| 
| **Extent** | Dictonaries | Spatio-temporal extents of the collection.|
| **Extent > spatial** | Dictionary |**REQUIRED**. The spatial extents of the Collection. |
| **Extent > spatial > bbox** | Number|**REQUIRED**. Potential spatial extents covered by the Collection. |
| **Extent > temporal** | Dictionary |**REQUIRED**. The temporal extents of the Collection. |
| **Extent > temporal > interval** |String |**REQUIRED**. Potential temporal extents covered by the collection. Collection intervals with just one timestamp should be displayed as one second intervals (e.g.`'2020-01-04T00:00:00Z' - '2020-01-04T00:00:01Z'`).|
| **CubeDimensions** | Dictionaries | Based on [STAC Datacube Extension](https://github.com/stac-extensions/datacube#dimension-object). |
| **CubeDimensions > x/y** |Dictionaries| A spatial dimension in one of the horizontal (x or y) directions. |
| **CubeDimensions > x/y > type** | String | **REQUIRED**. Type of the dimension, always `spatial`.|
| **CubeDimensions > x/y > axis** | String |**REQUIRED**. Axis of the spatial dimension (`x`, `y`). |
| **CubeDimensions > x/y > extent** | Number |**REQUIRED**. Extent (lower and upper bounds) of the dimension as two-element array. Open intervals with `null` not allowed. |
| **CubeDimensions > x/y > reference_system** |String| The spatial reference system for the data. Defaults to EPSG code 4326. |
| **CubeDimensions > t** |Dictionary | A temporal dimension based on the ISO 8601 standard. |
| **CubeDimensions > t > type** | String | **REQUIRED**. Type of the dimension, always `temporal`.|
| **CubeDimensions > t > extent** | String | **REQUIRED**. Extent (lower and upper bounds) of the dimension as two-element array. `null` allowed for open date ranges. Collection extents with just one timestamp should be displayed as one second extents (e.g. `'2020-01-04T00:00:00Z' - '2020-01-04T00:00:01Z'`).|
| **CubeDimensions > t > step** | String | The space between the temporal instances as ISO 8601 duration (e.g. `P1D`). Use `null` for irregularly spaced steps. |
| **CubeDimensions > bands** | Dictionaries | |
| **CubeDimensions > bands > type**| String |**REQUIRED**. Custom type of the dimension, never spatial. |
| **CubeDimensions > bands > values**| String |An ordered list of all values, especially useful for nominal values. |
|**sci:citation** | String | The recommended human-readable reference (citation) to be used by publications citing the data.|
| **Summaries** | Dictionary | A map of property summaries, either a set of values or a range of values. |
| **CRS** | List | List of coordinate reference systems supported by the backend. |

</details>

### How to build Euro Data Cube Public Collections website locally

You can build the Euro Data Cube Public Collections website locally,  to preview and test your changes before submitting a merge request. Below is a step-by-step guide to build the site locally.

<details> 
   <summary>Linux & Mac</summary>
   <h4>Prerequisites</h4>
   <p><code>Node</code> and <code>npm</code> must be installed before you can build a site.</p>
   <li>Open Terminal.</li>
   <li>Run <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash</code>.</li>
   <li>Run <code>nvm install node</code>.</li>
   <li>Run <code>npm install</code>.</li>
   <li>Reboot Terminal.</li>
   <li>Create a .env file with the following content in the repository.

   ```
   GIT_HUB_COLLECTIONS_REPO=eurodatacube/public-collections
   GIT_HUB_COLLECTIONS_BRANCH=main
   COLLECTIONS_BROWSER_ROOT_URL="http://localhost:3000/"
   ```

   </li>
   <h4>Building your site locally</h4>
   <li>Open Terminal.</li>
   <li>Run <code>export $(xargs <.env)</code>.</li>
   <li>Run <code>npm run serve</code>.</li>
   <li>This will open http://localhost:3000/ where the website can be inspected</li>

</details> 

<details> 
   <summary>Windows</summary>
   <h4>Prerequisites</h4>
   <p><code>Node</code> and <code>npm</code> must be installed before you can build a site.</p>
   <li>Install Ubuntu on <a href="https://ubuntu.com/wsl">Windows Subsystem for Linux (WSL)</a></li>
   <li>Open WSL Terminal.</li>
   <li>Run <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.36.0/install.sh | bash</code>.</li>
   <li>Reboot WSL Terminal.</li>
   <li>Run <code>nvm install node</code>.</li>
   <li>Run <code>npm init</code> to create a `package.json` file.</li>
   <li>Run <code>npm install</code>.</li>
   <li>Reboot WSL Terminal.</li>
   <li>Create a .env file with the following content in the repository.

   ```
   GIT_HUB_COLLECTIONS_REPO=eurodatacube/public-collections
   GIT_HUB_COLLECTIONS_BRANCH=main
   COLLECTIONS_BROWSER_ROOT_URL="http://localhost:3000/"
   ```

   </li>
   <h4>Building your site locally</h4>
   <li>Open WSL Terminal.</li>
   <li>Run <code>export $(xargs <.env)</code>.</li>
   <li>Run <code>npm run serve</code>.</li>
   <li>This will open http://localhost:3000/ where the website can be inspected</li>

</details> 

## How to make use of these collections

Please see the usage examples provided for each individual collection.
