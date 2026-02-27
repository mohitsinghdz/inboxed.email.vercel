import { useEffect, useState } from 'react';
import type { FormEvent } from 'react';

export default function DownloadPopup() {
    const [isOpen, setIsOpen] = useState(false);
    const [email, setEmail] = useState('');
    const [submitted, setSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Listen for download button clicks globally
    useEffect(() => {
        const handleDownloadClick = (event: MouseEvent) => {
            const target = event.target as HTMLElement | null;
            if (!target) return;

            const trigger = target.closest('a, button') as HTMLElement | null;
            if (!trigger) return;
            if (trigger.closest('[data-download-modal]')) return;

            const label = (trigger.textContent ?? '').toLowerCase();
            const isDownloadTrigger = /\bdownload\b/.test(label);

            if (!isDownloadTrigger) return;

            event.preventDefault();
            setIsOpen(true);
        };

        document.addEventListener('click', handleDownloadClick);
        return () => document.removeEventListener('click', handleDownloadClick);
    }, []);

    // Handle escape key + body scroll lock
    useEffect(() => {
        if (!isOpen) {
            setEmail('');
            setSubmitted(false);
            setIsSubmitting(false);
            setError(null);
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

        setError(null);
        setIsSubmitting(true);

        try {
            const response = await fetch('/api/waitlist', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: email.trim(),
                    source: 'website-download-popup',
                }),
            });

            if (!response.ok) {
                const data = await response.json().catch(() => ({}));
                setError((data as { error?: string }).error ?? 'Something went wrong. Please try again.');
                return;
            }

            setSubmitted(true);
        } catch {
            setError('Something went wrong. Please try again.');
        } finally {
            setIsSubmitting(false);
        }
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
                <h2 id="download-popup-title" className="font-serif text-3xl mb-3">
                    Join Alpha Access
                </h2>
                <p className="text-foreground/80 mb-6">
                    Inboxed is currently in alpha. Enter your email and we&apos;ll send your download link over mail.
                </p>

                {submitted ? (
                    <div className="border border-black p-4 mb-6 bg-muted/40">
                        <p className="font-medium">Thanks! You&apos;re on the list.</p>
                        <p className="text-sm text-foreground/75 mt-1">
                            We&apos;ll send the alpha download link to <span className="font-semibold">{email}</span>.
                        </p>
                    </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4 mb-6">
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
                        />
                        {error && <p className="text-sm text-red-700">{error}</p>}
                        <button type="submit" className="btn-primary w-full" disabled={isSubmitting}>
                            {isSubmitting ? 'Saving...' : 'Notify Me'}
                        </button>
                    </form>
                )}

                <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="w-full border border-black px-4 py-2 text-sm font-mono uppercase tracking-wider hover:bg-black hover:text-white transition-colors"
                >
                    Close
                </button>
            </div>
        </div>
    );
}
