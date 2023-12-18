export const IS_PROD = process.env.NODE_ENV === 'production';
export const PORT = process.env.PORT || 5000;
export const DATABASE_URI = "mongodb://127.0.0.1:27017/maunik"
export const JWT_SECRET_KEY = `${process.env.JWT_SECRET}`;
export const JWT_EXPIRES_IN = '7d';
export const STRIPE_SECRET_KEY = `sk_test_51O7GalSCS2T1P6hz5MoKhAThcyU6Rm9gEP1D9uWR1IwnqvA3shp6cSrudvkVIxjTI3aurFvOvRxuTf4pdsF0vV1f003w40eOiZ`;
export const GOOGLE_WEB_CLIENT_ID = `${process.env.GOOGLE_WEB_CLIENT_ID}`;
export const GOOGLE_ANDROID_CLIENT_ID = `${process.env.GOOGLE_ANDROID_CLIENT_ID}`;
export const GOOGLE_SECRET_KEY = `${process.env.GOOGLE_CLIENT_SECRET}`;
export const CLIENT_PUBLIC_URL = `${process.env.CLIENT_PUBLIC_URL}`;
