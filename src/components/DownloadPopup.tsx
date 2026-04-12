import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

const DMG_URL =
    'https://github.com/mohitsinghdz/inboxed.email/releases/download/v0.1.0-alpha.1/Inboxed_0.1.0-alpha.1_aarch64.dmg';

export default function DownloadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [downloading, setDownloading] = useState(false);

    // Intercept any "download" button/link clicks
    useEffect(() => {
        const handleDownloadClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (!target) return;

            const trigger = target.closest('a, button') as HTMLElement | null;
            if (!trigger) return;
            if (trigger.closest('[data-download-modal]')) return;

            const label = (trigger.textContent ?? '').toLowerCase();
            if (!/\bdownload\b/.test(label)) return;

            event.preventDefault();
            setIsOpen(true);
        };

        document.addEventListener('click', handleDownloadClick);
        return () => document.removeEventListener('click', handleDownloadClick);
    }, []);

    // Escape key + scroll lock
    useEffect(() => {
        if (!isOpen) {
            setEmail('');
            setDownloading(false);
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === 'Escape') setIsOpen(false);
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        document.addEventListener('keydown', handleEscape);

        return () => {
            document.body.style.overflow = originalOverflow;
            document.removeEventListener('keydown', handleEscape);
        };
    }, [isOpen]);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        if (!email.trim()) return;

        setDownloading(true);

        // Trigger the download immediately
        window.location.href = DMG_URL;

        // Save email in the background — don't block or show errors to the user
        fetch('/api/waitlist', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: email.trim(), source: 'website-download-popup' }),
        }).catch(() => {/* ignore */});

        // Close after a short delay so the user sees the state change
        setTimeout(() => setIsOpen(false), 2000);
    };

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 p-4"
            onClick={() => setIsOpen(false)}
            role="dialog"
            aria-modal="true"
            aria-labelledby="download-popup-title"
            data-download-modal=""
        >
            <div
                className="w-full max-w-md border-2 border-black bg-white p-6 md:p-8"
                onClick={(event) => event.stopPropagation()}
            >
                {downloading ? (
                    <>
                        <h2 className="font-serif text-3xl mb-3">Download starting…</h2>
                        <p className="text-foreground/80 mb-6">
                            Your download has begun. Open the DMG and drag Inboxed to Applications.
                        </p>
                        <p className="font-mono text-xs text-foreground/50 uppercase tracking-widest">
                            First launch: right-click → Open to bypass the unsigned app warning.
                        </p>
                    </>
                ) : (
                    <>
                        <h2 id="download-popup-title" className="font-serif text-3xl mb-3">
                            Download Inboxed Alpha
                        </h2>
                        <p className="text-foreground/80 mb-6">
                            Enter your email and your download will start immediately.
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4 mb-4">
                            <label htmlFor="download-email" className="block text-sm font-mono uppercase tracking-wider">
                                Email Address
                            </label>
                            <input
                                id="download-email"
                                type="email"
                                required
                                value={email}
                                onChange={(event) => setEmail(event.target.value)}
                                placeholder="you@company.com"
                                className="w-full border-2 border-black px-4 py-3 outline-none focus:ring-2 focus:ring-black/20"
                                autoFocus
                            />
                            <button type="submit" className="btn-primary w-full">
                                Download for Mac
                            </button>
                        </form>

                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="w-full border border-black px-4 py-2 text-sm font-mono uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                        >
                            Cancel
                        </button>
                    </>
                )}
            </div>
        </div>
    );
}
