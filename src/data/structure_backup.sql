-- MySQL dump 10.13  Distrib 5.5.62, for Win64 (AMD64)
--
-- Host: localhost    Database: grupo3_db
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.21-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `carrito`
--

DROP TABLE IF EXISTS `carrito`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carrito` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cantidad` int(11) NOT NULL,
  `total` decimal(10,0) NOT NULL,
  `fkUsuario` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carrito_FK` (`fkUsuario`),
  CONSTRAINT `carrito_FK` FOREIGN KEY (`fkUsuario`) REFERENCES `usuarios` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carrito`
--

LOCK TABLES `carrito` WRITE;
/*!40000 ALTER TABLE `carrito` DISABLE KEYS */;
INSERT INTO `carrito` VALUES (1,0,1000000,1),(2,0,1000000,1),(3,0,1000000,1),(4,0,1000000,1),(5,0,1000000,1),(6,0,1000000,1),(7,0,1000000,1),(8,0,1000000,1),(9,0,1000000,1),(10,10,282000,1),(11,0,1000000,1);
/*!40000 ALTER TABLE `carrito` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `carritoproductos`
--

DROP TABLE IF EXISTS `carritoproductos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `carritoproductos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `fkCarrito` int(11) NOT NULL,
  `fkProducto` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `carrito_productos_FK` (`fkCarrito`),
  KEY `carrito_productos_FK_1` (`fkProducto`),
  CONSTRAINT `carrito_productos_FK` FOREIGN KEY (`fkCarrito`) REFERENCES `carrito` (`id`),
  CONSTRAINT `carrito_productos_FK_1` FOREIGN KEY (`fkProducto`) REFERENCES `productos` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `carritoproductos`
--

LOCK TABLES `carritoproductos` WRITE;
/*!40000 ALTER TABLE `carritoproductos` DISABLE KEYS */;
INSERT INTO `carritoproductos` VALUES (1,1,1),(2,1,12),(3,1,13),(4,1,14),(5,1,15),(6,1,16);
/*!40000 ALTER TABLE `carritoproductos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `categorias`
--

DROP TABLE IF EXISTS `categorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `categorias`
--

LOCK TABLES `categorias` WRITE;
/*!40000 ALTER TABLE `categorias` DISABLE KEYS */;
INSERT INTO `categorias` VALUES (1,'Guitarras y bajos','guitarras.jpeg'),(2,'Pedales','pedales.jpg'),(3,'Teclados y pianos','teclados.jpeg'),(4,'Sonido y audio','sonido.jpeg'),(5,'Accesorios y extras','accesorios.jpeg'),(6,'Baterías y percusión','baterias.jpg');
/*!40000 ALTER TABLE `categorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `marcas`
--

DROP TABLE IF EXISTS `marcas`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `marcas` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `marcas`
--

LOCK TABLES `marcas` WRITE;
/*!40000 ALTER TABLE `marcas` DISABLE KEYS */;
INSERT INTO `marcas` VALUES (1,'Martin&Co'),(2,'Fender'),(3,'Yamaha'),(4,'Taylor'),(5,'Boss'),(6,'Ditto'),(7,'Marshall'),(8,'Gibson'),(9,'Stagg'),(10,'Ernie Ball');
/*!40000 ALTER TABLE `marcas` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `precio` decimal(10,0) NOT NULL,
  `descripcion` text NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `stock` tinyint(1) NOT NULL,
  `fkCategoria` int(11) NOT NULL,
  `fkSubCategoria` int(11) NOT NULL,
  `fkMarca` int(11) NOT NULL,
  `enOferta` tinyint(4) NOT NULL,
  `deleted` tinyint(4) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `productos_FK` (`fkCategoria`),
  KEY `productos_FK_1` (`fkSubCategoria`),
  KEY `productos_FK_2` (`fkMarca`),
  CONSTRAINT `productos_FK` FOREIGN KEY (`fkCategoria`) REFERENCES `categorias` (`id`),
  CONSTRAINT `productos_FK_1` FOREIGN KEY (`fkSubCategoria`) REFERENCES `subcategorias` (`id`),
  CONSTRAINT `productos_FK_2` FOREIGN KEY (`fkMarca`) REFERENCES `marcas` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=96 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (1,'RC-30 Loop Station',65000,'BOSS celebrates the 10th anniversary of the LoopStation with an exciting new lineup of RC-series loopers! First out of the gate is the RC-30, a Twin Pedal multitrack looper with two synchronized stereo tracks and built-in loop effects. Plug in your instrument of choice, or even a microphone; an XLR input is provided, complete with phantom power. Record for up to three hours direct to internal memory, adding effects as you go. The USB 2.0 port lets you save your loops externally, and import/export WAV files.','boss_RC-30.png',1,2,4,5,0,0),(12,'Little Martin LX1',80000,'Handmade with heavy-duty materials, time-tested styles, and innovative designs, the Little Martin Series delivers classic acoustic guitars that any musician will love to play. These models are made from sustainable wood certified parts and are available in a variety of different wood types, so you can find the solid wood guitar that works best for your playing style and music type—rock, country, folk, bluegrass, jazz, pop, and much more.d','martin_littlemartin_lx1.jpg',0,1,1,1,1,0),(13,'DITTO-X2 Looper',22000,'The original DITTO LOOPER rocked guitarists with a lust for looping like nothing else. Finally something that was simple, made for guitarists and sounded great. What would possibly be better? Well, how about all of that, plus new, next level looping features forged from pure awesome?','ditto_x2looper.jpg',1,2,4,6,1,0),(14,'562ce',70000,'Taylor’s Grand Concert 12-strings reaffirm Taylor’s heritage of easy-playing double course instruments thanks to a lap-friendly body size, a 12-fret neck, and a 24-7/8-inch scale length. The slinky handfeel makes fretting and bending strings easier, the neck and body are comfortably balanced, and the compact body produces a clear 12-string voice. The hardwood mahogany top adds just enough compression to the attack to smooth out the response, bringing an appealing consistency across the tonal spectrum, while still capturing the beautiful octave shimmer. V-Class bracing adds another dimension of musicality, improving volume and sustain so that notes and chords bloom and expand as they resonate. It makes a great 12-string choice for tracking in a studio, and behaves well with other instruments in a live setting. Refined aesthetic touches include a shaded edgeburst body and neck, faux tortoise shell binding, a rosette of faux tortoise shell and grained ivoroid, and a grained ivoroid Century fretboard inlay.','taylor_562ce.jpg',0,1,1,4,1,0),(15,'BC-1x',32000,'Equipped with cutting-edge BOSS technology, the BC-1X Bass Comp performs far beyond the capabilities of conventional bass compressor pedals. This premium stompbox features pro-level multiband compression controlled by intelligent circuitry, making it simple to dial in natural sounds for any playing style. The advanced design responds to different dynamics and registers to apply the perfect amount of compression in real time, ensuring that your tone never gets over-squeezed or muddy. Transparent, powerful, and easy to use, the BC-1X is a must-have tool that delivers studio-quality punch and precision for dynamic players.','boss_BC-1x.png',1,2,6,5,1,0),(16,'SD-1 Overdrive Pedal',18000,'The SD-1 allows players from beginner to pro to get inspiring sounds right away, thanks to its natural behavior and the subtle mid boost that\'s part of its design. It gives your tone a push where it matters most, ensuring your guitar always sits perfectly in the mix with warmth, clarity, and rich presence. Lower drive settings are great for rhythm parts, while higher settings are ideal for fat, singing leads. The SD-1 is also very sensitive to input gain, letting you dial in different shades of overdrive simply by adjusting your guitar\'s volume control.','boss_SD-1.png',1,2,5,5,1,0),(17,'AMERICAN PROFESSIONAL II STRATOCASTER®',120000,'The American Professional II Stratocaster® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.','fender_stratocaster_lightblue.jpg',1,1,3,2,1,0),(18,'TU-3 Chromatic Tuner',43000,'The world’s top-selling stage tuner, the BOSS TU-2, evolves and improves with the debut of the new TU-3. Housed in a tank-tough BOSS stompbox body, the TU-3 features a smooth 21-segment LED meter with a High-Brightness mode that cuts through the harshest outdoor glare. Choose between Chromatic or Guitar/Bass tuning modes, and enjoy visual pinpoint tuning verification with the Accu-Pitch Sign function. The TU-3 incorporates a convenient Note Name Indicator that can display notes of 7-string guitars and 6-string basses, while the Flat-Tuning mode can support up to six half-steps. It’s the new-standard tuner that no guitarist or bass player should be without!','boss_TU-3.png',1,2,7,5,1,0),(20,'RC-600 Loop Station',500000,'Meet the RC-600, the most advanced looper on the planet. Loaded with evolved features and customizable functions, this next-generation Loop Station ushers in a new era of creative power for guitarists, singer/songwriters, multi-instrumentalists, and other looping musicians. Capture multiple mics and instruments with six stereo tracks and premium 32-bit sound, and take full command with nine freely assignable footswitches and deep external control support. And that’s just the start—you can also color loops with a massive FX selection, groove with onboard rhythms, route audio as you like to the three stereo outputs, integrate with computer software via USB, and much more.','boss_rc-600.jpg',0,2,4,5,0,0),(22,'NTX5',57000,'The top-of-the-line NTX5 acoustic-electric, nylon-string guitar’s modern looks and unparalleled amplified sound enable electric guitarists and steel-string players to easily explore the world of nylon-string playing, while strap buttons and the exceptional Atmosfeel™ pickup system make it especially appealing to performing guitarists.','yamaha_NTX5.jpg',1,1,2,3,1,0),(23,'351 Classic Celluloid Pick',150,'Comfortable and familiar feel provided by the traditional 351 shape\r\nCelluloid picks give the traditional feel, with a smooth striking surface and a warm, round musical tone\r\nMedium gauge picks are ideal for the player looking for a warmer tone of a heavy pick, but the flexibility of a thin pick.\r\nFender picks provide comfort and high-performance flexibility for every performer','fender_pick_redblack.jpg',1,5,13,2,1,0),(24,'',0,'','fender_pick_black.jpg',1,1,1,1,0,1),(25,'PSR-EW410 Keyboard',65000,'El PSR-EW410 es el mejor teclado de 76 teclas para interpretar cualquier estilo de música, desde los últimos éxitos hasta tus favoritos “en vinilo”, con una muestra de piano de alta resolución, unos potentes altavoces incorporados y funciones profesionales fáciles de usar como los Controladores de Directo asignables, Quick Sampling, Groove Creator, Grabación de Audio USB, y conexión a un subwoofer opcional.','yamaha_psr-ew410.jpg',1,3,9,3,0,0),(26,'MG10 Amplifier',30000,'Rehearse day and night with the MG10. Simple yet mighty this 10W amp is perfect for band practice or home use. The two channels, clean and overdrive, and the contour control function provide a great way to experiment with your sound. The MG10 can also support jam sessions and silent practice and is impressively loud thanks to the custom 6.5” speaker.','marshall_mg10-amplifier.jpg',1,4,12,7,1,0),(27,'Absolute Hybrid Maple',320000,'La respuesta a la pregunta anterior es “la que da al músico el sonido que necesita, cuando lo necesita”. Las necesidades de sonido varían dependiendo del baterista y de la dinámica de la música, cambiando según las bandas, canciones y momentos. Cuerpos de arce híbridos Lugs “hook” YESS III Soporte de toms de masa reducida Bordes optimizados Interior con acabado “vintage”\r\n\r\n','yamaha_AbsoluteHybridMaple.png',1,6,18,3,1,1),(28,'AMERICAN PROFESSIONAL II JAZZ BASS®',75000,'The American Professional II Jazz Bass® draws from more than sixty years of innovation, inspiration and evolution to meet the demands of today’s working player.','fender_jazzbass_lightgreen.jpg',1,1,19,2,1,0),(29,'SG Standard Bass',210000,' The SG Bass has the legendary looks, sound and feel which made it one of Gibson\'s most iconic basses. The short scale length is actually a big part of this sound! While the short scale length of the SG Bass is preferred by smaller players, it\'s also preferred by many for the strong fundamental tone for which this short scale bass is known. As expected, the solid mahogany body has deeply sculpted scarfing and the rounded profile mahogany neck and rosewood fingerboard feels familiar and comfortable. A pair of calibrated SG bass pickups (neck and bridge) with individual volume and master tone controls add further tonal possibilities.','gibson-SG Standard Bass-Heritage Cherry.png',1,1,19,8,0,0),(30,'EARTHWOOD EXTRA LIGHT 80/20 BRONZE ACOUSTIC GUITAR STRINGS - 10-50 GAUGE',4000,'Ernie Ball Earthwood 80/20 Bronze Acoustic Guitar Strings are made from 80% copper, 20% zinc wire wrapped around hex shaped brass plated steel core wire. These acoustic guitar strings provide a crisp, ringing sound with pleasing overtones. Gauges .010, .014 .020, .028, .040, .050','ernieball_extralightbronze.png',1,5,22,10,0,0),(31,'',0,'','stagg_plugcable.png',1,5,14,1,1,1),(32,'VO-1 Vocal Pedal',45000,'The VO-1 Vocoder is a unique and innovative stompbox that puts the massive expressive range of the human voice in the hands of every guitarist and bassist. By vocalizing into a connected mic as you play, it’s easy to transform your tone with electronic voices, classic talk box sounds, and tons of all-new colors that are perfect for modern music styles. It’s even possible to create impressive ensemble vocal sounds without the need to connect an external mic. When you plug into the VO-1, you can literally talk, sing, and cry with your axe, taking your playing to places you never dreamed of before.','boss_VO-1.png',1,2,8,5,1,0),(84,'EARTHWOOD LIGHT PHOSPHOR BRONZE ACOUSTIC GUITAR STRINGS - 11-52 GAUGE',4500,' Ernie Ball Earthwood Phosphor Bronze Acoustic Guitar Strings are made from 92% copper, 7.7% tin, 0.3% phosphorus wire wrapped around tin plated hex shaped steel core wire. These guitar strings have a light orange, gold color and provide a mellow, ringing sound, with excellent clarity. Gauges .011, .015, .022w, .030, .042, .052','ernieball_lightvbronzepng.png',1,5,22,10,0,0),(85,' USA LEATHER STRAP, 2.5\"',2600,'Fender has always fashioned reliable American classics—it’s in our blood, and it’s our continuing tradition. Honor and become a part of this storied heritage by wearing your guitar with a strap that says it all. Crafted from leather and sporting a design inspired by the American flag, this strap is ready to hit the stage with rugged dependability and style.','fender_strapusa.png',1,5,24,2,0,0),(86,'AXIS CAPO - ROSE GOLD SATIN',1500,' The Ernie Ball Axis Capo’s ergonomic features allow for fast and accurate single-handed key changes. Compatible with most electric and acoustic guitars, the Axis Capo offers eight color finishes to match, with a dual-radius design that fits both flat and curved fretboards. Shift capo position single-handedly, and rely on buzz-free clamping pressure that lets your songs sing out in every key. Take the Axis Capo on the road and trust precision-molded rubber pads to protect your guitar finish. On the stage or in your writing space, it has to be the Axis Capo.','ernieball_axiscapo.png',1,5,23,10,1,0),(87,'10\' STRAIGHT / STRAIGHT INSTRUMENT CABLE - BLACK',5000,' ','ernieball_straightcable.png',1,5,14,10,0,0),(88,'THIN ASSORTED CELLULOSE PICKS, BAG OF 144',1200,' Cellulose Acetate Nitrate, Mixed Color Picks, .46mm, bag of 144.','ernieball_assortedpicks.png',0,5,13,10,0,0),(89,'RC-300',400000,' With loop mania sweeping the globe, BOSS proudly announces the most powerful Loop Station ever brought to the market — the RC-300. The new flagship looper features three synchronized stereo tracks with dedicated volume knobs and transport-control footswitches for each track. It’s also equipped with pro effects, a master Expression pedal, and a deluxe, ultra-wide control panel for the ultimate in live-performance manipulation. Plug in your guitar, bass, keyboard, or instrument of choice and create amazing loops in real time. An XLR input is also provided, complete with phantom power, so singers, percussionists, violinists, beatboxers, or anyone with a mic’d instrument can get in on the act, too. The RC-300 lets you record for up to three hours directly to its internal memory, adding effects as you go. The USB port lets you save your loops externally, as well as import/export WAV files. Step into the most powerful and inspiring Loop Station in BOSS history. It’s the creative powerhouse that musicians have been dreaming of!','boss_rc-300.png',1,2,4,5,1,0),(90,'SANTA ANA OVERDRIVE',87000,' We helped generate the classic guitar tones that inspired players to create new music, and now with the Santa Ana Overdrive, we’ve brought our expertise to stompboxes. Armed with FET technology, this pedal lets you dial in sounds varying from “just a little hairy” all the way to thick, fully saturated overdrive. The flexible tone controls unlock a wide range of sonic flavors. This pedal cleans up with the guitar’s volume control, just like our famous amplifiers.','fender_overdrivepedalsantaanapng.png',1,2,5,2,0,0),(91,'MEDIUM LIGHT ALUMINUM BRONZE ACOUSTIC GUITAR STRINGS - 12-54 GAUGE',6500,'Ernie Ball Aluminum Bronze Acoustic Guitar Strings feature more projection and clarity than traditional bronze strings, while also providing improved corrosion resistance. Aluminum Bronze Acoustic strings are made with Ernie Ball Maraging Steel hex cores and Aluminum Bronze wrap wire which provide more pronounced lows coupled with crisp brilliant highs. Made from a blend of copper and aluminum specifically tailored for acoustic guitar strings. Medium Light gauge .012, .016, .024, .032, .044, .054','ernieball_aluminumbronze.png',1,5,22,10,1,0),(92,'2\" TRI-GLIDE ITALIAN LEATHER STRAP - BLACK',7000,'Durable','ernieball_leatherstrap.png',1,5,24,10,1,0),(93,'KATANA-100/212 MkII',86000,' s','boss_katana-100_212_mk2.png',1,4,12,5,0,0),(94,'BMIDI-1-35',16000,'The BMIDI-1-35 and BMIDI-2-35 cables provide premium connectivity for the expanding lineup of BOSS pedals with space-saving 3.5 mm TRS MIDI jacks. These rugged and reliable cables feature 3.5 mm TRS and 5-pin DIN connectors, allowing you to connect products such as the BOSS 200 series, EV-1-WL, and others to gear equipped with traditional MIDI jacks, from pedals, loop switchers, and multi-effects units to keyboards and MIDI interfaces for computers. The low-profile plugs fit into tight spaces on your pedalboard, with a slim right-angle plug housing on the TRS side and three-way cable adjustment on the 5-pin DIN connector.','boss_bmidi-1-35.png',1,3,14,5,1,0),(95,'DS-1X',35000,'The DS-1X launches the famous BOSS distortion into a modern era of expression, delivering an unmatched level of performance for guitarists with an ear for tone. This next-generation stomp combines over 35 years of innovation in pedal design with the most advanced technologies, bringing you a completely new tonal experience that’s only possible with the legendary expertise of BOSS. Prepare to be amazed—the inspiring and ultra-responsive DS-1X will change your thinking about distortion pedals forever.','boss_ds-1.png',1,2,5,5,1,0);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `roles` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `rol` varchar(50) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Admin'),(2,'Cliente');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subcategorias`
--

DROP TABLE IF EXISTS `subcategorias`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `subcategorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `fkCategoria` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `sub_categorias_FK` (`fkCategoria`),
  CONSTRAINT `sub_categorias_FK` FOREIGN KEY (`fkCategoria`) REFERENCES `categorias` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subcategorias`
--

LOCK TABLES `subcategorias` WRITE;
/*!40000 ALTER TABLE `subcategorias` DISABLE KEYS */;
INSERT INTO `subcategorias` VALUES (1,'Guitarra Acústica',1),(2,'Guitarra Criolla',1),(3,'Guitarra Electrica',1),(4,'Loop Pedal-Station',2),(5,'Overdrive-Distortion Pedal',2),(6,'Bass Pedal',2),(7,'Tuner Pedal',2),(8,'Vocal Pedal',2),(9,'Teclados',3),(10,'Pianos',3),(11,'Micrófonos',4),(12,'Amplificadores',4),(13,'Púas',5),(14,'Cables',5),(18,'Baterías',6),(19,'Bajos',1),(22,'Cuerdas',5),(23,'Capos',5),(24,'Correas',5);
/*!40000 ALTER TABLE `subcategorias` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `usuario` varchar(50) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL,
  `domicilio` varchar(50) NOT NULL,
  `fkRol` int(11) NOT NULL,
  `deleted` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `usuarios_FK` (`fkRol`),
  CONSTRAINT `usuarios_FK` FOREIGN KEY (`fkRol`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=40 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'admin','admin','admin','admin@gmail.com','$2a$10$BDwBE5yBTGnXDDsZUvZyquh5hTIkRpwsMZrE72NfHyBDqYkseJYQ2','patronus.jpg','admin',1,0),(8,'John','Doe','Juan Doe','johndoe@gmail.com','$2a$10$425NoKZeaTRnNnNyVU9mO.d4E1cRFhyWH6eNgyujGsD9CypiON5za','dog.png','???',2,1),(39,'Tadeo','Gavensky','admin','admin@gmail.com','$2a$10$425NoKZeaTRnNnNyVU9mO.d4E1cRFhyWH6eNgyujGsD9CypiON5za','hermione.jpg','Suffolk',2,0);
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'grupo3_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-02  3:08:16
