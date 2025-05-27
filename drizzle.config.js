/** @type { imort{"drizzle-kit"}.Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        url: 'postgresql://accounts:npg_ko9egr2vXHFO@ep-empty-glitter-a8es5ola.eastus2.azure.neon.tech/ai-short?sslmode=require'
    }
};