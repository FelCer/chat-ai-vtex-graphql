# EXAMPLE-CHAT-VTEX-GRAPHQL

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Change language from README to [![es](https://img.shields.io/badge/lang-es-yellow.svg)](https://github.com/FelCer/chat-ai-vtex-graphql/blob/main/docs/README.md)

Component that simulates a chat communicated with AWS Chat AI

<br>

## Implementation

1. Import `{{vendor}}.chat-ai` into the IO theme's `manifest.json` file.

```
  "dependencies": {
    // Validate the version that the application is found.
    "{{vendor}}.chat-ai": "0.x",
  }

```

## Example use

This app handles events sent for a lambda in AWS

```
POST --> /dev/send-message
GET  --> /dev/get-questions
```

<!-- DOCS-IGNORE:start -->

## Contributors ✨

Thanks goes to these wonderful people: ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/22477264?v=4" width="100px;" alt=""/><br /><sub><b>Luis Felipe Cerero Garcia</b></sub></a><br /><a href="https://github.com/FelCer/chat-ai-vtex-graphql/commits?author=felcer" title="Documentation">📖</td>
  </tr>
</table>

<!-- DOCS-IGNORE:end -->
