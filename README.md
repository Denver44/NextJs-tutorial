# Pages in Depth

Main folder in NextJs
[1] Pages : Most IMPORTANT
[2] Public : In this we mostly put images
[3] Styles : CSS

# PAGES & FILE-BASED ROUTING

# Code-based Routing

- BoilerPlate setup in code required
- Straightforward but includes new components+concepts
- File +folder setup doesn't matter at all
- Navigation works with Link component and imperatively.

# File-based Routing

- No extra boiler plate required
- Intuitive system
- File + folder structure (in pages/folder) influences routes
- Navigation works with Link component and imperatively

# Create React component files and let NextJs infer the router from the folder structure

# The special /pages folder

/pages
|- index.js------->localhost:3000 ---------------------------- SPECIAL PATH
|- about.js------->localhost:3000/about----------------------- STATIC PATH
| -/product
| - index.js------->localhost:3000/product
| - [id].js-------->localhost:3000/product/anything ---- DYNAMIC PATH

# Extracting Dynamic Path Segment Data (Dynamic Routes)

- We have to use a Hook called useRouter from 'next/router and when working with class based then withRouter.
  [1] useRouter() return a object.
  [2] we can use various methods like pathname,query (return a object it will give the concrete value).

# we can have dynamic routes & path

- We can have a dynamic folder also.
- Nextjs will get all path after blog here.
- [...name].js it will catch all route path : example localhost:3000/blog/2012/12/5 (here 2012/12/5 will be extracted.)
- now we will get array of the (name) eg ['2012','12','5']

# Why to use Link?

- Using a anchor tag it actually makes a http request and page reload because of that redux loose it state and start re-fetching so use Link component.
- In place of anchor tag use Link.
- Link take href props which take a string of route.
- To Navigate dynamic page also we used Link

# Special 404 Page iin NextJs

- create 404.js file to show your Custom Error page
- else nextjs will show its Default Error page.
