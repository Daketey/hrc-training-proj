import React from 'react';
import '../../App.css';
import withWidth from '@material-ui/core/withWidth';
import layoutConfig from '../../layout-config/layoutConfig.json';
import ComponentGetter from '../../utils/component-getters/ComponentGetter';
import FlexGrid from './FlexGrid';

const getComponent = (componentID, data) => {
  return <ComponentGetter componentId={componentID} data={data} />;
};

function Render(props) {
  // eslint-disable-next-line react/prop-types
  const { width, data } = props;
  const layoutConfigView = layoutConfig['0'][width];

  return (
    <FlexGrid
      layoutConfiguration={layoutConfigView}
      getComponent={getComponent}
      data={data}
    />
  );
}

export default withWidth()(Render);
