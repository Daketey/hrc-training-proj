import React from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles = () => ({
  rootColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  rootRow: {
    display: 'flex',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
  },
  rowInColumn: {
    display: 'flex',
    flexShrink: '0',
  },
  row: {
    display: 'flex',
    flexGrow: 1,
  },
  columnInRow: {},
});

function renderElement(data, getComponent, classes, spacing, arrayDat) {
  const layoutType = data.alignment === 'horizontal' ? 'row' : 'column';
  let nestedData;
  // eslint-disable-next-line no-return-assign
  return (
    <div
      key={Math.random(100)}
      className={
        // eslint-disable-next-line no-nested-ternary
        layoutType === 'row'
          ? data.root
            ? classes.rootRow
            : classes.row
          : data.root
          ? classes.rootColumn
          : classes.column
      }
      style={{
        width: data.width,
        height: data.height,
        margin: data.root ? -spacing / 2 : '',
      }}
    >
      {(nestedData = data.content) &&
        nestedData.map((cardData, id) => {
          return !cardData.content ? (
            <div
              // eslint-disable-next-line react/no-array-index-key
              key={id}
              className={
                layoutType === 'row' ? classes.columnInRow : classes.rowInColumn
              }
              style={{
                boxSizing: 'border-box',
                height: cardData.height,
                width: cardData.width,
                padding: spacing / 2,
              }}
            >
              {cardData.component
                ? getComponent('searchcard', arrayDat[cardData.index])
                : ''}
            </div>
          ) : (
            renderElement(cardData, getComponent, classes, spacing, arrayDat)
          );
        })}
    </div>
  );
}

function RecFlexGrid(props) {
  const { data } = props;
  const { classes, getComponent, layoutConfiguration } = props;

  const { spacing } = layoutConfiguration;

  return renderElement(
    layoutConfiguration,
    getComponent,
    classes,
    spacing,
    data.customer
  );
}

export default withStyles(styles)(RecFlexGrid);
