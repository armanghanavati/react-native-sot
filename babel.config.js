module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            'react-native-reanimated/plugin',
            // ['nativewind/babel'],
            [
                'module:react-native-dotenv',
                {
                    moduleName: '@env',
                    path: '.env',
                },
            ],
        ],
    };
};