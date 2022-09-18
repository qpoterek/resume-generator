export default {
	language: "en",
	information: {
		name: "First Last",
		birthDay: "1994-08-14",
	},
	contact: {
		city: "City, Country",
		phone: "01 23 45 67 89",
		mail: "first@last.com",
		website: "https://www.website.com",
		linkedin: "linkedin.com/in/first-last/",
	},
	languages: {
		title: "Languages",
		items: [
			{
				icon: "flag-fr",
				title: "French",
				level: "General level",
			},
			{
				icon: "flag-en",
				title: "English",
				level_written: "Written",
				level_spoken: "Oral",
			},
		]
	},
	education: {
		title: "Education",
		diplomas: [
			{
				from: 2021,
				to: 2022,
				title: "Education 1 (`from` and `to` arguments)",
				location: "Location 1",
			},
			{
				from: 2018,
				title: "Education 2 (no `to` argument)",
				location: "Location 2",
				honors: "honors"
			},
		],
	},
}