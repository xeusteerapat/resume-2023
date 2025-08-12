import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	try {
		const browser = await puppeteer.launch({
			headless: true,
		});

		const page = await browser.newPage();

		const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
		await page.goto(`${baseUrl}/print`, {
			waitUntil: 'networkidle0',
		});

		const pdf = await page.pdf({
			format: 'A4',
			margin: {
				top: '0.25in',
				right: '0.25in',
				bottom: '0.25in',
				left: '0.25in',
			},
		});

		await browser.close();

		res.setHeader('Content-Type', 'application/pdf');
		res.setHeader(
			'Content-Disposition',
			'inline; filename="teerapat_prommarak_resume.pdf"'
		);
		res.end(pdf);
	} catch (error) {
		console.error('Error generating PDF:', error);
		res.status(500).json({ error: 'Failed to generate PDF' });
	}
}
