# 🌐 Tradutor Inteligente com Voz

![Status](https://img.shields.io/badge/Status-Conclu%C3%ADdo-brightgreen)
![Tech](https://img.shields.io/badge/Tech-JavaScript-yellow)
![Style](https://img.shields.io/badge/Style-TailwindCSS-blue)

Uma aplicação interativa que não apenas traduz texto, mas também utiliza a voz do usuário para capturar o conteúdo. Desenvolvido com foco em UX moderna e consumo de APIs assíncronas.

## 🚀 Funcionalidades

- **Tradução por Voz:** Utiliza a `webkitSpeechRecognition` para ouvir o usuário e transformar fala em texto automaticamente.
- **Consumo de API Real:** Integração com a API MyMemory para traduções precisas entre Português e diversos idiomas (Inglês, Japonês, Italiano, etc.).
- **Interface Moderna:** Design elegante construído com **Tailwind CSS**, apresentando gradientes e sombras suaves.
- **Assincronismo:** Uso de `async/await` para garantir que a interface não trave enquanto a tradução é processada.

## 🛠️ Tecnologias Utilizadas

- **HTML5 & Tailwind CSS:** Estrutura e estilização rápida e responsiva.
- **JavaScript (ES6+):** Lógica principal, manipulação de DOM e integração.
- **MyMemory API:** Motor de tradução externa.
- **Web Speech API:** Recurso de reconhecimento de voz nativo do navegador.

## 📖 Como Funciona o Código?

1. **Reconhecimento de Voz:** Ao clicar em "Falar", a função `OuvirVoz()` ativa o microfone, converte sua fala em texto e já dispara a função de tradução automaticamente.
2. **Processamento:** A função `traduzirTexto()` monta a URL dinâmica:
   ```javascript
   let endereco = "[https://api.mymemory.translated.net/get?q=](https://api.mymemory.translated.net/get?q=)" + pegar + "&langpair=pt-br|" + idioma.value;
