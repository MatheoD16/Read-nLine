import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/normalize.css', 'resources/css/app.css', 'resources/js/app.js',
                'resources/css/test-vite.css', 'resources/js/test-vite.js', "resources/css/profile.css", "resources/css/accueil.css","resources/css/histoire.css"],
            refresh: true,
        }),
    ],
});