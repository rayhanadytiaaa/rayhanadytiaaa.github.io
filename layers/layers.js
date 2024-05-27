var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_nagari_terdampak_1 = new ol.format.GeoJSON();
var features_nagari_terdampak_1 = format_nagari_terdampak_1.readFeatures(json_nagari_terdampak_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_nagari_terdampak_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_nagari_terdampak_1.addFeatures(features_nagari_terdampak_1);
var lyr_nagari_terdampak_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_nagari_terdampak_1, 
                style: style_nagari_terdampak_1,
                popuplayertitle: "nagari_terdampak",
                interactive: true,
                title: '<img src="styles/legend/nagari_terdampak_1.png" /> nagari_terdampak'
            });
var format_tempatibadahrusak_2 = new ol.format.GeoJSON();
var features_tempatibadahrusak_2 = format_tempatibadahrusak_2.readFeatures(json_tempatibadahrusak_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_tempatibadahrusak_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_tempatibadahrusak_2.addFeatures(features_tempatibadahrusak_2);
var lyr_tempatibadahrusak_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_tempatibadahrusak_2, 
                style: style_tempatibadahrusak_2,
                popuplayertitle: "tempat ibadah rusak",
                interactive: true,
                title: '<img src="styles/legend/tempatibadahrusak_2.png" /> tempat ibadah rusak'
            });
var format_titikputusnya_3 = new ol.format.GeoJSON();
var features_titikputusnya_3 = format_titikputusnya_3.readFeatures(json_titikputusnya_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikputusnya_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikputusnya_3.addFeatures(features_titikputusnya_3);
var lyr_titikputusnya_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikputusnya_3, 
                style: style_titikputusnya_3,
                popuplayertitle: "titik putus nya",
                interactive: true,
                title: '<img src="styles/legend/titikputusnya_3.png" /> titik putus nya'
            });
var format_titikpengungsiannya_4 = new ol.format.GeoJSON();
var features_titikpengungsiannya_4 = format_titikpengungsiannya_4.readFeatures(json_titikpengungsiannya_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_titikpengungsiannya_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_titikpengungsiannya_4.addFeatures(features_titikpengungsiannya_4);
var lyr_titikpengungsiannya_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_titikpengungsiannya_4, 
                style: style_titikpengungsiannya_4,
                popuplayertitle: "titik pengungsian nya",
                interactive: true,
                title: '<img src="styles/legend/titikpengungsiannya_4.png" /> titik pengungsian nya'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_nagari_terdampak_1.setVisible(true);lyr_tempatibadahrusak_2.setVisible(true);lyr_titikputusnya_3.setVisible(true);lyr_titikpengungsiannya_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_nagari_terdampak_1,lyr_tempatibadahrusak_2,lyr_titikputusnya_3,lyr_titikpengungsiannya_4];
lyr_nagari_terdampak_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'kode_desa_': 'kode_desa_', 'nama_prop_': 'nama_prop_', 'nama_kab_1': 'nama_kab_1', 'nama_kec_1': 'nama_kec_1', 'nama_desa_': 'nama_desa_', 'jumlah_pen': 'jumlah_pen', 'jumlah_kk_': 'jumlah_kk_', 'luas_wilay': 'luas_wilay', 'kepadatan_': 'kepadatan_', 'perpindaha': 'perpindaha', 'jml_mening': 'jml_mening', 'perubahan_': 'perubahan_', 'jml_wktp_1': 'jml_wktp_1', 'jml_rekam_': 'jml_rekam_', 'islam_12': 'islam_12', 'kristen_12': 'kristen_12', 'katholik_1': 'katholik_1', 'hindu_12': 'hindu_12', 'budha_12': 'budha_12', 'konghucu_1': 'konghucu_1', 'kepercayaa': 'kepercayaa', 'pria_12': 'pria_12', 'wanita_12': 'wanita_12', 'belum_kawi': 'belum_kawi', 'kawin_12': 'kawin_12', 'cerai_hidu': 'cerai_hidu', 'cerai_mati': 'cerai_mati', 'u0_12': 'u0_12', 'u5_12': 'u5_12', 'u10_12': 'u10_12', 'u15_12': 'u15_12', 'u20_12': 'u20_12', 'u25_12': 'u25_12', 'u30_12': 'u30_12', 'u35_12': 'u35_12', 'u40_12': 'u40_12', 'u45_12': 'u45_12', 'u50_12': 'u50_12', 'u55_12': 'u55_12', 'u60_12': 'u60_12', 'u65_12': 'u65_12', 'u70_12': 'u70_12', 'u75_12': 'u75_12', 'lhr_2018_2': 'lhr_2018_2', 'lhr_sebelu': 'lhr_sebelu', 'lhr_2019_2': 'lhr_2019_2', 'lhr_sebe_1': 'lhr_sebe_1', 'lhr_2020_2': 'lhr_2020_2', 'lhr_sebe_2': 'lhr_sebe_2', 'lhr_2021_2': 'lhr_2021_2', 'lhr_sebe_3': 'lhr_sebe_3', 'lhr_2022_2': 'lhr_2022_2', 'lhr_sebe_4': 'lhr_sebe_4', 'pertumbuha': 'pertumbuha', 'pertumbu_1': 'pertumbu_1', 'pertumbu_2': 'pertumbu_2', 'pertumbu_3': 'pertumbu_3', 'pertumbu_4': 'pertumbu_4', 'usia_sekol': 'usia_sekol', 'usia_sek_1': 'usia_sek_1', 'usia_sek_2': 'usia_sek_2', 'usia_sek_3': 'usia_sek_3', 'tidak_blm_': 'tidak_blm_', 'belum_tama': 'belum_tama', 'tamat_sd_1': 'tamat_sd_1', 'sltp_12': 'sltp_12', 'slta_12': 'slta_12', 'd1_dan_d2_': 'd1_dan_d2_', 'd3_1': 'd3_1', 's1_1': 's1_1', 's2_1': 's2_1', 's3_1': 's3_1', 'o_12': 'o_12', 'b1_12': 'b1_12', 'b1_12_13': 'b1_12_13', 'o1_12': 'o1_12', 'ab1_12': 'ab1_12', 'a_12': 'a_12', 'tidak_tahu': 'tidak_tahu', 'ab1_12_13': 'ab1_12_13', 'a1_12': 'a1_12', 'a1_12_13': 'a1_12_13', 'o1_12_13': 'o1_12_13', 'b_12': 'b_12', 'ab_12': 'ab_12', 'pensiunan_': 'pensiunan_', 'mengurus_r': 'mengurus_r', 'belum_tida': 'belum_tida', 'lainnya_12': 'lainnya_12', 'perdaganga': 'perdaganga', 'perawat_1': 'perawat_1', 'nelayan_12': 'nelayan_12', 'pelajar_ma': 'pelajar_ma', 'guru_1': 'guru_1', 'wiraswasta': 'wiraswasta', 'pengacara_': 'pengacara_', 'nama_desa1': 'nama_desa1', 'Shape_STAr': 'Shape_STAr', 'Shape_STLe': 'Shape_STLe', });
lyr_tempatibadahrusak_2.set('fieldAliases', {'fid': 'fid', 'Jumlah Rumah Ibadah yang Rusak': 'Jumlah Rumah Ibadah yang Rusak', 'field_2': 'field_2', 'field_3': 'field_3', 'field_4': 'field_4', 'field_5': 'field_5', 'field_6': 'field_6', 'field_7': 'field_7', });
lyr_titikputusnya_3.set('fieldAliases', {'fid': 'fid', 'Kabupaten': 'Kabupaten', 'Kondisi Jalan Putus': 'Kondisi Jalan Putus', 'field_3': 'field_3', 'field_4': 'field_4', });
lyr_titikpengungsiannya_4.set('fieldAliases', {'fid': 'fid', 'Nama Kecamatan': 'Nama Kecamatan', 'Titik Pengungsian': 'Titik Pengungsian', 'Jumlah Pengungsi': 'Jumlah Pengungsi', 'field_4': 'field_4', 'field_5': 'field_5', });
lyr_nagari_terdampak_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'kode_desa_': 'TextEdit', 'nama_prop_': 'TextEdit', 'nama_kab_1': 'TextEdit', 'nama_kec_1': 'TextEdit', 'nama_desa_': 'TextEdit', 'jumlah_pen': 'TextEdit', 'jumlah_kk_': 'TextEdit', 'luas_wilay': 'TextEdit', 'kepadatan_': 'TextEdit', 'perpindaha': 'TextEdit', 'jml_mening': 'TextEdit', 'perubahan_': 'TextEdit', 'jml_wktp_1': 'TextEdit', 'jml_rekam_': 'TextEdit', 'islam_12': 'TextEdit', 'kristen_12': 'TextEdit', 'katholik_1': 'TextEdit', 'hindu_12': 'TextEdit', 'budha_12': 'TextEdit', 'konghucu_1': 'TextEdit', 'kepercayaa': 'TextEdit', 'pria_12': 'TextEdit', 'wanita_12': 'TextEdit', 'belum_kawi': 'TextEdit', 'kawin_12': 'TextEdit', 'cerai_hidu': 'TextEdit', 'cerai_mati': 'TextEdit', 'u0_12': 'TextEdit', 'u5_12': 'TextEdit', 'u10_12': 'TextEdit', 'u15_12': 'TextEdit', 'u20_12': 'TextEdit', 'u25_12': 'TextEdit', 'u30_12': 'TextEdit', 'u35_12': 'TextEdit', 'u40_12': 'TextEdit', 'u45_12': 'TextEdit', 'u50_12': 'TextEdit', 'u55_12': 'TextEdit', 'u60_12': 'TextEdit', 'u65_12': 'TextEdit', 'u70_12': 'TextEdit', 'u75_12': 'TextEdit', 'lhr_2018_2': 'TextEdit', 'lhr_sebelu': 'TextEdit', 'lhr_2019_2': 'TextEdit', 'lhr_sebe_1': 'TextEdit', 'lhr_2020_2': 'TextEdit', 'lhr_sebe_2': 'TextEdit', 'lhr_2021_2': 'TextEdit', 'lhr_sebe_3': 'TextEdit', 'lhr_2022_2': 'TextEdit', 'lhr_sebe_4': 'TextEdit', 'pertumbuha': 'TextEdit', 'pertumbu_1': 'TextEdit', 'pertumbu_2': 'TextEdit', 'pertumbu_3': 'TextEdit', 'pertumbu_4': 'TextEdit', 'usia_sekol': 'TextEdit', 'usia_sek_1': 'TextEdit', 'usia_sek_2': 'TextEdit', 'usia_sek_3': 'TextEdit', 'tidak_blm_': 'TextEdit', 'belum_tama': 'TextEdit', 'tamat_sd_1': 'TextEdit', 'sltp_12': 'TextEdit', 'slta_12': 'TextEdit', 'd1_dan_d2_': 'TextEdit', 'd3_1': 'TextEdit', 's1_1': 'TextEdit', 's2_1': 'TextEdit', 's3_1': 'TextEdit', 'o_12': 'TextEdit', 'b1_12': 'TextEdit', 'b1_12_13': 'TextEdit', 'o1_12': 'TextEdit', 'ab1_12': 'TextEdit', 'a_12': 'TextEdit', 'tidak_tahu': 'TextEdit', 'ab1_12_13': 'TextEdit', 'a1_12': 'TextEdit', 'a1_12_13': 'TextEdit', 'o1_12_13': 'TextEdit', 'b_12': 'TextEdit', 'ab_12': 'TextEdit', 'pensiunan_': 'TextEdit', 'mengurus_r': 'TextEdit', 'belum_tida': 'TextEdit', 'lainnya_12': 'TextEdit', 'perdaganga': 'TextEdit', 'perawat_1': 'TextEdit', 'nelayan_12': 'TextEdit', 'pelajar_ma': 'TextEdit', 'guru_1': 'TextEdit', 'wiraswasta': 'TextEdit', 'pengacara_': 'TextEdit', 'nama_desa1': 'TextEdit', 'Shape_STAr': 'TextEdit', 'Shape_STLe': 'TextEdit', });
lyr_tempatibadahrusak_2.set('fieldImages', {'fid': '', 'Jumlah Rumah Ibadah yang Rusak': '', 'field_2': '', 'field_3': '', 'field_4': '', 'field_5': '', 'field_6': '', 'field_7': '', });
lyr_titikputusnya_3.set('fieldImages', {'fid': '', 'Kabupaten': '', 'Kondisi Jalan Putus': '', 'field_3': '', 'field_4': '', });
lyr_titikpengungsiannya_4.set('fieldImages', {'fid': '', 'Nama Kecamatan': '', 'Titik Pengungsian': '', 'Jumlah Pengungsi': '', 'field_4': '', 'field_5': '', });
lyr_nagari_terdampak_1.set('fieldLabels', {'OBJECTID': 'no label', 'kode_desa_': 'no label', 'nama_prop_': 'no label', 'nama_kab_1': 'no label', 'nama_kec_1': 'no label', 'nama_desa_': 'no label', 'jumlah_pen': 'no label', 'jumlah_kk_': 'no label', 'luas_wilay': 'no label', 'kepadatan_': 'no label', 'perpindaha': 'no label', 'jml_mening': 'no label', 'perubahan_': 'no label', 'jml_wktp_1': 'no label', 'jml_rekam_': 'no label', 'islam_12': 'no label', 'kristen_12': 'no label', 'katholik_1': 'no label', 'hindu_12': 'no label', 'budha_12': 'no label', 'konghucu_1': 'no label', 'kepercayaa': 'no label', 'pria_12': 'no label', 'wanita_12': 'no label', 'belum_kawi': 'no label', 'kawin_12': 'no label', 'cerai_hidu': 'no label', 'cerai_mati': 'no label', 'u0_12': 'no label', 'u5_12': 'no label', 'u10_12': 'no label', 'u15_12': 'no label', 'u20_12': 'no label', 'u25_12': 'no label', 'u30_12': 'no label', 'u35_12': 'no label', 'u40_12': 'no label', 'u45_12': 'no label', 'u50_12': 'no label', 'u55_12': 'no label', 'u60_12': 'no label', 'u65_12': 'no label', 'u70_12': 'no label', 'u75_12': 'no label', 'lhr_2018_2': 'no label', 'lhr_sebelu': 'no label', 'lhr_2019_2': 'no label', 'lhr_sebe_1': 'no label', 'lhr_2020_2': 'no label', 'lhr_sebe_2': 'no label', 'lhr_2021_2': 'no label', 'lhr_sebe_3': 'no label', 'lhr_2022_2': 'no label', 'lhr_sebe_4': 'no label', 'pertumbuha': 'no label', 'pertumbu_1': 'no label', 'pertumbu_2': 'no label', 'pertumbu_3': 'no label', 'pertumbu_4': 'no label', 'usia_sekol': 'no label', 'usia_sek_1': 'no label', 'usia_sek_2': 'no label', 'usia_sek_3': 'no label', 'tidak_blm_': 'no label', 'belum_tama': 'no label', 'tamat_sd_1': 'no label', 'sltp_12': 'no label', 'slta_12': 'no label', 'd1_dan_d2_': 'no label', 'd3_1': 'no label', 's1_1': 'no label', 's2_1': 'no label', 's3_1': 'no label', 'o_12': 'no label', 'b1_12': 'no label', 'b1_12_13': 'no label', 'o1_12': 'no label', 'ab1_12': 'no label', 'a_12': 'no label', 'tidak_tahu': 'no label', 'ab1_12_13': 'no label', 'a1_12': 'no label', 'a1_12_13': 'no label', 'o1_12_13': 'no label', 'b_12': 'no label', 'ab_12': 'no label', 'pensiunan_': 'no label', 'mengurus_r': 'no label', 'belum_tida': 'no label', 'lainnya_12': 'no label', 'perdaganga': 'no label', 'perawat_1': 'no label', 'nelayan_12': 'no label', 'pelajar_ma': 'no label', 'guru_1': 'no label', 'wiraswasta': 'no label', 'pengacara_': 'no label', 'nama_desa1': 'no label', 'Shape_STAr': 'no label', 'Shape_STLe': 'no label', });
lyr_tempatibadahrusak_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Jumlah Rumah Ibadah yang Rusak': 'inline label - always visible', 'field_2': 'inline label - always visible', 'field_3': 'inline label - always visible', 'field_4': 'inline label - always visible', 'field_5': 'inline label - always visible', 'field_6': 'inline label - always visible', 'field_7': 'inline label - always visible', });
lyr_titikputusnya_3.set('fieldLabels', {'fid': 'inline label - always visible', 'Kabupaten': 'inline label - always visible', 'Kondisi Jalan Putus': 'inline label - always visible', 'field_3': 'inline label - always visible', 'field_4': 'inline label - always visible', });
lyr_titikpengungsiannya_4.set('fieldLabels', {'fid': 'inline label - always visible', 'Nama Kecamatan': 'inline label - always visible', 'Titik Pengungsian': 'inline label - always visible', 'Jumlah Pengungsi': 'inline label - always visible', 'field_4': 'inline label - always visible', 'field_5': 'inline label - always visible', });
lyr_titikpengungsiannya_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});