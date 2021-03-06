/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds: Deluxe and are owned by Pinnacle Entertainment Group.
*/
if(!chargen_gear)
	var chargen_gear = Array();

chargen_gear = chargen_gear.concat( Array(
	/* Hand Weapons */
	{
		name: "Corpse Catcher",
		damage: "-",
		class: "Medieval",
		general: "Hand Weapons",
		type: "Special",
		weight: 4,
		cost: 300,
		min_str: 2,
		notes: Array(),
		book: books_list[2],
		page: "p12",
	},
	{
		name: "Stake",
		damage: "Str+d4",
		class: "Medieval",
		general: "Hand Weapons",
		type: "Blades",
		weight: 2,
		cost: 10,
		book: books_list[2],
		page: "p13",
	},
	{
		name: "Atomic Ghost Pack",
		damage: "special",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "5/10/20",
		weight: 15,
		shots: 24,
		min_str: 2,
		rof: 1,
		cost: 3000,
		notes: Array(
			""
		),
		book: books_list[2],
		page: "p13",
	},
	{
		name: "Flare Pistol",
		damage: "2d6+1",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "3/6/12",
		weight: 15,
		shots: 1,
		min_str: 0,
		rof: 1,
		cost: 3000,
		notes: Array(
			"1 action to reload"
		),
		book: books_list[2],
		page: "p13",
	},
	{
		name: "Holy Water, Spray",
		damage: "special",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "SBT",
		weight: 1,
		shots: 2,
		min_str: 0,
		rof: 1,
		cost: 5,
		notes: Array(
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "Holy Water, Grenade",
		damage: "special",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "5/10/20**",
		weight: 2,
		shots: 1,
		min_str: 0,
		rof: "-",
		cost: 30,
		notes: Array(
			"Small Burst Template; see notes"
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "Holy Water, Pistol",
		damage: "special",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "1/2/3",
		weight: 4,
		shots: 5,
		min_str: 0,
		rof: 1,
		cost: 50,
		notes: Array(
			"Pump to increase range to 3/6/9"
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "Mini-Crossbow",
		damage: "2d4",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "6/12/24",
		weight: 3,
		shots: 1,
		min_str: 0,
		rof: 1,
		ap: 1,
		cost: 200,
		notes: Array(
			"AP 1, 1 action to reload"
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "Repeating Crossbow",
		damage: "2d6",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "6/12/24",
		weight: 12,
		shots: 36,
		min_str: 2,
		rof: 3,
		ap: 2,
		cost: 800,
		notes: Array(
			"AP 2, Autofire"
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "Stake, Thrown",
		damage: "Str+d4",
		class: "Medieval",
		general: "Hand Weapons",
		type: "Blades",
		range: "2/4/8",
		weight: 2,
		shots: 1,
		min_str: 0,
		rof: 0,
		ap: 0,
		cost: 10,
		book: books_list[2],
		page: "p13",
	},
	{
		name: "Winch Crossbow",
		damage: "2d6",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "5/10/20",
		weight: 15,
		shots: 1,
		min_str: 2,
		rof: 1,
		ap: 2,
		cost: 650,
		notes: Array(
			"AP 2; 1 action to reload"
		),
		book: books_list[2],
		page: "p14",
	},
	{
		name: "UV Grenade",
		damage: "Special",
		class: "Ranged Weapons",
		general: "Ranged Weapons",
		type: "",
		range: "5/10/20",
		weight: 2,
		shots: 0,
		min_str: 0,
		rof: 0,
		ap: 0,
		cost: 100,
		notes: Array(
			"Medium Burst Template"
		),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Crossbow, mini-quarrels",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 1/10,
		cost: 1,
		notes: Array(),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Crossbow, repeating",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 6,
		cost: 75,
		book: books_list[2],
		page: "p15",
		notes: Array(
			"holds 36 quarrels"
		)
	},
	{
		name: "Crossbow, winch",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 1,
		cost: 10,
		book: books_list[2],
		page: "p15",
		notes: Array(
		)
	},
	{
		name: "Garlic Bullets, Small",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 3/50 + 0/50,
		cost: 10/50 + 5/50,
		notes: Array("Cause normal damage against vampires"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Garlic Bullets, Medium",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 5/50 + 0/50,
		cost: 25/50 + 5/50,
		notes: Array("Cause normal damage against vampires"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Garlic Bullets, Large",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 8/50 + 0/50,
		cost: 50/50 + 5/50,
		notes: Array("Cause normal damage against vampires"),
		book: books_list[0],
		page: "p56",
	},
	{
		name: "Silver Bullets, Small",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 3/50 + 1/50,
		cost: 10/50 + 10/50,
		notes: Array("Cause normal damage against lycanthropes; –1 AP"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Silver Bullets, Medium",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 5/50 + 1/50,
		cost: 25/50 + 10/50,
		notes: Array("Cause normal damage against lycanthropes; –1 AP"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Silver Bullets, Large",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 8/50 + 1/50,
		cost: 50/50 + 10/50,
		notes: Array("Cause normal damage against lycanthropes; –1 AP"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Silver Nitrate Bullets, Small",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 3/50 + 1/50,
		cost: 10/50 + 20/50,
		notes: Array("+4 damage against werewolves"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Silver Nitrate Bullets, Medium",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 5/50 + 1/50,
		cost: 25/50 + 20/50,
		notes: Array("+4 damage against werewolves"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Silver Nitrate Bullets, Large",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 8/50 + 1/50,
		cost: 50/50 + 20/50,
		notes: Array("+4 damage against werewolves"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "UV Bullets, Small",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 3/50 + 1/50,
		cost: 10/50 + 100/50,
		notes: Array("+4 damage against vampires; negates halving of damage"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "UV Bullets, Medium",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 5/50 + 1/50,
		cost: 25/50 + 100/50,
		notes: Array("+4 damage against vampires; negates halving of damage"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "UV Bullets, Large",
		class: "",
		general: "Ammunition",
		type: "",
		weight: 8/50 + 1/50,
		cost: 50/50 + 100/50,
		notes: Array("+4 damage against vampires; negates halving of damage"),
		book: books_list[2],
		page: "p15",
	},
	{
		name: "Ghost Trap",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 5,
		cost: 200,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Holy Symbol",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 1/5,
		cost: 20,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Kirlian Camera, Still",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 3,
		cost: 260,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Film, 24 Exposure",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 0,
		cost: 10,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Kirlian Camera, Video",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 6,
		cost: 600,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Video Tape, 4 hours",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 0,
		cost: 20,
		notes: Array(),
		book: books_list[2],
		page: "p17",
	},
	{
		name: "Kirlian Goggles",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 2,
		cost: 1400,
		notes: Array(),
		book: books_list[2],
		page: "p18",
	},
	{
		name: "Mirror",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 2,
		cost: 25,
		notes: Array(),
		book: books_list[2],
		page: "p18",
	},
	{
		name: "Motion Tracker",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 4,
		cost: 25,
		notes: Array(),
		book: books_list[2],
		page: "p18",
	},
	{
		name: "Neck Protector, Leather",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 30,
		notes: Array(),
		book: books_list[2],
		page: "p19",
	},
	{
		name: "Neck Protector, Metal",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 4,
		cost: 65,
		notes: Array(),
		book: books_list[2],
		page: "p19",
	},
	{
		name: "UV Flashlight",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 4,
		cost: 65,
		notes: Array(),
		book: books_list[2],
		page: "p19",
	},
	{
		name: "Battery",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 10,
		notes: Array(),
		book: books_list[2],
		page: "p19",
	},
	{
		name: "Warding Material",
		class: "Mundane Items",
		general: "Mundane Items",
		type: "",
		container: 0,
		weight: 1,
		cost: 5,
		notes: Array(),
		book: books_list[2],
		page: "p19",
	}


));
