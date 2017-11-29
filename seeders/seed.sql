# ************************************************************
# Sequel Pro SQL dump
# Version 4541
#
# http://www.sequelpro.com/
# https://github.com/sequelpro/sequelpro
#
# Host: 127.0.0.1 (MySQL 5.7.18)
# Database: UFO
# Generation Time: 2017-11-29 02:45:34 +0000
# ************************************************************


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


# Dump of table UFOs
# ------------------------------------------------------------

DROP TABLE IF EXISTS `UFOs`;

CREATE TABLE `UFOs` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `datetime` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `state` varchar(255) DEFAULT NULL,
  `country` varchar(255) NOT NULL,
  `shape` varchar(255) NOT NULL,
  `duration` varchar(255) NOT NULL,
  `comments` varchar(255) NOT NULL,
  `vote` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

LOCK TABLES `UFOs` WRITE;
/*!40000 ALTER TABLE `UFOs` DISABLE KEYS */;

INSERT INTO `UFOs` (`id`, `datetime`, `city`, `state`, `country`, `shape`, `duration`, `comments`, `vote`)
VALUES
	(1,'1949/10/10','san marcos','tx','us','cylinder','2700','This event took place in early fall around 1949-50. It occurred after a Boy Scout meeting in the Baptist Church. The Baptist Church sit',NULL),
	(2,'1949/10/10','lackland afb','tx','','light','7200','1949 Lackland AFB&#44 TX.  Lights racing across the sky &amp; making 90 degree turns on a dime.',NULL),
	(3,'1955/10/10','chester (uk/england)','','gb','circle','20','Green/Orange circular disc over Chester&#44 England',1),
	(4,'1956/10/10','edna','tx','us','circle','20','My older brother and twin sister were leaving the only Edna theater at about 9 PM&#44...we had our bikes and I took a different route home',NULL),
	(5,'1960/10/10','kaneohe','hi','us','light','900','AS a Marine 1st Lt. flying an FJ4B fighter/attack aircraft on a solo night exercise&#44 I was at 50&#44000&#39 in a &quot;clean&quot; aircraft (no ordinan',NULL),
	(6,'1961/10/10','bristol','tn','us','sphere','300','My father is now 89 my brother 52 the girl with us now 51 myself 49 and the other fellow which worked with my father if he&#39s still livi',NULL),
	(7,'1965/10/10','penarth (uk/wales)','','gb','circle','180','penarth uk  circle  3mins  stayed 30ft above me for 3 mins slowly moved of and then with the blink of the eye the speed was unreal',NULL),
	(8,'1965/10/10','norwalk','ct','us','disk','1200','A bright orange color changing to reddish color disk/saucer was observed hovering above power transmission lines.',1),
	(9,'1966/10/10','pell city','al','us','disk','180','Strobe Lighted disk shape object observed close&#44 at low speeds&#44 and low altitude in Oct 1966 in Pell City Alabama',NULL),
	(10,'1966/10/10','live oak','fl','us','disk','120','Saucer zaps energy from powerline as my pregnant mother receives mental signals not to pass info',NULL),
	(11,'1968/10/10','hawthorne','ca','us','circle','300','ROUND &#44 ORANGE &#44 WITH WHAT I WOULD SAY WAS POLISHED METAL OF SOME KIND AROUND THE EDGES .',NULL),
	(12,'1968/10/10','brevard','nc','us','fireball','180','silent red /orange mass of energy floated by three of us in western North Carolina in the 60s',NULL),
	(13,'1970/10/10','bellmore','ny','us','disk','1800','silver disc seen by family and neighbors',NULL),
	(14,'1970/10/10','manchester','ky','us','unknown','180','Slow moving&#44 silent craft accelerated at an unbelievable angle and speed.',NULL),
	(15,'1971/10/10','lexington','nc','us','oval','30','green oval shaped light over my local church&#44power lines down..',NULL),
	(16,'1972/10/10','harlan county','ky','us','circle','1200','On october 10&#44 1972 myself&#44my 5yrs.daughter&#442 neices and 2 nephews were playing tag in the back yard .When we looked over on the ridge',NULL),
	(17,'1972/10/10','west bloomfield','mi','us','disk','120','The UFO was so close&#44 my battery in the car went to zero amps&#44 stalling the engine&#44 turning off my lights and radio.',NULL),
	(18,'1973/10/10','niantic','ct','us','disk','1800','Oh&#44 what a night &#33  Two (2) saucer-shaped&#44 glowing green objects and one (1) brilliantly glowing sphere gliding over the lake.',NULL),
	(19,'1973/10/10','bermuda nas','','','light','20','saw fast moving blip on the radar scope thin went outside and saw it again.',1),
	(20,'1974/10/10','hudson','ma','us','other','2700','Not sure of the eact month or year of this sighting but it was in the fall of 74 or 75. Was walking home around dusk and saw a bright l',NULL),
	(21,'1974/10/10','cardiff (uk/wales)','','gb','disk','1200','back in 1974 I was 19 at the time and  lived in a suburb of Cardiff Wales UK called Ely&#44 and in the distance there was a wood called Ca',-1),
	(22,'1974/10/10','hudson','ks','us','light','1200','The light chased us.',-2),
	(23,'1975/10/10','north charleston','sc','us','light','360','Several Flashing UFO lights over Charleston Naval Base in S.C.',NULL),
	(24,'1976/10/10','washougal','wa','us','oval','60','Three extremely large lights hanging above nearby trees.',2),
	(25,'1976/10/10','stoke mandeville (uk/england)','','gb','cigar','3','White object over Buckinghamshire UK.',-1),
	(26,'1977/10/10','san antonio','tx','us','other','30','i was about six or seven and my family and me were sitting next to a window at home eating when a type of dark ball hit the screen wind',NULL),
	(27,'1977/10/10','louisville','ky','us','light','30','HBCCUFO CANADIAN REPORT:  Pilot Sighting Of Unusual Light.',NULL),
	(28,'1978/10/10','elmont','ny','us','rectangle','300','A memory I will never forget that happened meny years ago.',NULL),
	(29,'1979/10/10','poughkeepsie','ny','us','chevron','900','1/4 moon-like&#44  its &#39chord&#39 or flat side parallel to horizon&#44  bright orange-red glow&#44  completely silent&#44 no features.',NULL),
	(30,'1979/10/10','saddle lake (canada)','ab','','triangle','270','Lights far above&#44  that glance; then flee from the celestrialhavens&#44 only to appear again.',NULL),
	(31,'1979/10/10','san diego','ca','us','oval','180','My 2nd UFO sighting&#44 October 1979',NULL),
	(32,'1979/10/10','security','co','us','unknown','1800','very low clouds all different colors&#44search lights were seen shining down out of the clouds on the houses and streets. this event was s',NULL),
	(33,'1980/10/10','houston','tx','us','sphere','180','Sphere&#44 No lights&#44  moving through neighborhoods above tree tops&#44 over busy streets in Houston in 1980.',NULL),
	(34,'1980/10/10','dallas','tx','us','unknown','300','Strange shape shifting craft of pure light energy.',NULL),
	(35,'1980/10/10','manchester','nh','us','light','300','A red glowing sphere stopped and watched me.',NULL),
	(36,'1982/10/10','gisborne (new zealand)','','','disk','120','gisborne nz 1982 wainui beach to sponge bay',-1),
	(37,'1984/10/10','houston','tx','us','circle','60','2 experience with unkown',NULL),
	(38,'1984/10/10','traverse city','mi','us','other','120','translucent football seen over city airport',1),
	(39,'1984/10/10','white plains','ny','us','formation','20','Saw a hugh object in sky with lights intermittently placed not making any noise traveling north in the night sky.It had no real identif',NULL),
	(40,'1985/10/10','leeds (uk/england)','','gb','triangle','600','three light in the sky that led to a big black silent triangle shaped craft.',NULL),
	(41,'1986/10/10','holmes/pawling','ny','','chevron','180','Football Field Sized Chevron with bright white lights on front&#44 moving slowly with absolutely no sound',1),
	(42,'1988/10/10','milwaukee','wi','us','triangle','600','A silent black triangular object with no lights moved over us as we walked our dog across a school playground.',3),
	(43,'1988/10/10','new gloucester','me','us','unknown','120','I&#39m still afraid to look at the sky at night.',NULL),
	(44,'1988/10/10','boulder','co','us','light','60','Three Stars Begin to Move Randomly&#44 Stop&#44 Change Direction&#44 Move Again&#44 And Then Vanish',NULL),
	(45,'1988/10/10','seattle (ballard area)','wa','us','unknown','2','Two adult witnesses are stunned by the sound of an object that streaks above the home they are in.',NULL),
	(46,'1989/10/10','calabasas','ca','us','disk','300','Unidentified object on Mulholland Highway.',NULL),
	(47,'1989/10/10','centralia','wa','us','triangle','60','A huge triangularly shaped silent object that blotted out 25 degrees of the sky&#44 lighted by four glowing points.',NULL),
	(48,'1989/10/10','kranklin','ky','','triangle','180','Triangle seen in franklin Ky - october 1989',-1),
	(49,'1990/10/10','ashburn','ga','us','triangle','120','Translucent Craft that makes No Sound While Moving',NULL),
	(50,'1991/10/10','frisco','nc','us','unknown','1800','A friend and myself were standing on the shore of the Pamlico sound as we observed 4 objects moving in up and down motions for about 30',NULL),
	(51,'1991/10/10','harrisburg','pa','us','triangle','600','We observed 3 triangular shaped high speed objects&#33',NULL),
	(52,'1992/10/10','panama city','fl','us','formation','3600','During a road trip to Panama City a friend and I witnessed a pair of luminous light formations appear and dissappear over the Gulf.',2),
	(53,'1992/10/10','stafford','tx','us','unknown','10','A man emerges from a beam of light that shines on a grassy field at night and he runs towards the Texas Instruments parking lot.',NULL),
	(54,'1992/10/10','seymour','tn','us','cigar','60','Stationary Elongated UFO 200ft above vacant field with city lights on bottom',NULL),
	(55,'1992/10/10','weatherford','tx','us','unknown','30','Black or dark grey.  Too big&#44 too low&#44 too slow&#44 too quiet&#44 for a normal aircraft.',NULL),
	(56,'1993/10/10','zlatoust (russia)','','','sphere','1200','I woke up at night and looked out the window near my bed. There was a huge sphere of shining light in front of our nine floor apartment',NULL),
	(57,'1993/10/10','peoria','il','us','light','8','Light over Peoria&#44 IL that moves slowly&#44 stops in mid-air&#44 hovers&#44 changes colors&#44 shoots in opposite direction and disappears.',3),
	(58,'1993/10/10','carthage','tn','us','other','60','1 object with green and red lights',NULL),
	(59,'1994/10/10','mercedies','tx','','cigar','3600','ufo chased by fighter jet over Rio Grande Valley. Seen on news',NULL),
	(60,'1994/10/10','burnt hills','ny','us','rectangle','120','Giant rectangular craft (resembling an upside-down aircraft carrier) over highway near Saratoga&#44 NY.',1),
	(61,'1994/10/10','pinebergen','ar','us','light','5','Round&#44 bright&#44 low flying object silently speeds West of Arkansas town at 11:30pm&#44 10/10/94.',2),
	(62,'1994/10/10','toronto (greater toronto area) (canada)','on','ca','sphere','3600','Large rusty sphere',NULL),
	(63,'1995/10/10','milwaukee','wi','us','','120','Man  on Hwy 43 SW of Milwaukee sees large&#44 bright blue light streak by his car&#44 descend&#44 turn&#44 cross road ahead&#44 strobe. Bizarre&#33',NULL),
	(64,'1995/10/10','oakland','ca','us','','60','Woman repts.  bright light in NW sky&#44 suddenly approaches her&#44 flies slowly overhead.  Swept wings&#44 2 blurry lights either side.',NULL),
	(65,'1996/10/10','higginsville','mo','us','triangle','3','illuminated triangular craft&#44 flying at high speed from South to North',2),
	(66,'1996/10/10','lake macquarie (nsw&#44 australia)','','','light','300','RED LIGHT WITH OTHER RED FLASHING LIGHT&#44 ONE OBJECT',NULL),
	(67,'1996/10/10','charleston','sc','us','light','300','Flashing object above Charleston&#44 SC',NULL),
	(68,'1996/10/10','monroe county','oh','us','cylinder','60','Looked like it went through the hillside',NULL),
	(69,'1997/10/10','connersville','in','us','delta','14400','3 differants types &#44 cluster &#44delta &#44 and one in a 3 pointed star design . followed it for six miles .',NULL),
	(70,'1997/10/10','mesa','az','us','sphere','30','A small dark purple quad-thruster craft hovering 200-300 feet in the sky. 500 Lights On Object0: Yes',NULL),
	(71,'1997/10/10','bonaire','ga','us','triangle','300','Triangular Object Sighted at Very Close Range',NULL),
	(72,'1997/10/10','austin','mn','us','other','3600','i was traveling northbound on state highway 105 approximately 8 miles south of Austin MN when an object came down directly above my car',NULL),
	(73,'1998/10/10','hollywood','ca','us','changing','300','I was standing outside on Sunset Blvd. at Vine and looked straight up which I normally do not do. I saw three bright white lights in a',NULL),
	(74,'1998/10/10','phoenix (north part)','az','us','fireball','15','bright green moving north to north east. it was bright green and kinda clear. quite fast too.',-1),
	(75,'1998/10/10','elgin','il','us','cylinder','1800','While looking up at sky I noticed a bright light hovering above the sky. then I noticed a jet airliner traveling in the same area and I',-1),
	(76,'1998/10/10','las vegas','nv','us','cigar','600','White&#44 vertical cigar shape floating around in the eastern sky.',NULL),
	(77,'1998/10/10','las vegas','nv','us','circle','2700','Ufo sighting in las vegas near Area51',NULL),
	(78,'1998/10/10','nyc/westchester area','ny','','triangle','60','Lights over NYC',-1),
	(79,'1998/10/10','spokane (about 30 miles sw of&#44i-90&#44 maybe mm 254)','wa','us','triangle','600','Dark boomerange object seen for ten minutes hovering over the freeway with a bright light out the front that lit up the fields. No jet',NULL),
	(80,'1998/10/10','mooresville','nc','us','light','2','Star gazing in back yard with telescope and binos. Saw shooting star and an oblong shape of light.',NULL),
	(81,'1998/10/10','st. john&#39s (canada)','nf','ca','egg','7200','Started off as 3 points of intense yellow light in triangle formation - then grew larger - it becage a single egg shape - VERY bright.',NULL),
	(82,'1998/10/10','delano','tn','us','fireball','15','I came home from work one night and I seen a bright fire like ball go across the top ofthe mountain and it was going fast then it stopp',NULL),
	(83,'1999/10/10','martinez','ca','us','changing','3600','Bright objects&#44 red and green flashing lights (and a diffuse white light off to one side of the larger of the two objects)&#44 about 30 de',NULL),
	(84,'1999/10/10','kansas city','ks','us','unknown','600','Orange object over city.',NULL),
	(85,'1999/10/10','dallas','tx','us','other','10','group of   twinkling lights at high altitude',NULL),
	(86,'1999/10/10','san diego','ca','us','fireball','3600','At 10:45 in the morning&#44 my father and I noticed a small stationary object in the sky.',NULL),
	(87,'1999/10/10','kennewick','wa','us','sphere','45','Standing outside saying goodby to family members and pointing to Chem-Trails',NULL),
	(88,'1999/10/10','hayward','ca','us','circle','90','Many different colored glowing  objects',1),
	(89,'1999/10/10','rachel','nv','us','light','10800','Bright lights with incredible agility seen from mailbox at Area 51 on UFO highway in Nevada for several hourse.',2),
	(90,'1999/10/10','humphrey','ne','us','sphere','300','Object moving erratically in sky stopped by spot light',NULL),
	(91,'1999/10/10','casey key (north end of)','fl','','triangle','120','A large trianglual shaped craft flew from horizon to horizon as observed from the stern deck of a motor vessel',NULL),
	(92,'1999/10/10','elgin','or','us','chevron','240','Object silently traveled north -northwest. It was V shaped with five orange lights on the perimeter and one white ligh in the center of',1),
	(93,'1999/10/10','lewiston','mi','us','oval','2700','Oval shaped with lights all around it in a haze with several smaller lights flying all around it.',NULL),
	(94,'2000/10/10','perryville','mo','us','oval','180','The craft was big&#44 orange&#44 and oval shaped.',NULL),
	(95,'2000/10/10','boynton beach','fl','us','other','10','Unusual light formation moving extremely fast across the sky.',NULL),
	(96,'2000/10/10','victoria (canada)','bc','ca','cylinder','30','Smooth Shiny Cylinder',NULL),
	(97,'2000/10/10','jueanu','wi','','triangle','45','5 bight light V shaped',NULL),
	(98,'2000/10/10','valley park area of st. louis','mo','','oval','15','Driving on Hyw.141 at Hyw. 44 and going East&#44 I witnessed to my right a glowing orb of light streak horizontally from East to West at a',NULL),
	(99,'2000/10/10','brinktown','mo','us','light','1800','3 bright golden lights moving independently above the tree line flaring and fading intermittently for approx. 15 min.',NULL);

/*!40000 ALTER TABLE `UFOs` ENABLE KEYS */;
UNLOCK TABLES;



/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
