**Project Info:
1.Name of Project
=> My Technology Stack App.

2.Description
=> A simple website where one can choose and make a choice
   list of their favourite technologies used in react-js coding.

3.Technologies implied
=>  i.React.js
   ii.Tailwind CSS 
  iii.TypeScript / JavaScript (ES6+)
   iv.React-Toastify (NPM Package)
    v.JSON (for technology data)
   vi.Vite (build tool)
  vii.DaisyUI
 viii.font-awesome

4.Features
=> i.Multiple technologies can be selected and added to stack from cards section
ii.A single technology can't be selected twice
iii.Selections can be cancelled individually or all at once using designated buttons

-----------------------------------------------

***Question & Answer

1. What is JSX, and why is it used in React?

=> JSX is a syntax extension for JavaScript that is used to write HTML-like structures directly inside a JavaScript code. React uses JSX because it makes writing and understanding UI components much easier by keeping the HTML codes, CSS styles and rendering logic together in one place.

 2. What is the difference between props and state?

 => Props (short for properties) are data passed down from a parent component to a child component, while state is internal data managed directly within a component that can change over time. Props act like function arguments, whereas state acts like variables that  re-render the function if updated.

 3. What does the `useState` hook do, and where did you use it in this project?

 => The useState hook lets a functional component store and update its own internal state. In this project, it was used to track dynamic data—such as holding the loaded JSON item list, managing the current search filter, or keeping track of selected items in the stack.

  4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

  => Reaches out to external systems, such as fetching data from an API or local JSON file. It was needed to fetch the JSON data when the component first renders on the screen without blocking the main render loop.

   5. Why does every item in a `.map()` list need a unique `key` prop?
   => React uses unique key props to keep track of individual list items between re-renders. This allows React to efficiently identify which specific elements have been added, removed, or changed, ensuring fast performance and avoiding bugs in the UI.

   6. What is conditional rendering? Show one place you used it (example: the empty stack message).

   => Conditional rendering means displaying specific UI components or text based on whether a condition is true or false.
   For Example,
   <button onClick={handleSelectedTech}
     className={`btn btn-primary ${isSelected?"bg-gray-400 text-gray-700 ": " bg-black  text-white"} w-full`}
     disabled={isSelected===true}>
     {isSelected ? (<><FontAwesomeIcon icon={faCheck} />Added</>) : "Add to Stack"}</button>

    7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  
    =>A parent component passes data down to a child component using standard props. To send data back up, the parent passes a callback function down as a prop, which the child component calls whenever an event occurs (like a button click) to pass data back as an argument.
                        
