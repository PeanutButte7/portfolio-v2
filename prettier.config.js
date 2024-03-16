module.exports = {
    plugins: ["prettier-plugin-tailwindcss"],
    bracketSameLine: false,
    bracketSpacing: true,
    parser: "typescript",
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
    ],
};
