# EJEMPLO-CHAT-VTEX-GRAPHQL

<!-- DOCS-IGNORE:start -->
<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)

<!-- ALL-CONTRIBUTORS-BADGE:END -->
<!-- DOCS-IGNORE:end -->

Cambiar lenguaje de README a [![en](https://img.shields.io/badge/lang-en-red.svg)](https://github.com/FelCer/chat-ai-vtex-graphql/blob/main/docs/README.en.md)

Componente que simula un chat comunicado con chat AI de AWS

<br>

## Implementación

1. Importar `{{vendor}}.chat-ai-graphql` en el archivo `manifest.json` del tema de IO.

```
  "dependencies": {
    // Validar la versión que se encuentra la aplicación.
    "{{vendor}}.chat-ai-graphql": "0.x",
  }
```

## Ejemplo de uso

Esta aplicación maneja eventos enviados para un lambda en AWS

```
POST --> /dev/send-message
GET  --> /dev/get-questions
```


<!-- DOCS-IGNORE:start -->

## Colaboradores ✨

Gracias a estas maravillosas personas: ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/22477264?v=4" width="100px;" alt=""/><br /><sub><b>Luis Felipe Cerero Garcia</b></sub></a><br /><a href="https://github.com/FelCer/chat-ai-vtex-graphql/commits?author=felcer" title="Documentation">📖</td>
  </tr>
</table>

<!-- DOCS-IGNORE:end -->
