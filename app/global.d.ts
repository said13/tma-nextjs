declare global {
    interface Window {
        Telegram: any;
    }

    interface Telegram {
        WebApp?: WebAppType;
    }

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
}