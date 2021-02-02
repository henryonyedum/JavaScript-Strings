# JavaScript Strings Activity

## Activity 1

Activiy should be done in groups, size 2-4. 

### Step 1

Choose a group memeber to **fork** this repository. Add all members as contributers to the new fork

### Step 2

All memebers should **clone** the new forked repository to their projects folder


Each of the following steps should be completed by a new group member.

### Step 3

1. Inside the repository, create a new file called "activity-1.html". 
2. Insert the global structure into the html file.
3. Create an external javascript file called "basics-1.js".
4. In Git, **add** and **commit** the new changes.
5. Use `git push` to push the changes to the remote repository on GitHub
6. All members use `git pull` to pull down the changes from the remote repository

### Step 4

1. Open *activity-1.html* and add a `<h1>` tag with the text "Activity 1".
2. Save and view the file in a web browser.
3. Using `<script>` link to the external javascript file.
4. Open *strings-1.js* and add `console.log("Let's do this!")`
5. Save and view in the web browser dev tools. What happens? (If nothing happens recheck you code)
6. Ask the user to enter some text
7. Alert out to the user the amout of characters in the text they input using a template literal. Hint: (.length)
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

### Step 5

1. Open *strings-1.js*, console log the index of the the letter 'l' from the users input. What happens if no letter 'l' is in the user input? Hint: research `indexOf()`.
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

### Step 6

1. Open *strings-1.js*, console log everything after the 3rd character. Hint: research `slice()`.
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

### Step 7

1. Open *strings-1.js*, console log the last character in the string. Hint: research `charAt()`.
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

## Activity 2

Activiy should be done in groups, size 2-4. 

Each of the following steps should be completed by a new group member.

### Step 1

1. Inside the repository, create a new file called "activity-2.html".
2. Inside the repository, create a new file called *strings-2.js* and put it in the *js* folder
3. Open your code editor and create the global structure in site the HTML file
4. Add the `<script>` tag and connect your js file
5. In the body, create a div element with an id of "output"
4. Open *strings-2.js* and use console log to check if the js file is linked properly
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

### Step 2

**New Code Alert!**

```
document.getElementById(<id-name>)
```

This is a way to access HTML elements by their id with JavaScript. In this step we will see how to use this to add content to the page

Back to our exercise

1. Open *strings-2.js* and prompt the user for their name and store it in a variabe named *userName*
2. Create a constant variable name *greeting* and assign it a string of some greeting
3. Use `document.getElementById('output').textContent = greeting + userName`
4. Refresh the page, what happens?
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

> `document.getElementById('output')` will reference the HTML element with the provided id value(in this case *output*). `textContent` give us access to the text within the HTML element.

### Step 3

1. Open *strings-2.js*. 
2. Add another prompt asking the user to enter some text and assign it to a constant variable named *userText*
3. Replace any 'a' characters in the user text with a '@'. Hint: Research `replaceAll()`
4. Use `document.getElementById('output').textContent` to print the altered text to the page. 
6. Use git to add/commit/push the changes
7. All members use `git pull` to pull down the changes from the remote repository

### Step 4

1. Open *strings-2.js*
2. Try Replacing the = with += when using `document.getElementById('output').textContent`. What happens?
3. Try using the following string manipulation methods:
	* slice()
	* substr()
	* trim()
	* search()

	
Hint: Use google, it is your friend:) And [this](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) is also a good place to read the documentation on JavaScript 


