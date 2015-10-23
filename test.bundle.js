var appContext = require.context('./test', true, /\.spec\.ts/);

appContext.keys().forEach(appContext);