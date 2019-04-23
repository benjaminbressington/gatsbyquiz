[![Netlify Status](https://api.netlify.com/api/v1/badges/b6e54a57-aa24-436f-be39-f075b842f3bb/deploy-status)](https://app.netlify.com/sites/inspiring-kare-1888f6/deploys)

# gatsby-starter-quiz

Create rich quizzes with Gatsby & Mdx.

➡️ **[See a live example](https://gatsby-starter-quiz.netlify.com//)**

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

Edit your quizzes inside the `quizzes` folder:
- create a folder for each quiz
- create a .mdx file for each question
- put your answers in the frontmatter. It's just an array of objects.
  - Each object is an answer with 2 keys:
    - value: a string (the text that will be displayed)
    - correct: a boolean (true, if correct)
- give an index to your question to put them in a specific order
- write your question

Look at the examples in the quizzes folder

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
