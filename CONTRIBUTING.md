**The goal of this registry is to expand access to useful data collections available on Euro Data Cube.** With that in mind, we prefer to list collections that are clearly documented, are actively supported, can be used for research or educational purposes. Collections are included at the discretion of the Euro Data Cube team, which may remove collections from the registry at any time. Data providers are responsible for maintaining and supporting the data that they share. 

## How are collections added to the registry?

Each collection in this repository is described in a dedicated YAML file in [/collections](https://github.com/eurodatacube/public-collections/tree/main/collections) directory, e.g. /collections/global-land-cover.yaml  
Data providers can create a new YAML file copying the structure of the most similar existing one. After committing it to the GitHub, create a pull request and Euro Data Cube team will review it and publish it in the Registry.   
Note that all  external additional files should be stored in a directory with exact same name as the associated YAML file. Note also that thumbnail image should have same name  as the associated YAML file.  Lowercase is recommended for all files names and paths.
Users are also welcome to revise existing collections, e.g. adding new usage examples , tools, etc.  

### YAML file structure
```
Name:
Description: 
Documentation:
AdditionalInfoExternal:
    Title: 
    Path: 
Image:
EOBrowser:
EDCBrowser:
Explore:
Resolution: 
GeographicalCoverage: 
TemporalAvailability:
TemporalResolution:
UpdateFrequency:
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
  Table:
      Columns:
        - Name: Name
          Title: Name
        - Name: Description
          Title: Description
      Rows:
        - Name:
          Description:
Attributes:
 Table:
     Columns:
       - Name: Name
         Title: Name
       - Name: Description
         Title: Description
       - Name: Type
         Title: Type
     Rows:
       - Name:
       - Description:   
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
  - 
  - 
License:
CustomScripts:
    Title:
    URL:
Resources:
  - Group:
  - EndPoint:
    Name:
    Role: 
    Type:
    CollectionId:
    Primary:
    Database:
    Collection:
    DatasetName:
    StoreInstanceID:
    StoreTitle:
    DataID:
    DemInstance:
    Notes:
Configurations:
  - href: "https://docs.sentinel-hub.com/api/latest/api/process/"
    rel: "about"
    type: "text/html"
    title: "Details about running Evalscripts"
  - href:
    rel: "processing-expression"
    type: "application/javascript"
    title:
    sentinelhub:layer_name:
    sentinelhub:mosaicking_order:
    sentinelhub:upsampling:
Extent:
  spatial:
    bbox:
      -
        -
        -
        -
        -
  temporal:
    interval:
      -
        -
        -
CubeDimensions:
  x:
    type: spatial
    axis: x
    extent:
      -
      -
  y:
    type: spatial
    axis: y
    extent:
      -
      -
  t:
    type: temporal
    extent:
      -
      -
  bands:
    type: bands
    values:
      -
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

RegistryEntryAdded: "2021-03-21"
RegistryEntryLastModified: "2021-03-21"
```
### Metadata required for each collection
 Below is a description for each metadata field.   
 
| Field                                                                         | Type            | Description & Style                                                                                                                                                                                                                                                                                     |
|-------------------------------------------------------------------------------|-----------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Name**                                                                      | String          | Full name of the collection                                                                                                                                                                                                                                                                             |
| **Description**                                                               | MD              | A high-level description of the collection. Only the first 600 characters will be displayed on the homepage of the [Euro Data Cube Public Collections](https://collections.eurodatacube.com/)                                                                                                           |
| **Documentation**                                                             | MD              | A link to documentation of the collection on the data provider's website                                                                                                                                                                                                                                |
| **AdditionalInfoExternal**                                                    |                 | Additional documentation of the collection contained in a README.MD file saved in this repository                                                                                                                                                                                                       |
| **AdditionalInfoExternal >> Title**                                           | String          | Additional info                                                                                                                                                                                                                                                                                         |
| **AdditionalInfoExternal >> Path**                                            | Path            | Path to README.MD with additional info on the github repo                                                                                                                                                                                                                                               |
| **Image**                                                                     | Path            | Path to thumbnail image representing the collection that is to be displayed on the homepage. Automatically sized to 200 pixels width for display                                                                                                                                                        |
| **EOBrowser**                                                                 | String          | Link to collection  displayed in EO Browser                                                                                                                                                                                                                                                             |
| **EDCBrowser**                                                                | String          | Link to collection displayed in EDC Browser                                                                                                                                                                                                                                                             |
| **Explore**                                                                   | MD              | Link to where the collection can be explored. E.g Jupyter notebook or graphical viewer                                                                                                                                                                                                                  |
| **Resolution**                                                                | MD              | Spatial resolution of raster collection                                                                                                                                                                                                                                                                 |
| **GeographicalCoverage**                                                      | MD              | A short description on geographical coverage of the collection, it could be land, ocean, or lat-lon extents                                                                                                                                                                                             |
| **TemporalAvailability**                                                      | MD              | The time period of availability of the collection                                                                                                                                                                                                                                                       |
| **TemporalResolution**                                                        | String          | Temporal resolution of the time series of collection                                                                                                                                                                                                                                                    |
| **UpdateFrequency**                                                           | MD              | An explanation of how frequently the collection is updated                                                                                                                                                                                                                                              |
| **BandInformation**                                                           | MD              | Description of available bands and data. It could be a link to the description or a table with the description                                                                                                                                                                                          |
| **Variables**                                                                 | MD              | Description of available variables of xcube collection. It could be a link to the description or a table with the description                                                                                                                                                                           |
| **Attributes**                                                                | MD              | Description of available attributes of data. It could be a link to the description or a table with the description                                                                                                                                                                                      |
| **ProducedResults**                                                           | MD              | Description of available products produced by the algorithm. It could be a link to the description or a table with the description                                                                                                                                                                      |
| **CustomScripts**                                                             | MD              | Link to the collections' custom scripts                                                                                                                                                                                                                                                                 |
| **Contact**                                                                   | String          | Contact details                                                                                                                                                                                                                                                                                         |
| **License**                                                                   | MD              | An explanation of the collection license and/or a link to more information                                                                                                                                                                                                                              |
| **ManagedBy**                                                                 | MD              | The name of the organization who is responsible for the collection                                                                                                                                                                                                                                      |
| **Provider**                                                                  | MD              | The name of the  organization who provides the collection                                                                                                                                                                                                                                               |
| **Tags**                                                                      | List of strings | Tags that topically describe the collection. Tags must include either `open data` or `commercial data`, `xcube` or `sentinel hub` or `geodb`, `raster` or `vector`, `systematic` or `on-demand`                                                                                                         |
| **Resources**                                                                 | List of lists   | A list of resources to access the collections. Each resource entry requires collection specific metadata as below:                                                                                                                                                                                      |
| **Resources > Group**                                                         | String          | Category of the resources. Must either be `Sentinel Hub Resources` or `xcube Resources` or `geoDB Resources`                                                                                                                                                                                            |
| **Resources > Endpoint**                                                      | String          | Endpoint where the Sentinel Hub collection can be accessed. Should start with the protocol (`https://`)                                                                                                                                                                                                 |
| **Resources > Type**                                                          | String          | Sentinel Hub Collection identifier name e.g S1LC                                                                                                                                                                                                                                                        |
| **Resources > ColllectionId**                                                 | String          | Sentinel Hub BYOC collection ID                                                                                                                                                                                                                                                                         |
| **Resources > Database**                                                      | String          | Name of geoDB database of the collection                                                                                                                                                                                                                                                                |
| **Resources > Collection**                                                    | String          | Name of geoDB table collection                                                                                                                                                                                                                                                                          |
| **Resources > StoreInstanceID**                                               | String          | ID of the xcube store                                                                                                                                                                                                                                                                                   |
| **Resources > StoreTitle**                                                    | String          | Name of xcube store of the collection                                                                                                                                                                                                                                                                   |
| **Resources > DataID**                                                        | String          | Name identifier of the collection in the xcube store                                                                                                                                                                                                                                                    |
| **Resources > Notes**                                                         | MD              | More info concerning the collection                                                                                                                                                                                                                                                                     |
| **Configurations**                                                            | MD              | The configuration for the backend. Please fill in the first section as shown above and add sections for the custom scripts used for collection. The href of the custom script sections should point to the script displayed on the [custom script repository](https://custom-scripts.sentinel-hub.com/) |  
| **Extent**                                                                    | MD              | The spatial and temporal extent of collection                                                                                                                                                                                                                                                           |
| **CubeDimensions**                                                            | MD              | The dimension of collection in x-, y-, t- (time), and bands-axis                                                                                                                                                                                                                                        |
| **DataAtWork  [> Tutorials, Tools & Applications, Publications]**  (Optional) | List of lists   | A list of links to example tutorials, tools & applications, publications that use the data                                                                                                                                                                                                              |
| **DataAtWork [> Tutorials, Tools & Applications, Publications] > Title**      | String          | The title of the tutorial, tool, application, or publication that uses the data                                                                                                                                                                                                                         |
| **DataAtWork [> Tutorials, Tools & Applications, Publications] > URL**        | String          | A link to the tutorial, tool, application, or publication that uses the data                                                                                                                                                                                                                            |
| **DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorName** | String          | Name(s) of person or entity that created  the tutorial, tool, application, or publication. Limit scientific publication author lists to the first six authors in the format Last Name First Initial, followed by 'et al'                                                                                |
| **DataAtWork [> Tutorials, Tools & Applications, Publications] > AuthorURL**  | String          | (Optional) URL for person or entity that created the tutorial, tool, application, or publication                                                                                                                                                                                                        |  

## How to make use of these collections

Please see the usage examples provided for each individual collection.

