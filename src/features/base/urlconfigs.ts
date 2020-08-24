export class UrlConfig {

    private static BASE_URL: string = 'https://api.spacexdata.com/v3';

    public static GET_HISTORY = `${UrlConfig.BASE_URL}/history`;
    public static GET_PAYLOAD = `${UrlConfig.BASE_URL}/payloads`;
}