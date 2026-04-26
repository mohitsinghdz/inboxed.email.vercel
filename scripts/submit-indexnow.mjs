/**
 * IndexNow URL Submission Script
 *
 * Submits all sitemap URLs to IndexNow API (covers Bing, Yandex, and other
 * participating search engines for near-instant indexing).
 *
 * Usage: node scripts/submit-indexnow.mjs
 *
 * Key file: public/ab46780b4284b1167bfea686e4162953.txt
 * Key file must be publicly accessible at: https://inboxed.email/ab46780b4284b1167bfea686e4162953.txt
 */

const INDEXNOW_KEY = 'ab46780b4284b1167bfea686e4162953';
const SITE_HOST = 'inboxed.email';
const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow';

// All URLs to submit — keep in sync with sitemap-0.xml
const URLS = [
  'https://inboxed.email/',
  'https://inboxed.email/best-private-ai-email/',
  'https://inboxed.email/blog/',
  'https://inboxed.email/privacy/',
  'https://inboxed.email/terms/',

  // Blog posts
  'https://inboxed.email/blog/local-ai-email/',
  'https://inboxed.email/blog/inbox-zero-ai/',
  'https://inboxed.email/blog/email-privacy-guide/',
  'https://inboxed.email/blog/best-ai-email-clients/',
  'https://inboxed.email/blog/best-mac-email-clients/',
  'https://inboxed.email/blog/superhuman-alternatives/',
  'https://inboxed.email/blog/developer-mac-email-workflow/',
  'https://inboxed.email/blog/zero-data-exit-framework/',
  'https://inboxed.email/blog/block-email-trackers-mac/',
  'https://inboxed.email/blog/apple-mail-slow-vs-rust-native/',
  'https://inboxed.email/blog/local-llm-email-drafting-tutorial/',
  'https://inboxed.email/blog/gmail-privacy-truth/',
  'https://inboxed.email/blog/on-device-ai-email/',
  'https://inboxed.email/blog/email-privacy-audit/',
  'https://inboxed.email/blog/offline-email-clients/',

  // Comparisons
  'https://inboxed.email/compare/superhuman/',
  'https://inboxed.email/compare/zero/',
  'https://inboxed.email/compare/thunderbird/',
  'https://inboxed.email/compare/apple-mail/',
  'https://inboxed.email/compare/gmail/',
  'https://inboxed.email/compare/outlook/',
  'https://inboxed.email/compare/spark/',
  'https://inboxed.email/compare/hey/',
  'https://inboxed.email/compare/mailspring/',
  'https://inboxed.email/compare/proton-mail/',
  'https://inboxed.email/compare/mimestream/',
  'https://inboxed.email/compare/notion-mail/',
  'https://inboxed.email/compare/canary-mail/',
  'https://inboxed.email/compare/edison-mail/',

  // Alternatives
  'https://inboxed.email/alternatives/superhuman-alternatives/',
  'https://inboxed.email/alternatives/gmail-alternatives/',
  'https://inboxed.email/alternatives/outlook-alternatives/',
  'https://inboxed.email/alternatives/apple-mail-alternatives/',
  'https://inboxed.email/alternatives/hey-alternatives/',
  'https://inboxed.email/alternatives/spark-alternatives/',
  'https://inboxed.email/alternatives/thunderbird-alternatives/',
  'https://inboxed.email/alternatives/proton-mail-alternatives/',
  'https://inboxed.email/alternatives/canary-mail-alternatives/',
  'https://inboxed.email/alternatives/edison-mail-alternatives/',
  'https://inboxed.email/alternatives/mimestream-alternatives/',
  'https://inboxed.email/alternatives/notion-mail-alternatives/',

  // Best email for
  'https://inboxed.email/best-email-for/developers/',
  'https://inboxed.email/best-email-for/lawyers/',
  'https://inboxed.email/best-email-for/journalists/',
  'https://inboxed.email/best-email-for/executives/',
  'https://inboxed.email/best-email-for/freelancers/',
  'https://inboxed.email/best-email-for/startup-founders/',
  'https://inboxed.email/best-email-for/privacy-focused/',
  'https://inboxed.email/best-email-for/remote-workers/',
  'https://inboxed.email/best-email-for/students/',
  'https://inboxed.email/best-email-for/consultants/',
  'https://inboxed.email/best-email-for/healthcare/',
  'https://inboxed.email/best-email-for/financial-advisors/',
  'https://inboxed.email/best-email-for/researchers/',
];

async function submitIndexNow() {
  console.log(`Submitting ${URLS.length} URLs to IndexNow...`);
  console.log(`Key: ${INDEXNOW_KEY}\n`);

  const body = {
    host: SITE_HOST,
    key: INDEXNOW_KEY,
    keyLocation: `https://${SITE_HOST}/${INDEXNOW_KEY}.txt`,
    urlList: URLS,
  };

  try {
    const res = await fetch(INDEXNOW_ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(body),
    });

    if (res.status === 200) {
      console.log(`✓ Success — ${URLS.length} URLs submitted to IndexNow`);
      console.log('  Bing, Yandex, and other IndexNow participants will crawl these shortly.');
    } else if (res.status === 202) {
      console.log(`✓ Accepted (202) — URLs queued for processing`);
    } else if (res.status === 400) {
      console.error('✗ Bad request — check URL format (must be absolute with https://)');
    } else if (res.status === 403) {
      console.error('✗ Forbidden — key file not accessible at keyLocation URL');
      console.error(`  Verify: https://${SITE_HOST}/${INDEXNOW_KEY}.txt`);
    } else if (res.status === 422) {
      console.error('✗ Unprocessable — URLs don\'t match the declared host');
    } else if (res.status === 429) {
      console.error('✗ Rate limited — too many requests, try again later');
    } else {
      const text = await res.text();
      console.error(`✗ Unexpected status ${res.status}: ${text}`);
    }
  } catch (err) {
    console.error('✗ Network error:', err.message);
  }
}

submitIndexNow();
