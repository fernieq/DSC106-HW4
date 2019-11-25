Highcharts.chart('container2', {
    colorAxis: {
        minColor: '#FFFFFF',
        maxColor: Highcharts.getOptions().colors[0]
    },
    series: [{
        type: 'treemap',
        layoutAlgorithm: 'squarified',
        data: [{
            name: '2010',
            value: 16.1,
            colorValue: 1
        }, {
            name: '2011',
            value: 355,
            colorValue: 2
        }, {
            name: '2012',
            value: 319,
            colorValue: 3
        }, {
            name: '2013',
            value: 562,
            colorValue: 4
        }, {
            name: '2014',
            value: 757,
            colorValue: 5
        }, {
            name: '2015',
            value: 250,
            colorValue: 6
        }, {
            name: '2016',
            value: 424,
            colorValue: 7
        },
        {
            name: '2017',
            value: 43,
            colorValue: 8
        },
        {
            name: '2018',
            value: 146,
            colorValue: 9
        },
        {
            name: '2019',
            value: 246,
            colorValue: 10
        }]
    }],
    title: {
        text: 'J Law World Box Office per Movie by Year'
    }
});