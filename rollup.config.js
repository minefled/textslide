import typescript from '@rollup/plugin-typescript';
import { terser } from "rollup-plugin-terser";

const tsconfig = {
    target: "es3",
    lib: [
        "ESNext",
        "DOM"
    ],
    removeComments: true
};

const banner =
`/*
 | TextSlide.js
 | Copyright minefled, 2021
 | Released under the MIT License
 */`;

export default [
    {
        input: "src/index.ts",
        output: [
            {
                file: "dist/bundle/textslide-ejs.js",
                format: "es",
                banner
            },
            {
                file: "dist/bundle/textslide-iife.js",
                format: "iife",
                name: "textslide",
                banner      
            },
            // Minified
            {
                file: "dist/bundle/textslide-ejs.min.js",
                format: "es",
                plugins: [terser({ output: { comments: true } })]
            },
            {
                file: "dist/bundle/textslide-iife.min.js",
                format: "iife"  ,
                name: "textslide" ,
                plugins: [terser({ output: { comments: true } })]
            }
        ],

        plugins: [
            typescript(tsconfig)
        ]
    }
];