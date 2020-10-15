var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "Pandeleiros - overworld",
        "Pandeleiros - nether"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1602775184",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "Daytime",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "day",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Pandeleiros - overworld",
            "last_rendertime": 1572138330,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -140,
                80,
                -171
            ],
            "minZoom": 0,
            "spawn": [
                -140,
                80,
                -171
            ],
            "north_direction": 1
        },
        {
            "name": "Nighttime",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "night",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Pandeleiros - overworld",
            "last_rendertime": 1572138330,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -140,
                80,
                -171
            ],
            "minZoom": 0,
            "spawn": [
                -140,
                80,
                -171
            ],
            "north_direction": 1
        },
        {
            "name": "Caves",
            "zoomLevels": 8,
            "defaultZoom": 1,
            "maxZoom": 8,
            "path": "day2",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Pandeleiros - overworld",
            "last_rendertime": 1572138330,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -140,
                80,
                -171
            ],
            "minZoom": 0,
            "spawn": [
                -140,
                80,
                -171
            ],
            "north_direction": 1
        },
        {
            "name": "Nether",
            "zoomLevels": 7,
            "defaultZoom": 1,
            "maxZoom": 7,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "Pandeleiros - nether",
            "last_rendertime": 1569702201,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                -140,
                80,
                -171
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 0
        }
    ]
};
