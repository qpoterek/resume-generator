export default {
	position: "Position",
	experience: "Total experience",
	skills: {
		title: "Skills",
		items: [
			"Skill 1.",
			"Skill 2.",
			"Skill 3.",
		],
	},
	tools: {
		title: "Tools and methods",
		items: [
			{
				title: "Group 1",
				items: ["Tool 1", "Tool 2", "Tool 3"],
			},
			{
				title: "Group 2",
				items: ["Tool 1", "Tool 2", "Tool 3"],
			},
			{
				title: "Group 3",
				items: ["Tool 1", "Tool 2", "Tool 3"],
			},
		],
	},
	jobs: {
		title: "Work experience",
		items: [
			{
				from: 2022,
				position: "Position 1",
				location: "Location 1",
				tasks: [
					"I don't have a `to` argument.",
				],
			},
			{
				from: 2019,
				to: 2021,
				position: "Position 2",
				location: "Location 2",
				header: "This is a `header`.",
				tasks: [
					"I have a `header`.",
					"I have `from` and `to` arguments.",
				],
			},
			{
				from: 2019,
				to: 2021,
				position: "Position 3",
				location: "Location 3",
				tasks: [
					"I don't have a `header`.",
					"I have `from` and `to` arguments.",
				],
			},
		],
	},
}