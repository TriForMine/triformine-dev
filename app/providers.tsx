// app/providers.tsx
'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider } from '@chakra-ui/react'
import { ColorModeScript } from "@chakra-ui/react"

export function Providers({
							  children
						  }: {
	children: React.ReactNode
}) {
	return (
		<>
			<ColorModeScript type="cookie" nonce="testing" />
			<CacheProvider>
				<ChakraProvider>
					{children}
				</ChakraProvider>
			</CacheProvider>
		</>
	)
}
