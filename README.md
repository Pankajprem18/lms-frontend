# LMS Frontend

### Setup instruction

1. Clone Setup instruction
```
git clone https://github.com/Pankajprem18/lms-frontend.git
```
2. Move into the directory

```
cd lms-frontend
```
3. install dependencies
```
npm install
```

4. run the server
```
npm run dev
```


### Setup instruction for tailwind

[Tail wind official instruction doc](https://tailwindcss.com/docs/installation)

1. install tailwindcss 
```
npm install -D tailwindcss
```

2. create tailwind config file 
```
npx tailwindcss init
```

3. Add file extensions to tailwind config file in the contents property

```
"./src/**/*.{html,js,jsx,ts,tsx }"
```

4. Add the tailwind directives at the top of the `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```