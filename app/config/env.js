// Environment configuration for redirects

const isDevelopment = process.env.NEXT_PUBLIC_APP_ENV === 'development' || process.env.NODE_ENV === 'development';

export const config = {
    // Main web app URL (where login/signup/dashboard lives)
    mainAppUrl: isDevelopment 
        ? process.env.NEXT_PUBLIC_MAIN_APP_URL_DEV || 'http://localhost:3000'
        : process.env.NEXT_PUBLIC_MAIN_APP_URL_PROD || 'https://smartapplyv2.vercel.app',
    
    // Landing page URL (current app)
    landingPageUrl: isDevelopment
        ? process.env.NEXT_PUBLIC_LANDING_PAGE_URL_DEV || 'http://localhost:3001'
        : process.env.NEXT_PUBLIC_LANDING_PAGE_URL_PROD || 'https://smartapply-landing.vercel.app',
    
    // Helper methods
    getLoginUrl: (returnUrl = null) => {
        const baseUrl = `${config.mainAppUrl}/login?mode=login`;
        return returnUrl ? `${baseUrl}&return=${encodeURIComponent(returnUrl)}` : baseUrl;
    },
    
    getSignupUrl: (returnUrl = null) => {
        const baseUrl = `${config.mainAppUrl}/login?mode=signup`;
        return returnUrl ? `${baseUrl}&return=${encodeURIComponent(returnUrl)}` : baseUrl;
    },
    
    getDashboardUrl: (path = '') => {
        return `${config.mainAppUrl}/dashboard${path}`;
    },
    
    isDevelopment,
};

export default config;
