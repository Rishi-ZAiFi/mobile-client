// @ts-nocheck
import eiConfig from '../../eslint.ei.noconsole.config.mjs';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

export default [
    ...eiConfig,
    {
        ignores: ['./build/*', '**/*.js']
    }
];
