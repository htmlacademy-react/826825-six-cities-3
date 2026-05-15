import {memo} from 'react';

function LoadingScreen(): JSX.Element {
  return (
    <p>Loading ...</p>
  );
}

const MemorizedLoadingScreen = memo(LoadingScreen);

export default MemorizedLoadingScreen;
