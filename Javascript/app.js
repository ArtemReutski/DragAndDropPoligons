window.onload = function () {

    var canvas = document.getElementById('canvas'),
        ctx = canvas.getContext('2d'),
        width = canvas.width = window.innerWidth,
        height = canvas.height = window.innerHeight,
        list = [
            {
                'x': 50,
                'y': 50,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 50, 'y': 0 },
                    { 'x': 5, 'y': -48 },
                    { 'x': -40, 'y': 0 },
                    { 'x': 5, 'y': 48 }
                ],
                'bool': false
            },
            {
                'x': 50,
                'y': 150,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 25, 'y': -48 },
                    { 'x': -15, 'y': -48 },
                    { 'x': -40, 'y': 0 },
                    { 'x': -15, 'y': 48 },
                    { 'x': 25, 'y': 48 },
                    { 'x': 50, 'y': 0 }
                ],
                'bool': false
            },
            {
                'x': 50,
                'y': 250,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 50, 'y': 0 },
                    { 'x': 20, 'y': 14 },
                    { 'x': 15, 'y': 48 },
                    { 'x': -8, 'y': 24 },
                    { 'x': -40, 'y': 29 },
                    { 'x': -25, 'y': 0 },
                    { 'x': -40, 'y': -29 },
                    { 'x': -8, 'y': -24 },
                    { 'x': 15, 'y': -48 },
                    { 'x': 20, 'y': -14 }
                ],
                'bool': false
            },
            {
                'x': 50,
                'y': 350,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 50, 'y': 0 },
                    { 'x': 5, 'y': -48 },
                    { 'x': -40, 'y': 0 },
                    { 'x': 5, 'y': 48 }
                ],
                'bool': false
            },
            {
                'x': 50,
                'y': 450,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 25, 'y': -48 },
                    { 'x': -15, 'y': -48 },
                    { 'x': -40, 'y': 0 },
                    { 'x': -15, 'y': 48 },
                    { 'x': 25, 'y': 48 },
                    { 'x': 50, 'y': 0 }
                ],
                'bool': false
            },
            {
                'x': 50,
                'y': 550,
                'color': '#3F51B5',
                'points': [
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 },
                    { 'x': 0, 'y': 0 }
                ],
                'offset': [
                    { 'x': 50, 'y': 0 },
                    { 'x': 20, 'y': 14 },
                    { 'x': 15, 'y': 48 },
                    { 'x': -8, 'y': 24 },
                    { 'x': -40, 'y': 29 },
                    { 'x': -25, 'y': 0 },
                    { 'x': -40, 'y': -29 },
                    { 'x': -8, 'y': -24 },
                    { 'x': 15, 'y': -48 },
                    { 'x': 20, 'y': -14 }
                ],
                'bool': false
            }
        ],
        isDragging = false,
        delta = new Object(),
        selectPolygon;



    function drawPolygon(polygon) {
        var pointsSize = polygon.points.length;
        ctx.fillStyle = polygon.color;
        ctx.beginPath();
        ctx.moveTo(polygon.points[0].x, polygon.points[0].y);
        for (var i = 1; i < pointsSize; i++) {
            ctx.lineTo(polygon.points[i].x, polygon.points[i].y);
        }
        ctx.closePath();
        ctx.fill();
    }

    function updatePolygon(polygon) {
        var pointSize = polygon.points.length
        for (var i = 0; i < polygon.points.length; i++) {
            polygon.points[i].x = polygon.x + polygon.offset[i].x;
            polygon.points[i].y = polygon.y + polygon.offset[i].y;
        }
    }

    function updatePolygons() {
        var listSize = list.length;
        for (var i = 0; i < listSize; i++) {
            updatePolygon(list[i]);
        }
    }

    function drawPolygons() {
        var listSize = list.length;
        ctx.clearRect(0, 0, width, height);
        for (var i = 0; i < listSize; i++) {
            list[i].color = "#3F51B5";
            drawPolygon(list[i]);
        }
    }

    updatePolygons()
    drawPolygons();

    function mousePosition(canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: parseInt(evt.clientX - rect.left),
            y: parseInt(evt.clientY - rect.top)
        };
    }


    function checkCollision(polygonA, polygonB) {
        var polygonSizeA = polygonA.points.length,
            polygonSizeB = polygonB.points.length;
        for (var i = 0; i < polygonSizeA; i++) {
            var p0 = polygonA.points[i],
                p1 = polygonA.points[(i + 1) % polygonSizeA];

            for (var j = 0; j < polygonSizeB; j++) {
                var p2 = polygonB.points[j],
                    p3 = polygonB.points[(j + 1) % polygonSizeB];

                if (segmentIntersect(p0, p1, p2, p3)) {
                    return true;
                }
            }
        }
        return false;
    }

    // Check if line segments intersect
    function segmentIntersect(p0, p1, p2, p3) {
        var A1 = p1.y - p0.y,
            B1 = p0.x - p1.x,
            C1 = A1 * p0.x + B1 * p0.y,
            A2 = p3.y - p2.y,
            B2 = p2.x - p3.x,
            C2 = A2 * p2.x + B2 * p2.y,
            denominator = A1 * B2 - A2 * B1;

        if (denominator == 0) {
            return null;
        }

        var intersectX = (B2 * C1 - B1 * C2) / denominator,
            intersectY = (A1 * C2 - A2 * C1) / denominator,
            rx0 = (intersectX - p0.x) / (p1.x - p0.x),
            ry0 = (intersectY - p0.y) / (p1.y - p0.y),
            rx1 = (intersectX - p2.x) / (p3.x - p2.x),
            ry1 = (intersectY - p2.y) / (p3.y - p2.y);

        if (((rx0 >= 0 && rx0 <= 1) || (ry0 >= 0 && ry0 <= 1)) &&
            ((rx1 >= 0 && rx1 <= 1) || (ry1 >= 0 && ry1 <= 1))) {
            // Collision detected
            return {
                x: intersectX,
                y: intersectY
            };
        }
        else {
            return null;
        }
    }

    canvas.addEventListener('mousedown', function (evt) {
        var mousePos = mousePosition(canvas, evt),
            listSize = list.length;
        for (var i = 0; i < listSize; i++) {
            drawPolygon(list[i]);
            if (ctx.isPointInPath(mousePos.x, mousePos.y)) {
                isDragging = true;
                list[i].bool = true;
                delta.x = list[i].x - mousePos.x;
                delta.y = list[i].y - mousePos.y;
                selectPolygon = list[i];
                break;
            } else {
                list[i].bool = false;
            }
        }
        drawPolygons();
    }, false);

    canvas.addEventListener('mousemove', function (evt) {
        if (isDragging) {
            var mousePos = mousePosition(canvas, evt),
                listSize = list.length;
            for (var i = 0; i < listSize; i++) {
                if (list[i].bool) {
                    updatePolygon(list[i]);
                    list[i].x = mousePos.x + delta.x;
                    list[i].y = mousePos.y + delta.y;
                    break;
                }
            }
            drawPolygons();
        }
    }, false);

    canvas.addEventListener('mouseup', function (evt) {
        var listSize = list.length;
        if (selectPolygon === undefined) {
            drawPolygons();
        }
        else {
            isDragging = false;
            for (var i = 0; i < listSize; i++) {
                list[i].bool = false;
            }
            ctx.clearRect(0, 0, width, height);
            for (var i = 0; i < listSize; i++) {
                if (checkCollision(selectPolygon, list[i])) {
                    list[i].color = "#F44336";
                }
                else {
                    list[i].color = "#3F51B5";
                }
                drawPolygon(list[i]);
            }
        }
    }, false);

    canvas.addEventListener('mouseout', function (evt) {
        var listSize = list.length;
        isDragging = false;
        for (var i = 0; i < listSize; i++) {
            list[i].bool = false;
        }
        drawPolygons();
    }, false);
}