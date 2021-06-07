import React from "react";

export default function Root(props) {
  return (
    <div>
      <section>{props.name} is mounted!</section>
      <div>React子应用</div>
    </div>
  );
}
