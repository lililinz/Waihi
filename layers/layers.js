ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:2193").setExtent([1861858.795232, 5828820.118367, 1862062.698703, 5828997.335085]);
var wms_layers = [];


        var lyr_GoogleStreets_0 = new ol.layer.Tile({
            'title': 'Google Streets',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_LINZBasemap_1 = new ol.layer.Tile({
            'title': 'LINZ Basemap',
            //'type': 'base',
            'opacity': 0.500000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://basemaps.linz.govt.nz/v1/tiles/aerial/WebMercatorQuad/{z}/{x}/{y}.webp?api=c01j17a5x7vn9j9kqdybvd95v2v'
            })
        });
var format_nzprimarylandparcels_2 = new ol.format.GeoJSON();
var features_nzprimarylandparcels_2 = format_nzprimarylandparcels_2.readFeatures(json_nzprimarylandparcels_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzprimarylandparcels_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzprimarylandparcels_2.addFeatures(features_nzprimarylandparcels_2);
var lyr_nzprimarylandparcels_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzprimarylandparcels_2, 
                style: style_nzprimarylandparcels_2,
                popuplayertitle: "nz-primary-land-parcels",
                interactive: true,
                title: '<img src="styles/legend/nzprimarylandparcels_2.png" /> nz-primary-land-parcels'
            });
var format_nzprimarylandparcels_3 = new ol.format.GeoJSON();
var features_nzprimarylandparcels_3 = format_nzprimarylandparcels_3.readFeatures(json_nzprimarylandparcels_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzprimarylandparcels_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzprimarylandparcels_3.addFeatures(features_nzprimarylandparcels_3);
var lyr_nzprimarylandparcels_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzprimarylandparcels_3, 
                style: style_nzprimarylandparcels_3,
                popuplayertitle: "nz-primary-land-parcels",
                interactive: true,
                title: '<img src="styles/legend/nzprimarylandparcels_3.png" /> nz-primary-land-parcels'
            });
var format_nzprimarylandparcels_4 = new ol.format.GeoJSON();
var features_nzprimarylandparcels_4 = format_nzprimarylandparcels_4.readFeatures(json_nzprimarylandparcels_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzprimarylandparcels_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzprimarylandparcels_4.addFeatures(features_nzprimarylandparcels_4);
var lyr_nzprimarylandparcels_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzprimarylandparcels_4, 
                style: style_nzprimarylandparcels_4,
                popuplayertitle: "nz-primary-land-parcels",
                interactive: true,
                title: '<img src="styles/legend/nzprimarylandparcels_4.png" /> nz-primary-land-parcels'
            });
var format_nzaddresses_5 = new ol.format.GeoJSON();
var features_nzaddresses_5 = format_nzaddresses_5.readFeatures(json_nzaddresses_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzaddresses_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzaddresses_5.addFeatures(features_nzaddresses_5);
var lyr_nzaddresses_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzaddresses_5, 
                style: style_nzaddresses_5,
                popuplayertitle: "nz-addresses",
                interactive: true,
                title: 'nz-addresses'
            });
var format_nzaddresses_6 = new ol.format.GeoJSON();
var features_nzaddresses_6 = format_nzaddresses_6.readFeatures(json_nzaddresses_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzaddresses_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzaddresses_6.addFeatures(features_nzaddresses_6);
var lyr_nzaddresses_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzaddresses_6, 
                style: style_nzaddresses_6,
                popuplayertitle: "nz-addresses",
                interactive: true,
                title: 'nz-addresses'
            });
var format_nzaddresses_7 = new ol.format.GeoJSON();
var features_nzaddresses_7 = format_nzaddresses_7.readFeatures(json_nzaddresses_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_nzaddresses_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nzaddresses_7.addFeatures(features_nzaddresses_7);
var lyr_nzaddresses_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_nzaddresses_7, 
                style: style_nzaddresses_7,
                popuplayertitle: "nz-addresses",
                interactive: true,
                title: 'nz-addresses'
            });
var format_OBSPlanBoundary_8 = new ol.format.GeoJSON();
var features_OBSPlanBoundary_8 = format_OBSPlanBoundary_8.readFeatures(json_OBSPlanBoundary_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_OBSPlanBoundary_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OBSPlanBoundary_8.addFeatures(features_OBSPlanBoundary_8);
var lyr_OBSPlanBoundary_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OBSPlanBoundary_8, 
                style: style_OBSPlanBoundary_8,
                popuplayertitle: "OBS Plan Boundary",
                interactive: true,
                title: '<img src="styles/legend/OBSPlanBoundary_8.png" /> OBS Plan Boundary'
            });
var format_Combined_Communication_Cable_9 = new ol.format.GeoJSON();
var features_Combined_Communication_Cable_9 = format_Combined_Communication_Cable_9.readFeatures(json_Combined_Communication_Cable_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_Communication_Cable_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_Communication_Cable_9.addFeatures(features_Combined_Communication_Cable_9);
var lyr_Combined_Communication_Cable_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_Communication_Cable_9, 
                style: style_Combined_Communication_Cable_9,
                popuplayertitle: "Combined_Communication_Cable",
                interactive: true,
                title: '<img src="styles/legend/Combined_Communication_Cable_9.png" /> Combined_Communication_Cable'
            });
var format_Combined_HV_Cable_GPS_10 = new ol.format.GeoJSON();
var features_Combined_HV_Cable_GPS_10 = format_Combined_HV_Cable_GPS_10.readFeatures(json_Combined_HV_Cable_GPS_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_HV_Cable_GPS_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_HV_Cable_GPS_10.addFeatures(features_Combined_HV_Cable_GPS_10);
var lyr_Combined_HV_Cable_GPS_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_HV_Cable_GPS_10, 
                style: style_Combined_HV_Cable_GPS_10,
                popuplayertitle: "Combined_HV_Cable_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_HV_Cable_GPS_10.png" /> Combined_HV_Cable_GPS'
            });
var format_Combined_HV_Underground_Cable_11 = new ol.format.GeoJSON();
var features_Combined_HV_Underground_Cable_11 = format_Combined_HV_Underground_Cable_11.readFeatures(json_Combined_HV_Underground_Cable_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_HV_Underground_Cable_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_HV_Underground_Cable_11.addFeatures(features_Combined_HV_Underground_Cable_11);
var lyr_Combined_HV_Underground_Cable_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_HV_Underground_Cable_11, 
                style: style_Combined_HV_Underground_Cable_11,
                popuplayertitle: "Combined_HV_Underground_Cable",
                interactive: true,
                title: '<img src="styles/legend/Combined_HV_Underground_Cable_11.png" /> Combined_HV_Underground_Cable'
            });
var format_Combined_LV_Cable_Other_GPS_12 = new ol.format.GeoJSON();
var features_Combined_LV_Cable_Other_GPS_12 = format_Combined_LV_Cable_Other_GPS_12.readFeatures(json_Combined_LV_Cable_Other_GPS_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_LV_Cable_Other_GPS_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_LV_Cable_Other_GPS_12.addFeatures(features_Combined_LV_Cable_Other_GPS_12);
var lyr_Combined_LV_Cable_Other_GPS_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_LV_Cable_Other_GPS_12, 
                style: style_Combined_LV_Cable_Other_GPS_12,
                popuplayertitle: "Combined_LV_Cable_Other_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_LV_Cable_Other_GPS_12.png" /> Combined_LV_Cable_Other_GPS'
            });
var format_Combined_LV_Distribution_Cable_GPS_13 = new ol.format.GeoJSON();
var features_Combined_LV_Distribution_Cable_GPS_13 = format_Combined_LV_Distribution_Cable_GPS_13.readFeatures(json_Combined_LV_Distribution_Cable_GPS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_LV_Distribution_Cable_GPS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_LV_Distribution_Cable_GPS_13.addFeatures(features_Combined_LV_Distribution_Cable_GPS_13);
var lyr_Combined_LV_Distribution_Cable_GPS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_LV_Distribution_Cable_GPS_13, 
                style: style_Combined_LV_Distribution_Cable_GPS_13,
                popuplayertitle: "Combined_LV_Distribution_Cable_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_LV_Distribution_Cable_GPS_13.png" /> Combined_LV_Distribution_Cable_GPS'
            });
var format_Combined_LV_Service_Cable_GPS_14 = new ol.format.GeoJSON();
var features_Combined_LV_Service_Cable_GPS_14 = format_Combined_LV_Service_Cable_GPS_14.readFeatures(json_Combined_LV_Service_Cable_GPS_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_LV_Service_Cable_GPS_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_LV_Service_Cable_GPS_14.addFeatures(features_Combined_LV_Service_Cable_GPS_14);
var lyr_Combined_LV_Service_Cable_GPS_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_LV_Service_Cable_GPS_14, 
                style: style_Combined_LV_Service_Cable_GPS_14,
                popuplayertitle: "Combined_LV_Service_Cable_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_LV_Service_Cable_GPS_14.png" /> Combined_LV_Service_Cable_GPS'
            });
var format_Combined_LV_Underground_Cable_15 = new ol.format.GeoJSON();
var features_Combined_LV_Underground_Cable_15 = format_Combined_LV_Underground_Cable_15.readFeatures(json_Combined_LV_Underground_Cable_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_LV_Underground_Cable_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_LV_Underground_Cable_15.addFeatures(features_Combined_LV_Underground_Cable_15);
var lyr_Combined_LV_Underground_Cable_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_LV_Underground_Cable_15, 
                style: style_Combined_LV_Underground_Cable_15,
                popuplayertitle: "Combined_LV_Underground_Cable",
                interactive: true,
                title: '<img src="styles/legend/Combined_LV_Underground_Cable_15.png" /> Combined_LV_Underground_Cable'
            });
var format_Combined_SubTrans_Cable_GPS_16 = new ol.format.GeoJSON();
var features_Combined_SubTrans_Cable_GPS_16 = format_Combined_SubTrans_Cable_GPS_16.readFeatures(json_Combined_SubTrans_Cable_GPS_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_SubTrans_Cable_GPS_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_SubTrans_Cable_GPS_16.addFeatures(features_Combined_SubTrans_Cable_GPS_16);
var lyr_Combined_SubTrans_Cable_GPS_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_SubTrans_Cable_GPS_16, 
                style: style_Combined_SubTrans_Cable_GPS_16,
                popuplayertitle: "Combined_SubTrans_Cable_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_SubTrans_Cable_GPS_16.png" /> Combined_SubTrans_Cable_GPS'
            });
var format_Combined_Distribution_Box_GPS_17 = new ol.format.GeoJSON();
var features_Combined_Distribution_Box_GPS_17 = format_Combined_Distribution_Box_GPS_17.readFeatures(json_Combined_Distribution_Box_GPS_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_Distribution_Box_GPS_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_Distribution_Box_GPS_17.addFeatures(features_Combined_Distribution_Box_GPS_17);
var lyr_Combined_Distribution_Box_GPS_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_Distribution_Box_GPS_17, 
                style: style_Combined_Distribution_Box_GPS_17,
                popuplayertitle: "Combined_Distribution_Box_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_Distribution_Box_GPS_17.png" /> Combined_Distribution_Box_GPS'
            });
var format_Combined_Poles_18 = new ol.format.GeoJSON();
var features_Combined_Poles_18 = format_Combined_Poles_18.readFeatures(json_Combined_Poles_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_Poles_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_Poles_18.addFeatures(features_Combined_Poles_18);
var lyr_Combined_Poles_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_Poles_18, 
                style: style_Combined_Poles_18,
                popuplayertitle: "Combined_Poles",
                interactive: true,
                title: '<img src="styles/legend/Combined_Poles_18.png" /> Combined_Poles'
            });
var format_Combined_Transformer_GPS_19 = new ol.format.GeoJSON();
var features_Combined_Transformer_GPS_19 = format_Combined_Transformer_GPS_19.readFeatures(json_Combined_Transformer_GPS_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Combined_Transformer_GPS_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Combined_Transformer_GPS_19.addFeatures(features_Combined_Transformer_GPS_19);
var lyr_Combined_Transformer_GPS_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Combined_Transformer_GPS_19, 
                style: style_Combined_Transformer_GPS_19,
                popuplayertitle: "Combined_Transformer_GPS",
                interactive: true,
                title: '<img src="styles/legend/Combined_Transformer_GPS_19.png" /> Combined_Transformer_GPS'
            });
var format_Water_Supply_Pipe_20 = new ol.format.GeoJSON();
var features_Water_Supply_Pipe_20 = format_Water_Supply_Pipe_20.readFeatures(json_Water_Supply_Pipe_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_Water_Supply_Pipe_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Water_Supply_Pipe_20.addFeatures(features_Water_Supply_Pipe_20);
var lyr_Water_Supply_Pipe_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Water_Supply_Pipe_20, 
                style: style_Water_Supply_Pipe_20,
                popuplayertitle: "Water_Supply_Pipe",
                interactive: true,
                title: '<img src="styles/legend/Water_Supply_Pipe_20.png" /> Water_Supply_Pipe'
            });
var format_One_NZ_Undergound_Service_21 = new ol.format.GeoJSON();
var features_One_NZ_Undergound_Service_21 = format_One_NZ_Undergound_Service_21.readFeatures(json_One_NZ_Undergound_Service_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_One_NZ_Undergound_Service_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_One_NZ_Undergound_Service_21.addFeatures(features_One_NZ_Undergound_Service_21);
var lyr_One_NZ_Undergound_Service_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_One_NZ_Undergound_Service_21, 
                style: style_One_NZ_Undergound_Service_21,
                popuplayertitle: "One_NZ_Undergound_Service",
                interactive: true,
                title: '<img src="styles/legend/One_NZ_Undergound_Service_21.png" /> One_NZ_Undergound_Service'
            });
var format_TuatahiFirstFibre_22 = new ol.format.GeoJSON();
var features_TuatahiFirstFibre_22 = format_TuatahiFirstFibre_22.readFeatures(json_TuatahiFirstFibre_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_TuatahiFirstFibre_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TuatahiFirstFibre_22.addFeatures(features_TuatahiFirstFibre_22);
var lyr_TuatahiFirstFibre_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TuatahiFirstFibre_22, 
                style: style_TuatahiFirstFibre_22,
                popuplayertitle: "Tuatahi - First Fibre",
                interactive: true,
                title: '<img src="styles/legend/TuatahiFirstFibre_22.png" /> Tuatahi - First Fibre'
            });
var format_ChorusUndergroundDuct_23 = new ol.format.GeoJSON();
var features_ChorusUndergroundDuct_23 = format_ChorusUndergroundDuct_23.readFeatures(json_ChorusUndergroundDuct_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_ChorusUndergroundDuct_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ChorusUndergroundDuct_23.addFeatures(features_ChorusUndergroundDuct_23);
var lyr_ChorusUndergroundDuct_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ChorusUndergroundDuct_23, 
                style: style_ChorusUndergroundDuct_23,
                popuplayertitle: "Chorus Underground Duct",
                interactive: true,
                title: '<img src="styles/legend/ChorusUndergroundDuct_23.png" /> Chorus Underground Duct'
            });
var format_WaihiTaurangaBuildsections_NZTM_24 = new ol.format.GeoJSON();
var features_WaihiTaurangaBuildsections_NZTM_24 = format_WaihiTaurangaBuildsections_NZTM_24.readFeatures(json_WaihiTaurangaBuildsections_NZTM_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:2193'});
var jsonSource_WaihiTaurangaBuildsections_NZTM_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaihiTaurangaBuildsections_NZTM_24.addFeatures(features_WaihiTaurangaBuildsections_NZTM_24);
var lyr_WaihiTaurangaBuildsections_NZTM_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaihiTaurangaBuildsections_NZTM_24, 
                style: style_WaihiTaurangaBuildsections_NZTM_24,
                popuplayertitle: "Waihi - Tauranga Build sections_NZTM",
                interactive: true,
                title: '<img src="styles/legend/WaihiTaurangaBuildsections_NZTM_24.png" /> Waihi - Tauranga Build sections_NZTM'
            });
var group_PowerCoExistingService = new ol.layer.Group({
                                layers: [lyr_Combined_Communication_Cable_9,lyr_Combined_HV_Cable_GPS_10,lyr_Combined_HV_Underground_Cable_11,lyr_Combined_LV_Cable_Other_GPS_12,lyr_Combined_LV_Distribution_Cable_GPS_13,lyr_Combined_LV_Service_Cable_GPS_14,lyr_Combined_LV_Underground_Cable_15,lyr_Combined_SubTrans_Cable_GPS_16,lyr_Combined_Distribution_Box_GPS_17,lyr_Combined_Poles_18,lyr_Combined_Transformer_GPS_19,],
                                fold: "open",
                                title: "PowerCo Existing Service"});
var group_RasterPlan = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: "Raster Plan"});
var group_LINZ = new ol.layer.Group({
                                layers: [lyr_nzprimarylandparcels_2,lyr_nzprimarylandparcels_3,lyr_nzprimarylandparcels_4,lyr_nzaddresses_5,lyr_nzaddresses_6,lyr_nzaddresses_7,],
                                fold: "open",
                                title: "LINZ"});

lyr_GoogleStreets_0.setVisible(true);lyr_LINZBasemap_1.setVisible(true);lyr_nzprimarylandparcels_2.setVisible(true);lyr_nzprimarylandparcels_3.setVisible(true);lyr_nzprimarylandparcels_4.setVisible(true);lyr_nzaddresses_5.setVisible(true);lyr_nzaddresses_6.setVisible(true);lyr_nzaddresses_7.setVisible(true);lyr_OBSPlanBoundary_8.setVisible(true);lyr_Combined_Communication_Cable_9.setVisible(true);lyr_Combined_HV_Cable_GPS_10.setVisible(true);lyr_Combined_HV_Underground_Cable_11.setVisible(true);lyr_Combined_LV_Cable_Other_GPS_12.setVisible(true);lyr_Combined_LV_Distribution_Cable_GPS_13.setVisible(true);lyr_Combined_LV_Service_Cable_GPS_14.setVisible(true);lyr_Combined_LV_Underground_Cable_15.setVisible(true);lyr_Combined_SubTrans_Cable_GPS_16.setVisible(true);lyr_Combined_Distribution_Box_GPS_17.setVisible(true);lyr_Combined_Poles_18.setVisible(true);lyr_Combined_Transformer_GPS_19.setVisible(true);lyr_Water_Supply_Pipe_20.setVisible(true);lyr_One_NZ_Undergound_Service_21.setVisible(true);lyr_TuatahiFirstFibre_22.setVisible(true);lyr_ChorusUndergroundDuct_23.setVisible(true);lyr_WaihiTaurangaBuildsections_NZTM_24.setVisible(true);
var layersList = [lyr_GoogleStreets_0,lyr_LINZBasemap_1,group_LINZ,lyr_OBSPlanBoundary_8,group_PowerCoExistingService,lyr_Water_Supply_Pipe_20,lyr_One_NZ_Undergound_Service_21,lyr_TuatahiFirstFibre_22,lyr_ChorusUndergroundDuct_23,lyr_WaihiTaurangaBuildsections_NZTM_24];
lyr_nzprimarylandparcels_2.set('fieldAliases', {'id': 'id', 'appellatio': 'appellatio', 'affected_s': 'affected_s', 'parcel_int': 'parcel_int', 'topology_t': 'topology_t', 'statutory_': 'statutory_', 'land_distr': 'land_distr', 'titles': 'titles', 'survey_are': 'survey_are', 'calc_area': 'calc_area', });
lyr_nzprimarylandparcels_3.set('fieldAliases', {'id': 'id', 'appellatio': 'appellatio', 'affected_s': 'affected_s', 'parcel_int': 'parcel_int', 'topology_t': 'topology_t', 'statutory_': 'statutory_', 'land_distr': 'land_distr', 'titles': 'titles', 'survey_are': 'survey_are', 'calc_area': 'calc_area', });
lyr_nzprimarylandparcels_4.set('fieldAliases', {'id': 'id', 'appellatio': 'appellatio', 'affected_s': 'affected_s', 'parcel_int': 'parcel_int', 'topology_t': 'topology_t', 'statutory_': 'statutory_', 'land_distr': 'land_distr', 'titles': 'titles', 'survey_are': 'survey_are', 'calc_area': 'calc_area', });
lyr_nzaddresses_5.set('fieldAliases', {'address_id': 'address_id', 'source_dat': 'source_dat', 'change_id': 'change_id', 'full_addre': 'full_addre', 'full_road_': 'full_road_', 'full_add_1': 'full_add_1', 'territoria': 'territoria', 'unit_type': 'unit_type', 'unit_value': 'unit_value', 'level_type': 'level_type', 'level_valu': 'level_valu', 'address_nu': 'address_nu', 'address__1': 'address__1', 'address__2': 'address__2', 'address__3': 'address__3', 'road_name_': 'road_name_', 'road_name': 'road_name', 'road_type_': 'road_type_', 'road_suffi': 'road_suffi', 'water_name': 'water_name', 'water_body': 'water_body', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'address_cl': 'address_cl', 'address_li': 'address_li', 'gd2000_xco': 'gd2000_xco', 'gd2000_yco': 'gd2000_yco', 'road_nam_1': 'road_nam_1', 'water_na_1': 'water_na_1', 'water_bo_1': 'water_bo_1', 'suburb_l_1': 'suburb_l_1', 'town_city_': 'town_city_', 'full_roa_1': 'full_roa_1', 'full_add_2': 'full_add_2', });
lyr_nzaddresses_6.set('fieldAliases', {'address_id': 'address_id', 'source_dat': 'source_dat', 'change_id': 'change_id', 'full_addre': 'full_addre', 'full_road_': 'full_road_', 'full_add_1': 'full_add_1', 'territoria': 'territoria', 'unit_type': 'unit_type', 'unit_value': 'unit_value', 'level_type': 'level_type', 'level_valu': 'level_valu', 'address_nu': 'address_nu', 'address__1': 'address__1', 'address__2': 'address__2', 'address__3': 'address__3', 'road_name_': 'road_name_', 'road_name': 'road_name', 'road_type_': 'road_type_', 'road_suffi': 'road_suffi', 'water_name': 'water_name', 'water_body': 'water_body', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'address_cl': 'address_cl', 'address_li': 'address_li', 'gd2000_xco': 'gd2000_xco', 'gd2000_yco': 'gd2000_yco', 'road_nam_1': 'road_nam_1', 'water_na_1': 'water_na_1', 'water_bo_1': 'water_bo_1', 'suburb_l_1': 'suburb_l_1', 'town_city_': 'town_city_', 'full_roa_1': 'full_roa_1', 'full_add_2': 'full_add_2', });
lyr_nzaddresses_7.set('fieldAliases', {'address_id': 'address_id', 'source_dat': 'source_dat', 'change_id': 'change_id', 'full_addre': 'full_addre', 'full_road_': 'full_road_', 'full_add_1': 'full_add_1', 'territoria': 'territoria', 'unit_type': 'unit_type', 'unit_value': 'unit_value', 'level_type': 'level_type', 'level_valu': 'level_valu', 'address_nu': 'address_nu', 'address__1': 'address__1', 'address__2': 'address__2', 'address__3': 'address__3', 'road_name_': 'road_name_', 'road_name': 'road_name', 'road_type_': 'road_type_', 'road_suffi': 'road_suffi', 'water_name': 'water_name', 'water_body': 'water_body', 'suburb_loc': 'suburb_loc', 'town_city': 'town_city', 'address_cl': 'address_cl', 'address_li': 'address_li', 'gd2000_xco': 'gd2000_xco', 'gd2000_yco': 'gd2000_yco', 'road_nam_1': 'road_nam_1', 'water_na_1': 'water_na_1', 'water_bo_1': 'water_bo_1', 'suburb_l_1': 'suburb_l_1', 'town_city_': 'town_city_', 'full_roa_1': 'full_roa_1', 'full_add_2': 'full_add_2', });
lyr_OBSPlanBoundary_8.set('fieldAliases', {'id': 'id', });
lyr_Combined_Communication_Cable_9.set('fieldAliases', {'SUBTYPECD': 'SUBTYPECD', 'OWNER': 'OWNER', 'GLOBALID': 'GLOBALID', 'OUTOFORDER': 'OUTOFORDER', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_HV_Cable_GPS_10.set('fieldAliases', {'ABSOLUTE': 'ABSOLUTE', 'OPERATINGV': 'OPERATINGV', 'OWNER': 'OWNER', 'OUTOFORDER': 'OUTOFORDER', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_HV_Underground_Cable_11.set('fieldAliases', {'ENABLED': 'ENABLED', 'OWNER': 'OWNER', 'OUTOFORDER': 'OUTOFORDER', 'OPERATINGV': 'OPERATINGV', 'STRATEGIC': 'STRATEGIC', 'GLOBALID': 'GLOBALID', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_LV_Cable_Other_GPS_12.set('fieldAliases', {'ABSOLUTE': 'ABSOLUTE', 'OPERATINGV': 'OPERATINGV', 'OUTOFORDER': 'OUTOFORDER', 'OWNER': 'OWNER', 'SUBTYPECD': 'SUBTYPECD', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_LV_Distribution_Cable_GPS_13.set('fieldAliases', {'ABSOLUTE': 'ABSOLUTE', 'OPERATINGV': 'OPERATINGV', 'OWNER': 'OWNER', 'OUTOFORDER': 'OUTOFORDER', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_LV_Service_Cable_GPS_14.set('fieldAliases', {'ABSOLUTE': 'ABSOLUTE', 'OPERATINGV': 'OPERATINGV', 'OUTOFORDER': 'OUTOFORDER', 'OWNER': 'OWNER', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_LV_Underground_Cable_15.set('fieldAliases', {'ENABLED': 'ENABLED', 'SUBTYPECD': 'SUBTYPECD', 'OWNER': 'OWNER', 'OUTOFORDER': 'OUTOFORDER', 'OPERATINGV': 'OPERATINGV', 'GLOBALID': 'GLOBALID', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_SubTrans_Cable_GPS_16.set('fieldAliases', {'ABSOLUTE': 'ABSOLUTE', 'OPERATINGV': 'OPERATINGV', 'OWNER': 'OWNER', 'OUTOFORDER': 'OUTOFORDER', 'SHAPE_STLe': 'SHAPE_STLe', });
lyr_Combined_Distribution_Box_GPS_17.set('fieldAliases', {'OWNER': 'OWNER', 'ABSOLUTE': 'ABSOLUTE', 'OUTOFORDER': 'OUTOFORDER', });
lyr_Combined_Poles_18.set('fieldAliases', {'FACILITYID': 'FACILITYID', 'OWNER': 'OWNER', 'GLOBALID': 'GLOBALID', 'OUTOFORDER': 'OUTOFORDER', });
lyr_Combined_Transformer_GPS_19.set('fieldAliases', {'OPERATINGV': 'OPERATINGV', 'OWNER': 'OWNER', 'ABSOLUTE': 'ABSOLUTE', 'OUTOFORDER': 'OUTOFORDER', });
lyr_Water_Supply_Pipe_20.set('fieldAliases', {'FID': 'FID', 'asset_id': 'asset_id', 'asset_type': 'asset_type', 'material': 'material', 'diameter': 'diameter', 'quantity_l': 'quantity_l', 'us_invert': 'us_invert', 'ds_invert': 'ds_invert', 'status': 'status', 'community': 'community', 'Shape__Len': 'Shape__Len', });
lyr_One_NZ_Undergound_Service_21.set('fieldAliases', {'id': 'id', 'constructi': 'constructi', 'surface_ty': 'surface_ty', 'status': 'status', 'width': 'width', 'depth': 'depth', 'distance_f': 'distance_f', 'length': 'length', 'completion': 'completion', 'verified': 'verified', 'contractor': 'contractor', 'cost_per_m': 'cost_per_m', 'cost': 'cost', 'is_ped_swe': 'is_ped_swe', 'import_sou': 'import_sou', 'date_updat': 'date_updat', 'user_ident': 'user_ident', 'trench_spa': 'trench_spa', 'construc_1': 'construc_1', });
lyr_TuatahiFirstFibre_22.set('fieldAliases', {'id': 'id', 'Duct Type': 'Duct Type', 'Owner': 'Owner', });
lyr_ChorusUndergroundDuct_23.set('fieldAliases', {'ROUTE_PURP': 'ROUTE_PURP', 'CONSTRUCTI': 'CONSTRUCTI', 'CALCULATED': 'CALCULATED', 'DIAMETER': 'DIAMETER', 'CENTRE_POI': 'CENTRE_POI', 'BASE_MATER': 'BASE_MATER', 'NAME': 'NAME', 'WORLD_ID1': 'WORLD_ID1', 'UNDERGROUN': 'UNDERGROUN', 'DATE_COMMI': 'DATE_COMMI', 'OWNER': 'OWNER', 'ACCURATE_P': 'ACCURATE_P', });
lyr_WaihiTaurangaBuildsections_NZTM_24.set('fieldAliases', {'NAME': 'NAME', 'LAYER': 'LAYER', 'MAP_NAME': 'MAP_NAME', 'KML_STYLE': 'KML_STYLE', 'KML_FOLDER': 'KML_FOLDER', 'tessellate': 'tessellate', 'LINE_STYLE': 'LINE_STYLE', 'LINE_COLOR': 'LINE_COLOR', 'LINE_WIDTH': 'LINE_WIDTH', 'FONT_SIZE': 'FONT_SIZE', 'FONT_COLOR': 'FONT_COLOR', 'FONT_CHARS': 'FONT_CHARS', 'FONT_WEIGH': 'FONT_WEIGH', 'open': 'open', 'Length': 'Length', });
lyr_nzprimarylandparcels_2.set('fieldImages', {'id': 'Range', 'appellatio': 'TextEdit', 'affected_s': 'TextEdit', 'parcel_int': 'TextEdit', 'topology_t': 'TextEdit', 'statutory_': 'TextEdit', 'land_distr': 'TextEdit', 'titles': 'TextEdit', 'survey_are': 'TextEdit', 'calc_area': 'TextEdit', });
lyr_nzprimarylandparcels_3.set('fieldImages', {'id': 'Range', 'appellatio': 'TextEdit', 'affected_s': 'TextEdit', 'parcel_int': 'TextEdit', 'topology_t': 'TextEdit', 'statutory_': 'TextEdit', 'land_distr': 'TextEdit', 'titles': 'TextEdit', 'survey_are': 'TextEdit', 'calc_area': 'TextEdit', });
lyr_nzprimarylandparcels_4.set('fieldImages', {'id': 'Range', 'appellatio': 'TextEdit', 'affected_s': 'TextEdit', 'parcel_int': 'TextEdit', 'topology_t': 'TextEdit', 'statutory_': 'TextEdit', 'land_distr': 'TextEdit', 'titles': 'TextEdit', 'survey_are': 'TextEdit', 'calc_area': 'TextEdit', });
lyr_nzaddresses_5.set('fieldImages', {'address_id': 'Range', 'source_dat': 'TextEdit', 'change_id': 'Range', 'full_addre': 'TextEdit', 'full_road_': 'TextEdit', 'full_add_1': 'TextEdit', 'territoria': 'TextEdit', 'unit_type': 'TextEdit', 'unit_value': 'TextEdit', 'level_type': 'TextEdit', 'level_valu': 'TextEdit', 'address_nu': 'TextEdit', 'address__1': 'Range', 'address__2': 'TextEdit', 'address__3': 'Range', 'road_name_': 'TextEdit', 'road_name': 'TextEdit', 'road_type_': 'TextEdit', 'road_suffi': 'TextEdit', 'water_name': 'TextEdit', 'water_body': 'TextEdit', 'suburb_loc': 'TextEdit', 'town_city': 'TextEdit', 'address_cl': 'TextEdit', 'address_li': 'TextEdit', 'gd2000_xco': 'TextEdit', 'gd2000_yco': 'TextEdit', 'road_nam_1': 'TextEdit', 'water_na_1': 'TextEdit', 'water_bo_1': 'TextEdit', 'suburb_l_1': 'TextEdit', 'town_city_': 'TextEdit', 'full_roa_1': 'TextEdit', 'full_add_2': 'TextEdit', });
lyr_nzaddresses_6.set('fieldImages', {'address_id': 'Range', 'source_dat': 'TextEdit', 'change_id': 'Range', 'full_addre': 'TextEdit', 'full_road_': 'TextEdit', 'full_add_1': 'TextEdit', 'territoria': 'TextEdit', 'unit_type': 'TextEdit', 'unit_value': 'TextEdit', 'level_type': 'TextEdit', 'level_valu': 'TextEdit', 'address_nu': 'TextEdit', 'address__1': 'Range', 'address__2': 'TextEdit', 'address__3': 'Range', 'road_name_': 'TextEdit', 'road_name': 'TextEdit', 'road_type_': 'TextEdit', 'road_suffi': 'TextEdit', 'water_name': 'TextEdit', 'water_body': 'TextEdit', 'suburb_loc': 'TextEdit', 'town_city': 'TextEdit', 'address_cl': 'TextEdit', 'address_li': 'TextEdit', 'gd2000_xco': 'TextEdit', 'gd2000_yco': 'TextEdit', 'road_nam_1': 'TextEdit', 'water_na_1': 'TextEdit', 'water_bo_1': 'TextEdit', 'suburb_l_1': 'TextEdit', 'town_city_': 'TextEdit', 'full_roa_1': 'TextEdit', 'full_add_2': 'TextEdit', });
lyr_nzaddresses_7.set('fieldImages', {'address_id': 'Range', 'source_dat': 'TextEdit', 'change_id': 'Range', 'full_addre': 'TextEdit', 'full_road_': 'TextEdit', 'full_add_1': 'TextEdit', 'territoria': 'TextEdit', 'unit_type': 'TextEdit', 'unit_value': 'TextEdit', 'level_type': 'TextEdit', 'level_valu': 'TextEdit', 'address_nu': 'TextEdit', 'address__1': 'Range', 'address__2': 'TextEdit', 'address__3': 'Range', 'road_name_': 'TextEdit', 'road_name': 'TextEdit', 'road_type_': 'TextEdit', 'road_suffi': 'TextEdit', 'water_name': 'TextEdit', 'water_body': 'TextEdit', 'suburb_loc': 'TextEdit', 'town_city': 'TextEdit', 'address_cl': 'TextEdit', 'address_li': 'TextEdit', 'gd2000_xco': 'TextEdit', 'gd2000_yco': 'TextEdit', 'road_nam_1': 'TextEdit', 'water_na_1': 'TextEdit', 'water_bo_1': 'TextEdit', 'suburb_l_1': 'TextEdit', 'town_city_': 'TextEdit', 'full_roa_1': 'TextEdit', 'full_add_2': 'TextEdit', });
lyr_OBSPlanBoundary_8.set('fieldImages', {'id': 'TextEdit', });
lyr_Combined_Communication_Cable_9.set('fieldImages', {'SUBTYPECD': 'TextEdit', 'OWNER': 'TextEdit', 'GLOBALID': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_HV_Cable_GPS_10.set('fieldImages', {'ABSOLUTE': '', 'OPERATINGV': '', 'OWNER': '', 'OUTOFORDER': '', 'SHAPE_STLe': '', });
lyr_Combined_HV_Underground_Cable_11.set('fieldImages', {'ENABLED': 'TextEdit', 'OWNER': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'OPERATINGV': 'TextEdit', 'STRATEGIC': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_LV_Cable_Other_GPS_12.set('fieldImages', {'ABSOLUTE': '', 'OPERATINGV': '', 'OUTOFORDER': '', 'OWNER': '', 'SUBTYPECD': '', 'SHAPE_STLe': '', });
lyr_Combined_LV_Distribution_Cable_GPS_13.set('fieldImages', {'ABSOLUTE': 'TextEdit', 'OPERATINGV': 'TextEdit', 'OWNER': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_LV_Service_Cable_GPS_14.set('fieldImages', {'ABSOLUTE': 'TextEdit', 'OPERATINGV': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'OWNER': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_LV_Underground_Cable_15.set('fieldImages', {'ENABLED': 'TextEdit', 'SUBTYPECD': 'TextEdit', 'OWNER': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'OPERATINGV': 'TextEdit', 'GLOBALID': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_SubTrans_Cable_GPS_16.set('fieldImages', {'ABSOLUTE': 'TextEdit', 'OPERATINGV': 'TextEdit', 'OWNER': 'TextEdit', 'OUTOFORDER': 'TextEdit', 'SHAPE_STLe': 'TextEdit', });
lyr_Combined_Distribution_Box_GPS_17.set('fieldImages', {'OWNER': '', 'ABSOLUTE': '', 'OUTOFORDER': '', });
lyr_Combined_Poles_18.set('fieldImages', {'FACILITYID': 'TextEdit', 'OWNER': 'TextEdit', 'GLOBALID': 'TextEdit', 'OUTOFORDER': 'TextEdit', });
lyr_Combined_Transformer_GPS_19.set('fieldImages', {'OPERATINGV': 'TextEdit', 'OWNER': 'TextEdit', 'ABSOLUTE': 'TextEdit', 'OUTOFORDER': 'TextEdit', });
lyr_Water_Supply_Pipe_20.set('fieldImages', {'FID': 'Range', 'asset_id': 'TextEdit', 'asset_type': 'TextEdit', 'material': 'TextEdit', 'diameter': 'Range', 'quantity_l': 'TextEdit', 'us_invert': 'Range', 'ds_invert': 'Range', 'status': 'TextEdit', 'community': 'TextEdit', 'Shape__Len': 'TextEdit', });
lyr_One_NZ_Undergound_Service_21.set('fieldImages', {'id': 'TextEdit', 'constructi': 'TextEdit', 'surface_ty': 'TextEdit', 'status': 'TextEdit', 'width': 'TextEdit', 'depth': 'TextEdit', 'distance_f': 'TextEdit', 'length': 'TextEdit', 'completion': 'DateTime', 'verified': 'TextEdit', 'contractor': 'TextEdit', 'cost_per_m': 'TextEdit', 'cost': 'TextEdit', 'is_ped_swe': 'TextEdit', 'import_sou': 'TextEdit', 'date_updat': 'DateTime', 'user_ident': 'TextEdit', 'trench_spa': 'TextEdit', 'construc_1': 'TextEdit', });
lyr_TuatahiFirstFibre_22.set('fieldImages', {'id': 'TextEdit', 'Duct Type': '', 'Owner': '', });
lyr_ChorusUndergroundDuct_23.set('fieldImages', {'ROUTE_PURP': 'TextEdit', 'CONSTRUCTI': 'TextEdit', 'CALCULATED': 'TextEdit', 'DIAMETER': 'TextEdit', 'CENTRE_POI': 'TextEdit', 'BASE_MATER': 'TextEdit', 'NAME': 'TextEdit', 'WORLD_ID1': 'TextEdit', 'UNDERGROUN': 'TextEdit', 'DATE_COMMI': 'DateTime', 'OWNER': 'TextEdit', 'ACCURATE_P': 'CheckBox', });
lyr_WaihiTaurangaBuildsections_NZTM_24.set('fieldImages', {'NAME': 'TextEdit', 'LAYER': 'TextEdit', 'MAP_NAME': 'TextEdit', 'KML_STYLE': 'TextEdit', 'KML_FOLDER': 'TextEdit', 'tessellate': 'Range', 'LINE_STYLE': 'TextEdit', 'LINE_COLOR': 'TextEdit', 'LINE_WIDTH': 'Range', 'FONT_SIZE': 'Range', 'FONT_COLOR': 'TextEdit', 'FONT_CHARS': 'Range', 'FONT_WEIGH': 'Range', 'open': 'Range', 'Length': '', });
lyr_nzprimarylandparcels_2.set('fieldLabels', {'id': 'no label', 'appellatio': 'no label', 'affected_s': 'no label', 'parcel_int': 'no label', 'topology_t': 'no label', 'statutory_': 'no label', 'land_distr': 'no label', 'titles': 'no label', 'survey_are': 'no label', 'calc_area': 'no label', });
lyr_nzprimarylandparcels_3.set('fieldLabels', {'id': 'no label', 'appellatio': 'no label', 'affected_s': 'no label', 'parcel_int': 'no label', 'topology_t': 'no label', 'statutory_': 'no label', 'land_distr': 'no label', 'titles': 'no label', 'survey_are': 'no label', 'calc_area': 'no label', });
lyr_nzprimarylandparcels_4.set('fieldLabels', {'id': 'no label', 'appellatio': 'no label', 'affected_s': 'no label', 'parcel_int': 'no label', 'topology_t': 'no label', 'statutory_': 'no label', 'land_distr': 'no label', 'titles': 'no label', 'survey_are': 'no label', 'calc_area': 'no label', });
lyr_nzaddresses_5.set('fieldLabels', {'address_id': 'no label', 'source_dat': 'no label', 'change_id': 'no label', 'full_addre': 'no label', 'full_road_': 'no label', 'full_add_1': 'no label', 'territoria': 'no label', 'unit_type': 'no label', 'unit_value': 'no label', 'level_type': 'no label', 'level_valu': 'no label', 'address_nu': 'no label', 'address__1': 'no label', 'address__2': 'no label', 'address__3': 'no label', 'road_name_': 'no label', 'road_name': 'no label', 'road_type_': 'no label', 'road_suffi': 'no label', 'water_name': 'no label', 'water_body': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'address_cl': 'no label', 'address_li': 'no label', 'gd2000_xco': 'no label', 'gd2000_yco': 'no label', 'road_nam_1': 'no label', 'water_na_1': 'no label', 'water_bo_1': 'no label', 'suburb_l_1': 'no label', 'town_city_': 'no label', 'full_roa_1': 'no label', 'full_add_2': 'no label', });
lyr_nzaddresses_6.set('fieldLabels', {'address_id': 'no label', 'source_dat': 'no label', 'change_id': 'no label', 'full_addre': 'no label', 'full_road_': 'no label', 'full_add_1': 'no label', 'territoria': 'no label', 'unit_type': 'no label', 'unit_value': 'no label', 'level_type': 'no label', 'level_valu': 'no label', 'address_nu': 'no label', 'address__1': 'no label', 'address__2': 'no label', 'address__3': 'no label', 'road_name_': 'no label', 'road_name': 'no label', 'road_type_': 'no label', 'road_suffi': 'no label', 'water_name': 'no label', 'water_body': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'address_cl': 'no label', 'address_li': 'no label', 'gd2000_xco': 'no label', 'gd2000_yco': 'no label', 'road_nam_1': 'no label', 'water_na_1': 'no label', 'water_bo_1': 'no label', 'suburb_l_1': 'no label', 'town_city_': 'no label', 'full_roa_1': 'no label', 'full_add_2': 'no label', });
lyr_nzaddresses_7.set('fieldLabels', {'address_id': 'no label', 'source_dat': 'no label', 'change_id': 'no label', 'full_addre': 'no label', 'full_road_': 'no label', 'full_add_1': 'no label', 'territoria': 'no label', 'unit_type': 'no label', 'unit_value': 'no label', 'level_type': 'no label', 'level_valu': 'no label', 'address_nu': 'no label', 'address__1': 'no label', 'address__2': 'no label', 'address__3': 'no label', 'road_name_': 'no label', 'road_name': 'no label', 'road_type_': 'no label', 'road_suffi': 'no label', 'water_name': 'no label', 'water_body': 'no label', 'suburb_loc': 'no label', 'town_city': 'no label', 'address_cl': 'no label', 'address_li': 'no label', 'gd2000_xco': 'no label', 'gd2000_yco': 'no label', 'road_nam_1': 'no label', 'water_na_1': 'no label', 'water_bo_1': 'no label', 'suburb_l_1': 'no label', 'town_city_': 'no label', 'full_roa_1': 'no label', 'full_add_2': 'no label', });
lyr_OBSPlanBoundary_8.set('fieldLabels', {'id': 'no label', });
lyr_Combined_Communication_Cable_9.set('fieldLabels', {'SUBTYPECD': 'no label', 'OWNER': 'no label', 'GLOBALID': 'no label', 'OUTOFORDER': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_HV_Cable_GPS_10.set('fieldLabels', {'ABSOLUTE': 'no label', 'OPERATINGV': 'no label', 'OWNER': 'no label', 'OUTOFORDER': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_HV_Underground_Cable_11.set('fieldLabels', {'ENABLED': 'no label', 'OWNER': 'no label', 'OUTOFORDER': 'no label', 'OPERATINGV': 'no label', 'STRATEGIC': 'no label', 'GLOBALID': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_LV_Cable_Other_GPS_12.set('fieldLabels', {'ABSOLUTE': 'no label', 'OPERATINGV': 'no label', 'OUTOFORDER': 'no label', 'OWNER': 'no label', 'SUBTYPECD': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_LV_Distribution_Cable_GPS_13.set('fieldLabels', {'ABSOLUTE': 'no label', 'OPERATINGV': 'no label', 'OWNER': 'no label', 'OUTOFORDER': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_LV_Service_Cable_GPS_14.set('fieldLabels', {'ABSOLUTE': 'no label', 'OPERATINGV': 'no label', 'OUTOFORDER': 'no label', 'OWNER': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_LV_Underground_Cable_15.set('fieldLabels', {'ENABLED': 'no label', 'SUBTYPECD': 'no label', 'OWNER': 'no label', 'OUTOFORDER': 'no label', 'OPERATINGV': 'no label', 'GLOBALID': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_SubTrans_Cable_GPS_16.set('fieldLabels', {'ABSOLUTE': 'no label', 'OPERATINGV': 'no label', 'OWNER': 'no label', 'OUTOFORDER': 'no label', 'SHAPE_STLe': 'no label', });
lyr_Combined_Distribution_Box_GPS_17.set('fieldLabels', {'OWNER': 'no label', 'ABSOLUTE': 'no label', 'OUTOFORDER': 'no label', });
lyr_Combined_Poles_18.set('fieldLabels', {'FACILITYID': 'no label', 'OWNER': 'no label', 'GLOBALID': 'no label', 'OUTOFORDER': 'no label', });
lyr_Combined_Transformer_GPS_19.set('fieldLabels', {'OPERATINGV': 'no label', 'OWNER': 'no label', 'ABSOLUTE': 'no label', 'OUTOFORDER': 'no label', });
lyr_Water_Supply_Pipe_20.set('fieldLabels', {'FID': 'no label', 'asset_id': 'no label', 'asset_type': 'no label', 'material': 'no label', 'diameter': 'no label', 'quantity_l': 'no label', 'us_invert': 'no label', 'ds_invert': 'no label', 'status': 'no label', 'community': 'no label', 'Shape__Len': 'no label', });
lyr_One_NZ_Undergound_Service_21.set('fieldLabels', {'id': 'no label', 'constructi': 'no label', 'surface_ty': 'no label', 'status': 'no label', 'width': 'no label', 'depth': 'no label', 'distance_f': 'no label', 'length': 'no label', 'completion': 'no label', 'verified': 'no label', 'contractor': 'no label', 'cost_per_m': 'no label', 'cost': 'no label', 'is_ped_swe': 'no label', 'import_sou': 'no label', 'date_updat': 'no label', 'user_ident': 'no label', 'trench_spa': 'no label', 'construc_1': 'no label', });
lyr_TuatahiFirstFibre_22.set('fieldLabels', {'id': 'no label', 'Duct Type': 'no label', 'Owner': 'no label', });
lyr_ChorusUndergroundDuct_23.set('fieldLabels', {'ROUTE_PURP': 'no label', 'CONSTRUCTI': 'no label', 'CALCULATED': 'no label', 'DIAMETER': 'no label', 'CENTRE_POI': 'no label', 'BASE_MATER': 'no label', 'NAME': 'no label', 'WORLD_ID1': 'no label', 'UNDERGROUN': 'no label', 'DATE_COMMI': 'no label', 'OWNER': 'no label', 'ACCURATE_P': 'no label', });
lyr_WaihiTaurangaBuildsections_NZTM_24.set('fieldLabels', {'NAME': 'no label', 'LAYER': 'no label', 'MAP_NAME': 'no label', 'KML_STYLE': 'no label', 'KML_FOLDER': 'no label', 'tessellate': 'no label', 'LINE_STYLE': 'no label', 'LINE_COLOR': 'no label', 'LINE_WIDTH': 'no label', 'FONT_SIZE': 'no label', 'FONT_COLOR': 'no label', 'FONT_CHARS': 'no label', 'FONT_WEIGH': 'no label', 'open': 'no label', 'Length': 'no label', });
lyr_WaihiTaurangaBuildsections_NZTM_24.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});