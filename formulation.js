function mClock() 
{
var planet_adj = new Array("Mercuial","Venusian","Earthly","Martian","Cererian","Jovian","Saturnine","Uranian","Neptunian","Plutonian","Eridian","Sednarian?","<i>Micrasian</i>");

var planet_name = new Array(
"Mercury",	"Venus",	"Earth",	"Mars",		"Ceres",
"Jupiter",	"Saturn",	"Uranus",	"Neptune",	"Orcus",
"Pluto",	"Varuna",	"Haumea",	"Makemake",	"Eris",
"Sedna",	"<i>Micras</i>");

var day_length = new Array(
1407.5,		-5832,		24,		24.62,		9.074,
9.93,		10.66,		17.24,		16.11,		13.19,
153.29352,	3.17,		3.9154,		7.771,		153,
10,		28.0632346);

var year_length = new Array(
2111.28,	5392.8,		8760,		16486.32,	40315.656,
103934.4,	258136.8,	736492.8,	1444560,	2169513.6,
2174719.332,	2482574.4,	2501616,	2716392,	4886400,
105707520,	15603.1464);

var multiplier = new Array();
var inyear1 = new Array();
var inyear2 = new Array();
var inyear3 = new Array();
var inyear4 = new Array();
var inyear5 = new Array();
var date;
var morning;
var afternoon;
date = new Date();
morning = 0;
afternoon = 0;

var angle = new Array();
var clockx = new Array();
var clocky = new Array();
var SumX;
var SumY;
var AvAng;
var AvTime;
var AvMill;
var AvSec;
var AvMin;
var AvHour;
SumX = 0;
SumY = 0;

var lpyr = new Array();
var millisecs = new Array();
var milliseconds = new Array();
var yearlengthmill = new Array();
var year = new Array();
var meh1 = new Array();
var day = new Array();
var meh2 = new Array();
var hour = new Array();
var meh3 = new Array();
var minute = new Array();
var meh4 = new Array();
var second = new Array();
var millisecond = new Array();
var table = "<table><tr><td></td><td>Year</td><td>Day</td><td>Hour</td><td>Minute</td><td>Second</td><td>Millisecond</td></tr>";
var days_in_year = new Array();

var monthdays;
if (date.getMonth()==0) { monthdays=0; } else if (date.getMonth()==1) { monthdays=31; } else if (date.getMonth()==2) { monthdays=59; } else if (date.getMonth()==3) { monthdays=90; } else if (date.getMonth()==4) { monthdays=120; } else if (date.getMonth()==5) { monthdays=151; } else if (date.getMonth()==6) { monthdays=181; } else if (date.getMonth()==7) { monthdays=212; } else if (date.getMonth()==8) { monthdays=243; } else if (date.getMonth()==9) { monthdays=273; } else if (date.getMonth()==10) { monthdays=304; } else if (date.getMonth()==11) { monthdays=334; }

for(i in planet_name) {
multiplier[i] = 24/day_length[i];

if(i==2) {
if(date.getMonth()>=3 && Math.floor(date.getFullYear()/4)==(date.getFullYear()/4)) {
lpyr[i] = 1;
} else {
lpyr[i] = 0;
}} else {
if(date.getMonth>=3 && Math.floor(date.getFullYear()/4)==(date.getFullYear()/4)) {
lpyr[i] = (((Math.floor(date.getFullYear()/4)-Math.floor(date.getFullYear()/100))+Math.floor(date.getFullYear()/400))+1);
} else {
lpyr[i] = ((Math.floor(date.getFullYear()/4)-Math.floor(date.getFullYear()/100))+Math.floor(date.getFullYear()/400));
}}

millisecs[i] = (((((date.getFullYear()*365+date.getDate()+monthdays+1+lpyr[i])*24+date.getHours())*60+date.getMinutes()+date.getTimezoneOffset())*60+date.getSeconds())*1000+date.getMilliseconds());


inyear1[i] = Math.floor(year_length[i]/day_length[i]);
inyear2[i] = Math.floor(((year_length[i]/day_length[i])-(inyear1[i]))*24);
inyear3[i] = Math.floor(((((year_length[i]/day_length[i])-inyear1[i])*24)-inyear2[i])*60);
inyear4[i] = Math.floor(((((((year_length[i]/day_length[i])-inyear1[i])*24)-inyear2[i])*60)-inyear3[i])*60);
inyear5[i] = Math.floor(((((((((year_length[i]/day_length[i])-inyear1[i])*24)-inyear2[i])*60)-inyear3[i])*60)-inyear4[i])*1000);

milliseconds[i] = millisecs[i]*multiplier[i];

yearlengthmill[i] = ((((inyear1[i]*24+inyear2[i])*60+inyear3[i])*60+inyear4[i])*1000+inyear5[i]);

year[i] = Math.floor(milliseconds[i]/yearlengthmill[i]);
meh1[i] = (milliseconds[i]-(year[i]*yearlengthmill[i]));
day[i] = Math.floor(meh1[i]/(24*60*60*1000));
meh2[i] = (meh1[i]-(day[i]*(24*60*60*1000)));
hour[i] = Math.floor(meh2[i]/(60*60*1000));
meh3[i] = (meh2[i]-(hour[i]*(60*60*1000)));
minute[i] = Math.floor(meh3[i]/(60*1000));
meh4[i] = (meh3[i]-(minute[i]*(60*1000)));
second[i] = Math.floor(meh4[i]/1000);
millisecond[i] = Math.floor(meh4[i]-(second[i]*1000));


if(planet_name[i]!="<i>Micras</i>") {
if(hour[i]<12) {morning += 1;} else {afternoon += 1;}
angle[i] = (((((((hour[i]*60)+minute[i])*60)+second[i])*1000)+millisecond[i])/43200000*Math.PI);
clockx[i] = Math.sin(angle[i]);
clocky[i] = Math.cos(angle[i]);
SumX += clockx[i];
SumY += clocky[i];
}

if(hour[i]<10) {hour[i] = "0"+hour[i];}
if(minute[i]<10) {minute[i] = "0"+minute[i];}
if(second[i]<10) {second[i] = "0"+second[i];}
if(millisecond[i]<10) {millisecond[i] = "0"+millisecond[i];}
if(millisecond[i]<100) {millisecond[i] = "0"+millisecond[i];}


days_in_year[i] = year_length[i]/day_length[i];

table = table + "<tr><td>"+planet_name[i]+"</td><td>"+year[i]+"</td><td>"+day[i]+"</td><td>"+hour[i]+"</td><td>"+minute[i]+"</td><td>"+second[i]+"</td><td>"+millisecond[i]+"</td></tr>";


}


if(SumX>0 && SumY>0) { AvAng = Math.atan(SumX/SumY); }
if(SumX>0 && SumY<0) { AvAng = (Math.atan(SumX/SumY)+Math.PI); }
if(SumX<0 && SumY>0) { AvAng = (Math.atan(SumX/SumY)+Math.PI); }
if(SumX<0 && SumY<0) { AvAng = (Math.atan(SumX/SumY)+(2*Math.PI)); }
if(SumX==0 && SumY>0) { AvAng = 0; }
if(SumX==0 && SumY<0) { AvAng = Math.PI; }
if(SumX>0 && SumY==0) { AvAng = (Math.PI/2); }
if(SumX<0 && SumY==0) { AvAng = (1.5*Math.PI); }


AvTime = Math.floor(AvAng/Math.PI*43200000);
AvTime = AvTime
AvMill = Math.floor(((AvTime/1000)-Math.floor(AvTime/1000))*1000);
AvTime = (AvTime-AvMill)/1000;
AvSec = Math.floor(((AvTime/60)-Math.floor(AvTime/60))*60);
AvTime = (AvTime-AvSec)/60;
AvMin = Math.floor(((AvTime/60)-Math.floor(AvTime/60))*60);
AvHour = Math.floor((AvTime-AvMin)/60);
if(SumX<0) {AvHour += 12;}


if(AvHour<10) {AvHour = "0"+AvHour;}
if(AvMin<10) {AvMin = "0"+AvMin;}
if(AvSec<10) {AvSec = "0"+AvSec;}
if(AvMill<10) {AvMill = "0"+AvMill;}
if(AvMill<100) {AvMill = "0"+AvMill;}


table = table + "</table><br />Morning: "+morning+"/"+(planet_name.length-1)+"<br />Afternoon: "+afternoon+"/"+(planet_name.length-1)+"<br /><br />The average planetary time is: "+AvHour+":"+AvMin+":"+AvSec+"."+AvMill+".";
document.getElementById("table").innerHTML=table;

setTimeout('mClock()',1); 
}