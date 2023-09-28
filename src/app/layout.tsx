import '@radix-ui/themes/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Theme, Flex, Text, Container, ScrollArea } from '@radix-ui/themes'
import { Albert_Sans } from 'next/font/google'

import AuthProvider from './context/AuthProvider'
import NextThemeProvider from './context/NextThemeProvider'

import Navbar from './components/Navbar'

const albert = Albert_Sans({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={albert.className}>
      <body suppressHydrationWarning={true} >
        <AuthProvider>
          <NextThemeProvider>
            <Theme style={{
              height: '100%',
            }} radius="large">
              <Flex direction={{
                initial: 'column',
                md: 'row'
              }} width="100%" height="100%">
                  <Navbar />
                  <Flex pt={{
                    initial: '2',
                    md: '9'
                  }} pl={{
                    initial: '6',
                    md: '0'
                  }} pr={{
                    initial: '6',
                    md: '9'
                  }} direction="column" width="100%" className='main-container' gap="9">
                    {children}
                    <Flex>
                      <Text>
                        Footer
                      </Text>
                    </Flex>
                  </Flex>
              </Flex>
            </Theme>
          </NextThemeProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
