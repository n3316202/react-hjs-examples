import React from 'react';

function DefaultProps({ color, name }) {
  return <div style={{ color }}>안녕하세요 {name}</div>
}

DefaultProps.defaultProps = {
  name: '이름없음',
  // color : 'Red'
}

export default DefaultProps;