# Testing Instruction

conduct testing based on following components:

1. Representational Component 
2. Container Component 
3. thunk 
4. reducers 

## 1. Representational Component

conduct testing following functionalities:

1.1. event and its handler: check whether appropriate event handlers (usually as React methods) are called when the event happened (e.g., click a specific component)


## 2. Container Component 

conduct testing following functionalities: 

2.1. mapStateToProps: check the container send appropriate props to the Rep Component
2.2. mapDispatchToProps: check the props (which holds dispatch function) dispatch the proper actions or thunks

* don't mixing up with React just test mstp and mdtp functionality

## 3. thunk 

conduct testing following functionalities:

3.1. its function: whether it dispatch actions
3.2. input and output

## 4. reducers

conduct testing following functionalities:

4.1. state change: when an action is dispatched, the state is also changed properly

## 5. integration testing

conduct testing following functionalities:

5.1. a specific part of system functionality (integration with reducers, thunk, Container component, Representational component)

* use real redux store. 

## 6. end-to-end testing

under development...

maybe use phantomjs, puppert, logRocket?
