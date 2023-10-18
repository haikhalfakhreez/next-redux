import { type ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function maskedEmail(email: string): string {
  const [name, domain] = email.split('@')
  const maskedName = name.slice(0, 2) + '***'
  return `${maskedName}@${domain}`
}
