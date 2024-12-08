interface WebAppType {
    initDataUnsafe: {
        user: {
            id: number;
            first_name: string;
            last_name?: string;
            username?: string;
            language_code?: string;
            is_premium?: boolean;
        };
    };
}

interface Telegram {
    WebApp?: WebAppType;
}

declare global {
    interface Window {
        Telegram: any;
    }
}