function tellStory(){
	
	

var year = 0;
var cloth = 0;
var gov = 0;
var bio = 0;
var rel = 0;
var pri = 0;
var militia = 0;
var cul = 0;
var rit  = 0;
var shel = 0;
var hols = 0;
var land = 0;
var arts = 0;
	//placebuttons//
	//bio//

	if (document.getElementById("Rainforest").checked){
		bio = bio + 1;
	}
	if (document.getElementById("Monsoon").checked){
		bio = bio + 2;
	}
    if (document.getElementById("Savannah").checked){
		bio = bio + 3;
	}
	if (document.getElementById("HDesert").checked){
		bio = bio + 4;
	}
	if (document.getElementById("HSteppe").checked){
		bio = bio + 5;
	}
	if (document.getElementById("HContinental").checked){
		bio = bio + 6;
	}
	if (document.getElementById("SContinental").checked){
		bio = bio + 7;  
	}
	if (document.getElementById("Mediterranian").checked){
		bio = bio + 8;
	}
    if (document.getElementById("Oceanic").checked){
		bio = bio + 9;
	}
	if (document.getElementById("HSubtropical").checked){
		bio = bio + 10;
	}
	if (document.getElementById("CDesert").checked){
		bio = bio + 11;
	}
	if (document.getElementById("CSteppe").checked){
		bio = bio + 12;
	}
    if (document.getElementById("Tundra").checked){
		bio = bio + 13;
	}
	if (document.getElementById("Polar").checked){
		bio = bio + 14;
	}
	if (document.getElementById("Other5").checked){
		bio = bio + 15;
	}

 
 if (bio == 1){
 food = "fruit dishes.";}

	else if (bio == 2){
		food = "spicy curries."	;}
	else if (bio == 3){
		food = "beef dishes."	;}
	else if (bio == 4){
		food = "fig, rabbit, and ostritch egg dishes."	;}
	else if (bio == 5){
		food = "lamb dishes."	;}
	else if (bio == 6){
		food = "beef stuffed rolls."	;}
	else if (bio == 7){
		food = "whale or moose dishes."	;}
	else if (bio == 8){
		 food= "herb cooked chicken or pork dishes."	;}
	else if (bio == 9){
		food = "coconut fish."	;}
	else if (bio == 10){
		food = "mild curries."	;}
	else if (bio == 11){
		food = "herbal meats and rice."	;}
	else if (bio == 12){
		food = "rhubarb pie."	;}
	else if (bio == 13){
		food = "berry fish and roots."	;}
	else if (bio == 14){
		food = "whale or fish roast."	;}
	else {
		food = "most magical dishes.";}



//clothing//
if (document.getElementById("leather").checked){
year = year + 1;
cloth = cloth + 1
}
	else if (document.getElementById("sweave").checked){
	year = year + 2;
	cloth = cloth + 2}
	else if (document.getElementById("cweave").checked){
	year = year + 3;
	cloth = cloth + 3}
	else if (document.getElementById("cutsew").checked){
	year = year + 4;
	cloth = cloth + 4}
	else if (document.getElementById("fashion").checked){
	year = year + 5;
	cloth = cloth + 5}
	
	

if (cloth == 1){
clothing = "leathers.";}
else if (cloth > 1 && cloth < 5 && bio == 1){
  clothing = "beadwork.";}
	else if (cloth == 5 && bio == 1){
		clothing = "beaded skirts."	;}
	else if (cloth == 2 && bio == 2){
		clothing = "silk or cotton robes."	;}
	else if (cloth == 3 && bio == 2){
		clothing = "silk or cotton wrap garments."	;}
	else if (cloth == 4 && bio == 2){
		clothing = "silk or cotton tunics and harem pants."	;}
	else if (cloth == 5 && bio == 2){
		clothing = "dazzling high fashion tunics with elaborately patterned skirts or pants."	;}
	else if (cloth == 2 && bio == 3){
		clothing = "linen robe."	;}
	else if (cloth > 2 && bio == 3){
		clothing = "beaded wraps and dress."	;}
	else if (cloth == 2 && bio == 4){
		clothing = "linen robes."	;}
	else if (cloth > 2 && bio == 4){
		clothing = "fancy linen robes"	;}
	else if (cloth == 2 && bio == 5){
		clothing = "cotton robes."	;}
	else if (cloth > 2 && bio == 5){
		clothing = "elaborately woven and decorated cotton clothing."	;}
	else if (cloth == 2 && bio == 6){
		clothing = "knitted woollen clothing."	;}
	else if (cloth > 2 && bio == 6){
		clothing = "woolen, cotton, and linen sarafan."	;}
	else if (cloth > 1 && cloth < 5 && bio == 7){
		clothing = "leather, fur, or wool coats."	;}
	else if (cloth == 5 && bio == 7){
		clothing = "black minimallist aesthetics."	;}
	else if (cloth == 2 && bio == 8){
		clothing = "chiton, stola, chlamys or pala."	;}
	else if (cloth == 3 && bio == 8){
		clothing = "linen or woolen tunics."	;}
	else if (cloth < 3 && bio == 8){
		clothing = "dresses, skirts or pants and shirts, tunics, and imports."	;}
	else if (cloth == 2 && bio == 9){
		clothing = "linen or wool robes depending on weather."	;}
	else if (cloth > 2  && bio == 9){
		clothing = "knitwear in winter and linen pants in summer."	;}
	else if (cloth == 2 && bio == 10){
		clothing = "grass skirts."	;}
	else if (cloth == 3 && bio == 10){
		clothing = "hemp or ramie wrap dress."	;}
	else if (cloth >3 && bio == 10){
		clothing = "noragi and kimonos of imported fabrics"	;}
	else if (cloth == 2 && bio == 11){
		clothing = "woolen robes."	;}
	else if (cloth > 2 && bio == 11){
		clothing = "wool or cotten deel with fur hats and boots."	;}
	else if (cloth == 2 && bio == 12){
		clothing = "chapan or shapan."	;}
	else if (cloth == 3 && bio == 12){
		clothing = "mixed textile chapan or shapan."	;}
	else if (cloth > 3 && bio == 12){
		clothing = "tailored dress with beaded vests."	;}
	else if (cloth > 1 && bio > 12){
		clothing = "leathers and furs"	;}
		else {
		clothing = "magic wear!"	;}
//clothing//


//landmark//
	if (document.getElementById("manmake").checked){
	land = land + 1;
	}
	if (document.getElementById("natural").checked){
	land = land + 2;}
	
 
 if (land == 1){ landmark = "monument";}

	else if (land == 2 && bio == 1){
		landmark = "Great Tree"	;}
	
	else if (land == 2 && bio == 2){
		landmark = "White Sand Beach";}

	else if (land == 2 && bio == 3){
		landmark = "Lake of Creatures";}

	else if (land == 2 && bio == 4){
		landmark = "Grand Oasis";}
	else if (land == 2 && bio == 5){
		landmark = "Godblood Canyon";}
	else if (land == 2 && bio == 6){
		landmark = "Bear Forest";}
	else if (land == 2 && bio == 7){
		landmark = "Icicle Forest";}
	else if (land == 2 && bio == 8){
		landmark = "Highland Cliffs";}
	else if (land == 2 && bio == 9){
		landmark = "White Beach";}
	else if (land == 2 && bio == 10){
		landmark = "Death Swamp";}
	else if (land == 2 && bio == 11){
		landmark = "Scrublands";}
	else if (land == 2 && bio == 12){
		landmark = "Great Cliffs";}
	else if (land == 2 && bio == 13){
		landmark = "Penguin Dive cliffs";}
	else if (land == 2 && bio == 14){
		landmark = "Polarbear Racetrack";}
	else if (land == 2 && bio == 15){
		landmark = "magic lands";}
//landmark//


	
	if (document.getElementById("ruler").checked){
	gov = gov + 1;
	}
	if (document.getElementById("tyrant").checked){
		gov = gov + 2;
	}
    if (document.getElementById("elected").checked){
		gov = gov + 3;
	}
	if (document.getElementById("church").checked){
		gov = gov + 4;
	}
	if (document.getElementById("council").checked){
		gov = gov + 5;
	}
	if (document.getElementById("combo").checked){
		gov = gov + 6;
	}
 
 if (gov == 1){
 govern = "Royal Family";}

	else if (gov == 2){
		govern = "Imperial Highnesses"	}
	else if (gov == 3){
		govern = "Elected Officials"	}
	else if (gov == 4){
		govern = "Worshipful Church Leaders"	}
	else if (gov == 5){
		govern = "Citizen Council"	}
	else {
		govern = "multiple governing bodies"	}
	//rel//



if (document.getElementById("state").checked){
	rel = rel + 1;
	}
	if (document.getElementById("fmr").checked){
		rel = rel + 2;
	}
    if (document.getElementById("om").checked){
		rel = rel + 3;
	}
	if (document.getElementById("mystery").checked){
		rel = rel + 4;
	}
	if (document.getElementById("rig").checked){
		rel = rel + 5;
	}

 if (rel == 1){
 religion = "state sponsered religious institution";}

	else if (rel == 2){
		religion = "many excellent houses of worship";}
	else if (rel == 3){
		religion = "temple district";}
	else if (rel == 4){
		religion = "mystery cults in the area";
		priest = "their secret leaders"	}
	else if (rel == 5){
		religion = "palace"	;
		priest = "government";}
		

		
	
	if (document.getElementById("local").checked){
	pri = pri + 1;
	}
	if (document.getElementById("distant").checked){
	pri	 = pri + 2;
	}
    if (document.getElementById("incarnate").checked){
	pri	 = pri + 3;
	}
	if (document.getElementById("oracle").checked){
	pri	 = pri + 4;
	}
	if (document.getElementById("nolead").checked){
	pri	 = pri + 5;
	}		

if (rel < 4 && pri == 1){
		priest = "our local cleric";
	}
	else if (rel < 4 && pri == 2){
		priest = "the grand cleric of the region";
	}
	else if (rel < 4 && pri == 3){
		priest = "our god(s) incarnate";
	}
	else if (rel < 4 && pri == 4){
		priest = "the great oracle(s)";
	}
	else if (rel < 4 && pri == 5){
		priest = "our wonderful community";
	}
	//rel//
	
	
	//placebuttons//
	
	//checkboxes//
//militia//
	
	
	if (document.getElementById("moral").checked){
	militia = militia + 1;}
	if (document.getElementById("guard").checked){
	militia = militia + 10;}
	if (document.getElementById("police").checked){
	militia = militia + 100;}
	if (document.getElementById("walls").checked){
	militia = militia + 1000;}
	if (document.getElementById("volunteer").checked){
	militia = militia + 10000;}
	if (document.getElementById("army").checked){
	militia = militia + 100000;}
	if (document.getElementById("navy").checked){
	militia = militia + 1000000;}
	if (document.getElementById("airforce").checked){
	militia = militia + 10000000;}
	if (document.getElementById("special").checked){
	militia = militia + 100000000;}
	
	if (militia >100000000){
	force = "multiple special forces of heroes.";}
	else if (militia <100000000 && militia > 10000000){
		force = "flying and other forces.";}
	else if (militia < 10000000 && militia > 1000000){
		force = "naval and other forces.";}
	else if (militia < 1000000 && militia > 100000){
		force = "army and home defences.";}
	else if (militia < 100000 && militia > 10000){
		force = "volunteer army and home defences.";}
	else if (militia < 10000 && militia > 1000){
		force = "walls and those who guard them.";}
	else if (militia < 1000 && militia > 100){
		force = "police and homeguard.";}
	else if (militia < 100 && militia > 10){
		force = "excellent guardsman and great moral standing.";}
		
	else if (militia == 100000000){
		force = "special force of heroes.";}
	else if (militia == 10000000){
		force = "great force of flying soldiers.";}
	else if (militia == 1000000){
		force = "grand and powerful navy.";}
	else if (militia == 100000){
		force = "strong and skilled army";}
	else if (militia == 10000){
		force = "eager volunteer army.";}
	else if (militia == 1000){
		force = "strong walls."}
	else if (militia == 100){
		force = "well trained police force.";}
	else if (militia == 10){
		force = "watchful guards.";}
	else if (militia == 1){
        force = "Perfect Moral Character!";}
     else { force = "total lack of defensive capability.";}
//militia//
//culture leaders//

	
	if (document.getElementById("mil").checked){
	cul = cul + 1;}
	if (document.getElementById("craft").checked){
	cul = cul + 10;}
	if (document.getElementById("nob").checked){
	cul = cul + 100;}
	if (document.getElementById("religious").checked){
	cul = cul + 1000;}
	if (document.getElementById("sale").checked){
	cul = cul + 10000;}
	if (document.getElementById("earthwork").checked){
	cul = cul + 100000;}
	
	
	if (cul == 100000){
		leader = "producers of all the things a place could need, and then some raw materials for our crafty neighbors!";}
	else if ( cul== 10000){
		leader = "mercantile and businesspeople, who travel endlessly to get " + mim + " for us.";}
	else if (cul == 1000){
		leader = "church leaders, who are the holiest people in " + country + " and beyond."}
	else if (cul == 100){
		leader = "nobility, who are as gracious as they are kind and charming.";}
	else if (cul == 10){
		leader = "most wonderful craftspeople, responsible for our great output of " + mex + ".";}
	else if (cul == 1){
        leader = "military leaders of all ranks, as they are great influences!";}
     else { leader = "many cultural leaders, at all social levels.";}
//culture leaders//
//ritual//
 

	
	if (document.getElementById("bsacrifice").checked){
	rit = rit + 1;
	}
	if (document.getElementById("ssacrifice").checked){
	rit	 = rit + 10;
	}
    if (document.getElementById("ells").checked){
	rit	 = rit + 100;
	}
	if (document.getElementById("mgprayers").checked){
	rit	 = rit + 1000;
	}
	if (document.getElementById("irituals").checked){
	rit	 = rit + 10000;
	}

 if (rit == 1){
 ritual = "blood sacrifice holiday";}

	else if (rit == 10){
		ritual = "ritual self flagellation"	;}
	else if (rit == 100){
		ritual = "holy services"	;}
	else if (rit == 1000){
		ritual = "group prayers"	;}
	else if (rit == 10000){
	 ritual = "private rituals, these are for the home";}
	else {
		ritual = "many possible rituals"	;}
//ritual//
	//shelter//


	if (document.getElementById("house").checked){
	shel = shel + 1;
	}
	if (document.getElementById("inn").checked){
	shel = shel + 10;
	}
	if (document.getElementById("outdoor").checked){
	shel = shel + 100;
	}
    if (document.getElementById("school").checked){
	shel = shel + 1000;
	}

 if (shel == 1){
	 shelter = "housing district";
	 shelter2 = "homes of our most prominent citizens. like the " + leader;
 }
 else if (shel == 10){
 shelter = "local inn and tavern";
 shelter2 = "local tavern";}

else if (shel == 100){
		shelter = "local campsite"	;
		shelter2 = "local campsites";}
else if (shel == 1000){
		shelter = "educational facilities"	;
		shelter2 = "common grounds of the local university";}
else { shelter = "welcoming transitory districts, with places to bunk down inside and out";
shelter2 = "center of town, open to everyone. (some events may require a fee)"}
//shelter//
//holidays//

	if (document.getElementById("midwinter").checked){
	hols = hols + 1;	}
	if (document.getElementById("midsummer").checked){
		hols = hols + 10;	}
    if (document.getElementById("spring").checked){
		hols = hols + 100;	}
	if (document.getElementById("autumn").checked){
		hols = hols + 1000;	}
	if (document.getElementById("float").checked){
		hols = hols + 10000;	}

 if (hols == 1){  holiday = "winterfeast";}

	else if (hols == 10){		holiday = "midsummer gatherings"	;}
	else if (hols == 11){		holiday = "solstice festivals"	;}
	else if (hols == 100){		holiday = "planting dances"	;}
	else if (hols == 1000){		holiday = "harvest feasts"	;}
	else if (hols == 1100){		holiday = "planting and harvest festivals"	;}
	else if (hols == 10000){		holiday = "one of our many important holidays"	;}
	else {holiday = "our wonderful celebration days."	;}
//holidays//
	
	//checkboxes//
	
	
	
	
	
	//yearcounter//
	


	

if (document.getElementById("YesPets").checked) {
 year = year + 100;
} 

else {
year = year - 10000;
}


if (document.getElementById("swood").checked){
	year = year + 10;}
	else if (document.getElementById("copper").checked){
	year = year + 1000;}
	else if (document.getElementById("bronze").checked){
	year = year + 7000;}
	else if (document.getElementById("iron").checked){
	year = year + 8000;}
	else if (document.getElementById("steel").checked){
	year = year + 8800;}
	else if (document.getElementById("electric").checked){
	year = year + 11800;}


if (document.getElementById("nomad").checked){
	year = year + 0;}
if (document.getElementById("farm").checked && year < 1000){
	year = year + 1000;}
if (document.getElementById("citystate").checked && year < 1000){
	year = year + 3000;}
if (document.getElementById("roads").checked && year < 1000){
	year = year + 4000;}
if (document.getElementById("arches").checked && year < 1000){
	year = year + 6000;}
if (document.getElementById("pipe").checked && year < 1000){
	year = year + 7000;}
if (document.getElementById("national").checked && year < 1000){
	year = year + 8000;}
if (document.getElementById("coin").checked && year < 1000){
	year = year + 9000;}
if (document.getElementById("industry").checked && year < 1000){
	year = year + 11000;}


if (document.getElementById("paint").checked){
year = year + 1;}
if (document.getElementById("dye").checked){
	year = year + 2;}
	 if (document.getElementById("writing").checked){
	year = year + 3;}
	 if (document.getElementById("pot").checked){
	year = year + 4;}
	 if (document.getElementById("monument").checked){
	year = year + 5;}
	 if (document.getElementById("paper").checked){
	year = year + 6;}
	 if (document.getElementById("glass").checked){
	year = year + 7;}
	 if (document.getElementById("porcelain").checked){
	year = year + 8;}
if (document.getElementById("bprint").checked && year < 9000){
	year = 9100;}
	 if (document.getElementById("bprint").checked && year > 9000){
	year = year + 9;}
	 if (document.getElementById("mtype").checked && year < 9000){
	year  = 9150;}
	 if (document.getElementById("bprint").checked && year > 9000){
	year = year + 10;}
	if (document.getElementById("techdraw").checked && year < 11000){
	year =  11100 ;}
	 if (document.getElementById("techdraw").checked && year > 11000){
	year = year + 11;}
	if (document.getElementById("film").checked && year < 11800){
	year = 11812 ;}
	 if (document.getElementById("film").checked && year > 11800){
	year = year + 12;}
	if (document.getElementById("tv").checked && year < 11800){
	year = 11813 ;}
	 if (document.getElementById("tv").checked && year > 11800){
	year = year + 13;}
	if (document.getElementById("digital").checked && year < 12000){
	year = 11914;}
	 if (document.getElementById("digital").checked && year > 12000){
	year = year + 14;}
	

if (document.getElementById("leather").checked){
year = year + 1;}
	else if (document.getElementById("sweave").checked){
	year = year + 2;}
	else if (document.getElementById("cweave").checked){
	year = year + 3;}
	else if (document.getElementById("cutsew").checked){
	year = year + 4;}
	else if (document.getElementById("fashion").checked){
	year = year + 5;}



	
		if (document.getElementById("numbers").checked){
year = year + 1;}
	else if (document.getElementById("divy").checked){
	year = year + 2;}
	else if (document.getElementById("geometry").checked){
	year = year + 3;}
	else if (document.getElementById("logic").checked){
	year = year + 4;}
	else if (document.getElementById("engineer").checked){
	year = year + 5;}
	else if (document.getElementById("stat").checked){
	year = year + 6;}
	else if (document.getElementById("phys").checked){
	year = year + 7;}
		

	
if (document.getElementById("artmagic").checked){year = year + 20000;}
if (document.getElementById("toolmagic").checked){ year = year + 20000;}
if (document.getElementById("scifi").checked) { year = year + 20000;}
if (document.getElementById("clothmagic").checked){ year = year + 20000;}
if (document.getElementById("spec").checked){ year = year + 20000;}
	
	
	
	
		
	if (year > 19999) { year = "of The Smoking Hedgehog";}
	else { year = year}
	
	
	//yearcounter//
	
	
	
var set = document.getElementById("set");
   var mexport = document.getElementById("mexport");
   var mimport = document.getElementById("mimport");
 var country = document.getElementById("country");

    var propername = set.value;
	var mex = mexport.value;
	var mim = mimport.value;
	var country = country.value;
	
	
	
	
	//fin//
	output.innerHTML = story;
	
	
  

 //Issues with setting
 
  
 var story = "Welcome to " + propername + " in " + country + ". There are many great things to do here in the year " + year + 
 "! Watching over us are our " + govern + " with their " + force 
 + ". Our people greatly value our " + leader
 + " Visit the " + religion + ", led by " + priest + ", to learn " + ritual + "!" 
 + " Come by our markets where you can get " + propername + "’s famous " + mex + "!"
 + " Stay at our " + shelter + ", and try the local " + food
 + " Join us in wearing the local " + clothing 
 + " Socialize at the " + shelter2 + ", especially at " + holiday 
 + "! Witness the beautiful " + landmark
 + "! Bring your own " + mim;

    

    output.innerHTML = story;
}

