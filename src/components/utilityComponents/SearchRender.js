import React from 'react';
import '../../App.css';
import withWidth from '@material-ui/core/withWidth';
import layoutConfig from '../../layout-config/layoutConfig.json';
import ComponentGetterSearch from '../../utils/component-getters/ComponentGetterSearch';
import SearchFlex from './SearchFlex';

const getComponent = (componentID, data) => {
  return <ComponentGetterSearch componentId={componentID} data={data} />;
};

function Render(props) {
  // eslint-disable-next-line react/prop-types
  const { width, data } = props;
  const layoutConfigView = layoutConfig['0'][width];
  // eslint-disable-next-line react/prop-types

  return (
    <SearchFlex
      layoutConfiguration={layoutConfigView}
      getComponent={getComponent}
      data={data}
    />
  );
}

export default withWidth()(Render);
