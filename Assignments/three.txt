1. What is JSX ?

JSX is the javascript exeute where we can write the code like HTML and JS type.

2. SuperPowers of JSX ?

It makes development easy and we can do markup and logic at a single place in JavaScript files and it also allows React to show more useful error and warning messages. We can also write any JavaScript logic inside JSX by using curly braces {}. JSX also produces shorter codes as compared to normal React code.

3. Role of Type attribute in script tag?

we can use module in type attribute to indicate that this script tag is using this module.

4. {TitleComponent} vs {<TitleComponetn/>} vs {<TitleComponetn>&& <TitleComponetn/>} in JSX?

1. {TitleComponent}: This syntax typically represents the reference to a component. It doesn't render the component itself but refers to it for later use. You'd typically use this when passing a component as a prop or assigning it to a variable.

    
    const MyComponent = () => {
      const TitleComponent = <h1>Hello</h1>; // Reference to a component
      return (
        <div>
          {TitleComponent}
          {/* Other JSX */}
        </div>
      );
    };
    

2. {<TitleComponent/>}: This syntax directly renders the `TitleComponent`. It's an example of using a self-closing tag in JSX to render the component without passing any props.

    
    const MyComponent = () => {
      return (
        <div>
          {<TitleComponent/>}
          {/* Other JSX */}
        </div>
      );
    };
    

3.{<TitleComponent></TitleComponent>}: This syntax also renders the TitleComponent. Here, the component is enclosed between opening and closing tags, similar to how HTML elements are written. This form allows for passing children to the TitleComponent.

    javascript
    const MyComponent = () => {
      return (
        <div>
          {<TitleComponent></TitleComponent>}
          {/* Other JSX */}
        </div>
      );
    };
