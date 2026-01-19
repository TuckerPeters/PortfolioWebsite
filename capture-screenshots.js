import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const projects = [
  {
    name: 'genedu',
    url: 'https://genedu.co',
    filename: 'genedu.png'
  },
  {
    name: 'aiclub',
    url: 'https://aiclubwm.com',
    filename: 'aiclub.png'
  },
  {
    name: 'habitsofmind',
    url: 'https://habitsofmindinstitute.org/',
    filename: 'habitsofmind.png'
  },
  {
    name: 'thoughtpartnr',
    url: 'https://thoughtpartnr.com',
    filename: 'thoguhtpartnr.png'
  },
  {
    name: 'wmathletics',
    url: 'https://wmathletics.netlify.app/',
    filename: 'Athletics.png'
  },
  {
    name: 'aicloaker',
    url: 'https://aicloaker.com/',
    filename: 'aicloaker.png'
  }
];

async function captureScreenshots() {
  console.log('Launching browser...');
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  for (const project of projects) {
    try {
      console.log(`\nCapturing screenshot for ${project.name}...`);
      console.log(`URL: ${project.url}`);

      const page = await browser.newPage();

      // Set viewport to a standard desktop size
      await page.setViewport({
        width: 1920,
        height: 1080,
        deviceScaleFactor: 1
      });

      // Navigate to the URL with timeout
      await page.goto(project.url, {
        waitUntil: 'networkidle2',
        timeout: 30000
      });

      // Wait a bit for any animations or lazy-loaded content
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Take screenshot
      const screenshotPath = join(__dirname, 'photos', project.filename);
      await page.screenshot({
        path: screenshotPath,
        fullPage: false,
        type: 'png'
      });

      console.log(`✓ Screenshot saved: ${screenshotPath}`);

      await page.close();
    } catch (error) {
      console.error(`✗ Error capturing ${project.name}:`, error.message);
    }
  }

  await browser.close();
  console.log('\n✓ All screenshots captured!');
}

captureScreenshots().catch(console.error);
