import type { NextApiRequest, NextApiResponse } from 'next';
import puppeteer from 'puppeteer';

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse
) {
	if (req.method !== 'GET') {
		return res.status(405).json({ message: 'Method not allowed' });
	}

	let browser;
	try {
		const isVercel = !!process.env.VERCEL_ENV;
		let puppeteer: any,
			launchOptions: any = {
				headless: true,
			};

		if (isVercel) {
			const chromium = (await import('@sparticuz/chromium')).default;
			puppeteer = await import('puppeteer-core');

			launchOptions = {
				...launchOptions,
				args: chromium.args,
				executablePath: await chromium.executablePath(),
			};
		} else {
			puppeteer = await import('puppeteer');
		}

		browser = await puppeteer.launch(launchOptions);
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
