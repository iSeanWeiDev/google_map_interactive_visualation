'use strict';
$(function() {
    var arrBubble = [];
    var arrArc = [];
    var arrCountries = [];
    init();

    function init() {
        var map = new Datamap({
            element: document.getElementById('world-map'),
            geographyConfig: {
                popupOnHover: true,
                highlightOnHover: true
            },
            fills: {
                defaultFill: '#ABDDA4',
                'fromBubble': 'rgba(240, 26, 26, 0.7)',
                'toBubble': 'rgba(5, 65, 245, 0.7)'
            },
            done: function(mapData) {
                mapData.svg.selectAll('.datamaps-subunit').on('click', function(geography) {  
                    var sendData = {
                        id: geography.id,
                        year: $('select#filter.form-control').val()
                    }
            
                    $.ajax({
                        method: 'POST',
                        url: '/api/data',
                        data: sendData
                    }).done(function(response) {
                        for(var obj of response.countries) {
                            arrCountries.push(obj);
                        }
            
                        for(var objCountry of response.data) {
                            for(var objPeoples of objCountry.PeoplesInfos) {
                                for(var props in objPeoples) {
                                    if(objPeoples[props] != null && objPeoples[props] > 0) {
                                        for(var objCountryList of arrCountries) {
                                            if (props == objCountryList.wb_code) {
                                                arrBubble.push({
                                                    name: objCountryList.un_country_name,
                                                    radius: 10,
                                                    fillKey: 'toBubble',
                                                    latitude: objCountryList.latitude,
                                                    longitude: objCountryList.longitude,
                                                });
                                                arrArc.push({
                                                    origin: {
                                                        latitude: objCountry.latitude,
                                                        longitude: objCountry.longitude,
                                                        peoples: objPeoples[props]
                                                    },
                                                    destination: {
                                                        latitude: objCountryList.latitude,
                                                        longitude: objCountryList.longitude,
                                                        peoples: objPeoples[props]
                                                    },
                                                    options: {
                                                        strokeWidth: 1,
                                                        strokeColor: 'rgba(100, 10, 200, 0.4)',
                                                        greatArc: true
                                                    }
                                                });
                                            }
                                        }
                                    }
                                }
                                
                            }
                        }

                        for(var obj of arrCountries) {
                            if(obj.wb_code == geography.id) {
                                arrBubble.push({
                                    name: geography.properties.name,
                                    radius: 18,
                                    fillKey: 'fromBubble',
                                    latitude: obj.latitude,
                                    longitude: obj.longitude
                                })
                            }
                        }

                        map.bubbles(arrBubble);
                        map.arc(arrArc,
                            {
                                strokeWidth: 0.01,
                                arcSharpness: 1,
                                popupOnHover: true,
                                animationSpeed: 1000
                            }
                        );

                        // d3.selectAll('.datamaps-arc').on('mouseover', function(info) {
                        //     console.log(info.origin.peoples );
                        //     return '<div class="hoverinfo">' + info.origin.peoples + '<\div>'
                        // });
                    });
                });
            
            }
        });
    }

    this.resetMap = function() {
        arrBubble = [];
        arrArc = [];
        arrCountries = [];

        $('#world-map').children().remove();

        init();
    }

});