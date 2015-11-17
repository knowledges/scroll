-- MySQL dump 10.13  Distrib 5.5.40, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: website
-- ------------------------------------------------------
-- Server version	5.5.40-0ubuntu0.14.04.1

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `role_name` varchar(200) NOT NULL DEFAULT 'ROLE_ADMIN',
  `image` varchar(200) DEFAULT '',
  `privilege` int(11) NOT NULL DEFAULT '0',
  `description` varchar(2000) DEFAULT '',
  `time` bigint(20) NOT NULL DEFAULT '0',
  `disabled` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'admin','FDC74BB454AC1ABA','ROLE_ADMIN','',0,'',0,0);
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loocha_news`
--

DROP TABLE IF EXISTS `loocha_news`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `loocha_news` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(400) NOT NULL,
  `summary` varchar(2000) NOT NULL,
  `image_url` varchar(500) DEFAULT NULL,
  `content` text,
  `time` bigint(20) NOT NULL DEFAULT '0',
  `update_time` bigint(20) NOT NULL DEFAULT '0',
  `disabled` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=29 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loocha_news`
--

LOCK TABLES `loocha_news` WRITE;
/*!40000 ALTER TABLE `loocha_news` DISABLE KEYS */;
INSERT INTO `loocha_news` VALUES (1,'213','的萨芬',NULL,'������fads',1422806400000,1422860770647,1),(2,'sdafd ','���������',NULL,'���������',1422201600000,1422861300701,1),(3,'���������','��������� ',NULL,'21321',1422806400000,1422861521603,1),(4,'21321','21312',NULL,'2131',0,1422862271970,1),(5,'表提','倒萨','/375/4980/7726/10ebdfc1-86ac-478b-a8b4-2c6de4c4adb8.jpg','的萨芬的萨芬',1422720000000,1422864956103,1),(6,'马庆鸣博士引来\"云计算\"','祖籍仪征月塘的美籍华人博士马庆鸣为扬州带来了第一个提供自主知识产权的高端云计算服务公司。市科技局相关专家表示，马庆鸣博士团队拥有核心知识产权，其技术的水平已达国际标准，这些都将构成扬州在云计算大产业中的竞争力。','','<h4>打造国内首个专业平台</h4>\n当你出游时，只要接入网络，就可以同时做到：直接看到实时交通状况、快速查询行车路线、预订宾馆、上传照片视频……记住，这些事情借助一台电脑或手机是无法同时做到的，但在\"云\"的另一端，由数万台服务器组成的庞大的集群却可以轻易地做到这一点。\n真云计算科技有限公司做的就是云计算服务业，通俗地说，就是\"云计算\"服务外包业，相当于数据业务的总承包商，接下各种数据处理任务，然后\"分包\"给\"云\"那头的若干个其他服务器。\n真云公司未来将创建国内首个开放式、高质量、高精度的个性化移动数据服务云计算平台。\n<h4>美籍华人引来云计算</h4>\n回顾落户经过，2010年7月8日，马庆鸣博士组织实施的移动云计算项目正式签约落户仪征。真云公司注册资本1500万美元，目前在南京和美国硅谷分别设立研发中心，并聘请了中国移动研究院首席科学家许利群为技术顾问。\"我们正在做智能电视云后台方面的项目。\"马庆鸣表示，\"正在进行相关测试。一个月后就可以现场演示了。\"\n<h4>打造核心竞争力</h4>\n\"目前我们拥有成果转化项目十几项，光是专家团队就有十几个人。\" 马庆鸣自信地说，\"云计算中最贵的就是存储系统，如果购买其他企业的，需要300万美金，而我们自己做只需要100万美金。项目完成后，老百姓将提前感受到云计算带来的便捷生活。\"\n<h4>云计算</h4>\n云计算概念是由Google提出的，这是一个美丽的网络应用模式。它具有超大规模、虚拟化、可靠安全等独特功效。\n看似高深的\"云计算\"理解起来并不难，其实就是把所有的计算应用和信息资源都用互联网连接起来，供个人和企业用户随时使用——相关的应用和资源可以通过全球任何一个服务器和数据中心来获取。云计算服务前途非常广泛，三网融合、政府信息化、医疗信息化……构成了中国云计算市场强大的市场驱动力。',1293120000000,1422865223339,0),(7,'北航聘请云计算专家马庆鸣博士为特聘教授','3月25日，孙伟院长为卡内基梅隆大学博士、江苏真云计算科技有限公司董事长马庆鸣先生颁发聘书，聘请马博士为我院移动云计算专业特聘教授。','','<p>马博士曾任全球领先的联网和安全性解决方案供应商Juniper CTO办公室首席架构师、全球领先网络互联解决方案厂商Cisco数据中心负载均衡产品总架构师，具有20多年的网络通信技术和硅谷大中小公司高新产品研发的经验，领导和参与了硅谷多个公司重大项目的策划和研发，并应邀多次在国内外知名学府（包括斯坦福大学）学术报告。马博士还拥有25项美国专利，并在国际一流学术会议上发表过10多篇论文。目前，马博士研究领域包括：云计算、移动云、信息安全、网络架构、网络安全、网络路由、QoS、网络应用、智能电视、应用加速、带宽压缩、个性化模型等。</p>\n<p>马博士表示非常愿意将自己的知识、经验与学生分享，指导研究生完成相应课题。未来马博士和其真云计算公司还将针对性的开发云计算安全或云计算在下一代广播电视网络（NGB）中的应用作为教学案例，与我院开展关于云计算安全、云计算应用优化和监控、云计算资源分配和管理的相关课题合作。</p>',1301155200000,1422865445977,1),(8,'北航聘请云计算专家马庆鸣博士为特聘教授','3月25日，孙伟院长为卡内基梅隆大学博士、江苏真云计算科技有限公司董事长马庆鸣先生颁发聘书，聘请马博士为我院移动云计算专业特聘教授。','/4648/1991/9840/75b8a0ee-d41b-45d5-8940-191b73809c9e.jpg','<p>马博士曾任全球领先的联网和安全性解决方案供应商Juniper CTO办公室首席架构师、全球领先网络互联解决方案厂商Cisco数据中心负载均衡产品总架构师，具有20多年的网络通信技术和硅谷大中小公司高新产品研发的经验，领导和参与了硅谷多个公司重大项目的策划和研发，并应邀多次在国内外知名学府（包括斯坦福大学）学术报告。马博士还拥有25项美国专利，并在国际一流学术会议上发表过10多篇论文。目前，马博士研究领域包括：云计算、移动云、信息安全、网络架构、网络安全、网络路由、QoS、网络应用、智能电视、应用加速、带宽压缩、个性化模型等。\n<p>马博士表示非常愿意将自己的知识、经验与学生分享，指导研究生完成相应课题。未来马博士和其真云计算公司还将针对性的开发云计算安全或云计算在下一代广播电视网络（NGB）中的应用作为教学案例，与我院开展关于云计算安全、云计算应用优化和监控、云计算资源分配和管理的相关课题合作。',1301155200000,1422865553010,0),(9,'董事长马庆鸣先生入围2011年江苏省\"双创\"实地考察','9月23日下午，省\"双创\"人才实地评审考察组对\"江苏真云计算科技有限公司\"进行实地评审考察。市委副书记高云、副市长崔学锋及\"科技镇长团\"团长奚晨参加了本次考察活动。省\"双创\"人才实地评审考察组在实地评审中听取了马庆鸣董事长的企业情况汇报，并查看了相关申报材料，并在我公司企业实地了解了企业创新项目的情况。','/520/2046/4799/0c886aed-193a-4fba-be0c-95a876b4e858.jpg','   ',1316880000000,1422865709135,0),(10,'董事长马庆鸣博士在\"2011高工物联网大会\"发表主题演讲',' 2011年10月31日，在杭州华美达酒店举行的“2011高工物联网大会”，江苏真云计算科技有限公司董事长马庆鸣博士作为特邀演讲嘉宾，发表《云计算是物联网信息化推手》的演讲。','/988/3451/8284/cc8ed9d1-0936-4d34-a1ec-306a58de3728.jpg','在演讲中，马博士就物联网与云计算、移动云计算、移动云行业应用、行业应用基本要素、开放式的云计算平台等方面，作出了观点阐述，获得现场与会人员的一致好评。2011高工物联网大会是由浙江高工产业研究院和高工物联网共同打造的一个精品会议，旨在为全国各地，特别是长三角、珠三角地区的物联网企业搭建一个相关产品交易和服务平台，促进物联网企业创新和稳健发展,转变发展方式，加强企业与信息产业、创意产业和现代服务业的融合，促进整个物联网产业健康、平稳发展。 此次会议的顺利举办和与会专家、业者、投资界人士等共同讨论目前中国物联网产业的专利格局及应变之法、云计算将如何推进物联网应用的信息化提供了更有力的支持。',1320681600000,1422865839034,0),(11,'董事长马庆鸣先生获省\"双创\"软件服务业人才公示','我公司董事长马庆鸣先生申报的\"江苏省创新创业人才\"，评选工作经过评审考察组的评审、现场考查等环节后，近日已进入公示程序。','','  ',1319817600000,1422865946500,1),(12,'董事长马庆鸣先生获省\"双创\"软件服务业人才公示','我公司董事长马庆鸣先生申报的\"江苏省创新创业人才\"，评选工作经过评审考察组的评审、现场考查等环节后，近日已进入公示程序。','/8990/5919/4059/40418094-5980-469a-ac0c-4afd6e3724ce.jpg','  ',1319817600000,1422866012733,0),(13,'南京日报记者来司采访马庆鸣博士','真云公司于2011年初入驻南京鼓楼区科技园，在公司创业的过程中受到了鼓楼区政府以及相关媒体的大力支持与帮助，公司董事长兼总经理马庆鸣先生在2011年荣获江苏省“双创人才”和“紫金人才”。','/5726/8205/4696/977ad3a9-aae5-4dfc-9d71-430328cc6e5f.jpg','近日，南京日报记者来到真云公司，就云计算方面对马庆鸣博士进行了采访，采访主题为“站在云的最前端”。在采访中，马总对真云公司创立的背景、现今云计算广泛的应用前景、公司现有云计算产品进行了介绍，以及公司今年的发展目标的介绍，对相关政府部门对真云公司的关怀与支持表示了最诚挚的感谢，并提出了一些建议。',1332259200000,1422866117082,0),(14,'班级云用户量突破8万余人','“班级云”自2012年年底推出以来，现用户已突破8万余人，班级云在东南大学、南京大学、常州大学、扬州大学、中国矿业大学等各大高校进行推广宣传，受到广大高校用户的热捧。','/2568/4819/4931/0add52ae-40b3-428a-a366-835054567bd5.jpg','  ',1363363200000,1422866195663,0),(15,'\"乐洽Loocha\"移动云计算服务系统正式上线运行','日前，公司自主开发的\"乐洽Loocha\"移动云计算服务系统于2011-10-8正式上线试运行，该系统公司拥有完全的自主知识产权。','/9077/2583/2731/9f8be571-83f8-4cfa-9035-fe565ad25a49.jpg','  ',1318089600000,1422866255813,0),(16,'\"中广传播集团睛彩排行榜项目\"正式交付使用','\"中广传播集团睛彩排行榜项目\"是我公司为中国传播集团开发的，其利用CMMB频道推送的一项增值服务项目，于2011年10月9日正式交付使用，该应用让CMMB手机用户轻松方便地找到自己所感兴趣的音乐、影视、游戏、阅读、体育、数码产品、服饰、动漫、创意生活、美食、幽默等内容，令人耳目一新的用户界面设计获得好评如潮。','/6565/5495/3037/45ed9e35-21dd-4986-b5a1-419e7de1ea9d.jpg','  ',1318262400000,1422866356438,0),(17,'班级云1.4.0版上线','2013年6月9日，班级云V1.4.0版上线。\n新增了在线微电影上线、实名认证、寻找身边的TA，，并在淘贴、礼物商城、加好友时可发送语音申请、我的空间可上传语音介绍等多个地方做了一系列优化。','/1288/1138/2962/6eb6faec-edb2-4be5-9788-8fb6005e3b23.png','<p>1.在线微电影上线：可切换三种流量模式观看在线影片，每人可创建一个频道</p>\n<p>2.寻找身边的TA：离我最近、最新上传头像；寻找好友：通讯录好友，同校好友、同系好友，有共同好友。</p>\n<p>3.淘贴界面改版：分类更加系统及精准，界面理加清新、整洁。</p>\n<p>4.语音自述：用户可以在自己的空间里上传语音留言，更好的展现自己</p>',1374249600000,1422866475850,0),(18,'班级云1.4.2版本上线','2013年8月12日，班级云V1.4.2版本上线。\n新增文字帖、抢学妹 找学长、青奥栏目、新人宝典，并对我的空间布局、帖子详情布局等多个地方做了一系列优化。','/2121/8242/4645/1aeab0a7-e505-4990-90e7-d758bd804d4e.jpg','<p>1.文字帖：各种精美信纸Show出\"文字帖</p>\n<p>2. 抢学妹、找学长：与学妹、学长一起完成任务，可得1000积分</p>\n<p>3.青奥栏目：让我们走近青奥，与青奥同行，可进行志愿者报名，并将对青奥的祝福展现在这里</p>\n<p>4.新人宝典：教大家如何玩转班级云</p>',1376582400000,1422866583578,0),(19,'我司入围省“创新团队”，专家来司实地考察','我司以马庆鸣博士为领军人的核心创业团队入围2013年度省现代服务业“创新团队”，2013年8月14日，一行专家至我司进行实地考察。','/3582/2024/1421/2a03ced1-bb6f-4579-b8d7-b5644baa86ad.jpg','   ',1376668800000,1422866775527,0),(20,'班级云1.5.0版本上线','2013年12月12日，班级云V1.5.0版本上线。\n首页增加了“精选、最新、话题、圈子”四个栏目，并对趣味测试帖、私聊、新人宝典等功能进行了一系列优化。','/2065/6796/9299/f08e325e-e2a8-453d-9eae-25219b6d62d3.jpg','<p>1. 首页增加了“精选、最新、话题、圈子”四个栏目\n<p>2. 新人宝典：教大家如何玩转掌上大学（班级云）',1387555200000,1422867064815,0),(21,'班级云1.5.6版本上线','2014年3月19日，班级云V1.5.6版本上线。\n<br/>上线了大型活动，全国范围的“音”浪即将来袭。','/1525/8611/1024/1a9f5993-a336-433b-87ee-13aca0d75bb5.jpg','你可以参赛唱歌、听歌投票、参与抽奖~\n<br/>\n兴趣爱好相同的小伙伴们，可以一起发言、发布活动、群聊~快来创建你的兴趣小组，快来加入你喜欢的官方社团吧~',1395244800000,1422867165700,0),(22,'班级云1.5.7版本上线','2014年3月29日，班级云V1.5.7版本上线。\n这次版本主要更新飞YOUNG好声音歌手大赛的相关内容，让您报名更方便，参赛更容易哦~','/9216/3925/9686/42b13a6c-c4dd-41c9-8842-d26eaf0be94b.jpg',' ',1396368000000,1422867295082,0),(23,'班级云1.5.8版本上线','1、 全新的图片选择、编辑、发布体验，发布多图更方便哦~','/3907/1916/807/1569068a-788c-4d35-9570-4fde450222db.jpg','2、 增加全国校花校草大赛活动，增加全国校园学霸大赛活动，新活动新面孔~\n<br/>\n3:、面向高中生用户注册，增加高中学校选择，欢迎高中的小伙伴加入哦~',1397750400000,1422867385560,0),(24,'班级云1.6.1版本上线','1.升级十佳歌手大赛活动，支持参赛空间上传视频','/5554/2238/7803/9a9f52a0-921e-4bcb-b958-a58659bf310c.jpg','2.优化奖品碎片中心',1398700800000,1422867487897,0),(25,'班级云1.7.0版本上线','新版本1.7.0有较大的更新，用户体验更优，UI设计更好~<br/>\n更新的内容有：','/9497/6987/6655/7abb1ed7-577a-42b6-ad01-04f7f5057c39.jpg','1、小组功能全面升级，支持地理位置搜索 <br/>\n2、优化好友中心<br/>\n3、修改歌手大赛人气歌手排名方式<br/>\n4、升级支持HTML帖子对外转发<br/>',1401811200000,1422867574273,0),(26,'逼格校园交友新利器“掌上大学”2.0版本呱呱坠地！',' “掌大在手，交友不愁！”全新升级版的移动互联网产品“掌上大学”2.0版本在粉丝的欢声笑语中正式面世。从现在起，在校大学生只需轻点手机屏幕，足不出宿舍就能轻松结交同龄小伙伴。2014年11月23日下午，江苏真云公司在南京天翼广场I²A俱乐部召开“掌上大学”2.0版本发布会暨庆祝Party，江苏省、市政府相关部门领导、江苏省电信领导、掌上大学粉丝团、互联网创业者、产品经理、媒体记者等100多人前来参加。真云公司团队专家与参会者分享了“掌上大学”倡导的校园社交理念与社交方式。','/1492/8006/4383/6e4b8fce-80a8-40cf-a942-ea5672aa22d9.jpg','“掌大在手，引领潮流！”掌上大学新版本展现了移动互联网社交新理念，公司团队秉信“人生的很多成功常常来自于不断结识的陌生人，而非熟人圈子”这一理念，利用LBS功能在移动终端的广泛应用专注于校园内的陌生人社交。大学生正直青春年华活力四射，感情世界空白，荷尔蒙偏高，加之课余时间十分充裕，所以交友兴趣和热情异常高涨，但是又囿于个性较宅，环境单一和现实搭讪的尴尬。掌上大学的理念和设计无疑是满足在校大学生的社交需求的。同时，掌上大学顺应移动互联网发展趋势，置入了声音、文字、图像、视频等功能，实现了从单一媒体向多媒体的演变，满足了用户在同一时间内所需要的多种心理体验。<br/>\n“掌大在手，应有尽有！”在信息爆棚和手机普及的时代，移动互联网社交产品趋向于通信、娱乐、信息等全方位需求同步满足。掌上大学正引领移动校园社交2.0时代，将校园移动社交多元化、游戏化和趣味化，把校园社交过程分解为“寻、震、搭、抛、接、抢、PK、密”等环节。<br/>\n“掌大在手，酷炫无穷！”此次，掌上大学2.0版本还新增了“震友”、“照片墙”、“抢学妹”等功能，特别让人眼睛一亮的是“震友”功能。该功能可将用户特别关注的同学、校园明星乃至暗恋的对象设置为“震动关注”，一旦对方上线或者在心跳距离（1000米）之内，便会以震动的方式提醒用户，让用户能够把握更多与所关注的人相遇、相识的机会。此外，“照片墙”可满足大学生用户渴望被关注、被欣赏、被追捧的心理诉求，同时也满足用户倾向于依照感官上的个人喜好选择互动对象的需要。<br/>\n     活动现场，掌上大学团队还指导与会者进行现场操作体验，并利用掌大平台进行幸运大抽奖，现场互动气氛十分热烈。两对通过掌上大学牵手的大学生情侣分享了他们通过“掌上大学”相识、相知、相爱的过程与使用感受，掌上大学还特别为他们颁发了专属“结婚证”，引发全场爆笑和祝福。<br/>\n    产品负责人马庆鸣博士表示，一款产品只有通过完善的产品设计，深刻挖掘用户需求，打中用户的痛点，才会被人牢记。在移动互联网社交风靡全球的今天，市场上还没有一款专属于大学生自己的泛校园社交产品。真云公司坚持用一颗“匠心”，为当代大学生量身打造一款专属的云社交平台，设计最贴近大学生用户内心需求的功能。马博士还表示掌上大学2.0版本只是一个开始，用户完全可以期待更时尚、更新潮、更轻便的校园社交应用新版本的陆续问世。<br/>\n    掌上大学团队对产品的未来充满百倍信心。自2013年9月正式上线以来，掌上大学已有注册用户200多万，每日活跃用户10余万，目前这两个数字还在持续增长中。在不久的将来，掌上大学还将参与江苏省互联网创新联盟组织的校园大篷车创意征集活动，同时与联盟的随行音乐品牌“I²·橘子星球”一同举办相关的校园音乐沙龙，让粉丝们和同学们体验到更多的快乐！<br/>\n    今后，掌上大学将进一步加强与产业各方的紧密协同，也欢迎各种合作的开展，实现共赢!\n',1417795200000,1422867780356,1),(27,'逼格校园交友新利器“掌上大学”2.0版本呱呱坠地！','“掌大在手，交友不愁！”全新升级版的移动互联网产品“掌上大学”2.0版本在粉丝的欢声笑语中正式面世。从现在起，在校大学生只需轻点手机屏幕，足不出宿舍就能轻松结交同龄小伙伴。2014年11月23日下午，江苏真云公司在南京天翼广场I²A俱乐部召开“掌上大学”2.0版本发布会暨庆祝Party，江苏省、市政府相关部门领导、江苏省电信领导、掌上大学粉丝团、互联网创业者、产品经理、媒体记者等100多人前来参加。真云公司团队专家与参会者分享了“掌上大学”倡导的校园社交理念与社交方式。','/3283/1322/9581/58aa1273-e900-4c31-8715-98d05910bd88.jpg','<p>“掌大在手，引领潮流！”掌上大学新版本展现了移动互联网社交新理念，公司团队秉信“人生的很多成功常常来自于不断结识的陌生人，而非熟人圈子”这一理念，利用LBS功能在移动终端的广泛应用专注于校园内的陌生人社交。大学生正直青春年华活力四射，感情世界空白，荷尔蒙偏高，加之课余时间十分充裕，所以交友兴趣和热情异常高涨，但是又囿于个性较宅，环境单一和现实搭讪的尴尬。掌上大学的理念和设计无疑是满足在校大学生的社交需求的。同时，掌上大学顺应移动互联网发展趋势，置入了声音、文字、图像、视频等功能，实现了从单一媒体向多媒体的演变，满足了用户在同一时间内所需要的多种心理体验。</p>\n<p>“掌大在手，应有尽有！”在信息爆棚和手机普及的时代，移动互联网社交产品趋向于通信、娱乐、信息等全方位需求同步满足。掌上大学正引领移动校园社交2.0时代，将校园移动社交多元化、游戏化和趣味化，把校园社交过程分解为“寻、震、搭、抛、接、抢、PK、密”等环节。</p>\n<p>“掌大在手，酷炫无穷！”此次，掌上大学2.0版本还新增了“震友”、“照片墙”、“抢学妹”等功能，特别让人眼睛一亮的是“震友”功能。该功能可将用户特别关注的同学、校园明星乃至暗恋的对象设置为“震动关注”，一旦对方上线或者在心跳距离（1000米）之内，便会以震动的方式提醒用户，让用户能够把握更多与所关注的人相遇、相识的机会。此外，“照片墙”可满足大学生用户渴望被关注、被欣赏、被追捧的心理诉求，同时也满足用户倾向于依照感官上的个人喜好选择互动对象的需要。</p>\n<p>活动现场，掌上大学团队还指导与会者进行现场操作体验，并利用掌大平台进行幸运大抽奖，现场互动气氛十分热烈。两对通过掌上大学牵手的大学生情侣分享了他们通过“掌上大学”相识、相知、相爱的过程与使用感受，掌上大学还特别为他们颁发了专属“结婚证”，引发全场爆笑和祝福。</p>\n<p> 产品负责人马庆鸣博士表示，一款产品只有通过完善的产品设计，深刻挖掘用户需求，打中用户的痛点，才会被人牢记。在移动互联网社交风靡全球的今天，市场上还没有一款专属于大学生自己的泛校园社交产品。真云公司坚持用一颗“匠心”，为当代大学生量身打造一款专属的云社交平台，设计最贴近大学生用户内心需求的功能。马博士还表示掌上大学2.0版本只是一个开始，用户完全可以期待更时尚、更新潮、更轻便的校园社交应用新版本的陆续问世。</p>\n<p> 掌上大学团队对产品的未来充满百倍信心。自2013年9月正式上线以来，掌上大学已有注册用户200多万，每日活跃用户10余万，目前这两个数字还在持续增长中。在不久的将来，掌上大学还将参与江苏省互联网创新联盟组织的校园大篷车创意征集活动，同时与联盟的随行音乐品牌“I²·橘子星球”一同举办相关的校园音乐沙龙，让粉丝们和同学们体验到更多的快乐！</p>\n<p> 今后，掌上大学将进一步加强与产业各方的紧密协同，也欢迎各种合作的开展，实现共赢!</p>',1417881600000,1422867908604,0),(28,'掌上大学2.0版全新上线！','“掌大在手，交友不愁！”全新升级版的移动互联网产品“掌上大学”2.0版本在粉丝的欢声笑语中正式面世。','/4039/4597/5770/13c47cf0-05f3-4079-9282-3c5aa2395844.jpg','<p> “掌大在手，引领潮流！”掌上大学新版本展现了移动互联网社交新理念，公司团队秉信“人生的很多成功常常来自于不断结识的陌生人，而非熟人圈子”这一理念，利用LBS功能在移动终端的广泛应用专注于校园内的陌生人社交。大学生正直青春年华活力四射，感情世界空白，荷尔蒙偏高，加之课余时间十分充裕，所以交友兴趣和热情异常高涨，但是又囿于个性较宅，环境单一和现实搭讪的尴尬。掌上大学的理念和设计无疑是满足在校大学生的社交需求的。同时，掌上大学顺应移动互联网发展趋势，置入了声音、文字、图像、视频等功能，实现了从单一媒体向多媒体的演变，满足了用户在同一时间内所需要的多种心理体验。</p>',1417881600000,1422867994676,0);
/*!40000 ALTER TABLE `loocha_news` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2015-02-09 14:53:27