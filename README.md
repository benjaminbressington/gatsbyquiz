[![Netlify Status](https://api.netlify.com/api/v1/badges/b6e54a57-aa24-436f-be39-f075b842f3bb/deploy-status)](https://app.netlify.com/sites/inspiring-kare-1888f6/deploys)

# :grapes: gatsby-starter-quiz
Create rich quizzes with Gatsby & Mdx. No need of database or headless CMS. Manage your data directly in your Mdx file's frontmatter and write your content in the body. Customize your HTML tags, use other's react components or write your owns. Navigation will be automatically created between each question.

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

### :one: Files
Edit your quizzes inside the `/quizzes` folder:
- create a folder for each quiz
- create a .mdx file for each question

### :two: Frontmatter
- put your answers in the frontmatter. It's just an array of objects.
  - Each object is an answer with 2 keys:
    - value: a string (the text that will be displayed)
    - correct: a boolean (true, if correct)
- give an index to your question to put them in a specific order (must be a string!)

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

### :three: Body
- write your question and let your creativity take the power with MDX

Look at the examples in the quizzes folder to see how you can use React within a Markdown file (That's MDX!).
For a full explanation, read the MDX docs and the gatsby-MDX implementation.

### :four: Link it from the home page

In the `/pages/index.js` file create a link to your quiz with the Card component.

```js
  <Card
    backgroundColor='#5bc0eb'
    title="CSS"
    description="Take a little quiz to test your CSS knowledges..."
    link="css-01"
  />
```

### :five: Deploy
- create a repository on github with your project
- deploy it on Netlify

## :art: Configuration

