$(function() {
    var arrBubble = [];
    var arrArc = [];
    var arrCountries = [];

    init();
    
    function init() {
        var sendData = {
            year: 1990
        }

        $.ajax({
            method: 'POST',
            url: '/api/data',
            data: sendData,
            dataType: 'json'
        }).done(function(response) {
            for(var obj of response.countries) {
                arrCountries.push(obj);
            }

            for(var obj of response.data) {
                arrBubble.push({
                    name: obj.un_country_name,
                    radius: 10,
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                });
            }

            for(var objCountry of response.data) {
                for(var objPeoples of objCountry.PeoplesInfos) {
                    for(var props in objPeoples) {
                        if(objPeoples[props] != null && objPeoples[props] > 0) {
                            for(var objCountryList of arrCountries) {
                                if (props == objCountryList.wb_code) {
                                    console.log(objCountryList);
                                    arrArc.push({
                                        origin: {
                                            latitude: objCountry.latitude,
                                            longitude: objCountry.longitude
                                        },
                                        destination: {
                                            latitude: objCountryList.latitude,
                                            longitude: objCountryList.longitude
                                        },
                                        options: {
                                            strokeWidth: 2,
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


            var map = new Datamap({
                element: document.getElementById('world-map'),
                geographyConfig: {
                    popupOnHover: true,
                    highlightOnHover: true
                },
                // fills: {
                //     defaultFill: '#ABDDA4',
                //     USA: 'blue',
                //     RUS: 'red'
                // },
                done: function (dataMap) {
                    dataMap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                        console.log(geography);
                    })
                }
            });

            // bubbles to show in map
            map.bubbles(arrBubble);
            map.arc(arrArc,
                {
                    strokeWidth: 0.01,
                    arcSharpness: 1
                }
            );
        });
    }

    $('select#filter.form-control').change(function () {
        $('#world-map').children().remove();

        arrInitBubble = [];
        arrInitArc = [];
        arrCountries = [];

        var sendData = {
            year: $('select#filter.form-control').val()
        }

        $.ajax({
            method: 'POST',
            url: '/api/data',
            data: sendData,
            dataType: 'json'
        }).done(function(response) {
            for(var obj of response.countries) {
                arrCountries.push(obj);
            }

            for(var obj of response.data) {
                arrBubble.push({
                    name: obj.un_country_name,
                    radius: 10,
                    latitude: obj.latitude,
                    longitude: obj.longitude,
                });
            }

            for(var objCountry of response.data) {
                for(var objPeoples of objCountry.PeoplesInfos) {
                    for(var props in objPeoples) {
                        if(objPeoples[props] != null && objPeoples[props] > 0) {
                            for(var objCountryList of arrCountries) {
                                if (props == objCountryList.wb_code) {
                                    arrArc.push({
                                        origin: {
                                            latitude: objCountry.latitude,
                                            longitude: objCountry.longitude
                                        },
                                        destination: {
                                            latitude: objCountryList.latitude,
                                            longitude: objCountryList.longitude
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


            var map = new Datamap({
                element: document.getElementById('world-map'),
                geographyConfig: {
                    popupOnHover: true,
                    highlightOnHover: true
                },
                fills: {
                    defaultFill: '#ABDDA4',
                    USA: 'blue',
                    RUS: 'red'
                },
                done: function (dataMap) {
                    dataMap.svg.selectAll('.datamaps-subunit').on('click', function(geography) {
                        console.log(geography);
                    })
                }
            });

            // bubbles to show in map
            map.bubbles(arrBubble);
            map.arc(arrArc,
                {
                    strokeWidth: 0.01,
                    arcSharpness: 1
                }
            );

            

        });
    });

    // Click bubble event. 
    d3.selectAll(".datamaps-bubble").on('click', function(bubble) {
        console.log(bubble);
    });

    // Click arc event
    d3.selectAll(".datamaps-arc").on('click', function(bubble) {
        console.log(bubble);
    });
});