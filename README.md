# gatsby-starter-quiz

Create rich quizzes using Gatsby and MDX

[![Netlify Status](https://api.netlify.com/api/v1/badges/b6e54a57-aa24-436f-be39-f075b842f3bb/deploy-status)](https://app.netlify.com/sites/inspiring-kare-1888f6/deploys)

Create ruch quizzes using Gatsby & Mdx.

➡️ **[See a live example](https://inspiring-kare-1888f6.netlify.com/)**

## Installation

### With [`gatsby-cli`](https://www.npmjs.com/package/gatsby-cli)

```bash
$ gatsby new my-quizzes https://github.com/raphadeluca/gatsby-starter-quiz
```

### With `git clone`

```bash
$ git clone git@github.com:raphadeluca/gatsby-starter-quiz.git my-quizzes
$ cd my-quizzes
$ yarn
```

## Usage

Edit and extend your quizzes inside the `quizzes` folder.

```bash
# To develop & write
$ yarn develop

# To build
$ yarn build
```

## Writing



Examples:

```md
---
index: '1'
answers: [
    {
      value: 'Creative Style Sheets',
      correct: false,
    },
    {
      value: 'Cascading Style Sheets',
      correct: true,
    },
    {
      value: 'Crazy Style Sheets',
      correct: false,
    },
    {
      value: 'Custom Style Sheets',
      correct: false,
    },
  ]
---
```

- index allows you to order yours slides. Must be a string ('1').
- answers is an array with as many objects as you want. It will create your radio buttons. You can create true/false questions or multiple choices quizzes.
