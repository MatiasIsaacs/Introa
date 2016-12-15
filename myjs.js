// $(document).ready(function(){
// 	$("#photoWrapper").css("height",($("#photoWrapper").width()-150)+"px");
// 	$(".fa").css("height",($("#photoWrapper").width()-150)+"px");
// 	$(".fa").css("line-height",($("#photoWrapper").width()-150)+"px");
// });

var imageArray = [
"http://www.christmaslightsofarizona.com/wp-content/uploads/2014/10/christmas-lights-2014_033716.jpg", "http://cdn.history.com/sites/2/2015/04/hith-father-christmas-lights-iStock_000029514386Large.jpg", "http://www.imgion.com/images/01/Choose-One-FOr-Celebration.jpg", "http://cdn.history.com/sites/2/2015/12/iStock_000053954474_Medium.jpg", "http://www.hdwallpapers.in/walls/merry_christmas_2013-HD.jpg", "http://wallpapercave.com/wp/1lc4prs.jpg"
];
var currentIndex = 0;


function renderImage(){
	if(currentIndex < 0){
		currentIndex = imageArray.length - 1;
	}
	else if (currentIndex >= imageArray.length) {
		currentIndex = 0;
	} 

	$('#photoWrapper').css('background-image', "url("+imageArray[currentIndex]+")");
}
renderImage();



function forwardImage(){
	currentIndex++;
	renderImage();
}



function backImage(){
	currentIndex--;
	renderImage();
}

$(".back, .front").mouseenter(function(e){
	$(e.target).addClass("showdiv");
	$(e.target).children().addClass("showbtn");
});
$(".back, .front").mouseleave(function(e){
	$(e.target).removeClass("showdiv");
	$(e.target).children().removeClass("showbtn");
});
$('.back').on('click', forwardImage);
$('.front').on('click', backImage);

var name = prompt("What's your name?");
var outputString= "Merry Christmas," + " " + name + "!";
$('h1').html(outputString);

google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);
      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Candy', 'Amount in Sock'],
          ['Hershey Kisses',     50],
          ['MilkyWay',      15],
          ['Twix', 15],
          ['Skittles',    5],
          ['M&Ms', 15]
        ]);


        
        var options = {
          title: 'X-Mas Candy',
          backgroundColor: '#D73D32',


         
       	          
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }

	var youTube = $('iframe').width() * 0.35;
	$('playlist').html(youTube);






