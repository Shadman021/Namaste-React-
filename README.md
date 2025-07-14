# Namaste React🚀

# Parcel 
(Read about all these)
- Dev Build
- Local Server
- HMR = Hot Module Replacement
- File Watching Algorithm - written in c++
- Caching - Faster Builds
- Image Optimization
- Minification
- Bundling
- Compress
- consistent Hashing
- Code Splitting
- Differential Building - support older browsers
- Diagnostic
- Error Handling
- HTTPs
- Tree Shaking - remove unused code

1. Components:

Definition: Components are the building blocks of React applications. They are reusable, independent pieces of UI that can be composed together to build complex interfaces.

Types:
There are two types of components:
- Functional Components: Defined as functions that take props (properties) and return React elements describing what should appear on the screen.
- Class Components: Defined using ES6 classes and have additional features like local state management and lifecycle methods.

2. Elements:

Definition: Elements are plain JavaScript objects that represent the actual DOM nodes or components that React will render to the UI.

Creation: Elements are created using JSX syntax, which is a syntactic sugar over React.createElement() calls. JSX allows you to write HTML-like syntax in your JavaScript code.

3. Reconciliation:

Definition: Reconciliation is the process React uses to compare the old Virtual DOM with the new one and apply the minimal necessary changes to the real DOM


# 2 types of Routing in web apps
- Client Side Routing
- Server Side Routing

# Redux Toolkit
- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (CartSlice)
- Dispatch(action)
- Selector

# Types of Testing(for developer)
- Unit testing = Testing one component in isolation
- Integration testing = Testing process where different modules or components of an application are combined and tested as a group to ensure they interact correctly
- End to End testing (e2e testing)= testing methodology that verifies an application's workflow from start to finish, ensuring all integrated components work together as expected from a user's perspective. 

# Setting up Testing in our app
- Install React Testing Library
- Installed jest
- Installed Babel dependencies
- Configure Babel
- Configure Parcel Cofig file in disable defalut babel transpilation
- Jest configuration
- we used "nox create-jest"; in lecture it was "npx jest --init" but it is outdated.
- Install jsdom library
- Install @babel/preset-react - to make JSX work in test case
- Inclue @babel/preset-react inside my babel config
- Install @testing-library-dom