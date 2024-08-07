import puppeteer from 'puppeteer';
require("dotenv").config();
// const path = require('path');

const transfers = async (pag) => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox', "--single-process", "--no-zygote"],
        executablePath: 
            process.env.NODE_ENV === 'production' ? process.env.PUPPETEER_EXECUTABLE_PATH : puppeteer.executablePath(),
    });
    const page = await browser.newPage();
    await page.goto(`https://www.fotmob.com/api/transfers?&page=${pag}`);
    const data = await page.evaluate(() => {
        const pre = JSON.parse(document.querySelector('pre').innerText);
        return pre
    });
    await browser.close();
    return data
}


const topTransfer = async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://www.fotmob.com/api/transfers?showTop=true`);
    const data = await page.evaluate(() => {
        const pre = JSON.parse(document.querySelector('pre').innerText);
        return pre
    });
    await browser.close();
    return data
}



export default transfers;
export { topTransfer };

