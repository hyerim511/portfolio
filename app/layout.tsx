import '@styles/globals.scss'
import type { Metadata } from 'next'

import { LocaleProvider } from '@/components/LocaleProvider'

export const metadata: Metadata = {
  title: 'Haley Kim',
  description: 'Portfolio of Haley Kim',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // 기본값은 한국어. 사용자가 언어를 바꾸면 LocaleProvider가 이 값을 갱신한다.
    <html lang="ko">
      <body>
        <LocaleProvider>{children}</LocaleProvider>
      </body>
    </html>
  )
}
