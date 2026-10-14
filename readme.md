# GIST5300 Assignment 5: ArcGIS API Objects
## Author: Carson Liesik
### Date: 10/11/2026

This is the launching point for the webmap created for this assignment.

For this assignment, I used the demo files we built for the in class assignments as the beginning structure for this project. 
Once I created the repository for for this I added the readme.md file and edited the "myStuff" variable in the "obj.js" file
to include locations of my choice. I additionally added a "label" value to the records to display extra information with each
location record. After that I reconfigured the pop-up function to have bolded lables and shift the values to the content instead
of the title. I followed this by adding a zoom to function users clicked on features in the map using the link provided in the 
assignment description. 

The next step for the assignment was to add a clustering effect to my points, but from the reasearch I did, it is unfortunately
not supported for "sceneView". According to this ESRI community forum post: <https://community.esri.com/en/discussion/1326263/clustering-point-geometries-in-a-3d-sceneview>, clustering is currently only supported in "mapView". Because of this I didn't 
adjust the javascript since the assignment requires us to use "sceneView". To finish the assigment I used the following documentation
to create a search function using ESRI's general address locator: <https://developers.arcgis.com/javascript/latest/references/core/widgets/Search/>. You can find the assignment url below.

### Assignment 5 Link
<https://cliesik51.github.io/LiesikGIST5300Assign5/>