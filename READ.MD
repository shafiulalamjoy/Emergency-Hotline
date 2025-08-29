
Question:1 What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer: getElementById is for a single element by id, getElementsByClassName is for multiple elements by class, while querySelector and querySelectorAll are more powerful as they work with any CSS selector.

Question:2 How do you create and insert a new element into the DOM?

Answer: We can create a new element using the document.createElement() method and then insert it into the DOM using methods like appendChild() or append().

Question:3 What is Event Bubbling and how does it work?

Answer: Event Bubbling is when an event starts on the innermost element and then moves up to its parent elements. For example,If you click a button inside a div, the click happens on the button first and then the event bubbles up to the div, then to the body, and so on.

Question:4 What is Event Delegation in JavaScript? Why is it useful?

Event Delegation is a technique in JavaScript where instead of adding event listeners to many child elements, we put one event listener on the parent element. The event then bubbles up from the child to the parent, and we check which child was clicked. It saves memory and works even for new elements added later.

Answer: 
Question:5 What is the difference between preventDefault() and stopPropagation() methods?

Answer: preventDefault() stops an element’s default action, like a link opening or a form submitting, while stopPropagation() stops the event from bubbling to parent elements.