import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function sleep(ms: number): void {
  const wakeUpTime = Date.now() + ms
  while (Date.now() < wakeUpTime) {
    /* empty */
  }
}
