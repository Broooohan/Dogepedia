import React from "react";

function Filter(props) {
  function createOption(option) {
    var y = `#${option.name}`;

    return (
      <a class="dropdown-item" href={y}>
        {option.name}
      </a>
    );
  }

  return (
    <>
      <div className="search">
        <div class="dropdown">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            Dropdown button
          </button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" href="#kk1">
              Trivia
            </a>
            {props.name.map(createOption)}
          </div>
        </div>
      </div>
    </>
  );
}

export default Filter;
