import React from 'react';

function ComponenteA(props) {
    return (
      <div>ComponenteA
        <div>{props.children}</div>
      </div>   
    )
}

export default ComponenteA