# My DND Blog Version Two
This is my second attempt at running at a blog for my DnD group. Before I was using a stack which was utilizing Gatsby. I'm deciding to scale back and do a little more work from scratch for the sake of learning the tech more in depth.

This time I will focusing on using Node and Express as much as I can so I can learn them efficiently. Styling will be partially customized but mostly bootstrap so I don't have to worry as much about it. I do plan on adding a database to handle all the posts but that is again something down the line.

## How-Tos for myself
### New Articles
Figured out how to get articles to auto-populate on the home page so no need to worry about manually adding them there. Creating a new article is simply creating a new file within the /views/articles/ directory that is incrementally one higher than the previous. (I.E. if the last file was 5.ejs, the next should be 6.ejs)

The article just needs to follow a simple format and the templates should pick up the rest:
```html
    <div>
        <h2>Whatever Article Title You Want</h2>
        <p>Content for said article goes here</p>
    </div>
```



## Tech
### Current Tech Stack
- NodeJS (Server)
- ExpressJS (Server)
- EJS (View-Engine)

### Planned additions as I learn
- A database to handle posts (Likely Mongo)
- Heroku or DO when I push this version live
- Something to automate deployment because I'm lazy
- Something to aid in documenting this so I don't forget anything