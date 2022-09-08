import { ServerStyles, createStylesServer } from '@mantine/next';
import Document, {DocumentContext, Head, Html, Main, NextScript} from 'next/document';
import { emotionCache } from '../src/emotion-cache';

const stylesServer = createStylesServer(emotionCache);

export default class _Document extends Document {
	static async getInitialProps(ctx: DocumentContext) {
		const initialProps = await Document.getInitialProps(ctx);

		return {
			...initialProps,
			styles: [
				initialProps.styles,
				<ServerStyles html={initialProps.html} server={stylesServer} key="styles" />,
			],
		};
	}

	render() {
		return (
			<Html>
				<Head />
				<body>
				<Main />
				<NextScript />
				</body>
			</Html>
		);
	}
}