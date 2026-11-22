import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Botirjon Shokirov",
  description: "Privacy policy of Postiz Publishing, the private tool Botirjon uses to publish to and answer comments on his own social accounts.",
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-10">
    <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
    <div className="space-y-3 text-mute leading-relaxed">{children}</div>
  </section>
);

const A = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="text-flame underline-offset-4 hover:underline">
    {children}
  </a>
);

export default function PrivacyPage() {
  return (
    <main className="min-h-screen py-24">
      <div className="max-w-3xl mx-auto px-6">
        <h1 className="text-6xl font-display font-normal text-paper mb-3">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        <p className="text-sm text-mute">Postiz Publishing, by Botirjon Shokirov. Last updated: 19 November 2026.</p>

        <Section title="What the app is">
          <p>
            Postiz Publishing is a private tool that runs on its owner&apos;s own computer. Only its owner, Botirjon Shokirov, uses it: to publish
            his videos to his own accounts (YouTube channel <A href="https://www.youtube.com/@mrbicode">BI Code</A>, Instagram{" "}
            <A href="https://www.instagram.com/botirjon_swe">@botirjon_swe</A>, Telegram channel <A href="https://t.me/botirjon_log">botirjon_log</A>)
            and to read and answer the comments and messages on those accounts. It is not offered to the public.
          </p>
        </Section>

        <Section title="What data it uses">
          <ul className="list-disc pl-5 space-y-2">
            <li>The access the account owner grants when signing in with Google, Meta or Telegram, stored only on the owner&apos;s computer.</li>
            <li>From YouTube (YouTube Data API): the owner&apos;s channel, its videos and the public comments on them, to show them in the owner&apos;s inbox and to post the owner&apos;s replies and uploads.</li>
            <li>From Instagram and Facebook: the owner&apos;s posts, the comments on them and the messages sent to the owner&apos;s account, to show them in the owner&apos;s inbox and to send the owner&apos;s replies.</li>
            <li>Public information commenters show on these platforms (their username and comment text).</li>
          </ul>
        </Section>

        <Section title="What it does not do">
          <ul className="list-disc pl-5 space-y-2">
            <li>It does not sell, rent or share any data with third parties.</li>
            <li>It does not use the data for advertising or profiling.</li>
            <li>It does not access any account other than the owner&apos;s own.</li>
          </ul>
          <p>Replies may be drafted with the help of an AI model (Anthropic&apos;s Claude) from the comment text; only the text needed for the reply is used.</p>
        </Section>

        <Section title="Google API Services">
          <p>
            The app&apos;s use and transfer of information received from Google APIs adheres to the{" "}
            <A href="https://developers.google.com/terms/api-services-user-data-policy">Google API Services User Data Policy</A>, including the Limited Use
            requirements. It uses YouTube API Services; see the <A href="https://www.youtube.com/t/terms">YouTube Terms of Service</A> and the{" "}
            <A href="https://policies.google.com/privacy">Google Privacy Policy</A>.
          </p>
        </Section>

        <Section title="Keeping and deleting data">
          <p>
            Data stays on the owner&apos;s computer only as long as it is needed to publish and to answer comments. Access can be revoked at any time in your
            Google account at <A href="https://myaccount.google.com/permissions">myaccount.google.com/permissions</A> (and in Meta&apos;s and Telegram&apos;s
            settings), after which the app can no longer read or post anything.
          </p>
        </Section>

        <Section title="Contact">
          <p>
            Questions about this policy: see the{" "}
            <Link href="/contact" className="text-flame underline-offset-4 hover:underline">
              contact page
            </Link>
            .
          </p>
        </Section>
      </div>
    </main>
  );
}
