1. What problem does the context API help solve?
    Sharing state down a component tree.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
    
    Actions - are payloads of info that send data from your application to the store.

    Reducers - specify how the application's state changes in response to actions sent to the store.

    Store - a store holds the whole state tree in a  application.  

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    Application State - is the global state that all component in the component tree can access.

    Component State - is state that is local to a single component and cannot be seen outside of this component.


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    Redux Thunk is a middleware that lets you call action creators that return a function instead of an action object.

5. What is your favorite state management system you've learned and this sprint? Please explain why!

    My favorite state managment system would have to be redux. Redux would only be my favorite for right now mainly because I have spent more time using it but context api seems a lot easier.
