import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

export default function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("", className)}>
      <p className="text-size-m text-neutral-900">
        буду рада обсудить детали и ответить на вопросы
        <br />
        <a
          href="https://t.me/oxanasvrv"
          className="underline hover:no-underline text-neutral-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-neutral-900"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram (откроется в новой вкладке)"
        >
          написать
        </a>
      </p>
    </footer>
  );
}
