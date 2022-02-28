import { pick } from "accept-language-parser";

/**
 * Get the recommended locale for a request using its `Accept-Language` header and IP address
 * @param headers - Request headers
 * @param currentLocale - Currently active locale
 * @returns Locale, e.g., "en-ch"
 */
export const getRecommendedLocale = async (
    request: Request
): Promise<string> => {
    const { headers } = request;
    const locale = pick(
        ['fr', 'en'],
        headers.get("accept-language") ?? ""
    );
    return `${locale ?? 'en'}`;
};
