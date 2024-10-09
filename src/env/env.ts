import { LogLevel } from "app/utils/logger";

const ENV = import.meta.env;

/** The App environment */
export type Environment = "dev" | "prod" | "qa";
export const APP_ENV: Environment = ENV.VITE_APP_ENV || "dev";

// LOG LEVEL
export const LOG_LEVEL: LogLevel = APP_ENV === "prod" ? "warn" : "log";

// API URL
export const API_URL = ENV.VITE_API_URL;

// APP DETAILS
export const APP_NAME = ENV.VITE_APP_NAME;
export const APP_DESCRIPTION = ENV.VITE_APP_DESCRIPTION;
