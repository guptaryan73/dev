/**
Challenge: 

Part 2: 
- Add a `header` element with a nested `nav` element. Inside the `nav`,
  include a `img` element with the image of the React logo inside
  (src="./react-logo.png") and make sure to set the width to something
  more manageable so it doesn't take up the whole screen
- Add an `h1` with some text describing the page. (E.g. "Reasons
  I'm excited to learn React"). Place it above the ordered list.
- Add a `footer` after the list that says: 
    "© 20xx <last name here> development. All rights reserved."
 */

import ReactDOM from "react-dom";

function Page() {
  return (
    <div>
      <header>
        <nav>
          <img src="https://images.unsplash.com/photo-1721496724058-93ae25b0d7be?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D"></img>
        </nav>
      </header>
      <ol>
        <li>yoi</li>
        <li>how are you</li>
      </ol>
    </div>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
