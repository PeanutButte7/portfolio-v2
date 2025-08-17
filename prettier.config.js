module.exports = {
    plugins: ["prettier-plugin-tailwindcss"],
    bracketSameLine: false,
    bracketSpacing: true,
    semi: true,
    singleQuote: false,
    tabWidth: 4,
    trailingComma: "all",
    overrides: [
        {
            files: "*.css",
            options: {
                parser: "css",
            },
        },
        {
            files: "*.json",
            options: {
                parser: "json",
                trailingComma: "none",
            },
        },
    ],
};
