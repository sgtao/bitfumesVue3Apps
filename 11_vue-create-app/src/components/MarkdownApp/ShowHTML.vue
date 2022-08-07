<!-- showHTML.vue -->
<template>
    <article class="showHTML w-full bg-gray-100 pl-4" v-html="markedText"></article>
</template>
<script>
export default {
    name: 'showHTML',
    props: ['showHTML'],
};
</script>
<style lang="scss">
.showHTML {
    // @import '../../assets/styles/bootstrap-reboot.css';
    // @import '../../assets/styles/chrome_githubExtension.css';
    // @import '../../assets/styles/github.css';

    /* use bootstrap-reboot.css */
    /*!
* Bootstrap Reboot v5.2.0 (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Copyright 2011-2022 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/
    :root {
        --bs-blue: #0d6efd;
        --bs-indigo: #6610f2;
        --bs-purple: #6f42c1;
        --bs-pink: #d63384;
        --bs-red: #dc3545;
        --bs-orange: #fd7e14;
        --bs-yellow: #ffc107;
        --bs-green: #198754;
        --bs-teal: #20c997;
        --bs-cyan: #0dcaf0;
        --bs-black: #000;
        --bs-white: #fff;
        --bs-gray: #6c757d;
        --bs-gray-dark: #343a40;
        --bs-gray-100: #f8f9fa;
        --bs-gray-200: #e9ecef;
        --bs-gray-300: #dee2e6;
        --bs-gray-400: #ced4da;
        --bs-gray-500: #adb5bd;
        --bs-gray-600: #6c757d;
        --bs-gray-700: #495057;
        --bs-gray-800: #343a40;
        --bs-gray-900: #212529;
        --bs-primary: #0d6efd;
        --bs-secondary: #6c757d;
        --bs-success: #198754;
        --bs-info: #0dcaf0;
        --bs-warning: #ffc107;
        --bs-danger: #dc3545;
        --bs-light: #f8f9fa;
        --bs-dark: #212529;
        --bs-primary-rgb: 13, 110, 253;
        --bs-secondary-rgb: 108, 117, 125;
        --bs-success-rgb: 25, 135, 84;
        --bs-info-rgb: 13, 202, 240;
        --bs-warning-rgb: 255, 193, 7;
        --bs-danger-rgb: 220, 53, 69;
        --bs-light-rgb: 248, 249, 250;
        --bs-dark-rgb: 33, 37, 41;
        --bs-white-rgb: 255, 255, 255;
        --bs-black-rgb: 0, 0, 0;
        --bs-body-color-rgb: 33, 37, 41;
        --bs-body-bg-rgb: 255, 255, 255;
        --bs-font-sans-serif: system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue',
            'Noto Sans', 'Liberation Sans', Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
            'Segoe UI Symbol', 'Noto Color Emoji';
        --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono',
            'Courier New', monospace;
        --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
        --bs-body-font-family: var(--bs-font-sans-serif);
        --bs-body-font-size: 1rem;
        --bs-body-font-weight: 400;
        --bs-body-line-height: 1.5;
        --bs-body-color: #212529;
        --bs-body-bg: #fff;
        --bs-border-width: 1px;
        --bs-border-style: solid;
        --bs-border-color: #dee2e6;
        --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
        --bs-border-radius: 0.375rem;
        --bs-border-radius-sm: 0.25rem;
        --bs-border-radius-lg: 0.5rem;
        --bs-border-radius-xl: 1rem;
        --bs-border-radius-2xl: 2rem;
        --bs-border-radius-pill: 50rem;
        --bs-link-color: #0d6efd;
        --bs-link-hover-color: #0a58ca;
        --bs-code-color: #d63384;
        --bs-highlight-bg: #fff3cd;
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    @media (prefers-reduced-motion: no-preference) {
        :root {
            scroll-behavior: smooth;
        }
    }

    body {
        margin: 0;
        font-family: var(--bs-body-font-family);
        font-size: var(--bs-body-font-size);
        font-weight: var(--bs-body-font-weight);
        line-height: var(--bs-body-line-height);
        color: var(--bs-body-color);
        text-align: var(--bs-body-text-align);
        background-color: var(--bs-body-bg);
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }

    hr {
        margin: 1rem 0;
        color: inherit;
        border: 0;
        border-top: 1px solid;
        opacity: 0.25;
    }

    h6,
    h5,
    h4,
    h3,
    h2,
    h1 {
        margin-top: 0;
        margin-bottom: 0.5rem;
        font-weight: 500;
        line-height: 1.2;
    }

    h1 {
        font-size: calc(1.375rem + 1.5vw);
    }
    @media (min-width: 1200px) {
        h1 {
            font-size: 2.5rem;
        }
    }

    h2 {
        font-size: calc(1.325rem + 0.9vw);
    }
    @media (min-width: 1200px) {
        h2 {
            font-size: 2rem;
        }
    }

    h3 {
        font-size: calc(1.3rem + 0.6vw);
    }
    @media (min-width: 1200px) {
        h3 {
            font-size: 1.75rem;
        }
    }

    h4 {
        font-size: calc(1.275rem + 0.3vw);
    }
    @media (min-width: 1200px) {
        h4 {
            font-size: 1.5rem;
        }
    }

    h5 {
        font-size: 1.25rem;
    }

    h6 {
        font-size: 1rem;
    }

    p {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    abbr[title] {
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        cursor: help;
        -webkit-text-decoration-skip-ink: none;
        text-decoration-skip-ink: none;
    }

    address {
        margin-bottom: 1rem;
        font-style: normal;
        line-height: inherit;
    }

    ol,
    ul {
        padding-left: 2rem;
    }

    ol,
    ul,
    dl {
        margin-top: 0;
        margin-bottom: 1rem;
    }

    ol ol,
    ul ul,
    ol ul,
    ul ol {
        margin-bottom: 0;
    }

    dt {
        font-weight: 700;
    }

    dd {
        margin-bottom: 0.5rem;
        margin-left: 0;
    }

    blockquote {
        margin: 0 0 1rem;
    }

    b,
    strong {
        font-weight: bolder;
    }

    small {
        font-size: 0.875em;
    }

    mark {
        padding: 0.1875em;
        background-color: var(--bs-highlight-bg);
    }

    sub,
    sup {
        position: relative;
        font-size: 0.75em;
        line-height: 0;
        vertical-align: baseline;
    }

    sub {
        bottom: -0.25em;
    }

    sup {
        top: -0.5em;
    }

    a {
        color: var(--bs-link-color);
        text-decoration: underline;
    }
    a:hover {
        color: var(--bs-link-hover-color);
    }

    a:not([href]):not([class]),
    a:not([href]):not([class]):hover {
        color: inherit;
        text-decoration: none;
    }

    pre,
    code,
    kbd,
    samp {
        font-family: var(--bs-font-monospace);
        font-size: 1em;
    }

    pre {
        display: block;
        margin-top: 0;
        margin-bottom: 1rem;
        overflow: auto;
        font-size: 0.875em;
    }
    pre code {
        font-size: inherit;
        color: inherit;
        word-break: normal;
    }

    code {
        font-size: 0.875em;
        color: var(--bs-code-color);
        word-wrap: break-word;
    }
    a > code {
        color: inherit;
    }

    kbd {
        padding: 0.1875rem 0.375rem;
        font-size: 0.875em;
        color: var(--bs-body-bg);
        background-color: var(--bs-body-color);
        border-radius: 0.25rem;
    }
    kbd kbd {
        padding: 0;
        font-size: 1em;
    }

    figure {
        margin: 0 0 1rem;
    }

    img,
    svg {
        vertical-align: middle;
    }

    table {
        caption-side: bottom;
        border-collapse: collapse;
    }

    caption {
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        color: #6c757d;
        text-align: left;
    }

    th {
        text-align: inherit;
        text-align: -webkit-match-parent;
    }

    thead,
    tbody,
    tfoot,
    tr,
    td,
    th {
        border-color: inherit;
        border-style: solid;
        border-width: 0;
    }

    label {
        display: inline-block;
    }

    button {
        border-radius: 0;
    }

    button:focus:not(:focus-visible) {
        outline: 0;
    }

    input,
    button,
    select,
    optgroup,
    textarea {
        margin: 0;
        font-family: inherit;
        font-size: inherit;
        line-height: inherit;
    }

    button,
    select {
        text-transform: none;
    }

    [role='button'] {
        cursor: pointer;
    }

    select {
        word-wrap: normal;
    }
    select:disabled {
        opacity: 1;
    }

    [list]:not([type='date']):not([type='datetime-local']):not([type='month']):not([type='week']):not([type='time'])::-webkit-calendar-picker-indicator {
        display: none !important;
    }

    button,
    [type='button'],
    [type='reset'],
    [type='submit'] {
        -webkit-appearance: button;
    }
    button:not(:disabled),
    [type='button']:not(:disabled),
    [type='reset']:not(:disabled),
    [type='submit']:not(:disabled) {
        cursor: pointer;
    }

    ::-moz-focus-inner {
        padding: 0;
        border-style: none;
    }

    textarea {
        resize: vertical;
    }

    fieldset {
        min-width: 0;
        padding: 0;
        margin: 0;
        border: 0;
    }

    legend {
        float: left;
        width: 100%;
        padding: 0;
        margin-bottom: 0.5rem;
        font-size: calc(1.275rem + 0.3vw);
        line-height: inherit;
    }
    @media (min-width: 1200px) {
        legend {
            font-size: 1.5rem;
        }
    }
    legend + * {
        clear: left;
    }

    ::-webkit-datetime-edit-fields-wrapper,
    ::-webkit-datetime-edit-text,
    ::-webkit-datetime-edit-minute,
    ::-webkit-datetime-edit-hour-field,
    ::-webkit-datetime-edit-day-field,
    ::-webkit-datetime-edit-month-field,
    ::-webkit-datetime-edit-year-field {
        padding: 0;
    }

    ::-webkit-inner-spin-button {
        height: auto;
    }

    [type='search'] {
        outline-offset: -2px;
        -webkit-appearance: textfield;
    }

    /* rtl:raw:
        [type="tel"],
        [type="url"],
        [type="email"],
        [type="number"] {
        direction: ltr;
        }
        */
    ::-webkit-search-decoration {
        -webkit-appearance: none;
    }

    ::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    ::-webkit-file-upload-button {
        font: inherit;
        -webkit-appearance: button;
    }

    ::file-selector-button {
        font: inherit;
        -webkit-appearance: button;
    }

    output {
        display: inline-block;
    }

    iframe {
        border: 0;
    }

    summary {
        display: list-item;
        cursor: pointer;
    }

    progress {
        vertical-align: baseline;
    }

    [hidden] {
        display: none !important;
    }

    /* use GitHub style from Chrome Extension */
    * {
        margin: 0;
        padding: 0;
    }
    body {
        font: 13.34px helvetica, arial, freesans, clean, sans-serif;
        color: black;
        line-height: 1.4em;
        background-color: #f8f8f8;
        padding: 0.7em;
    }
    p {
        margin: 1em 0;
        line-height: 1.5em;
    }
    table {
        font-size: inherit;
        font: 100%;
        margin: 1em;
    }
    table th {
        border-bottom: 1px solid #bbb;
        padding: 0.2em 1em;
    }
    table td {
        border-bottom: 1px solid #ddd;
        padding: 0.2em 1em;
    }
    input[type='text'],
    input[type='password'],
    input[type='image'],
    textarea {
        font: 99% helvetica, arial, freesans, sans-serif;
    }
    select,
    option {
        padding: 0 0.25em;
    }
    optgroup {
        margin-top: 0.5em;
    }
    pre,
    code {
        font: 12px Monaco, 'Courier New', 'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', monospace;
    }
    pre {
        margin: 1em 0;
        font-size: 12px;
        background-color: #eee;
        border: 1px solid #ddd;
        padding: 5px;
        line-height: 1.5em;
        color: #444;
        overflow: auto;
        -webkit-box-shadow: rgba(0, 0, 0, 0.07) 0 1px 2px inset;
        -webkit-border-radius: 3px;
        -moz-border-radius: 3px;
        border-radius: 3px;
    }
    pre code {
        padding: 0;
        font-size: 12px;
        background-color: #eee;
        border: none;
    }
    code {
        font-size: 12px;
        background-color: #f8f8ff;
        color: #444;
        padding: 0 0.2em;
        border: 1px solid #dedede;
    }
    img {
        border: 0;
        max-width: 100%;
    }
    abbr {
        border-bottom: none;
    }
    a {
        color: #4183c4;
        text-decoration: none;
    }
    a:hover {
        text-decoration: underline;
    }
    a code,
    a:link code,
    a:visited code {
        color: #4183c4;
    }
    h2,
    h3 {
        margin: 1em 0;
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        border: 0;
    }
    h1 {
        font-size: 170%;
        border-top: 4px solid #aaa;
        padding-top: 0.5em;
        margin-top: 1.5em;
    }
    h1:first-child {
        margin-top: 0;
        padding-top: 0.25em;
        border-top: none;
    }
    h2 {
        font-size: 150%;
        margin-top: 1.5em;
        border-bottom: 1px solid #ddd;
        padding-bottom: 0.5em;
    }
    h3 {
        margin-top: 1em;
    }
    hr {
        height: 0;
        margin: 15px 0;
        overflow: hidden;
        background: transparent;
        border: 0;
        border-bottom: 4px solid #ddd;
    }
    ul {
        margin: 1em 0 1em 2em;
    }
    ol {
        margin: 1em 0 1em 2em;
    }
    ul li,
    ol li {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    ul ul,
    ul ol,
    ol ol,
    ol ul {
        margin-top: 0;
        margin-bottom: 0;
    }
    blockquote {
        margin: 1em 0;
        border-left: 5px solid #ddd;
        padding-left: 0.6em;
        color: #555;
    }
    dt {
        font-weight: bold;
        margin-left: 1em;
    }
    dd {
        margin-left: 2em;
        margin-bottom: 1em;
    }
    @media screen and (min-width: 768px) {
        body {
            width: 748px;
            margin: 10px auto;
        }
    }
    /*
    github.css
    github.com style (c) Vasily Polovnyov <vast@whiteants.net>
    */
    .hljs {
        display: block;
        overflow-x: auto;
        padding: 0.5em;
        color: #333;
        background: #f8f8f8;
    }

    .hljs-comment,
    .hljs-quote {
        color: #998;
        font-style: italic;
    }

    .hljs-keyword,
    .hljs-selector-tag,
    .hljs-subst {
        color: #333;
        font-weight: bold;
    }

    .hljs-number,
    .hljs-literal,
    .hljs-variable,
    .hljs-template-variable,
    .hljs-tag .hljs-attr {
        color: #008080;
    }

    .hljs-string,
    .hljs-doctag {
        color: #d14;
    }

    .hljs-title,
    .hljs-section,
    .hljs-selector-id {
        color: #900;
        font-weight: bold;
    }

    .hljs-subst {
        font-weight: normal;
    }

    .hljs-type,
    .hljs-class .hljs-title {
        color: #458;
        font-weight: bold;
    }

    .hljs-tag,
    .hljs-name,
    .hljs-attribute {
        color: #000080;
        font-weight: normal;
    }

    .hljs-regexp,
    .hljs-link {
        color: #009926;
    }

    .hljs-symbol,
    .hljs-bullet {
        color: #990073;
    }

    .hljs-built_in,
    .hljs-builtin-name {
        color: #0086b3;
    }

    .hljs-meta {
        color: #999;
        font-weight: bold;
    }

    .hljs-deletion {
        background: #fdd;
    }

    .hljs-addition {
        background: #dfd;
    }

    .hljs-emphasis {
        font-style: italic;
    }

    .hljs-strong {
        font-weight: bold;
    }

    /**
     * additional styles
     */
    ul,
    ol {
        list-style: square;
    }
}
</style>
<!-- EOF -->
