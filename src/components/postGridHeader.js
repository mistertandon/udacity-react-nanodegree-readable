import React from 'react';

import SortingSymbol from './sortingSymbol'

const PostGridHeader = (props) => (

  <div className={props.parentDivClassName}
    onClick={
      () => {
        props.sortColumnFunc(props.headerKey)
      }
    }
  >
    <div>{props.headerTitle}</div>
    <SortingSymbol column={props.headerSortingInfo} />
  </div>

)

export default PostGridHeader;