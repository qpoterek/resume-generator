#!/usr/bin/env node

import playwright from "playwright"

const [
	node,
	script,
	file="resume",
	url="http://localhost:3000/",
] = process.argv

const path = `output/${file}.pdf`

async function printToPdf() {
	const browser = await playwright.chromium.launch()
	const context = await browser.newContext()
	const page = await context.newPage()

	await page.goto(url)

	await page.emulateMedia({
		media: "screen",
	})

	await page.pdf({
		path: path,
		pageRanges: "1",
		format: "A4",
		printBackground: true,
		margin: {
			top: 0,
			bottom: 0,
			left: 0,
			right: 0,
		},
	})

	await browser.close()
}

printToPdf()

console.log(`Generated output: ${path}.`)