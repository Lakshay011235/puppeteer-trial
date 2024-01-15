const puppeteer = require("puppeteer");
(async () => {
    const browser = await puppeteer.launch({
        // headless: "new",
        headless: false,
        defaultViewport: false,
        userDataDir: "./tmp"
    });
    const page = await browser.newPage();
    // await page.goto("https://example.com");

    await page.goto("https://www.amazon.in/s?bbn=1375425031&rh=n%3A1375425031%2Cp_85%3A10440599031&dc&qid=1705348700&rnid=10440598031&ref=lp_1375425031_nr_p_85_1");


    // await page.screenshot({ path: "Dump/example.png" });
    // await browser.close();
})();
