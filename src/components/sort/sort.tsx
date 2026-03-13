import {SortTypes} from '../../const';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../hooks';
import classnames from 'classnames';
import {changeSortType} from '../../store/action';

function Sort(): JSX.Element {
  const currentSortType = useAppSelector((state) => state.sortType);
  const dispatch = useAppDispatch();
  const [isSortOpened, setisSortOpened] = useState(false);
  const handleOpenClick = () => {
    setisSortOpened((prevState) => !prevState);
  };

  return (
    <form className="places__sorting" action="#" method="get" onClick={handleOpenClick}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {currentSortType}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={classnames('places__options places__options--custom', {'places__options--opened': isSortOpened})}>
        {Object.entries(SortTypes).map(([key, sortType]) => (
          <li key={key}
            className={classnames('places__option', {'places__option--active' : currentSortType === sortType})}
            tabIndex={0}
            onClick={() => {
              dispatch(changeSortType(sortType));
            }}
          >{sortType}
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Sort;
