export const IS_PROD = process.env.NODE_ENV === 'production';

export const API_URL ="http://localhost:5000/api"

export const PAGE_LIMIT = 12;
export const PAYPAL_CLIENT_ID = process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID;

export const STRIPE_CLIENT_KEY  ="pk_test_51O7GalSCS2T1P6hzR2LkFgpm4dfiRobScEXwNhKZMGVnFzNAOaZuEs62muV94y6PJhUoJm8AN5RJJNlWBLFMz8J400IC4Bo37i"

export const MAX_FILE_SIZE = 1024 * 1024; // 1mb

export const CLOUDINARY_CLOUD_NAME = process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME;

export const CACHE_REVALIDATION = 60; // 1 minute
