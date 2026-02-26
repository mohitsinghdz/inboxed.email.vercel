// Generated use case FAQ content for seo-pages.ts merge
// Research-backed FAQ content for all 13 "best email for [profession]" use case pages.
// Each answer: 80-120 words. Covers compliance, workflow, comparisons, and onboarding.

export const useCaseContent: Record<string, {
  faq: { q: string; a: string }[];
}> = {
  "developers": {
    faq: [
      {
        q: "Does Inboxed support keyboard shortcuts for fast email triage?",
        a: "Yes. Inboxed is built for keyboard-first workflows — you can archive, snooze, label, and reply without touching the mouse. For developers drowning in GitHub notifications, CI alerts, and code review pings, this matters more than it sounds. Batch-processing 50 emails in two minutes before a deep-work block is a real pattern Inboxed is designed for. Standard macOS shortcuts work as expected, and the app does not require you to learn a bespoke system. It just gets out of the way so you can get back to code.",
      },
      {
        q: "How does Inboxed's local AI help with technical email threads?",
        a: "Inboxed runs AI models locally via Apple MLX on your Mac's Metal GPU — no data is sent to OpenAI, Anthropic, or any third-party server. For developers, that means you can summarize long GitHub issue discussions, draft replies to vendor support threads, or extract action items from a sprawling architecture debate without any of that content leaving your machine. The AI understands context across a thread, not just the last message. It is especially useful for inherited codebases where long email trails document decisions that never made it into the repo.",
      },
      {
        q: "How does Inboxed compare to just using Gmail in the browser?",
        a: "Gmail in the browser works everywhere but has meaningful trade-offs for developers. It requires a live internet connection, processes your email content through Google's servers for features like Smart Compose, and interrupts focus with browser tab-switching. Inboxed is a native macOS app — faster, offline-capable, and isolated from browser distractions. The local AI doesn't share your email content with Google or any cloud provider. The honest caveat: Inboxed is macOS-only and relatively new, so it lacks years of Gmail's feature depth. But for focused triage on a Mac, it is meaningfully better.",
      },
      {
        q: "What email accounts does Inboxed work with?",
        a: "Inboxed connects to any IMAP-compatible email account — Gmail, Fastmail, iCloud Mail, Proton Mail (via the Proton Bridge app), company-hosted Exchange (if IMAP is enabled), and custom domain email. You can add multiple accounts and manage them from a unified inbox. Setup takes about two minutes: open Inboxed, add your account credentials, and the app syncs your mailbox locally. There is no proprietary email address to create. If your current provider supports IMAP — and nearly all do — Inboxed works with it out of the box.",
      },
    ],
  },

  "lawyers": {
    faq: [
      {
        q: "Does Inboxed help protect attorney-client privilege in email communications?",
        a: "Privilege protection is ultimately a practice management responsibility, but Inboxed removes a significant structural risk: cloud-based AI email assistants that scan message content. Under ABA Model Rule 1.6 and state equivalents, lawyers must take reasonable precautions to prevent unauthorized disclosure of client information. When your email client processes content through third-party AI servers — as many modern email apps do — that creates a potential disclosure chain. Inboxed processes all AI features entirely on-device via Apple MLX. Your client communications never leave your Mac for AI analysis, which is a materially different security posture than cloud-AI tools.",
      },
      {
        q: "How does Inboxed help with the volume of email in litigation or deal work?",
        a: "Active litigation and M&A deals generate email volumes that are hard to manage manually. Inboxed's local AI can summarize long threads, extract deadlines and action items, and draft routine correspondence — all without sending content to a cloud provider. For a solo practitioner or small firm, this provides associate-grade triage capacity without the billing complexity or confidentiality risks of cloud AI tools. The keyboard-first interface also supports fast labeling and archiving, useful when organizing communications by matter. Inboxed does not replace practice management software, but it meaningfully improves how you process the daily inbox.",
      },
      {
        q: "How does Inboxed compare to using Outlook or Microsoft 365 Copilot?",
        a: "Microsoft 365 Copilot is powerful, but it processes email content through Microsoft's cloud to generate AI responses — a trade-off some firms are not comfortable with, particularly for highly sensitive client matters. Inboxed runs all AI locally on your Mac, so nothing is transmitted to a third-party server for processing. The honest comparison: Outlook with Copilot has far more features, deep Exchange integration, and enterprise compliance tooling that Inboxed does not yet offer. Inboxed is the better choice if you prioritize data locality and are on macOS; Outlook is better if you need enterprise infrastructure or Windows support.",
      },
      {
        q: "How do I get started, and do I need to change my email provider?",
        a: "No email provider change is required. Inboxed connects to your existing account — whether that is a firm-hosted Exchange with IMAP enabled, Gmail Workspace, Fastmail, or iCloud Mail. Download the app from inboxed.email, add your account, and it syncs locally. The app is about 10 MB and runs natively on macOS. There is a free tier sufficient for most use, and a one-time $1 Pro upgrade for power users. Solo practitioners and small firms can be up and running in under five minutes without involving IT or changing any existing infrastructure.",
      },
    ],
  },

  "journalists": {
    faq: [
      {
        q: "Does Inboxed protect my communications with confidential sources?",
        a: "Source protection is one of the most serious obligations in journalism, and the threat model has changed significantly. The PRESS Act, passed by the House in 2024, would bar federal law enforcement from obtaining journalists' email records from providers — but it targets third-party provider subpoenas, not local device data. Inboxed helps by keeping your email data local: there is no cloud sync of message content, and the AI never sends email text to external servers. This reduces your metadata footprint with third-party providers. It does not replace end-to-end encrypted tools like Signal for the most sensitive source contact, but it meaningfully tightens the perimeter for day-to-day communication.",
      },
      {
        q: "How does local AI help with investigative reporting workflows?",
        a: "Investigative reporters often work through large volumes of documents, press releases, and email threads before a story comes together. Inboxed's local AI can summarize lengthy email chains, extract key facts from dense bureaucratic correspondence, and help draft follow-up questions — all without sending the content to a cloud service that could be subpoenaed or breached. Forty-eight states have shield laws protecting journalist-source relationships, but those protections apply to content, not necessarily metadata held by cloud providers. Processing email locally removes one more potential disclosure vector from the chain.",
      },
      {
        q: "How does Inboxed compare to using ProtonMail or Tutanota?",
        a: "ProtonMail and Tutanota are end-to-end encrypted email providers — a different layer of protection than what Inboxed provides. Those services protect content in transit and at rest on their servers. Inboxed is an email client, not a provider, and works with your existing accounts including ProtonMail via Proton Bridge. The two approaches are complementary: use a privacy-focused provider for the account, and use Inboxed as the local client that processes AI features on-device rather than in the cloud. Inboxed is macOS-only, so Windows or Linux users will need to look elsewhere.",
      },
      {
        q: "What accounts work with Inboxed, and is there a free version?",
        a: "Inboxed works with any IMAP account — your newsroom-provided email, a personal Gmail, Fastmail, or ProtonMail (via Proton Bridge). You can manage multiple accounts in one place, which is useful if you keep professional and personal email separate. The app is free to download and use for most features. A one-time $1 Pro upgrade unlocks additional capability for power users. At roughly 10 MB, it installs quickly and does not require creating a new email address. Setup takes a few minutes on any modern Mac.",
      },
    ],
  },

  "executives": {
    faq: [
      {
        q: "What are the email security risks specific to C-suite executives in 2025?",
        a: "Executives are disproportionately targeted through business email compromise (BEC), spear-phishing, and what researchers call 'CEO fraud.' Beyond external threats, there are internal governance risks: board communications sent to a director's employer-provided email address can expose privilege, and M&A discussions handled through cloud-AI email tools create a paper trail through third-party servers. The SEC's 2023 cybersecurity disclosure rules require public companies to report material cyber incidents, raising the stakes for executive-level breaches. Inboxed keeps AI-assisted email analysis on-device, so sensitive board correspondence and deal communications are not processed through external cloud infrastructure.",
      },
      {
        q: "How does Inboxed help executives manage high-priority communications without delegating access?",
        a: "Many executives resist delegating email access for the most sensitive threads — M&A discussions, board feedback, investor communications, and HR matters involving senior staff. Inboxed's local AI allows you to triage and summarize those threads yourself without the overhead of manual reading, and without routing content through a cloud AI service. The keyboard-first interface supports fast processing of a high-volume inbox. You can surface what requires your personal attention in minutes rather than hours. Inboxed does not offer shared mailbox or assistant-delegation features yet — for that workflow, Outlook or Gmail remain the more mature options.",
      },
      {
        q: "How does Inboxed compare to Superhuman for executive use?",
        a: "Superhuman is the benchmark for high-performance email clients and is popular with executives. It costs $360 per year and processes AI features through cloud servers — your email content is analyzed remotely. Inboxed offers similar speed and keyboard-driven triage but runs all AI locally, so sensitive communications are never transmitted to Superhuman's servers for processing. The honest trade-off: Superhuman has a more polished experience, more integrations, and years of development behind it. Inboxed is newer and more limited in integrations. It is the right choice if local AI and one-time pricing matter more than feature breadth.",
      },
      {
        q: "Is Inboxed suitable for managing multiple email accounts across a company?",
        a: "Inboxed supports multiple IMAP accounts in a unified inbox — useful for executives who manage a corporate account, a board director account, and a personal account separately. Setup is straightforward: add each account with IMAP credentials, and the app syncs all of them locally. At this stage, Inboxed is a single-user native Mac application. It does not offer team-sharing, shared labels, or enterprise MDM management. If your IT team needs centralized control or you work primarily on Windows, Inboxed is not yet the right tool. For a Mac-based executive managing their own inbox, it is a strong option.",
      },
    ],
  },

  "freelancers": {
    faq: [
      {
        q: "How long should freelancers keep client emails for tax and legal purposes?",
        a: "The IRS recommends keeping business records — including email correspondence related to contracts, invoices, and payments — for at least three to four years from the tax filing date, and up to seven years if income was underreported or a claim was filed. Email records that document project scope, change requests, and payment disputes are particularly important: they establish the evidentiary basis for deductions and protect you in contractor disputes. Inboxed stores email locally on your Mac, giving you direct control over archival without depending on a cloud provider's retention policies or account status.",
      },
      {
        q: "How does Inboxed help freelancers manage communications across multiple clients?",
        a: "Freelancers often juggle several clients simultaneously, each with different communication norms, project stages, and urgency levels. Inboxed's local AI can summarize active threads by client, draft status-update replies, and help you triage a mixed inbox without reading every message in full. You can label and organize by client name or project without a complex folder hierarchy. For freelancers who bill by the hour, reducing email processing time directly improves hourly rate efficiency. Inboxed works with whatever email provider you already use — no migration required — and the AI runs on your Mac without sending client information to third-party servers.",
      },
      {
        q: "How does Inboxed compare to using Gmail or Hey for freelancers?",
        a: "Gmail is free and ubiquitous, but it processes email content through Google's servers for features like Smart Compose, and its interface is not optimized for fast triage. Hey offers an opinionated email workflow with strong spam filtering but costs $99 per year and requires using Hey's own domain. Inboxed works with your existing email address, costs nothing for the base tier (or $1 once for Pro), and runs AI locally. The real trade-off: Gmail and Hey have richer ecosystems and work on any device. Inboxed is macOS-only, so freelancers who need cross-device access will want to evaluate that limitation honestly.",
      },
      {
        q: "How do I set up Inboxed to manage multiple client email accounts?",
        a: "Download Inboxed from inboxed.email and add each IMAP account during setup — your primary business email, any client-specific addresses, and a personal account if needed. The app consolidates them into a unified inbox or lets you switch between accounts. Most major providers (Gmail, Fastmail, iCloud, Proton via Bridge) work with a few clicks. The app is about 10 MB and runs entirely on macOS — there is no browser version. Once configured, all emails sync locally so you can work offline. The free tier covers core functionality; Pro adds advanced AI features for a one-time $1 payment.",
      },
    ],
  },

  "startup-founders": {
    faq: [
      {
        q: "What confidentiality risks exist in founder email during fundraising?",
        a: "During fundraising, founders share cap tables, revenue figures, product roadmaps, and hiring plans — information that is highly sensitive before a term sheet is signed. Most VCs will not sign NDAs at the pitch stage, which is standard practice, but that does not mean you should let that information flow through cloud AI systems. When email clients use cloud-based AI to help draft or summarize messages, that content passes through third-party servers. Inboxed processes all AI features locally on your Mac, so pitch deck discussions, investor feedback, and term sheet negotiations are not transmitted to any external AI provider for processing.",
      },
      {
        q: "How does Inboxed help founders manage the email volume of early-stage operations?",
        a: "Early-stage founders handle recruiting, investor updates, customer support, legal correspondence, and board communication simultaneously — often without an EA. Inboxed's local AI can help you draft investor update emails, summarize long candidate threads, and triage your inbox by urgency without routing any of that content to a cloud service. The keyboard-first design lets you process email in focused batches rather than maintaining a perpetually open Gmail tab. Inboxed does not replace a CRM or an investor tracking tool, but it meaningfully reduces the cognitive load of the daily inbox for a founder operating without operational support.",
      },
      {
        q: "How does Inboxed compare to Front or Superhuman for startup teams?",
        a: "Front is a team-inbox tool designed for collaborative email workflows — it has shared inboxes, assignment, and commenting features that are genuinely useful for early customer support or sales teams. Inboxed is a single-user client, so it does not offer those collaboration features. Superhuman targets individual executive and founder use at $30/month; Inboxed covers similar ground for free (or $1 one-time). The key differentiator Inboxed offers is fully local AI: no email content touches cloud servers for AI processing. If you are a solo founder on a Mac who values privacy and cost, Inboxed is the stronger option.",
      },
      {
        q: "What email providers work with Inboxed, and can I keep my current address?",
        a: "Yes. Inboxed connects via IMAP, so your existing email address works without any changes — whether that is a Gmail Workspace account with your company domain, a Fastmail address, or iCloud. You do not need to migrate email providers or create a new address. Add the account in Inboxed's setup screen with your credentials, and it syncs your mailbox locally to your Mac. The app is macOS-only at this stage, so founders who travel with Linux or Windows machines will need a secondary solution for those devices. On Mac, the setup takes under five minutes.",
      },
    ],
  },

  "privacy-focused": {
    faq: [
      {
        q: "What does 'local AI' actually mean from a privacy standpoint?",
        a: "When an email client uses cloud AI — OpenAI, Google Gemini, or a proprietary model running on a vendor's servers — your email content is transmitted to that server, processed there, and the result is returned. This means a third party has access to the content of your messages, even if they claim not to store it. Inboxed uses Apple MLX to run AI models directly on your Mac's GPU. Nothing is transmitted for AI processing — the model runs on your hardware, your data stays local. In 2025, as data sovereignty law tightens globally and local AI infrastructure matures, this distinction has moved from niche concern to mainstream requirement.",
      },
      {
        q: "How does Inboxed handle email sync — does it send data anywhere?",
        a: "Inboxed syncs your email via IMAP, which is the standard protocol used by every major email provider. That sync connection is between your Mac and your email provider (Gmail, Fastmail, iCloud, etc.) — the same connection that exists with any email client. Inboxed itself does not operate relay servers, does not aggregate user data, and does not process your email content on its own infrastructure. The AI runs locally via Apple MLX. The privacy question is really about your email provider — if you use Gmail, Google still holds your mail server-side. For maximum privacy, pair Inboxed with a provider like Proton Mail (via Proton Bridge) or Fastmail.",
      },
      {
        q: "How does Inboxed compare to Proton Mail's native app or Tutanota?",
        a: "ProtonMail and Tutanota are end-to-end encrypted email providers with their own apps — they protect data at rest and in transit on their servers, and are the gold standard for content-level email privacy. Inboxed is a different layer: it is a local Mac client that processes AI features on-device rather than in a cloud. These approaches are complementary. ProtonMail via Proton Bridge works as an IMAP source for Inboxed, giving you encrypted provider-side storage plus local AI processing. If you are already on Proton or Tutanota and want to stay there, Inboxed does not replace that stack — it can sit on top of it.",
      },
      {
        q: "Is Inboxed open source, and how can I verify its privacy claims?",
        a: "Inboxed is not currently open source, which is a legitimate limitation for users who require auditable code. The privacy claims rest on the architectural approach — Apple MLX processes AI locally, there is no cloud relay in the application layer — and on Apple's platform-level enforcement of app sandbox rules on macOS. For users who require fully auditable software, open-source options like Thunderbird with local plugins exist as an alternative. Inboxed is honest about this limitation. The practical privacy floor it offers — no cloud AI processing, no vendor data aggregation — is meaningfully higher than most mainstream email clients, even without open-source verification.",
      },
    ],
  },

  "remote-workers": {
    faq: [
      {
        q: "Is it safe to use cloud-based email AI features on public WiFi?",
        a: "Using cloud AI email features on public WiFi adds layers of exposure. The connection between your device and the AI provider's server passes through infrastructure you do not control — coffee shops, hotel networks, and airport WiFi are active targets for man-in-the-middle interception. Approximately 25% of Americans have experienced a data breach through public WiFi. With Inboxed, AI processing happens entirely on your Mac's GPU — there is no outbound AI request when you summarize a thread or draft a reply. The only network traffic is the standard IMAP sync to your email provider, which is the same traffic any email client generates.",
      },
      {
        q: "How does Inboxed work when I am offline or in areas with poor connectivity?",
        a: "Inboxed syncs your mailbox locally, so emails you have already received are available and searchable without an internet connection. You can read, organize, draft replies, and use AI features — summarization, drafting, analysis — entirely offline. Replies queue locally and send when connectivity is restored. For digital nomads working across time zones, trains, flights, and co-working spaces with unreliable WiFi, this is a practical advantage over web-based email interfaces that require a live connection to render. The local-first architecture is not a privacy feature added on top — it is the core design of the application.",
      },
      {
        q: "How does Inboxed compare to Spark or Airmail for remote workers?",
        a: "Spark and Airmail are polished Mac email clients with strong feature sets, cross-device sync, and team collaboration tools. Both use cloud servers to sync state and, in the case of Spark's AI features, process content remotely. Inboxed differs in that all AI runs locally and there is no cloud sync of email content through Inboxed's infrastructure. For remote workers who care about public WiFi exposure and data locality, that is a meaningful difference. The honest trade-off: Spark and Airmail have iOS and Android companions, richer notification controls, and longer track records. Inboxed is macOS-only and newer.",
      },
      {
        q: "What do I need to get started, and does it work with work email?",
        a: "Inboxed requires macOS and connects to any IMAP-compatible account. Most corporate email systems support IMAP — check with your IT team if you are unsure, as some Exchange configurations disable it by default. Personal accounts on Gmail, iCloud, or Fastmail connect with standard credentials. Download the app at inboxed.email, add your accounts, and email syncs locally in minutes. The app is about 10 MB, free for core use, with a one-time $1 Pro upgrade. You can add multiple accounts — work, personal, freelance — and manage them from a unified inbox without switching between apps or browser tabs.",
      },
    ],
  },

  "students": {
    faq: [
      {
        q: "What do students need to know about FERPA and their university email?",
        a: "FERPA (Family Educational Rights and Privacy Act) protects the privacy of student education records and restricts who institutions can share that information with. In practice, this matters to students because advisors, financial aid offices, and registrars communicate through institutional email systems — and students should be careful about forwarding those communications to third-party AI tools for summarization, as doing so may expose protected academic records outside the institution's system. Inboxed processes AI summaries locally on your device, so forwarding a financial aid thread to Inboxed's AI doesn't route it through a cloud provider. It is a meaningful difference for privacy-conscious students.",
      },
      {
        q: "How does Inboxed help students manage multiple email accounts?",
        a: "Most university students juggle at least two or three email accounts — an institutional .edu address, a personal Gmail, and possibly a work or internship address. Switching between them in a browser or across multiple apps is friction that adds up. Inboxed consolidates all IMAP accounts into a unified inbox on your Mac, letting you read, organize, and reply across accounts without context-switching. The local AI can summarize long professor threads, draft professional replies to internship coordinators, and help you triage a mixed inbox of academic and personal mail in minutes. The free tier covers all of this — no subscription required.",
      },
      {
        q: "How does Inboxed compare to just using the Gmail or Outlook web interface?",
        a: "Gmail and Outlook on the web are free, universally available, and deeply familiar — genuine advantages for students on shared computers or using multiple devices. Inboxed is macOS-only and only useful on your personal Mac. The advantages it offers are local AI (no content sent to Google or Microsoft for AI processing), offline access, and faster triage for high-volume inboxes. For students who own a Mac and are tired of browser-tab email management during study sessions, Inboxed provides a focused, distraction-reduced experience. For students who need cross-device access — phone, lab computer, Windows laptop — web clients are the more practical choice.",
      },
      {
        q: "Does Inboxed cost anything, and is it hard to set up?",
        a: "Inboxed is free to download and use for core functionality. A one-time $1 payment unlocks the Pro tier — there is no subscription, no monthly fee, and no paywall creep. The app is about 10 MB. Setup is straightforward: download from inboxed.email, open it, and add your email accounts using your existing credentials. Most student accounts — Gmail, iCloud, university IMAP — connect in under two minutes. The app runs natively on macOS and does not require a new email address, account migration, or any changes to how your current email works. It simply becomes the Mac interface you use to read and manage it.",
      },
    ],
  },

  "consultants": {
    faq: [
      {
        q: "How should management consultants handle email when working across competing clients?",
        a: "Consultants working across multiple engagements face a genuine conflict-of-interest risk in email management: accidentally including the wrong attachment, auto-completing the wrong recipient, or having AI drafting tools trained on one client's context generate suggestions visible in another client's thread. Major consulting firms address this through strict matter separation and formal conflict-of-interest checks. Independent consultants using cloud AI email tools add another variable — the AI provider may retain or aggregate email content across sessions. Inboxed's local AI processes each session on-device without sending content to cloud servers, reducing the risk of cross-client data bleed through a shared AI backend.",
      },
      {
        q: "How does Inboxed help consultants manage client communications more efficiently?",
        a: "Consultants typically maintain multiple client email threads simultaneously at different stages — active deliverables, follow-up queues, and business development pipelines. Inboxed's local AI can summarize where each thread stands, draft status update emails, and help extract action items from long client correspondence chains without sending that content to a cloud AI provider. The keyboard-first interface supports fast labeling and archiving, useful for organizing by client or engagement code. Inboxed is not a CRM or project management tool — it does not replace Salesforce or Notion — but it meaningfully reduces the time spent processing the daily inbox across concurrent client relationships.",
      },
      {
        q: "How does Inboxed compare to using Microsoft Outlook with Copilot for consulting work?",
        a: "Microsoft 365 Copilot is a genuinely powerful tool for consultants, especially those in firms running on Exchange infrastructure. It summarizes meetings, drafts deliverable-related emails, and integrates with Teams and SharePoint. However, it processes email content through Microsoft's cloud, and for consultants under strict client NDAs — which is most of them — sending client-specific content to a third-party AI backend is a risk that should be surfaced in engagement contracts. Inboxed processes AI locally, which removes that disclosure vector. The honest caveat: Inboxed lacks Outlook's depth, integrations, and enterprise support. It is the right choice for independent consultants on macOS who prioritize data locality.",
      },
      {
        q: "What email setup works best for independent consultants with multiple client addresses?",
        a: "Independent consultants often maintain a primary business domain address plus client-specific aliases or subaccounts. Inboxed handles multiple IMAP accounts in a unified inbox — add your main address, client aliases, and personal account, and manage them from one interface on your Mac. Most hosting providers (Fastmail, Google Workspace, iCloud) support IMAP with standard credentials. Download the app from inboxed.email, add your accounts, and it syncs locally. The base tier is free; Pro costs $1 once. The app is macOS-only, so consultants who travel with Windows machines will need a secondary solution for those devices.",
      },
    ],
  },

  "healthcare": {
    faq: [
      {
        q: "Is Inboxed HIPAA-compliant for healthcare providers sending PHI via email?",
        a: "HIPAA requires covered entities to implement technical safeguards — encryption, access controls, and audit trails — for any system that creates, receives, stores, or transmits Protected Health Information (PHI). Inboxed is not a HIPAA-covered email service and does not provide the Business Associate Agreement (BAA) that HIPAA requires from third-party service providers handling PHI. Healthcare providers should not use Inboxed as their primary system for clinical PHI communication. Where Inboxed is useful is for administrative and professional email — scheduling, continuing education, professional society correspondence, and internal team coordination that does not involve patient data.",
      },
      {
        q: "How does local AI help healthcare professionals with non-clinical email workloads?",
        a: "Physicians, nurses, and healthcare administrators receive high volumes of email that is not PHI but still demands careful handling — insurance prior authorizations, professional development correspondence, pharmaceutical rep communications, conference schedules, and administrative coordination. Inboxed's local AI can summarize long administrative threads, draft routine replies, and help triage a mixed inbox in minutes. Because the AI runs on-device via Apple MLX, administrative email content is not sent to cloud providers. For healthcare professionals who are rightly cautious about any AI processing of medical-adjacent content, the local model is a meaningful architectural difference.",
      },
      {
        q: "How does Inboxed compare to secure healthcare-specific email tools like Paubox or Hushmail?",
        a: "Paubox and Hushmail are HIPAA-compliant email platforms with BAAs, end-to-end encryption, and audit logging designed specifically for clinical PHI. They serve a fundamentally different function than Inboxed. If you need to email patients or transmit PHI, use a HIPAA-compliant provider. Inboxed is an email client, not a provider, and is not a replacement for those services. The complementary use case: healthcare professionals often have both clinical PHI accounts (on Paubox or similar) and general professional accounts. Inboxed can manage the general professional account, providing local AI for that workload, while the clinical account stays on a HIPAA-compliant platform.",
      },
      {
        q: "What types of healthcare professionals benefit most from Inboxed?",
        a: "Healthcare professionals whose email workload is primarily administrative and professional — rather than patient-facing clinical communication — will find the most value. This includes hospital administrators managing vendor and operations correspondence, healthcare consultants, medical educators handling faculty communications, researchers in academic medical centers managing grant and collaboration email, and nurses managing shift coordination and professional development. For any role where patient PHI regularly moves through email, a HIPAA-compliant platform is the right primary tool. Inboxed works best as the client for professional and administrative accounts where local AI processing is a genuine advantage.",
      },
    ],
  },

  "financial-advisors": {
    faq: [
      {
        q: "What are the SEC and FINRA email retention requirements for financial advisors?",
        a: "Financial advisors face strict recordkeeping obligations. SEC Rule 17a-4 requires broker-dealers to retain communications related to their business for at least six years, with the first two years in an easily accessible place, stored in WORM (non-rewritable, non-erasable) format. SEC-registered investment advisers must retain marketing and client communications for five years under Rule 204-2. FINRA has levied approximately $400 million or more in penalties for off-channel communications violations — including personal email accounts and messaging apps that bypassed firm archiving systems. Inboxed does not provide archiving infrastructure; advisors must ensure their email flows through firm-approved systems that meet these requirements.",
      },
      {
        q: "How does Inboxed's local AI help financial advisors with client communications?",
        a: "Financial advisors spend significant time on routine client correspondence — portfolio update summaries, meeting follow-ups, market commentary emails, and appointment scheduling. Inboxed's local AI can draft these communications, summarize long client email threads, and help triage a high-volume inbox without sending client financial information to a cloud AI provider. For advisors who discuss specific portfolio positions or account details in email, the local processing model removes the risk of that content passing through third-party AI servers. The practical result: faster drafting of routine communications, better triage, and one fewer cloud service handling client financial data.",
      },
      {
        q: "How does Inboxed compare to using Outlook or Redtail for financial advisory practices?",
        a: "Redtail and Wealthbox are CRM platforms with email integration designed for RIAs — they provide compliance-ready archiving, client record linking, and audit trails that Inboxed does not offer. Outlook with Microsoft 365 provides enterprise email infrastructure with established FINRA-compliant archiving integrations. Inboxed does not compete with these tools for their core compliance function. Where Inboxed fits is as a personal Mac client for advisors who want faster, AI-assisted triage of their personal professional email without routing content through cloud AI. It is a complement to a compliance-ready infrastructure, not a replacement.",
      },
      {
        q: "Can I use Inboxed with my firm-provided email account?",
        a: "Inboxed works with any IMAP-compatible account. Whether your firm uses Google Workspace, Microsoft Exchange (with IMAP enabled), or a hosted exchange service depends on your firm's IT configuration — some firms disable IMAP for compliance reasons, requiring use of Outlook or a web client. Check with your compliance officer and IT department before connecting a firm account to any third-party email client, including Inboxed. Independent RIAs who control their own email infrastructure have more flexibility. Inboxed is macOS-only, free for core use, with a one-time $1 Pro upgrade. Setup takes a few minutes once IMAP access is confirmed.",
      },
    ],
  },

  "researchers": {
    faq: [
      {
        q: "What are the intellectual property and confidentiality risks in academic email?",
        a: "Academic researchers face real IP exposure through email. Pre-publication research findings, grant application details, clinical trial data, and peer review correspondence are all sensitive — disclosure before publication can compromise priority claims, violate journal embargo policies, or breach IRB confidentiality requirements. University data governance increasingly intersects with FERPA, HIPAA (for research with human subjects), and federal research security requirements for NSF and NIH-funded work. Using cloud AI tools to summarize or draft emails containing unpublished findings creates a disclosure chain through a third-party server. Inboxed processes AI locally on your Mac, so research content stays on your device.",
      },
      {
        q: "How does Inboxed help researchers manage high-volume academic email?",
        a: "Researchers regularly manage correspondence across multiple projects — co-author coordination, journal submission threads, grant review correspondence, conference logistics, and administrative university communications. Inboxed's local AI can summarize long collaborative email threads, draft routine replies to conference inquiries, and help triage a mixed inbox across research, teaching, and administrative duties. For researchers under data use agreements or working with sensitive human subjects data, the local AI model means that email content is never transmitted to a cloud provider for processing. This is a meaningful architectural difference from using Gmail's AI features or Microsoft Copilot.",
      },
      {
        q: "How does Inboxed compare to using Gmail or Outlook at a university?",
        a: "Most universities provide email through Google Workspace or Microsoft 365. Both platforms process AI features through their respective cloud infrastructure — Smart Compose and Gemini for Gmail, Copilot for Outlook. For researchers working with pre-publication data, IRB-protected information, or federally funded research under security requirements, sending that content through cloud AI is a risk to evaluate carefully. Inboxed works on top of your existing university account via IMAP and processes AI locally. The honest limitation: Inboxed is macOS-only, newer, and lacks the deep integration with university systems (calendars, shared drives, Teams) that Outlook or Gmail provide natively.",
      },
      {
        q: "Does Inboxed work with institutional university email accounts?",
        a: "Yes, if your university email supports IMAP — which most Google Workspace and Exchange-based university systems do. You add the account to Inboxed with your institutional credentials, and email syncs locally to your Mac. Some universities restrict IMAP access for security reasons; check with your IT department if you are unsure. The app is free to download, about 10 MB, and adds no infrastructure of its own — it is simply a local client for your existing account. A one-time $1 Pro upgrade is available for advanced AI features. Researchers who manage both a university address and external collaboration accounts can add multiple IMAP accounts in one place.",
      },
    ],
  },
};
