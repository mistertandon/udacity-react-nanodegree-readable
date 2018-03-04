import React, { Component } from 'react';

import MdArrowDropUp from 'react-icons/lib/md/arrow-drop-up'
import MdArrowDropDown from 'react-icons/lib/md/arrow-drop-down'

class SortingSymbol extends Component {

  sortReset = 'reset';

  sortAscending = '';

  sortDescending = '-';

  render() {

    const { column } = this.props;

    return (
      <div className='flex--column--class'>

        {
          ((column.sortDirection === this.sortReset) || (column.sortDirection === this.sortAscending)) && (
            <div className='arrow--drop--up'>
              <MdArrowDropUp />
            </div>
          )
        }
        {
          ((column.sortDirection === this.sortReset) || (column.sortDirection === this.sortDescending)) && (
            <div className='arrow--drop--down'>
              <MdArrowDropDown />
            </div>
          )
        }

      </div>
    )
  }
}

export default SortingSymbol;