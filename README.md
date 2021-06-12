# NEXTJS

    1. A Server Side Rendering React Framework for production.
    2. It offers a lot to make large scale production app easier.
    3. NextJs is a fullstack framework for ReactJs.

**CSR VS SSR**

    - The main difference is that for SSR your server’s response to browser is the HTML of your page that is ready to be rendered, while for CSR the browser gets a pretty empty document with links to your javascript.

**Difference between a framework and library?**

    - Framework is more bigger and has more libraries.
    - Its also give you clear guidance and rules for proper structure of pages and folder.
    - In Nextjs you still write react code, you still build react components and use react features(props,states,context,...etc).
    - Nextjs just enhances your react apps and adds more features.

**What is the use of server-side rendering?**

    SEO Crawlers can read the site content easily

**Why to use Next.JS?**

    • Pre-Rendering – Server Side or Static Site Generation
    • No setup for Server Side Rendering of React App
    • Easy concepts of Page Creation
    • No Configuration Routing
    • Automatic code splitting
    • Dynamic Routing

**What are Pages in Next.JS?**

    We just add React Component files in pages folder to create a new page of website

### How to Setup a Next.JS Project

**Quick Setup**

```
- npx create-next-app
- yarn create-next-app
```

**Manual Setup**

```
- npm install next react react-dom
- In package.json add the following scripts:
  “scripts”:{
  “dev”: “next”, //Start next server in dev mode
  “build”:”next build”, // build application for production use
  “start”: “next start”// starts a next.js production server
  }
- create a pages directory
- add a file with name of index.js
- create and export a component Index in the file with content u want to show on page
```

**NextJs Key Features & Benefits**

    1. Server-side Rendering
    - Automatic page pre-rendering great for SEO and initial load.
    - Blending client-side and server-side: Fetch data on the server and render finished pages.

    2. File Based Routing
    - Define pages and routes with files and folders instead of code
    - Less code,less work, highly understandable

    3. Fullstack Capabilities
    - Easily add backend (server-side) code to your Next /React apps.
    - Storing data, getting data, auth etc. can be added to your react projects.

### Pages in Depth

    - Main folder in NextJs
    - Pages : Most IMPORTANT
    - Public : In this we mostly put images
    -  Styles : CSS

### PAGES & FILE-BASED ROUTING

**Code-based Routing**

    1. BoilerPlate setup in code required
    2. Straightforward but includes new components+concepts
    3. File +folder setup doesn't matter at all
    4. Navigation works with Link component and imperatively.

**File-based Routing**

    1. No extra boiler plate required
    2. Intuitive system
    3. File + folder structure (in pages/folder) influences routes
    4. Navigation works with Link component and imperatively

**Create React component files and let NextJs infer the router from the folder structure**

**The special /pages folder**

```
/pages
|- index.js------->localhost:3000 ---------------------------- SPECIAL PATH
|- about.js------->localhost:3000/about----------------------- STATIC PATH
| -/product
| - index.js------->localhost:3000/product
| - [id].js-------->localhost:3000/product/anything ---- DYNAMIC PATH
```

**Extracting Dynamic Path Segment Data (Dynamic Routes)**

    1. We have to use a Hook called useRouter from 'next/router and when working with class based then withRouter.
    1. useRouter() return a object.
    2. we can use various methods like pathname,query (return a object it will give the concrete value).

**we can have dynamic routes & path**

    1. We can have a dynamic folder also.
    2. Nextjs will get all path after blog here.
    3. [...name].js it will catch all route path : example localhost:3000/blog/2012/12/5 (here 2012/12/5 will be extracted.)
    4. now we will get array of the (name) eg ['2012','12','5']

**Why to use Link?**

    1. Using a anchor tag it actually makes a http request and page reload because of that redux loose it state and start re-fetching so use Link component.
    2. In place of anchor tag use Link.
    3. Link take href props which take a string of route.
    4. To Navigate dynamic page also we used Link

**Special 404 Page iin NextJs**

    1. create 404.js file to show your Custom Error page
    2. else nextjs will show its Default Error page.

**PAGE PRE-RENDERING & DATA FETCHING**

    1. By default, NextJs pre-render all pages (~ server-side rendering :SSR)
    2. In nextjs when a request is made to /some-route it will return a pre-rendered page. whereas in react it will return a html and javascript file and then javascript will be executed and the data will be fetch.
    3. Nextjs pre-rendered page is Good for Seo as it prepare a page in advance.
    4. It only affect the initial load.

**Nextjs has two forms of Pre-rendering**

    1. Static Generation. (Recommended form)
    2. Server Side Rendering.

**Static Generation :-**

    Pre-generate a page (with data prepared on the server-side) during build time

**Server Side Rendering :-**

    -(SSR) is the process of rendering web pages on a server and passing them to the browser (client-side), instead of rendering them in the browser. SSR sends a fully rendered page to the client; the client's JavaScript bundle takes over and enables the SPA framework to operate

**Using below function helps to pre-generate**

    Export async function getStaticProps(context){}
    It return a promise so we can use await. In this function whatever the code is run that will normally going to run on server side and the client can never see this function

**NOTE** :- **By default Nextjs pre-render all pages which don't have any dynamic data**

    - Get static props always return an object
    - An object which has a props key
    - Get static props prepare props for your component

**In nextjs has built in features which is called incremental static generation**

**What is "incremental static regeneration"?**

    Essentially, you use getStaticProps to tell Next.js to generate a static page (or set of pages) that may change over time. So you can have page with all your blog posts and tell Next.js that it may update every day.

```
export async function getStaticProps() {
  console.log("RE-Generating");
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //Every 10s the page will be regenerate
  };
}
```

    Pre-generate page -> re-generate for every incoming request it on every request at most every X seconds.

**CloserLook to GetStaticProps**

```
export async function getStaticProps(context) {
  console.log("RE-Generating");
  const filepath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filepath);
  const data = JSON.parse(jsonData);

  return {
    props: {
      products: data.products,
    },
    revalidate: 10, //Every 10s the page will be regenerate
  };
}
```

    Here we have added one parameters called context

**Why we use (\_)symbol**

    In nextjs if you want to overwrite that file we have to use (\_) so now this file will be used.

**CSS**

     In nextjs if u have to make use module.css then your file name should be like post.module.css.

**To use Sass in Nextjs**

    - U have to install it npm i sass.
    - The extension should be .scss and .sass
    - We can use it at component level via CSS Modules and the '.module.scss' or '.module.sass' extension

**Environment Variables**

    - To use env variables we have to write process.env.VARIABLE_NAME
    - This way of using env variables is applicable for both .env.local and .env.development file.
    - .env.local will overwrite any other .env file.

**Exposing ENV to the Browser**

    - Then write like this way NEXT_PUBLIC_VARIABLE_NAME.

**Dynamic Import**

    1. Nextjs Support dynamic `import()` for Js.
    2. With it you can import Js modules (React Components dynamically and work with them.)
    3. They also work with SSR.
    4. When u need dynamic import for example if u don't want this component to load at the time of page load then use dynamic import.

**Example :- Static import :**

```
import Header from './header'
```

**Example :- Dynamic import :**

```
 const Header = dynamic(() => import("../Header"), {
 loading: () => <p> Loading...</p>,
 ssr: false,
 });
```
