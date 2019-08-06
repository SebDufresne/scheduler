import React from "react";

export default function Empty(props) {
    if (props.mode === 'EMPTY') { 
      return (
        <main class="appointment__add">
          <img
            class="appointment__add-button"
            src="images/add.png"
            alt="Add"
            onClick={() => props.onAdd()}
          />
        </main>
      );
    }
}