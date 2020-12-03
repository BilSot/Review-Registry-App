reviewApp.filter('date-filter', function () {
    return function (item) {
        let parts = item.dateString.split('-');
        let date = new Date(parseInt(parts[2],
            parseInt(parts[1]),
            parseInt(parts[0])));

        return date;
    };
});
