
        // funtion call
        function makeGreen () {
            document.body.style.backgroundColor='green'
        }
        // event by id
        var blue = document.getElementById('blue');
        blue.onclick= makeBlue;
        function makeBlue (){
            document.body.style.backgroundColor='blue';
        }
        // event by anonymous function
        var yellow = document.getElementById('yellow');
        yellow.onclick= function() {
                document.body.style.backgroundColor = 'yellow';
            };
        // event listener
        var goldenRod = document.getElementById('golden-rod');
        goldenRod.addEventListener('click', makeGolden);
        function makeGolden() {
            document.body.style.backgroundColor='goldenrod';
        }
        // anonymous event listener
        var pink = document.getElementById('pink');
        pink.addEventListener('click', function(){
            document.body.style.backgroundColor='pink';
        })
        // shortcut event listener
        document.getElementById('light-blue').addEventListener('click', function() {
            document.body.style.backgroundColor='lightblue';
        })
 