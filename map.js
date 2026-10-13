var Main;

// Assuming you're using a bundler or ES module-compatible environment

import Map from "https://js.arcgis.com/5.1/@arcgis/core/Map.js";
import Graphic from "https://js.arcgis.com/5.1/@arcgis/core/Graphic.js";
import GraphicsLayer from "https://js.arcgis.com/5.1/@arcgis/core/layers/GraphicsLayer.js";
import ElevationLayer from "https://js.arcgis.com/5.1/@arcgis/core/layers/ElevationLayer.js";
import SceneView from "https://js.arcgis.com/5.1/@arcgis/core/views/SceneView.js";
import Search from "https://js.arcgis.com/5.1/@arcgis/core/widgets/Search.js";

Main = (function () {
    const layer = new ElevationLayer({
        url: "http://elevation3d.arcgis.com/arcgis/rest/services/WorldElevation3D/Terrain3D/ImageServer"
    });
    const map = new Map({
        basemap: "hybrid",
        ground: {
            layers: [layer]
        },
    });

    const view = new SceneView({
        container: "map",
        viewingMode: "global",
        map: map,
        camera: {
            position: {
                x: -108.95977741804786,
                y: 41.166101915852764,
                z: 2000000,
                spatialReference: {
                    wkid: 4326

                }
            },
            heading: 0,
            tilt: 0
        },
        popup: {
            dockEnabled: true,
            dockOptions: {
                breakpoint: false
            }
        },
        // enable shadows to be cast from the features
        environment: {
            lighting: {
                directShadowsEnabled: false
            }
        }
    });

    const initMap = function () {

        const graphicsLayer = new GraphicsLayer();
        map.add(graphicsLayer);

        for (const [key, value] of Object.entries(myStuff)) {
            console.log(key, value)

            const point = {
                type: "point",
                x: value.coord[0],
                y: value.coord[1],
                z: 10000
            };

            const markerSymbol = {
                type: "simple-marker",
                color: [0, 163, 108],
                outline: {

                    // autocasts as new SimpleLineSymbol()                              
                    color: [255, 255, 255],
                    width: 2

                }

            };

            const pointGraphic = new Graphic({
                geometry: point,
                symbol: markerSymbol,
                popupTemplate: {
                    title: key,
                    content: "<strong>" + value.label + "</strong>" + "<strong><br>City: </strong>" + value.city + "<strong><br>State: </strong>" + value.state
                }
            });

            graphicsLayer.add(pointGraphic);


        }

        // Zoom on click function for the layer
        view.on("click", function (event) { // "listens" for a click in the map

            view.hitTest(event).then(function (response) { // Checks to see if the click hit a graphic layer
                let result = response.results[0];

                if (result?.type === "graphic") {
                    view.goTo({
                        target: result.graphic.geometry, // Uses the geometry of the graphic that was clicked to zoom in.
                        zoom: 20
                    })
                }
            });
        });

    };

    // adds general search function to the map using the standard ESRI locator
    const searchWidget = new Search({
        view: view
    });
    view.ui.add(searchWidget, {
        position: "top-right",
        index: 2
    });

    initMap()

    return {};


})();




